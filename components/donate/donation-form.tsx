"use client"

import { useState } from "react"
import { AlertCircle, ArrowRight } from "lucide-react"

const PRESETS = [
  { v: 500,   label: "₹500",    impact: "Plants 5 saplings on degraded land" },
  { v: 1000,  label: "₹1K",     impact: "Solar lantern for 1 rural family" },
  { v: 2500,  label: "₹2.5K",   impact: "25 saplings + mangrove propagules" },
  { v: 5000,  label: "₹5K",     impact: "Clean energy access for 2 families" },
  { v: 10000, label: "₹10K",    impact: "Powers a village school for a month" },
  { v: 25000, label: "₹25K",    impact: "Afforestation of a degraded micro-plot" },
]

function bigDisplay(n: number): string {
  if (!n) return "—"
  if (n >= 100000) return `₹${(n / 100000).toFixed(n % 100000 === 0 ? 0 : 1)}L`
  if (n >= 1000)   return `₹${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}K`
  return `₹${n}`
}

export function DonationForm() {
  const frequency: "onetime" = "onetime"
  const [selectedPreset, setSelected]   = useState<number>(2500)
  const [customAmt, setCustomAmt]       = useState("")
  const [name, setName]                 = useState("")
  const [email, setEmail]               = useState("")
  const [loading, setLoading]           = useState(false)
  const [error, setError]               = useState("")

  const isCustom   = customAmt !== ""
  const rawAmount  = isCustom ? (parseInt(customAmt.replace(/\D/g, "")) || 0) : selectedPreset
  const preset     = !isCustom ? PRESETS.find((p) => p.v === selectedPreset) : null
  const impactLine = preset?.impact ?? (rawAmount > 0 ? `₹${rawAmount.toLocaleString("en-IN")} towards climate action` : "Choose an amount below")

  function pick(val: number) { setSelected(val); setCustomAmt("") }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    if (!rawAmount || rawAmount < 1)               { setError("Please select or enter an amount."); return }
    if (name.trim().length < 2)                    { setError("Please enter your name."); return }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError("Please enter a valid email address."); return }

    setLoading(true)
    try {
      const res  = await fetch("/api/donate", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: rawAmount, frequency, donorName: name.trim(), donorEmail: email.trim() }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? "Payment initiation failed.")
      window.location.href = data.paymentUrl
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
      setLoading(false)
    }
  }

  return (
    <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20 xl:gap-28">

      {/* ═══════ LEFT — AMOUNT EXPERIENCE ═══════ */}
      <div>
        {/* MASSIVE amount display */}
        <div className="relative">
          <div
            key={rawAmount}
            className="font-[family-name:var(--font-display)] italic leading-[0.85] tracking-[-0.045em] text-[#193d00] lr4e-blurin"
            style={{ fontSize: "clamp(5rem,16vw,13rem)", fontWeight: 300 }}
          >
            {bigDisplay(rawAmount)}
          </div>
          {/* Impact caption */}
          <p
            key={`cap-${impactLine}`}
            className="mt-4 max-w-md font-[family-name:var(--font-display)] text-[1.1rem] italic text-[#193d00]/60 lr4e-blurin md:text-[1.25rem]"
          >
            → {impactLine}
          </p>
        </div>

        {/* Chip grid — bold tactile */}
        <div className="mt-10 grid grid-cols-3 gap-2.5 sm:grid-cols-6 lg:grid-cols-3">
          {PRESETS.map((p) => {
            const active = !isCustom && selectedPreset === p.v
            return (
              <button
                key={p.v}
                type="button"
                onClick={() => pick(p.v)}
                className={`group relative overflow-hidden rounded-xl border-2 px-4 py-4 text-[14px] font-semibold transition-all duration-200 ${
                  active
                    ? "border-[#193d00] bg-[#193d00] text-white shadow-[0_12px_32px_-10px_rgba(25,61,0,0.6)]"
                    : "border-[#193d00]/15 bg-white text-[#0d2400] hover:-translate-y-0.5 hover:border-[#193d00]/50 hover:shadow-[0_8px_24px_-10px_rgba(4,12,0,0.25)]"
                }`}
              >
                {p.label}
                {active && (
                  <span aria-hidden className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#7ab648]" />
                )}
              </button>
            )
          })}
        </div>

        {/* Custom amount — underline input */}
        <div className="mt-6 flex items-baseline gap-3 border-b-2 border-[#193d00]/15 focus-within:border-[#193d00]">
          <span className="font-[family-name:var(--font-display)] text-[1.4rem] italic text-[#193d00]/40">₹</span>
          <input
            type="number"
            inputMode="numeric"
            value={customAmt}
            onChange={(e) => setCustomAmt(e.target.value)}
            placeholder="Or enter a custom amount"
            min={1}
            className="flex-1 bg-transparent py-3 text-[16px] text-[#0d2400] placeholder:text-[#193d00]/30 focus:outline-none"
          />
          {customAmt && (
            <button
              type="button"
              onClick={() => setCustomAmt("")}
              className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#193d00]/50 transition-colors hover:text-[#193d00]"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* ═══════ RIGHT — DONOR DETAILS ═══════ */}
      <form onSubmit={submit} noValidate className="flex flex-col lg:sticky lg:top-24 lg:self-start">

        {/* Section heading */}
        <div className="mb-8 flex items-center gap-4">
          <span className="h-px w-10 bg-[#193d00]/25" />
          <span className="font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.3em] text-[#193d00]/55">
            your details
          </span>
          <span className="h-px flex-1 bg-[#193d00]/15" />
        </div>

        {/* Name — underline editorial input */}
        <div className="mb-7">
          <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.3em] text-[#193d00]/50">
            Full Name
          </label>
          <input
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="As it appears on your PAN"
            className="w-full border-b-2 border-[#193d00]/15 bg-transparent py-3 text-[16px] text-[#0d2400] placeholder:text-[#193d00]/25 transition-colors focus:border-[#193d00] focus:outline-none"
          />
        </div>

        {/* Email */}
        <div className="mb-8">
          <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.3em] text-[#193d00]/50">
            Email Address
          </label>
          <input
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="For your 80G receipt"
            className="w-full border-b-2 border-[#193d00]/15 bg-transparent py-3 text-[16px] text-[#0d2400] placeholder:text-[#193d00]/25 transition-colors focus:border-[#193d00] focus:outline-none"
          />
        </div>

        {/* Error */}
        {error && (
          <div className="mb-5 flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50/60 px-4 py-3 text-[13px] text-red-700">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2} />
            <span>{error}</span>
          </div>
        )}

        {/* MASSIVE CTA */}
        <button
          type="submit"
          disabled={loading}
          className="group relative mt-4 overflow-hidden rounded-full bg-[#193d00] px-7 py-5 text-left transition-all duration-300 hover:bg-[#0d2400] disabled:opacity-60"
        >
          <div className="relative z-10 flex items-center justify-between gap-4">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7ab648]">
                One-time donation
              </div>
              <div className="mt-1 font-[family-name:var(--font-display)] text-[1.6rem] font-light italic leading-none tracking-[-0.015em] text-white">
                {loading ? "Connecting…" : `Donate ${bigDisplay(rawAmount)}`}
              </div>
            </div>
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#7ab648] text-[#0d2400] transition-transform duration-300 group-hover:translate-x-1">
              {loading ? (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#0d2400]/25 border-t-[#0d2400]" />
              ) : (
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              )}
            </div>
          </div>
          {/* Hover sheen */}
          <span aria-hidden className="pointer-events-none absolute inset-0 translate-x-full bg-gradient-to-r from-transparent via-white/8 to-transparent transition-transform duration-700 group-hover:-translate-x-full" />
        </button>

        {/* Trust row inline */}
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1.5">
          {["🔒 Zoho secured", "Section 8 NGO", "80G receipt", "Audited"].map((t) => (
            <span key={t} className="text-[11px] text-[#193d00]/50">{t}</span>
          ))}
        </div>

        {/* Bank fallback */}
        <p className="mt-5 text-[12px] text-[#193d00]/45">
          Prefer bank transfer?{" "}
          <a href="#bank-transfer" className="font-medium text-[#193d00]/70 underline underline-offset-2 hover:text-[#193d00]">
            Account details ↓
          </a>
        </p>
      </form>
    </div>
  )
}
