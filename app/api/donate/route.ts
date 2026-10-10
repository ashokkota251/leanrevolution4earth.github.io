import { z } from "zod"
import { createPaymentSession } from "@/lib/zoho-payments"
import { SITE_URL } from "@/lib/site"

const schema = z.object({
  amount: z.number().int().min(1).max(10_00_000), // max ₹10L
  frequency: z.enum(["onetime", "monthly"]),
  donorName: z.string().min(2).max(100).trim(),
  donorEmail: z.string().email().trim(),
})

export async function POST(req: Request) {
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
  const redirectUrl = `${SITE_URL}/donate/success?ref=${orderId}`

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
    const detail = err instanceof Error ? err.message : String(err)
    const isDev  = process.env.NODE_ENV !== "production"
    return Response.json(
      { error: "Payment initiation failed. Please try again.", ...(isDev && { detail }) },
      { status: 502 }
    )
  }
}
