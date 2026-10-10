import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Code2, Sparkles, Plane, Bike, Footprints,
  Compass, Mountain, Zap, Target, BookOpen,
} from "lucide-react"
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld"

export const metadata: Metadata = {
  title: "Colophon",
  description: "Website credits — designed and built by Ashok Kota.",
  alternates: { canonical: "/colophon/" },
}

const SOCIAL = [
  { label: "LinkedIn",  href: "https://www.linkedin.com/in/ashokkotaa/" },
  { label: "Instagram", href: "https://www.instagram.com/theashokkota/" },
]

const RIGHT_LIST = [
  { icon: Code2,   label: "Code"    },
  { icon: Sparkles,label: "AI"      },
  { icon: Plane,   label: "Travel"  },
  { icon: Bike,    label: "Cycle"   },
  { icon: Footprints, label: "Run"  },
]

const LEFT_LIST = [
  { icon: Target,   label: "Craft",      sub: "Code with care" },
  { icon: BookOpen, label: "Curiosity",  sub: "Always learning" },
  { icon: Mountain, label: "Movement",   sub: "Mind + body" },
]

const CENTER_ICONS = [
  { icon: Code2,       label: "Build"    },
  { icon: Compass,     label: "Explore"  },
  { icon: Zap,         label: "Ship"     },
]

export default function ColophonPage() {
  return (
    <>
      <BreadcrumbJsonLd trail={[{ name: "Colophon", path: "/colophon" }]} />

      <main className="relative isolate overflow-hidden bg-[#faf8f0] text-[#0d2400]">
        {/* ───────── BACKGROUND ATMOSPHERE ───────── */}
        {/* Blurry portrait — colour wash */}
        <Image
          src="/images/colophon/ashok.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="scale-125 object-cover blur-[80px] opacity-25"
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[#faf8f0]/85" />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_40%,rgba(25,61,0,0.07)_0%,transparent_70%)]" />

        {/* ───────── DECORATIVE DOT GRIDS ───────── */}
        <svg aria-hidden className="pointer-events-none absolute left-8 top-28 hidden opacity-50 md:block" width="90" height="90" viewBox="0 0 90 90">
          <defs>
            <pattern id="dots-col" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="#193d00" />
            </pattern>
          </defs>
          <rect width="90" height="90" fill="url(#dots-col)" />
        </svg>
        <svg aria-hidden className="pointer-events-none absolute right-8 top-20 hidden opacity-45 md:block" width="110" height="110" viewBox="0 0 110 110">
          <defs>
            <pattern id="dots-col2" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="#0e1d5e" />
            </pattern>
          </defs>
          <rect width="110" height="110" fill="url(#dots-col2)" />
        </svg>

        {/* ───────── BOTANICAL LEAVES ───────── */}
        <svg aria-hidden className="pointer-events-none absolute left-[2%] top-[32%] hidden h-32 w-32 opacity-30 lg:block" viewBox="0 0 100 100" style={{ transform: "rotate(-28deg)" }}>
          <path d="M50 8 Q 28 28 22 55 Q 28 82 50 92 Q 72 82 78 55 Q 72 28 50 8 Z" fill="#193d00" opacity="0.55" />
          <path d="M50 15 Q 50 55 50 88" stroke="#faf8f0" strokeWidth="1.4" opacity="0.5" />
        </svg>
        <svg aria-hidden className="pointer-events-none absolute right-[3%] top-[36%] hidden h-28 w-28 opacity-30 lg:block" viewBox="0 0 100 100" style={{ transform: "rotate(32deg)" }}>
          <path d="M50 8 Q 28 28 22 55 Q 28 82 50 92 Q 72 82 78 55 Q 72 28 50 8 Z" fill="#0e1d5e" opacity="0.55" />
          <path d="M50 15 Q 50 55 50 88" stroke="#faf8f0" strokeWidth="1.4" opacity="0.5" />
        </svg>
        <svg aria-hidden className="pointer-events-none absolute left-[6%] bottom-[22%] hidden h-20 w-20 opacity-35 lg:block" viewBox="0 0 100 100" style={{ transform: "rotate(18deg)" }}>
          <path d="M50 8 Q 28 28 22 55 Q 28 82 50 92 Q 72 82 78 55 Q 72 28 50 8 Z" fill="#7ab648" opacity="0.6" />
        </svg>

        {/* ───────── TOPOGRAPHIC CONTOUR LINES (bottom-left) ───────── */}
        <svg aria-hidden className="pointer-events-none absolute -bottom-10 -left-10 hidden h-56 w-56 opacity-20 lg:block" viewBox="0 0 200 200" fill="none">
          <path d="M-20 180 Q 60 100 180 160 M-10 160 Q 60 90 180 140 M0 140 Q 60 80 180 120 M10 120 Q 60 70 180 100 M20 100 Q 60 60 180 80" stroke="#193d00" strokeWidth="1" />
        </svg>

        {/* ───────── DECORATIVE ACCENT CIRCLES (background) ───────── */}
        <div aria-hidden className="pointer-events-none absolute left-[-4%] top-[20%] hidden h-56 w-56 rounded-full bg-gradient-to-br from-[#0e1d5e]/15 to-[#0e1d5e]/0 md:block" />
        <div aria-hidden className="pointer-events-none absolute right-[-3%] bottom-[12%] hidden h-72 w-72 rounded-full bg-gradient-to-br from-[#193d00]/12 to-[#193d00]/0 md:block" />
        <div aria-hidden className="pointer-events-none absolute right-[20%] top-[8%] hidden h-20 w-20 rounded-full bg-[#7ab648]/15 md:block" />

        <section className="relative z-10 min-h-screen px-6 py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-[1fr_2fr_1fr] md:gap-8">

            {/* ═══════ LEFT COLUMN ═══════ */}
            <aside className="hidden flex-col justify-between md:flex">
              {/* Opening pull quote — magazine style */}
              <div className="pt-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] leading-[1.6] text-[#0e1d5e]">
                  Work isn&apos;t just<br/>
                  writing code,<br/>
                  it&apos;s the presence of
                </p>
                <p className="mt-2 font-[family-name:var(--font-display)] text-[1.6rem] font-light italic leading-tight text-[#193d00]">
                  craft.
                </p>
                <div aria-hidden className="mt-3 h-px w-10 bg-[#193d00]/40" />
              </div>

              {/* Value list with icons */}
              <ul className="mb-8 space-y-5 rounded-2xl border border-[#0e1d5e]/15 bg-[#0e1d5e]/8 p-6 backdrop-blur-sm">
                {LEFT_LIST.map(({ icon: Icon, label, sub }) => (
                  <li key={label} className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#faf8f0]/80">
                      <Icon className="h-4 w-4 text-[#0e1d5e]" strokeWidth={1.75} />
                    </span>
                    <div className="pt-0.5">
                      <p className="text-[10.5px] font-semibold uppercase tracking-[0.26em] text-[#0e1d5e]">
                        {label}
                      </p>
                      <p className="mt-0.5 text-[11px] text-[#0d2400]/55">{sub}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </aside>

            {/* ═══════ CENTER COLUMN — hero collage ═══════ */}
            <div className="flex flex-col items-center text-center">
              {/* Portrait + overlapping decorative circles */}
              <div className="relative mb-10">
                {/* Decorative background circle — forest green */}
                <div aria-hidden className="absolute -right-10 -top-6 h-32 w-32 rounded-full bg-gradient-to-br from-[#193d00] to-[#0d2400] opacity-80 md:h-36 md:w-36" />
                {/* Decorative background circle — navy */}
                <div aria-hidden className="absolute -bottom-6 -left-10 h-24 w-24 rounded-full bg-gradient-to-br from-[#0e1d5e] to-[#0e1d5e]/60 opacity-75 md:h-28 md:w-28" />
                {/* Dashed outer ring */}
                <div aria-hidden className="absolute inset-[-14px] rounded-full border border-dashed border-[#193d00]/35" />
                {/* Portrait */}
                <div className="relative h-48 w-48 overflow-hidden rounded-full border-[6px] border-[#faf8f0] shadow-[0_24px_60px_-18px_rgba(4,12,0,0.4)] md:h-56 md:w-56">
                  <Image
                    src="/images/colophon/ashok.jpg"
                    alt="Ashok Kota"
                    fill
                    priority
                    sizes="224px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Date-line kicker */}
              <p className="font-[family-name:var(--font-display)] text-[10px] font-semibold uppercase tracking-[0.42em] text-[#0d2400]/60">
                For code · For movement · For curiosity
              </p>

              {/* MIXED-TYPE HEADLINE — bold sans + script, like the reference poster */}
              <h1 className="mt-5 leading-[0.92] tracking-[-0.025em]">
                <span className="block font-sans text-[clamp(2.75rem,8vw,5.5rem)] font-bold uppercase tracking-[0.04em] text-[#0e1d5e]">
                  Ashok
                </span>
                <span className="block font-[family-name:var(--font-display)] text-[clamp(3rem,10vw,6.5rem)] font-light italic text-[#193d00]"
                      style={{ marginTop: "-0.2em" }}>
                  Kota
                </span>
              </h1>

              {/* Heartbeat-style ornament (echoes the ECG line in reference) */}
              <div aria-hidden className="mt-4 flex items-center gap-2">
                <span className="h-px w-8 bg-[#193d00]/35" />
                <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
                  <path d="M0 6 L8 6 L12 2 L16 10 L20 1 L24 11 L28 6 L40 6" stroke="#193d00" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-[family-name:var(--font-display)] text-[12px] italic text-[#193d00]">
                  Traveller · AI-First Engineer
                </span>
                <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
                  <path d="M0 6 L12 6 L16 2 L20 10 L24 1 L28 11 L32 6 L40 6" stroke="#193d00" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="h-px w-8 bg-[#193d00]/35" />
              </div>

              {/* Three center icons — Build · Explore · Ship (mirrors Promote · Protect · Prevent) */}
              <div className="mt-10 flex items-start gap-8 md:gap-12">
                {CENTER_ICONS.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-2">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#193d00]/20 bg-[#faf8f0]">
                      <Icon className="h-5 w-5 text-[#193d00]" strokeWidth={1.75} />
                    </div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#0d2400]/65">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom motto — "EVERY LINE EVERY MILE EVERY DAY onward" (mirrors reference) */}
              <div className="mt-14">
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] leading-[1.9] text-[#0d2400]/65">
                  Every line<br/>
                  Every mile<br/>
                  Every day
                </p>
                <p className="mt-1 font-[family-name:var(--font-display)] text-[1.5rem] font-light italic text-[#193d00] md:text-[1.75rem]">
                  onward.
                </p>
              </div>
            </div>

            {/* ═══════ RIGHT COLUMN ═══════ */}
            <aside className="hidden flex-col justify-between md:flex">
              {/* Icon list — the five things */}
              <ul className="mt-4 space-y-4 rounded-2xl border border-[#193d00]/15 bg-gradient-to-br from-[#faf8f0] to-[#f4f6f1] p-6 shadow-sm">
                <li className="mb-2">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#193d00]/60">
                    What I do
                  </p>
                </li>
                {RIGHT_LIST.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#193d00]/10">
                      <Icon className="h-4 w-4 text-[#193d00]" strokeWidth={1.75} />
                    </span>
                    <span className="text-[12.5px] font-semibold uppercase tracking-[0.22em] text-[#0d2400]">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Closing quote */}
              <div className="mb-8 text-right">
                <p className="font-[family-name:var(--font-display)] text-[14px] italic leading-[1.6] text-[#0d2400]/70">
                  Code teaches patience.<br/>
                  Running teaches rhythm.<br/>
                  <em className="text-[#193d00]">Travel teaches humility.</em>
                </p>
                <div aria-hidden className="ml-auto mt-3 h-px w-10 bg-[#193d00]/40" />
              </div>
            </aside>

            {/* ═══════ MOBILE-ONLY SIDE STRIPS ═══════ */}
            <div className="grid grid-cols-2 gap-3 md:hidden">
              {RIGHT_LIST.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5 rounded-xl border border-[#193d00]/12 bg-white/70 p-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#193d00]/10">
                    <Icon className="h-3.5 w-3.5 text-[#193d00]" strokeWidth={2} />
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0d2400]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── BIO + SOCIAL ───────── */}
        <section className="relative z-10 border-t border-[#193d00]/10 bg-[#faf8f0] px-6 py-24 md:py-28">
          <div className="mx-auto max-w-2xl">
            <p className="text-center font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.32em] text-[#193d00]/55">
              a few more words
            </p>

            <div className="mt-10 space-y-5 text-[15px] leading-[1.8] text-[#0d2400]/75">
              <p>
                I build production systems where AI sits inside the engineering
                workflow — not bolted on top.
              </p>
              <p>
                Comfortable across the stack: .NET, Python, Node, NestJS on the
                backend; React, Next.js, Angular on the frontend; AWS or Azure
                underneath. The stack is the easy part.
              </p>
              <p>
                The harder, more interesting work is making AI a real teammate
                in how products get designed, built, and shipped.
              </p>
              <p>
                Off-hours, I&apos;m usually running, riding, or somewhere new.
                Travel keeps the inputs honest; movement keeps the thinking
                clean.
              </p>
            </div>

            {/* Social */}
            <ul className="mt-14 flex items-center justify-center gap-10 border-t border-[#193d00]/10 pt-10">
              {SOCIAL.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.22em] text-[#193d00]/70 underline-offset-4 transition hover:text-[#193d00] hover:underline"
                  >
                    {label}
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Back link */}
            <div className="mt-14 text-center">
              <Link
                href="/"
                className="text-[12px] italic text-[#0d2400]/40 underline-offset-4 transition hover:text-[#0d2400]/80 hover:underline"
              >
                ← back to Lean Revolution 4 Earth
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
