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
        <article className="mx-auto max-w-xl text-center">

          {/* Portrait */}
          <div className="mx-auto h-40 w-40 overflow-hidden rounded-full border-[6px] border-[#faf8f0] bg-[#e5e8dd] shadow-[0_16px_40px_-16px_rgba(4,12,0,0.25)]">
            <Image
              src="/images/colophon/ashok.jpg"
              alt="Ashok Kota"
              width={160}
              height={160}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          {/* Kicker */}
          <p className="mt-10 font-[family-name:var(--font-display)] text-[10px] font-semibold uppercase tracking-[0.32em] text-[#193d00]/55">
            Designed &amp; built by
          </p>

          {/* Name */}
          <h1 className="mt-4 font-[family-name:var(--font-display)] font-light italic leading-[0.95] tracking-[-0.03em] text-[#193d00]"
              style={{ fontSize: "clamp(2.5rem,6vw,4rem)" }}>
            Ashok Kota.
          </h1>

          {/* Role */}
          <p className="mt-4 text-[13px] text-[#0d2400]/60">
            Traveller &nbsp;·&nbsp; AI-First Engineer
          </p>

          {/* Bio */}
          <div className="mt-12 space-y-5 text-left text-[15px] leading-[1.8] text-[#0d2400]/75">
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
              The harder, more interesting work is making AI a real teammate in
              how products get designed, built, and shipped.
            </p>
            <p>
              Off-hours, I&apos;m usually running, riding, or somewhere new.
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
                  className="text-[12px] font-medium uppercase tracking-[0.22em] text-[#193d00]/70 underline-offset-4 transition hover:text-[#193d00] hover:underline"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Back link */}
          <div className="mt-14">
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
