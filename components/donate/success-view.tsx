"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { AlertTriangle, CheckCircle, Clock } from "lucide-react"

export function SuccessView() {
  const sp = useSearchParams()

  const ref     = sp.get("ref") ?? undefined
  const amount  = sp.get("amount") ?? undefined
  const status  = sp.get("status") ?? undefined

  // Return-URL params are a UX hint only; the webhook is the authoritative source.
  // We don't verify signature client-side (would require exposing the signing key).
  // Server-side webhook at /api/webhooks/zoho handles the trusted side.
  const state: "succeeded" | "failed" | "pending" =
    status === "succeeded" ? "succeeded"
    : status === "failed"  ? "failed"
    : "pending"

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#faf8f0] px-6 py-24">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(25,61,0,0.08)_0%,transparent_65%)]"
      />

      <div className="relative mx-auto max-w-lg text-center">
        {state === "succeeded" && <Succeeded amount={amount} />}
        {state === "failed"    && <Failed />}
        {state === "pending"   && <Pending />}

        <div className="mx-auto mt-10 h-px w-16 bg-[#193d00]/20" />

        <p className="mt-6 text-[13px] leading-relaxed text-[#0d2400]/55">
          Lean Revolution 4 Earth Foundation is a Section 8 company registered
          under the Companies Act, 2013. All donations are eligible for 80G
          tax deduction.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-[#193d00]/25 px-6 py-3 text-[13px] font-medium text-[#193d00] transition-all duration-200 hover:border-[#193d00] hover:bg-[#193d00] hover:text-white"
        >
          ← Back to Homepage
        </Link>

        {ref && (
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-[#193d00]/35">
            ref · {ref}
          </p>
        )}
      </div>
    </div>
  )
}

function Succeeded({ amount }: { amount?: string }) {
  return (
    <>
      <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#193d00]/10">
        <CheckCircle className="h-10 w-10 text-[#193d00]" strokeWidth={1.5} />
      </div>
      <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#193d00]">
        Thank You
      </span>
      <h1 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)] font-light leading-[1.05] tracking-[-0.025em] text-[#0d2400]">
        Your gift is now{" "}
        <em className="italic text-[#193d00]">working for Earth.</em>
      </h1>
      <p className="mt-6 text-[1rem] leading-relaxed text-[#0d2400]/70">
        {amount && <>Received <strong>₹{amount}</strong>. </>}
        We&apos;ve recorded your donation. A confirmation email is on its way,
        and your 80G receipt will follow within three working days.
      </p>
    </>
  )
}

function Failed() {
  return (
    <>
      <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-red-500/10">
        <AlertTriangle className="h-10 w-10 text-red-600" strokeWidth={1.5} />
      </div>
      <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-red-600">
        Payment did not complete
      </span>
      <h1 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)] font-light leading-[1.05] tracking-[-0.025em] text-[#0d2400]">
        Something went{" "}
        <em className="italic text-red-700">wrong.</em>
      </h1>
      <p className="mt-6 text-[1rem] leading-relaxed text-[#0d2400]/70">
        Your card was not charged. No funds have left your account. Try again
        from the donate page, or use the bank transfer alternative at the
        bottom of that page.
      </p>
      <Link
        href="/donate"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#193d00] px-6 py-3 text-[13px] font-medium text-white transition-all duration-200 hover:bg-[#0d2400]"
      >
        Try again
      </Link>
    </>
  )
}

function Pending() {
  return (
    <>
      <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#193d00]/5">
        <Clock className="h-10 w-10 text-[#193d00]/60" strokeWidth={1.5} />
      </div>
      <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#193d00]/60">
        Status
      </span>
      <h1 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)] font-light leading-[1.05] tracking-[-0.025em] text-[#0d2400]">
        No donation details received.
      </h1>
      <p className="mt-6 text-[1rem] leading-relaxed text-[#0d2400]/70">
        If you just made a donation, please check your email for the receipt.
        If you didn&apos;t, head back and start one.
      </p>
    </>
  )
}
