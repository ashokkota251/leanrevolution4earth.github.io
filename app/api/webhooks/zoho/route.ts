import { verifyWebhookSignature } from "@/lib/zoho-signature"

// In-memory idempotency guard. Zoho may redeliver the same event (network blip, 5xx retry).
// Stores up to 500 recent event_ids for 10 minutes.
// ponytail: single-instance only; swap for Vercel KV / Redis when scaling horizontally.
const processedEvents = new Map<string, number>()
const EVENT_TTL_MS = 10 * 60 * 1000
const MAX_EVENTS = 500
function markProcessed(id: string): boolean {
  const now = Date.now()
  // sweep expired
  if (processedEvents.size > MAX_EVENTS) {
    for (const [k, t] of processedEvents) if (now - t > EVENT_TTL_MS) processedEvents.delete(k)
  }
  if (processedEvents.has(id)) return false
  processedEvents.set(id, now)
  return true
}

// Zoho Payments webhook endpoint — authoritative source of payment events.
// Configure in Zoho Payments dashboard: Developers → Webhooks → Create.
//   URL:  https://<your-domain>/api/webhooks/zoho
//   Events: payment.succeeded, payment.failed, refund.succeeded, payment_link.succeeded
// Copy the signing_key shown ONCE at creation into ZOHO_WEBHOOK_SIGNING_KEY in .env.local.

export async function POST(req: Request) {
  // Zoho requires the EXACT raw body for signature verification — don't JSON.parse first.
  const rawBody = await req.text()
  const signatureHeader = req.headers.get("x-zoho-webhook-signature")

  const result = verifyWebhookSignature({
    signatureHeader,
    rawBody,
    signingKey: process.env.ZOHO_WEBHOOK_SIGNING_KEY ?? "",
  })

  if (!result.ok) {
    const headerPreview = signatureHeader ? signatureHeader.slice(0, 40) + "…" : "(none)"
    const keyLen = (process.env.ZOHO_WEBHOOK_SIGNING_KEY ?? "").length
    const bodyLen = rawBody.length
    console.warn("[zoho-webhook] signature verification failed:", {
      reason: result.reason,
      headerPreview,
      signingKeyLength: keyLen,
      bodyLength: bodyLen,
    })
    // Expose reason in response so it shows up in Zoho's delivery log for debugging.
    // Safe — only reveals which validation step failed, no secrets.
    return Response.json(
      { error: "Unauthorized", reason: result.reason, signing_key_configured: keyLen > 0, body_length: bodyLen },
      { status: 401 }
    )
  }

  // Signature verified — safe to parse and process
  let event: unknown
  try {
    event = JSON.parse(rawBody)
  } catch {
    return new Response("Invalid JSON", { status: 400 })
  }

  // Zoho event shape: { event_type, event_id, created_time, data: { ... } }
  const e = event as {
    event_type?: string
    event_id?: string
    data?: { payment?: Record<string, unknown>; payment_link?: Record<string, unknown>; refund?: Record<string, unknown> }
  }

  const type = e.event_type ?? "unknown"
  const payment     = e.data?.payment
  const paymentLink = e.data?.payment_link
  const refund      = e.data?.refund

  // Idempotency: Zoho retries on 5xx and may redeliver on timeouts. Treat same event_id as processed.
  const eventKey = e.event_id ?? JSON.stringify(payment ?? paymentLink ?? refund ?? {})
  const fresh    = markProcessed(String(eventKey))
  if (!fresh) {
    console.log("[zoho-webhook] duplicate event ignored:", { event_id: e.event_id, type })
    return new Response("ok (duplicate)", { status: 200 })
  }

  // ponytail: structured console log for now — swap for DB insert when you have one
  console.log("[zoho-webhook]", {
    event_id: e.event_id,
    type,
    reference: (paymentLink?.reference_id ?? payment?.reference_number) ?? null,
    amount: (payment?.amount ?? paymentLink?.amount) ?? null,
    status: payment?.status ?? paymentLink?.status ?? null,
    email: payment?.email ?? paymentLink?.email ?? null,
  })

  // TODO when a DB is wired up:
  //   switch (type) {
  //     case "payment.succeeded":     await db.donations.markPaid(reference, payment)   ; break
  //     case "payment.failed":        await db.donations.markFailed(reference, payment) ; break
  //     case "refund.succeeded":      await db.donations.markRefunded(payment, refund)  ; break
  //     case "payment_link.succeeded":await maybeMarkPaid(paymentLink)                  ; break
  //   }
  //   if (type === "payment.succeeded") await mailer.sendDonationReceipt({...})  // 80G receipt

  // Always 200 — Zoho retries on non-2xx. Return 200 even for unknown event types
  // we don't yet handle; use the log to spot new types.
  return new Response("ok", { status: 200 })
}
