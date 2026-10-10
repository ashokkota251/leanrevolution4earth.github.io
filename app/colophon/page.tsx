import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
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

export default function ColophonPage() {
  return (
    <>
      <BreadcrumbJsonLd trail={[{ name: "Colophon", path: "/colophon" }]} />

      <main className="min-h-screen bg-[#faf8f0] px-6 py-28 text-[#0d2400] md:py-32">
        <article className="mx-auto max-w-5xl">

          {/* Eyebrow */}
          <p className="text-center font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.32em] text-[#193d00]/55">
            colophon
          </p>

          {/* Editorial two-column: smaller portrait left, text right */}
          <div className="mt-14 grid gap-10 md:grid-cols-[280px_1fr] md:gap-14 lg:gap-20">

            {/* Portrait — compact 3:4, uncropped, soft shadow */}
            <div className="relative mx-auto w-full max-w-[260px] md:mx-0 md:max-w-none">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-[#e5e8dd] shadow-[0_20px_48px_-18px_rgba(4,12,0,0.3)]">
                <Image
                  src="/images/colophon/ashok.jpg"
                  alt="Ashok Kota"
                  fill
                  sizes="280px"
                  className="object-cover"
                  priority
                />
              </div>
              {/* Thin caption below image — editorial magazine style */}
              <p className="mt-3 text-right font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.08em] text-[#0d2400]/45">
                Ashok Kota · 2026
              </p>
            </div>

            {/* Right column: text */}
            <div className="flex flex-col justify-center">
              {/* Small kicker — magazine byline style */}
              <p className="font-[family-name:var(--font-display)] text-[10px] font-semibold uppercase tracking-[0.32em] text-[#193d00]/55">
                Designed &amp; built by
              </p>

              {/* MASSIVE name — the hero element */}
              <h1 className="mt-4 font-[family-name:var(--font-display)] font-light italic leading-[0.95] tracking-[-0.035em] text-[#193d00]"
                  style={{ fontSize: "clamp(2.75rem,7vw,4.5rem)" }}>
                Ashok Kota.
              </h1>

              {/* Role — clean subtitle */}
              <p className="mt-5 text-[13px] text-[#0d2400]/60">
                Traveller &nbsp;·&nbsp; AI-First Engineer &nbsp;·&nbsp; Development Lead
              </p>

              {/* Thin divider */}
              <div aria-hidden className="my-10 h-px w-16 bg-[#193d00]/20" />

              {/* Bio */}
              <div className="space-y-5 text-[15px] leading-[1.75] text-[#0d2400]/75">
                <p>
                  I build production systems where AI sits inside the
                  engineering workflow — not bolted on top.
                </p>
                <p>
                  Comfortable across the stack: .NET, Python, Node, NestJS on
                  the backend; React, Next.js, Angular on the frontend; AWS or
                  Azure underneath. The stack is the easy part.
                </p>
                <p>
                  The harder, more interesting work is making AI a real
                  teammate in how products get designed, built, and shipped.
                </p>
                <p>
                  When I&apos;m not shipping code, I&apos;m usually somewhere
                  new. Travel is how I keep my sense of the world honest — and
                  the inputs to my work varied.
                </p>
              </div>

              {/* Social links */}
              <ul className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[#193d00]/10 pt-8">
                {SOCIAL.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.22em] text-[#193d00]/70 underline-offset-4 transition hover:text-[#193d00] hover:underline"
                    >
                      {label}
                      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Back link */}
          <div className="mt-20 text-center">
            <Link
              href="/"
              className="text-[12px] italic text-[#0d2400]/40 underline-offset-4 transition hover:text-[#0d2400]/80 hover:underline"
            >
              ← back to Lean Revolution 4 Earth
            </Link>
          </div>
        </article>
      </main>
    </>
  )
}
