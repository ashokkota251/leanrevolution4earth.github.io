import type { Metadata } from "next"
import Image from "next/image"
import { DonationForm } from "@/components/donate/donation-form"
import { DonationCard } from "@/components/donation-card"
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld"
import saahasTaru from "@/public/images/initiatives/project-saahas-taru.jpg"

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support climate justice in India. Every rupee plants trees, powers rural homes with clean energy, and protects mangroves. Section 8 NGO · 80G eligible.",
  alternates: { canonical: "/donate/" },
}

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.9 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

const MARQUEE = ["PLANT", "POWER", "PROTECT", "RESTORE", "GIVE", "ACT", "REVIVE"]

const STAMPS = [
  { label: "SECTION\n8 NGO",      rot: -8 },
  { label: "80G\nELIGIBLE",       rot:  6 },
  { label: "AUDITED\nACCOUNTS",   rot: -4 },
  { label: "SSL\nSECURED",        rot:  9 },
  { label: "₹0\nOVERHEAD",        rot: -6 },
]

export default function DonatePage() {
  return (
    <>
      <BreadcrumbJsonLd trail={[{ name: "Donate", path: "/donate" }]} />

      <style>{`
        @keyframes lr4e-marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        @keyframes lr4e-blur-in { from { opacity: 0; filter: blur(12px); transform: translateY(28px) } to { opacity: 1; filter: blur(0); transform: translateY(0) } }
        @keyframes lr4e-scale-in { from { opacity: 0; transform: scale(0.92) } to { opacity: 1; transform: scale(1) } }
        .lr4e-blurin { animation: lr4e-blur-in 1s cubic-bezier(0.22,0.61,0.36,1) both }
        .lr4e-scalein { animation: lr4e-scale-in 0.8s cubic-bezier(0.22,0.61,0.36,1) both }
        .lr4e-marquee-track { animation: lr4e-marquee 32s linear infinite; will-change: transform }
        .lr4e-marquee-track:hover { animation-play-state: paused }
        .lr4e-grain-mask { background-image: ${GRAIN}; opacity: .09; mix-blend-mode: overlay; pointer-events: none; position: absolute; inset: 0 }
      `}</style>

      {/* ══════════════════════════════════════════════════════
          1 ─ CINEMATIC HERO
      ══════════════════════════════════════════════════════ */}
      <section className="relative isolate flex min-h-[88vh] items-end overflow-hidden bg-[#0d2400] pb-16 text-white md:min-h-[94vh] md:pb-24">
        <Image
          src={saahasTaru}
          alt="Volunteers planting saplings"
          fill priority sizes="100vw" placeholder="blur"
          className="object-cover"
          style={{ animation: "lr4e-kenburns 24s ease-out both" }}
        />

        {/* Deep tonal stack */}
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(4,12,0,0.97)_0%,rgba(7,18,0,0.78)_32%,rgba(13,36,0,0.4)_62%,rgba(14,29,94,0.25)_100%)]" />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_15%,rgba(14,29,94,0.3)_0%,transparent_62%)]" />
        <div aria-hidden className="lr4e-grain-mask" />
        <div aria-hidden className="pointer-events-none absolute inset-0 lr4e-dotgrid" />

        {/* Vertical label — left edge */}
        <div className="pointer-events-none absolute left-6 top-32 hidden md:block">
          <span className="block origin-top-left -rotate-90 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.5em] text-white/35">
            Lean Revolution 4 Earth · Est. 2023 · Mumbai
          </span>
        </div>

        {/* Giant watermark */}
        <span aria-hidden className="pointer-events-none absolute right-[-3%] top-[18%] select-none font-[family-name:var(--font-display)] text-[18rem] font-light italic leading-none tracking-[-0.05em] text-white/[0.035] md:text-[28rem]">
          2026
        </span>

        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-12">
          {/* Kicker */}
          <div className="mb-7 flex items-center gap-3 lr4e-blurin" style={{ animationDelay: "100ms" }}>
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-[#7ab648]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[#7ab648]">
              This is a climate emergency.
            </span>
          </div>

          {/* MASSIVE overflowing headline */}
          <h1 className="font-[family-name:var(--font-display)] font-light leading-[0.88] tracking-[-0.045em] text-white"
              style={{ fontSize: "clamp(4rem,13vw,12rem)" }}>
            <span className="block lr4e-blurin" style={{ animationDelay: "250ms" }}>Give to</span>
            <span className="relative block italic lr4e-blurin" style={{ animationDelay: "450ms", color: "#7ab648" }}>
              the Earth<span className="text-white">.</span>
            </span>
          </h1>

          <p className="mt-9 max-w-md text-[1rem] leading-relaxed text-white/65 md:text-[1.05rem] lr4e-blurin" style={{ animationDelay: "700ms" }}>
            Every rupee plants trees, powers rural homes with clean energy,
            and protects mangroves — on India&apos;s climate frontlines.
          </p>

          {/* Live stat strip */}
          <div className="mt-14 grid max-w-2xl grid-cols-3 gap-0 lr4e-blurin" style={{ animationDelay: "900ms" }}>
            {[
              { v: "12,000+", l: "trees" },
              { v: "340+",    l: "families" },
              { v: "₹0",      l: "overhead" },
            ].map(({ v, l }, i) => (
              <div key={l} className={`${i > 0 ? "border-l border-white/15 pl-6" : ""} ${i < 2 ? "pr-6" : ""}`}>
                <div className="font-[family-name:var(--font-display)] text-[2rem] font-light italic leading-none tracking-[-0.025em] text-white md:text-[2.5rem]">{v}</div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-white/40">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom scroll cue */}
        <div className="pointer-events-none absolute bottom-6 right-6 flex items-center gap-2 text-white/30 md:bottom-10 md:right-10">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll ↓</span>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          2 ─ MARQUEE TICKER
      ══════════════════════════════════════════════════════ */}
      <section className="overflow-hidden border-y border-[#193d00]/15 bg-[#7ab648] py-5">
        <div className="lr4e-marquee-track flex gap-14 whitespace-nowrap">
          {[...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE].map((w, i) => (
            <span key={i} className="flex items-center gap-14 font-[family-name:var(--font-display)] text-[1.4rem] font-light italic tracking-[-0.01em] text-[#0d2400] md:text-[1.75rem]">
              {w}
              <span className="text-[#0d2400]/40">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          3 ─ FORM — THE MAIN EVENT
      ══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#faf8f0] px-6 py-24 md:py-32">
        {/* Organic blobs */}
        <div aria-hidden className="pointer-events-none absolute -right-32 top-16 h-[560px] w-[560px] rounded-[58%_42%_55%_45%/48%_55%_45%_52%] bg-[rgba(14,29,94,0.045)]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-28 h-[380px] w-[380px] rounded-[42%_58%_47%_53%/55%_42%_58%_45%] bg-[rgba(122,182,72,0.1)]" />

        {/* Section eyebrow */}
        <div className="relative mx-auto mb-14 max-w-7xl text-center">
          <span className="font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.32em] text-[#193d00]/55">
            choose your impact
          </span>
        </div>

        <div className="relative mx-auto max-w-7xl">
          <DonationForm />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          4 ─ TRUST STAMPS (rotated stickers)
      ══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#193d00] px-6 py-24 text-white">
        <div aria-hidden className="lr4e-grain-mask" />

        <div className="mx-auto mb-12 max-w-7xl text-center">
          <span className="font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.32em] text-white/55">
            fully compliant · fully transparent
          </span>
        </div>

        <div className="relative mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-6 py-10 md:gap-10">
          {STAMPS.map(({ label, rot }, i) => (
            <div
              key={label}
              className="group relative flex h-32 w-32 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-[#7ab648]/60 bg-[#0d2400] text-center transition-all duration-500 hover:scale-105 hover:rotate-0 hover:border-solid hover:border-[#7ab648] md:h-36 md:w-36 lr4e-scalein"
              style={{ transform: `rotate(${rot}deg)`, animationDelay: `${150 + i * 100}ms` }}
            >
              <div className="flex flex-col items-center gap-1">
                <span className="font-[family-name:var(--font-display)] text-[12px] font-semibold uppercase leading-tight tracking-[0.22em] text-[#7ab648] whitespace-pre-line">
                  {label}
                </span>
              </div>
              {/* Rotating outer ring */}
              <span aria-hidden className="pointer-events-none absolute inset-[-6px] rounded-full border border-[#7ab648]/0 transition-all duration-500 group-hover:border-[#7ab648]/30" />
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-[13px] text-white/50">
          Lean Revolution 4 Earth Foundation · Section 8 Company, Companies Act 2013 · Registered in Mumbai, India
        </p>
      </section>

      {/* ══════════════════════════════════════════════════════
          7 ─ BANK TRANSFER
      ══════════════════════════════════════════════════════ */}
      <section id="bank-transfer" className="relative overflow-hidden bg-[#0d2400] px-6 py-24 md:py-28">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(14,29,94,0.3)_0%,transparent_65%)]" />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_100%,rgba(42,100,20,0.18)_0%,transparent_65%)]" />
        <div aria-hidden className="lr4e-grain-mask" />

        <div className="relative mx-auto max-w-2xl">
          <div className="mb-8 text-center">
            <span className="font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.32em] text-white/55">
              alternative
            </span>
          </div>

          <h2 className="mb-3 font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-light leading-[1.02] tracking-[-0.025em] text-white">
            Prefer{" "}
            <em className="italic text-[#7ab648]">bank transfer?</em>
          </h2>
          <p className="mb-10 max-w-md text-[14px] text-white/50">
            Transfer directly to our registered account. Email us your name and
            PAN for the 80G certificate.
          </p>
          <DonationCard />
        </div>
      </section>
    </>
  )
}
