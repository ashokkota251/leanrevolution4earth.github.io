import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Code2, Plane, Bike, Footprints } from "lucide-react"
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

const FACETS = [
  { icon: Code2,      label: "Work",    body: "Full-stack, with AI inside the workflow." },
  { icon: Plane,      label: "Travel",  body: "Somewhere new whenever I can." },
  { icon: Bike,       label: "Cycling", body: "Long weekend rides, open roads." },
  { icon: Footprints, label: "Running", body: "Early morning kilometres." },
]

export default function ColophonPage() {
  return (
    <>
      <BreadcrumbJsonLd trail={[{ name: "Colophon", path: "/colophon" }]} />

      <main className="relative overflow-hidden">
        {/* ════════ HERO — blurred portrait + collage ════════ */}
        <section className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24">
          {/* Blurry portrait as atmospheric background */}
          <Image
            src="/images/colophon/ashok.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="scale-125 object-cover blur-[60px] opacity-40"
          />
          {/* Cream wash on top for readability */}
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[#faf8f0]/80" />
          {/* Soft forest-green bloom */}
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(25,61,0,0.08)_0%,transparent_70%)]" />

          {/* Decorative dot grid — top-left */}
          <svg aria-hidden className="pointer-events-none absolute left-10 top-24 hidden opacity-35 md:block" width="80" height="80" viewBox="0 0 80 80">
            <defs>
              <pattern id="dots-colophon" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.2" fill="#193d00" />
              </pattern>
            </defs>
            <rect width="80" height="80" fill="url(#dots-colophon)" />
          </svg>
          {/* Decorative dot grid — bottom-right */}
          <svg aria-hidden className="pointer-events-none absolute bottom-32 right-10 hidden opacity-30 md:block" width="100" height="100" viewBox="0 0 100 100">
            <rect width="100" height="100" fill="url(#dots-colophon)" />
          </svg>

          {/* Decorative botanical leaves — SVG */}
          <svg aria-hidden className="pointer-events-none absolute left-[8%] top-[18%] hidden h-24 w-24 opacity-30 lg:block" viewBox="0 0 100 100" style={{ transform: "rotate(-20deg)" }}>
            <path d="M50 10 Q 30 30 25 55 Q 30 80 50 90 Q 70 80 75 55 Q 70 30 50 10 Z" fill="none" stroke="#193d00" strokeWidth="1.5" />
            <path d="M50 20 Q 50 55 50 85" stroke="#193d00" strokeWidth="1.2" />
          </svg>
          <svg aria-hidden className="pointer-events-none absolute right-[10%] top-[14%] hidden h-20 w-20 opacity-30 lg:block" viewBox="0 0 100 100" style={{ transform: "rotate(25deg)" }}>
            <path d="M50 10 Q 30 30 25 55 Q 30 80 50 90 Q 70 80 75 55 Q 70 30 50 10 Z" fill="none" stroke="#0e1d5e" strokeWidth="1.5" />
            <path d="M50 20 Q 50 55 50 85" stroke="#0e1d5e" strokeWidth="1.2" />
          </svg>

          {/* ─── Central content ─── */}
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Kicker */}
            <p className="font-[family-name:var(--font-display)] text-[10px] font-semibold uppercase tracking-[0.42em] text-[#193d00]/60">
              — designed &amp; built by —
            </p>

            {/* Sharp central portrait in classic double-ring frame */}
            <div className="relative mt-8">
              {/* Outer dashed ring */}
              <div aria-hidden className="absolute inset-[-14px] rounded-full border border-dashed border-[#193d00]/40" />
              {/* Inner cream ring */}
              <div className="relative h-44 w-44 overflow-hidden rounded-full border-[6px] border-[#faf8f0] bg-[#e5e8dd] shadow-[0_24px_60px_-20px_rgba(4,12,0,0.35)] md:h-52 md:w-52">
                <Image
                  src="/images/colophon/ashok.jpg"
                  alt="Ashok Kota"
                  fill
                  sizes="208px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Massive name — hero */}
            <h1
              className="mt-10 font-[family-name:var(--font-display)] font-light italic leading-[0.95] tracking-[-0.035em] text-[#193d00]"
              style={{ fontSize: "clamp(2.75rem,8vw,5.5rem)" }}
            >
              Ashok Kota.
            </h1>

            {/* Role */}
            <p className="mt-4 text-[13px] text-[#0d2400]/60">
              Traveller &nbsp;·&nbsp; AI-First Engineer
            </p>

            {/* Tagline */}
            <p className="mt-8 max-w-md font-[family-name:var(--font-display)] text-[1.05rem] italic leading-[1.5] text-[#0d2400]/55 md:text-[1.15rem]">
              Code, kilometres, and a passport that stays nearby.
            </p>
          </div>

          {/* ─── Four facets strip ─── */}
          <div className="relative z-10 mt-20 grid w-full max-w-5xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
            {FACETS.map(({ icon: Icon, label, body }) => (
              <div
                key={label}
                className="group relative overflow-hidden rounded-2xl border border-[#193d00]/12 bg-white/70 p-5 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#193d00]/35 hover:bg-white hover:shadow-[0_16px_40px_-16px_rgba(4,12,0,0.2)]"
              >
                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#193d00]/8 transition-colors group-hover:bg-[#193d00]/15">
                  <Icon className="h-5 w-5 text-[#193d00]" strokeWidth={1.75} />
                </div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#193d00]/70">
                  {label}
                </p>
                <p className="mt-2 text-[12.5px] leading-snug text-[#0d2400]/55">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ════════ BIO + SOCIAL ════════ */}
        <section className="relative overflow-hidden bg-[#faf8f0] px-6 py-24 text-[#0d2400] md:py-28">
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
