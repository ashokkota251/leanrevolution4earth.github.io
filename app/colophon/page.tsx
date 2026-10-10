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
  { label: "Email",     href: "mailto:ashok.kota251@gmail.com" },
]

export default function ColophonPage() {
  return (
    <>
      <BreadcrumbJsonLd trail={[{ name: "Colophon", path: "/colophon" }]} />

      <main className="min-h-screen bg-[#faf8f0] px-6 py-28 text-[#0d2400] md:py-36">
        <article className="mx-auto max-w-xl">

          {/* Eyebrow */}
          <p className="text-center font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.32em] text-[#193d00]/55">
            colophon
          </p>

          {/* Portrait */}
          <div className="mx-auto mt-10 h-32 w-32 overflow-hidden rounded-full bg-gradient-to-br from-[#193d00] to-[#0e1d5e] shadow-[0_16px_40px_-16px_rgba(4,12,0,0.3)]">
            <Image
              src="/images/colophon/ashok.jpg"
              alt="Ashok Kota"
              width={128}
              height={128}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Headline */}
          <h1 className="mt-10 text-center font-[family-name:var(--font-display)] font-light leading-[1.05] tracking-[-0.025em] text-[#0d2400]"
              style={{ fontSize: "clamp(2rem,5vw,3rem)" }}>
            Website by{" "}
            <em className="italic text-[#193d00]">Ashok Kota.</em>
          </h1>

          <p className="mt-4 text-center text-[13.5px] italic text-[#0d2400]/55">
            AI-First Engineer & Development Lead
          </p>

          {/* Bio */}
          <div className="mt-14 space-y-5 text-[15px] leading-[1.75] text-[#0d2400]/75">
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
          </div>

          {/* Social links */}
          <ul className="mt-14 flex items-center justify-center gap-8 border-t border-[#193d00]/10 pt-10">
            {SOCIAL.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-[12px] font-medium uppercase tracking-[0.22em] text-[#193d00]/70 underline-offset-4 transition hover:text-[#193d00] hover:underline"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Back link */}
          <div className="mt-16 text-center">
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
