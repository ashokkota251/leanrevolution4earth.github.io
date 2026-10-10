import { z } from "zod"
import { createPaymentSession } from "@/lib/zoho-payments"
import { SITE_URL } from "@/lib/site"
import { rateLimit, clientIp } from "@/lib/rate-limit"

const schema = z.object({
  amount: z.number().int().min(100).max(10_00_000), // ₹100 min, ₹10L max
  frequency: z.enum(["onetime", "monthly"]),
  donorName: z.string().min(2).max(100).trim(),
  donorEmail: z.string().email().trim(),
})

export async function POST(req: Request) {
  // Rate limit: 5 donation-link creations per IP per minute.
  // Keeps a bad actor from spamming our Zoho API quota or polluting the merchant dashboard.
  const ip = clientIp(req)
  const rl = rateLimit(`donate:${ip}`, { limit: 5, windowMs: 60_000 })
  if (!rl.ok) {
    return Response.json(
      { error: "Too many requests. Please wait a moment and try again." },
      { status: 429, headers: { "Retry-After": String(rl.retryAfterSec) } }
    )
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 })
  }

  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    return Response.json({ error: "Invalid input", issues: parsed.error.flatten() }, { status: 400 })
  }

  const { amount, frequency, donorName, donorEmail } = parsed.data
  const orderId = `LR4E-${Date.now()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`
  const firstName = donorName.trim().split(/\s+/)[0]
  const redirectUrl = `${SITE_URL}/donate/success?ref=${orderId}&name=${encodeURIComponent(firstName)}`

  try {
    const paymentUrl = await createPaymentSession({
      amount,
      frequency,
      donorName,
      donorEmail,
      orderId,
      redirectUrl,
    })
    return Response.json({ paymentUrl })
  } catch (err) {
    console.error("[donate] Zoho payment session error:", err)
    const detail      = err instanceof Error ? err.message : String(err)
    const showDetail  = process.env.NODE_ENV !== "production" || process.env.ZOHO_SANDBOX === "true"

    // Friendly message when the server is missing credentials — tells ops exactly what to set.
    const isConfig = /^Missing /.test(detail)
    const userMessage = isConfig
      ? "Payment service is temporarily unavailable. Please try again shortly or use bank transfer."
      : "Payment initiation failed. Please try again."

    return Response.json(
      { error: userMessage, ...(showDetail && { detail }) },
      { status: isConfig ? 503 : 502 }
    )
  }
}
