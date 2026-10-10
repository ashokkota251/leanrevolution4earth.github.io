import { createHmac, timingSafeEqual } from "node:crypto"

// Max age (ms) for a webhook timestamp before we reject as a replay attack.
const MAX_WEBHOOK_AGE_MS = 5 * 60 * 1000 // 5 minutes

/**
 * Verify a Zoho Payments webhook signature.
 *
 * Zoho sends header:  X-Zoho-Webhook-Signature: t=<timestamp>,v=<hex-signature>
 * The signed string is: `${timestamp}.${rawBody}`
 * Algorithm: HMAC-SHA256 with the signing_key you got when you created the webhook.
 *
 * Returns true only when signature is valid AND timestamp is within MAX_WEBHOOK_AGE_MS.
 */
export function verifyWebhookSignature(opts: {
  signatureHeader: string | null
  rawBody: string
  signingKey: string
}): { ok: true } | { ok: false; reason: string } {
  const { signatureHeader, rawBody, signingKey } = opts
  if (!signatureHeader) return { ok: false, reason: "missing signature header" }
  if (!signingKey)      return { ok: false, reason: "missing signing key" }

  // Parse "t=...,v=..."
  const parts = Object.fromEntries(
    signatureHeader.split(",").map((p) => {
      const [k, ...rest] = p.trim().split("=")
      return [k, rest.join("=")]
    })
  )
  const t = parts.t
  const v = parts.v
  if (!t || !v) return { ok: false, reason: "malformed signature header" }

  // Replay protection
  const ts = Number(t)
  if (!Number.isFinite(ts)) return { ok: false, reason: "invalid timestamp" }
  if (Math.abs(Date.now() - ts) > MAX_WEBHOOK_AGE_MS) {
    return { ok: false, reason: "timestamp outside allowed window" }
  }

  // Zoho's docs don't specify whether the signing_key is used as a raw string
  // or as hex-decoded bytes. Compute both and accept whichever matches.
  // Common pitfall: 192-char hex keys suggest hex-decoding is correct.
  const payload = `${t}.${rawBody}`
  const expectedAsString = createHmac("sha256", signingKey).update(payload).digest("hex")
  const expectedAsHex = /^[0-9a-fA-F]+$/.test(signingKey)
    ? createHmac("sha256", Buffer.from(signingKey, "hex")).update(payload).digest("hex")
    : null

  const sigBuf = safeBuffer(v)
  if (!sigBuf) return { ok: false, reason: "signature not hex" }

  for (const candidate of [expectedAsString, expectedAsHex]) {
    if (!candidate) continue
    const expBuf = safeBuffer(candidate)
    if (!expBuf || expBuf.length !== sigBuf.length) continue
    if (timingSafeEqual(sigBuf, expBuf)) return { ok: true }
  }
  return { ok: false, reason: "signature mismatch" }
}

function safeBuffer(hex: string): Buffer | null {
  if (!/^[0-9a-fA-F]+$/.test(hex)) return null
  return Buffer.from(hex, "hex")
}

/**
 * Verify a payment-link return URL signature (query-string HMAC).
 *
 * Zoho's return URL carries a `signature` param that is HMAC-SHA256 over the
 * remaining params sorted alphabetically and joined as `k=v&k=v&...`.
 *
 * The exact format isn't fully documented for return URLs, so this is a
 * best-effort check — the webhook is the authoritative source of truth.
 */
export function verifyReturnUrlSignature(opts: {
  params: Record<string, string>
  signingKey: string
}): boolean {
  const { params, signingKey } = opts
  if (!signingKey) return false
  const { signature, ...rest } = params
  if (!signature) return false

  const canonical = Object.keys(rest)
    .sort()
    .map((k) => `${k}=${rest[k]}`)
    .join("&")

  const expected = createHmac("sha256", signingKey).update(canonical).digest("hex")
  const sigBuf = safeBuffer(signature)
  const expBuf = safeBuffer(expected)
  if (!sigBuf || !expBuf || sigBuf.length !== expBuf.length) return false
  return timingSafeEqual(sigBuf, expBuf)
}
