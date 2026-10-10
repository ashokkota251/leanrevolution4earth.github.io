"use client"

import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { AlertTriangle, Clock } from "lucide-react"
import saahasTaru from "@/public/images/initiatives/project-saahas-taru.jpg"

/* ──────────────────── Main view ──────────────────── */
export function SuccessView() {
  const sp = useSearchParams()
  const ref     = sp.get("ref")    ?? undefined
  const amount  = sp.get("amount") ?? undefined
  const status  = sp.get("status") ?? undefined
  const nameRaw = sp.get("name")   ?? undefined
  const name    = nameRaw ? decodeURIComponent(nameRaw) : "friend"

  const state: "succeeded" | "failed" | "pending" =
    status === "succeeded" ? "succeeded"
    : status === "failed"  ? "failed"
    : "pending"

  if (state === "failed")  return <FailedView />
  if (state === "pending") return <PendingView />
  return <SucceededView name={name} amount={amount} ref={ref} />
}

/* ──────────────────── Celebration (succeeded) ──────────────────── */
function SucceededView({ name, amount, ref }: { name: string; amount?: string; ref?: string }) {
  const amountNum = amount ? parseFloat(amount) : 0

  return (
    <>
      <style>{`
        @keyframes lr4e-rise      { from { opacity: 0; transform: translateY(32px) } to { opacity: 1; transform: translateY(0) } }
        @keyframes lr4e-fade      { from { opacity: 0 } to { opacity: 1 } }
        @keyframes lr4e-confetti  { 0% { transform: translateY(-120vh) rotate(0deg); opacity: 1 } 100% { transform: translateY(120vh) rotate(720deg); opacity: 0 } }
        @keyframes lr4e-pulse     { 0%,100% { transform: scale(1); opacity: 1 } 50% { transform: scale(1.08); opacity: .85 } }
        .lr4e-rise      { animation: lr4e-rise 1.1s cubic-bezier(0.22,0.61,0.36,1) both }
        .lr4e-fade      { animation: lr4e-fade 1.5s ease-out both }
        .lr4e-pulse     { animation: lr4e-pulse 2.4s ease-in-out infinite }
        .lr4e-confetti-piece { position: absolute; top: -24px; animation: lr4e-confetti linear infinite; pointer-events: none }
        @media (prefers-reduced-motion: reduce) {
          .lr4e-rise, .lr4e-fade, .lr4e-pulse, .lr4e-confetti-piece { animation: none !important; opacity: 1 !important; transform: none !important }
        }
      `}</style>

      <main className="relative overflow-hidden">
        {/* ════════ ACT 1 — THE REVEAL ════════ */}
        <section className="relative isolate flex min-h-[100vh] flex-col items-center justify-center overflow-hidden bg-[#0d2400] px-6 py-20 text-[#faf8f0]">
          <Image src={saahasTaru} alt="" fill priority sizes="100vw" placeholder="blur" className="object-cover opacity-30" />
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(13,36,0,0.9)_0%,rgba(7,18,0,0.75)_50%,rgba(4,12,0,0.95)_100%)]" />
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_30%,rgba(122,182,72,0.15)_0%,transparent_65%)]" />

          <Confetti />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            {/* Checkmark badge */}
            <div className="mx-auto mb-10 flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#7ab648]/50 bg-[#7ab648]/15 lr4e-pulse">
              <svg viewBox="0 0 24 24" className="h-12 w-12 text-[#7ab648]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <span className="font-[family-name:var(--font-display)] text-[13px] italic tracking-[0.42em] text-[#7ab648] lr4e-fade">
              a quiet revolution just gained one more voice
            </span>

            {/* MASSIVE personalized headline */}
            <h1
              className="mt-8 font-[family-name:var(--font-display)] font-light leading-[0.9] tracking-[-0.04em] text-[#faf8f0] lr4e-rise"
              style={{ fontSize: "clamp(3rem,10vw,8rem)", animationDelay: "200ms" }}
            >
              Thank you,{" "}
              <em className="italic" style={{ color: "#7ab648" }}>
                {name}.
              </em>
            </h1>

            {/* Amount in giant display */}
            {amountNum > 0 && (
              <div
                className="mt-14 lr4e-rise"
                style={{ animationDelay: "500ms" }}
              >
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.38em] text-[#faf8f0]/50">
                  Your gift
                </p>
                <div className="font-[family-name:var(--font-display)] font-light italic leading-none tracking-[-0.045em] text-[#faf8f0]"
                     style={{ fontSize: "clamp(4rem,13vw,10rem)" }}>
                  ₹{amountNum.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                </div>
              </div>
            )}

            {/* Scroll cue */}
            <div className="mt-20 flex flex-col items-center gap-2 text-[#faf8f0]/35 lr4e-fade" style={{ animationDelay: "1200ms" }}>
              <span className="text-[10px] uppercase tracking-[0.4em]">What&apos;s next ↓</span>
              <div className="h-10 w-px bg-[#faf8f0]/30" />
            </div>
          </div>
        </section>

        {/* ════════ ACT 2 — WHAT'S NEXT (editorial timeline) ════════ */}
        <section className="relative overflow-hidden bg-[#faf8f0] px-6 py-28 text-[#0d2400] md:py-32">
          <div aria-hidden className="pointer-events-none absolute -right-32 -top-24 h-[420px] w-[420px] rounded-[58%_42%_55%_45%/48%_55%_45%_52%] bg-[rgba(122,182,72,0.07)]" />
          <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-32 h-[360px] w-[360px] rounded-[42%_58%_47%_53%/55%_42%_58%_45%] bg-[rgba(14,29,94,0.04)]" />

          <div className="relative mx-auto max-w-4xl">
            {/* Section eyebrow */}
            <div className="mb-10 flex items-center justify-center gap-4 lr4e-rise">
              <span className="h-px w-10 bg-[#193d00]/25" />
              <span className="font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.3em] text-[#193d00]/55">
                what happens next
              </span>
              <span className="h-px w-10 bg-[#193d00]/25" />
            </div>

            {/* Timeline — three editorial steps */}
            <ol className="relative space-y-14 md:space-y-16">
              {/* Vertical line connecting steps (desktop only) */}
              <div aria-hidden className="absolute left-[21px] top-6 bottom-6 hidden w-px bg-[#193d00]/15 md:block" />

              {[
                {
                  num: "01",
                  when: "Right now",
                  title: "A receipt lands in your inbox.",
                  body: "Payment confirmation with the full breakdown, sent to the email you provided.",
                  delay: 100,
                },
                {
                  num: "02",
                  when: "Within 3 working days",
                  title: "Your 80G certificate follows.",
                  body: "Fully tax-deductible under Section 80G of the Income Tax Act. Attach it to your filing.",
                  delay: 200,
                },
                {
                  num: "03",
                  when: "Every quarter",
                  title: "A dispatch from the field.",
                  body: "Photos, numbers, and stories from the villages, forests, and coasts your gift reached.",
                  delay: 300,
                },
              ].map(({ num, when, title, body, delay }) => (
                <li
                  key={num}
                  className="relative grid gap-5 md:grid-cols-[auto_1fr] md:gap-10 lr4e-rise"
                  style={{ animationDelay: `${delay}ms` }}
                >
                  {/* Numbered badge */}
                  <div className="flex md:block">
                    <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#193d00] bg-[#faf8f0] font-[family-name:var(--font-display)] text-[13px] font-light italic text-[#193d00]">
                      {num}
                    </div>
                  </div>

                  <div>
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#193d00]/55">
                      {when}
                    </p>
                    <h3 className="font-[family-name:var(--font-display)] font-light leading-[1.15] tracking-[-0.02em] text-[#0d2400]"
                        style={{ fontSize: "clamp(1.5rem,3vw,2rem)" }}>
                      {title}
                    </h3>
                    <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-[#0d2400]/60">
                      {body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ════════ ACT 3 — THE OUTRO ════════ */}
        <section className="relative overflow-hidden bg-[#0d2400] px-6 py-24 text-[#faf8f0]">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(122,182,72,0.14)_0%,transparent_65%)]" />

          <div className="relative mx-auto max-w-4xl text-center">
            <p className="font-[family-name:var(--font-display)] font-light italic leading-[1.2] tracking-[-0.025em] text-[#faf8f0]"
               style={{ fontSize: "clamp(1.75rem,4vw,3rem)" }}>
              The Earth doesn&apos;t know your name.<br/>
              But <em style={{ color: "#7ab648" }}>it felt what you just did.</em>
            </p>

            <div className="mt-14 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <Link
                href="/our-work"
                className="group inline-flex items-center gap-3 rounded-full bg-[#7ab648] py-3.5 pl-6 pr-3 text-[13px] font-semibold uppercase tracking-[0.22em] text-[#0d2400] transition-all duration-300 hover:bg-[#faf8f0]"
              >
                See the work
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0d2400] text-[#7ab648] transition-transform duration-300 group-hover:rotate-45">↗</span>
              </Link>

              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[13px] font-medium text-[#faf8f0]/60 underline-offset-4 transition hover:text-[#faf8f0] hover:underline"
              >
                ← back to homepage
              </Link>
            </div>

            {ref && (
              <p className="mt-16 font-mono text-[10px] uppercase tracking-[0.3em] text-[#faf8f0]/25">
                ref · {ref}
              </p>
            )}
          </div>
        </section>
      </main>
    </>
  )
}

/* ──────────────────── Confetti (CSS-only particles) ──────────────────── */
function Confetti() {
  const colors = ["#7ab648", "#faf8f0", "#193d00", "#7ab648"]
  const pieces = Array.from({ length: 24 }, (_, i) => ({
    left: `${(i * 4.3) % 100}%`,
    delay: `${(i * 0.17) % 4}s`,
    duration: `${3 + ((i * 0.3) % 2.5)}s`,
    color: colors[i % colors.length],
    size: 6 + (i % 3) * 3,
  }))
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((p, i) => (
        <span
          key={i}
          className="lr4e-confetti-piece"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            width: `${p.size}px`,
            height: `${p.size * 1.4}px`,
            background: p.color,
            opacity: 0.75,
            borderRadius: "1px",
          }}
        />
      ))}
    </div>
  )
}

/* ──────────────────── Failed state ──────────────────── */
function FailedView() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#faf8f0] px-6 py-24">
      <div className="relative mx-auto max-w-lg text-center">
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-red-500/10">
          <AlertTriangle className="h-10 w-10 text-red-600" strokeWidth={1.5} />
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-red-600">
          Payment did not complete
        </span>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)] font-light leading-[1.05] tracking-[-0.025em] text-[#0d2400]">
          Something went{" "}
          <em className="italic text-red-700">wrong.</em>
        </h1>
        <p className="mt-6 text-[1rem] leading-relaxed text-[#0d2400]/70">
          Your card was not charged. No funds have left your account. Try again
          from the donate page, or use bank transfer.
        </p>
        <Link
          href="/donate"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#193d00] px-6 py-3 text-[13px] font-medium text-white transition hover:bg-[#0d2400]"
        >
          Try again
        </Link>
      </div>
    </div>
  )
}

/* ──────────────────── Pending state ──────────────────── */
function PendingView() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#faf8f0] px-6 py-24">
      <div className="relative mx-auto max-w-lg text-center">
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#193d00]/5">
          <Clock className="h-10 w-10 text-[#193d00]/60" strokeWidth={1.5} />
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#193d00]/60">
          Status
        </span>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)] font-light leading-[1.05] tracking-[-0.025em] text-[#0d2400]">
          No donation details received.
        </h1>
        <p className="mt-6 text-[1rem] leading-relaxed text-[#0d2400]/70">
          If you just made a donation, please check your email for the receipt.
          If you didn&apos;t, head back and start one.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#193d00]/25 px-6 py-3 text-[13px] font-medium text-[#193d00] transition hover:border-[#193d00] hover:bg-[#193d00] hover:text-white"
        >
          ← Back to Homepage
        </Link>
      </div>
    </div>
  )
}
