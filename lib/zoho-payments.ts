// Zoho Payments India — hosted payment flow (server-side only)
// Docs: https://www.zoho.com/payments/api/v1/

const ZOHO_TOKEN_URL = "https://accounts.zoho.in/oauth/v2/token"
// Zoho Payments has two separate environments. Toggle with ZOHO_SANDBOX=true in .env.local.
// Sandbox:    https://paymentssandbox.zoho.in/api/v1  (portal: https://paymentssandbox.zoho.in)
// Production: https://payments.zoho.in/api/v1         (portal: https://payments.zoho.in)
// Each environment has its own Account ID. OAuth credentials work across both.
const IS_SANDBOX    = process.env.ZOHO_SANDBOX === "true"
const ZOHO_API_BASE = IS_SANDBOX
  ? "https://paymentssandbox.zoho.in/api/v1"
  : "https://payments.zoho.in/api/v1"

// ponytail: in-memory token cache, fine for single-instance; use Redis if scaling horizontally
let _tokenCache: { token: string; expiresAt: number } | null = null

// Pick the right refresh token based on the sandbox flag.
// Sandbox tokens use scope "ZohoPaySandbox.payments.*" and prod use "ZohoPay.payments.*".
function getRefreshToken(): string {
  const t = IS_SANDBOX
    ? (process.env.ZOHO_REFRESH_TOKEN_SANDBOX ?? process.env.ZOHO_REFRESH_TOKEN)
    : (process.env.ZOHO_REFRESH_TOKEN_PROD    ?? process.env.ZOHO_REFRESH_TOKEN)
  if (!t) throw new Error(`Missing Zoho refresh token (${IS_SANDBOX ? "ZOHO_REFRESH_TOKEN_SANDBOX" : "ZOHO_REFRESH_TOKEN_PROD"} or ZOHO_REFRESH_TOKEN)`)
  return t
}

async function getAccessToken(): Promise<string> {
  if (_tokenCache && Date.now() < _tokenCache.expiresAt) return _tokenCache.token

  const res = await fetch(ZOHO_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      client_id: process.env.ZOHO_CLIENT_ID!,
      client_secret: process.env.ZOHO_CLIENT_SECRET!,
      refresh_token: getRefreshToken(),
    }),
  })

  if (!res.ok) {
    const body = await res.text()
    throw new Error(`Zoho token refresh failed: ${res.status} — ${body}`)
  }

  const data = await res.json()
  _tokenCache = {
    token: data.access_token,
    // shave 60s off expiry to avoid edge-case races
    expiresAt: Date.now() + (data.expires_in - 60) * 1000,
  }
  return _tokenCache.token
}

export interface DonationParams {
  amount: number // INR, whole rupees
  frequency: "onetime" | "monthly"
  donorName: string
  donorEmail: string
  orderId: string
  redirectUrl: string
}

// Returns the Zoho hosted payment page URL to redirect the donor to.
export async function createPaymentSession(params: DonationParams): Promise<string> {
  const token = await getAccessToken()
  // Account ID is the same across prod and sandbox for a given merchant.
  const orgId = process.env.ZOHO_ORG_ID!
  if (!orgId) throw new Error("Missing ZOHO_ORG_ID")

  const frequencyLabel = params.frequency === "monthly" ? "Monthly" : "One-time"
  const description = `Lean Revolution 4 Earth — ${frequencyLabel} Donation`

  // Expiry 48 hours from now (YYYY-MM-DD as Zoho expects)
  const expiry = new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString().slice(0, 10)

  // Zoho Payments — Create Payment Link (official API shape)
  // Docs: https://www.zoho.com/in/payments/api/v1/payment-links/
  const body = {
    amount: params.amount,
    currency: "INR",
    email: params.donorEmail,
    reference_id: params.orderId,
    description,
    expires_at: expiry,
    notify_customer: { email: true, sms: false },
    return_url: params.redirectUrl,
    meta_data: [
      { key: "donor_name", value: params.donorName },
      { key: "frequency",  value: params.frequency },
      { key: "source",     value: "lr4e-donate-page" },
    ],
  }

  const res = await fetch(
    `${ZOHO_API_BASE}/paymentlinks?account_id=${orgId}`,
    {
      method: "POST",
      headers: {
        Authorization: `Zoho-oauthtoken ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  )

  if (!res.ok) {
    const err = await res.text()
    throw new Error(`Zoho payment link failed: ${res.status} — ${err}`)
  }

  const data = await res.json()
  const url = data?.payment_links?.url
  if (!url) throw new Error(`Zoho response missing payment_links.url. Raw: ${JSON.stringify(data).slice(0, 400)}`)
  return url
}
