"use client"

import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { AlertTriangle, Clock, Twitter, Mail, Copy, Check } from "lucide-react"
import saahasTaru from "@/public/images/initiatives/project-saahas-taru.jpg"
import pragati    from "@/public/images/about/team/pragati-shirke.jpg"

/* ──────────────────── Impact mapping ──────────────────── */
// What the specific amount actually buys. Illustrative — tune with real programme costs.
function computeImpact(amount: number) {
  const saplings  = Math.max(1, Math.floor(amount / 100))
  const kwh       = Math.floor(amount / 50)
  const mangroves = Math.floor(amount / 500)
  const familyLight = Math.floor(amount / 1000)
  return { saplings, kwh, mangroves, familyLight }
}

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
  const amountNum  = amount ? parseFloat(amount) : 0
  const impact     = computeImpact(amountNum || 100)
  const donorNumber = 2454  // ponytail: hardcoded; swap for real count when DB is wired

  return (
    <>
      <style>{`
        @keyframes lr4e-rise      { from { opacity: 0; transform: translateY(32px) } to { opacity: 1; transform: translateY(0) } }
        @keyframes lr4e-fade      { from { opacity: 0 } to { opacity: 1 } }
        @keyframes lr4e-sprout    { from { transform: scaleY(0); opacity: 0 } to { transform: scaleY(1); opacity: 1 } }
        @keyframes lr4e-confetti  { 0% { transform: translateY(-120vh) rotate(0deg); opacity: 1 } 100% { transform: translateY(120vh) rotate(720deg); opacity: 0 } }
        @keyframes lr4e-pulse     { 0%,100% { transform: scale(1); opacity: 1 } 50% { transform: scale(1.08); opacity: .85 } }
        .lr4e-rise      { animation: lr4e-rise 1.1s cubic-bezier(0.22,0.61,0.36,1) both }
        .lr4e-fade      { animation: lr4e-fade 1.5s ease-out both }
        .lr4e-sprout    { transform-origin: bottom; animation: lr4e-sprout 1.4s cubic-bezier(0.34,1.56,0.64,1) both }
        .lr4e-pulse     { animation: lr4e-pulse 2.4s ease-in-out infinite }
        .lr4e-confetti-piece { position: absolute; top: -24px; animation: lr4e-confetti linear infinite; pointer-events: none }
        @media (prefers-reduced-motion: reduce) {
          .lr4e-rise, .lr4e-fade, .lr4e-sprout, .lr4e-pulse, .lr4e-confetti-piece { animation: none !important; opacity: 1 !important; transform: none !important }
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
              <span className="text-[10px] uppercase tracking-[0.4em]">See your impact ↓</span>
              <div className="h-10 w-px bg-[#faf8f0]/30" />
            </div>
          </div>
        </section>

        {/* ════════ ACT 2 — THE IMPACT ════════ */}
        <section className="relative overflow-hidden bg-[#faf8f0] px-6 py-28 text-[#0d2400] md:py-36">
          <div aria-hidden className="pointer-events-none absolute -right-32 -top-24 h-[480px] w-[480px] rounded-[58%_42%_55%_45%/48%_55%_45%_52%] bg-[rgba(122,182,72,0.08)]" />
          <div aria-hidden className="pointer-events-none absolute -bottom-28 -left-32 h-[420px] w-[420px] rounded-[42%_58%_47%_53%/55%_42%_58%_45%] bg-[rgba(25,61,0,0.05)]" />

          <div className="relative mx-auto max-w-6xl">
            <div className="flex items-center gap-4 lr4e-rise">
              <span className="font-[family-name:var(--font-display)] text-[1rem] italic text-[#193d00]/50">01 —</span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.38em] text-[#193d00]">
                Here&apos;s what your gift becomes
              </span>
              <span className="h-px flex-1 bg-[#193d00]/15" />
            </div>

            <h2 className="mt-10 max-w-4xl font-[family-name:var(--font-display)] font-light leading-[0.98] tracking-[-0.035em] text-[#0d2400] lr4e-rise"
                style={{ fontSize: "clamp(2.25rem,6vw,4.5rem)", animationDelay: "100ms" }}>
              Not a line in a ledger.<br/>
              <em className="italic text-[#193d00]">A real thing in a real place.</em>
            </h2>

            {/* Impact grid */}
            <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { emoji: "🌱", big: impact.saplings,       label: "saplings on degraded land", delay: 0   },
                { emoji: "⚡", big: `${impact.kwh} kWh`,    label: "of clean energy funded",     delay: 100 },
                { emoji: "🦀", big: `${impact.mangroves} m²`,label: "of mangrove restored",      delay: 200 },
                { emoji: "👨‍👩‍👧", big: `${impact.familyLight || "–"}`, label: "families with light", delay: 300 },
              ].map(({ emoji, big, label, delay }) => (
                <div
                  key={label}
                  className="relative overflow-hidden rounded-2xl border border-[#193d00]/10 bg-white p-7 shadow-[0_12px_40px_-18px_rgba(4,12,0,0.18)] lr4e-rise"
                  style={{ animationDelay: `${150 + delay}ms` }}
                >
                  <span className="text-3xl" role="img">{emoji}</span>
                  <div className="mt-5 font-[family-name:var(--font-display)] text-[2.5rem] font-light italic leading-none tracking-[-0.03em] text-[#193d00] md:text-[3rem]">
                    {big}
                  </div>
                  <div className="mt-3 text-[12.5px] leading-snug text-[#0d2400]/55">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-2xl text-[14px] italic leading-relaxed text-[#0d2400]/55">
              Estimates based on current programme costs — the real sapling, panel, or mangrove propagule you funded will be tracked and reported in our next quarterly dispatch.
            </p>
          </div>
        </section>

        {/* ════════ ACT 3 — THE PEOPLE'S VOICE ════════ */}
        <section className="relative overflow-hidden bg-[#0e1d5e] px-6 py-28 text-[#faf8f0] md:py-32">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_30%_30%,rgba(122,182,72,0.1)_0%,transparent_65%)]" />

          <div className="relative mx-auto max-w-6xl">
            <div className="flex items-center gap-4 lr4e-rise">
              <span className="font-[family-name:var(--font-display)] text-[1rem] italic text-[#faf8f0]/40">02 —</span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.38em] text-[#7ab648]">
                A note from the field
              </span>
              <span className="h-px flex-1 bg-[#faf8f0]/15" />
            </div>

            <div className="mt-14 grid gap-14 md:grid-cols-[auto_1fr] md:gap-16 lg:gap-24">
              {/* Portrait */}
              <div className="relative mx-auto md:mx-0 lr4e-rise">
                <div className="relative h-[280px] w-[240px] overflow-hidden rounded-full shadow-[0_32px_64px_-20px_rgba(4,12,0,0.55)] md:h-[340px] md:w-[280px]">
                  <Image src={pragati} alt="Pragati Shirke" fill sizes="280px" className="object-cover" />
                </div>
                <div aria-hidden className="pointer-events-none absolute inset-[-12px] rounded-full border-2 border-dashed border-[#7ab648]/40" />
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#7ab648] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0d2400]">
                  Pragati · Co-founder
                </div>
              </div>

              <div className="flex flex-col justify-center lr4e-rise" style={{ animationDelay: "100ms" }}>
                <span aria-hidden className="font-[family-name:var(--font-display)] text-[7rem] font-light italic leading-none text-[#7ab648]/40">&ldquo;</span>
                <blockquote className="-mt-10 font-[family-name:var(--font-display)] font-light italic leading-[1.25] tracking-[-0.015em] text-[#faf8f0]"
                            style={{ fontSize: "clamp(1.35rem,2.8vw,2rem)" }}>
                  {name}, your contribution isn&apos;t charity — it&apos;s a vote.
                  You just voted that climate action belongs to all of us.{" "}
                  <em className="text-[#7ab648]">Thank you for showing up.</em>
                </blockquote>

                {/* Hand-signed effect */}
                <div className="mt-10 flex items-center gap-4">
                  <span className="font-[family-name:var(--font-display)] text-[1.6rem] font-light italic leading-none tracking-[-0.01em] text-[#7ab648]">
                    Pragati
                  </span>
                  <span className="h-px w-10 bg-[#faf8f0]/30" />
                  <span className="text-[11px] uppercase tracking-[0.26em] text-[#faf8f0]/50">
                    Mumbai · {new Date().toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════ ACT 4 — SOCIAL PROOF + NEXT STEPS ════════ */}
        <section className="relative overflow-hidden bg-[#faf8f0] px-6 py-28 text-[#0d2400]">
          <div className="relative mx-auto max-w-6xl">
            <div className="flex items-center gap-4 lr4e-rise">
              <span className="font-[family-name:var(--font-display)] text-[1rem] italic text-[#193d00]/40">03 —</span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.38em] text-[#193d00]">
                You&apos;re not alone
              </span>
              <span className="h-px flex-1 bg-[#193d00]/15" />
            </div>

            <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
              {/* Donor number badge */}
              <div className="rounded-3xl border border-[#193d00]/10 bg-gradient-to-br from-[#193d00] to-[#0d2400] p-10 text-[#faf8f0] shadow-[0_32px_64px_-24px_rgba(4,12,0,0.4)] lr4e-rise">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#7ab648]" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7ab648]">
                    the roll call
                  </span>
                </div>

                <div className="mt-6 flex items-baseline gap-4">
                  <span className="font-[family-name:var(--font-display)] font-light italic leading-none tracking-[-0.03em] text-[#7ab648]"
                        style={{ fontSize: "clamp(4rem,9vw,7rem)" }}>
                    #{donorNumber}
                  </span>
                  <span className="font-[family-name:var(--font-display)] text-[1.5rem] font-light italic text-[#faf8f0]/70">
                    that&apos;s you.
                  </span>
                </div>

                <p className="mt-8 max-w-md text-[14px] leading-relaxed text-[#faf8f0]/70">
                  Two thousand four hundred and fifty-four people have put their
                  names to this work. You just made it 2,455. Each name is a
                  signal — to the villages we partner with, to the policymakers
                  we lobby, and to the fossil-fuel lobby we refuse to let win.
                </p>

                <ShareRow name={name} amount={amount} />
              </div>

              {/* Receipt card */}
              <div className="rounded-3xl border border-[#193d00]/10 bg-white p-8 shadow-[0_12px_40px_-16px_rgba(4,12,0,0.15)] lr4e-rise" style={{ animationDelay: "100ms" }}>
                <div className="mb-5 flex items-center gap-3">
                  <span className="font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.3em] text-[#193d00]/60">
                    what&apos;s next
                  </span>
                </div>

                <h3 className="font-[family-name:var(--font-display)] text-[1.75rem] font-light leading-tight tracking-[-0.015em] text-[#0d2400] md:text-[2rem]">
                  Three things<br/>
                  <em className="italic text-[#193d00]">heading your way.</em>
                </h3>

                <ul className="mt-8 space-y-5">
                  {[
                    { emoji: "📧", title: "Receipt — now", body: "Confirmation email on its way to your inbox." },
                    { emoji: "🧾", title: "80G certificate — 3 working days", body: "Fully tax-deductible. Attach to your filing." },
                    { emoji: "📬", title: "Quarterly impact dispatch", body: "Photos, numbers, and stories from the ground — straight to your inbox." },
                  ].map(({ emoji, title, body }) => (
                    <li key={title} className="flex gap-4 border-t border-[#193d00]/8 pt-5 first:border-0 first:pt-0">
                      <span className="text-2xl shrink-0">{emoji}</span>
                      <div>
                        <div className="text-[13.5px] font-semibold text-[#0d2400]">{title}</div>
                        <div className="mt-1 text-[12.5px] leading-relaxed text-[#0d2400]/60">{body}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ════════ ACT 5 — THE OUTRO ════════ */}
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
  // 24 colored squares falling from the top with staggered timing
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

/* ──────────────────── Share row ──────────────────── */
function ShareRow({ name, amount }: { name: string; amount?: string }) {
  const [copied, setCopied] = useState(false)
  const [url, setUrl] = useState("")

  useEffect(() => {
    if (typeof window !== "undefined") setUrl(`${window.location.origin}/donate`)
  }, [])

  const shareText = `I just joined the Lean Revolution 4 Earth climate pledge${amount ? ` with ₹${amount}` : ""}. Fund trees, clean energy, and mangrove restoration on India's frontlines.`
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`
  const mailtoUrl  = `mailto:?subject=${encodeURIComponent("I just donated to Lean Revolution 4 Earth")}&body=${encodeURIComponent(shareText + "\n\n" + url)}`

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch { /* clipboard blocked */ }
  }

  return (
    <div className="mt-10 border-t border-[#faf8f0]/10 pt-6">
      <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#faf8f0]/50">
        Spread the signal
      </p>
      <div className="flex flex-wrap gap-2.5">
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-[#faf8f0]/15 bg-[#faf8f0]/5 px-4 py-2.5 text-[12px] font-medium text-[#faf8f0] transition hover:border-[#7ab648] hover:bg-[#7ab648] hover:text-[#0d2400]"
        >
          <Twitter className="h-3.5 w-3.5" strokeWidth={2} />
          Share on Twitter
        </a>
        <a
          href={mailtoUrl}
          className="group inline-flex items-center gap-2 rounded-full border border-[#faf8f0]/15 bg-[#faf8f0]/5 px-4 py-2.5 text-[12px] font-medium text-[#faf8f0] transition hover:border-[#7ab648] hover:bg-[#7ab648] hover:text-[#0d2400]"
        >
          <Mail className="h-3.5 w-3.5" strokeWidth={2} />
          Email a friend
        </a>
        <button
          type="button"
          onClick={copyLink}
          className="group inline-flex items-center gap-2 rounded-full border border-[#faf8f0]/15 bg-[#faf8f0]/5 px-4 py-2.5 text-[12px] font-medium text-[#faf8f0] transition hover:border-[#7ab648] hover:bg-[#7ab648] hover:text-[#0d2400]"
        >
          {copied ? <Check className="h-3.5 w-3.5" strokeWidth={2.5} /> : <Copy className="h-3.5 w-3.5" strokeWidth={2} />}
          {copied ? "Copied" : "Copy link"}
        </button>
      </div>
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
