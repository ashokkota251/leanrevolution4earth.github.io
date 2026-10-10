import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld"

export const metadata: Metadata = {
  title: "Colophon · Website Credits",
  description:
    "Credits and acknowledgements for the Lean Revolution 4 Earth website — designed and built by Ashok Kota.",
  alternates: { canonical: "/colophon/" },
  robots: { index: true, follow: true },
}

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.9 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

const STACK = {
  "Backend":  [".NET", "Python", "Node.js", "NestJS"],
  "Frontend": ["React", "Next.js", "Angular"],
  "Cloud":    ["AWS", "Azure"],
  "AI":       ["LLMs in product workflow", "RAG systems", "Agent orchestration"],
}

const SOCIAL = [
  { label: "LinkedIn",  href: "https://www.linkedin.com/in/ashokkotaa/",     handle: "ashokkotaa" },
  { label: "Instagram", href: "https://www.instagram.com/theashokkota/",     handle: "theashokkota" },
  { label: "Email",     href: "mailto:ashok.kota251@gmail.com",              handle: "ashok.kota251@gmail.com" },
]

export default function ColophonPage() {
  return (
    <>
      <BreadcrumbJsonLd trail={[{ name: "Colophon", path: "/colophon" }]} />

      <style>{`
        @keyframes lr4e-rise { from { opacity: 0; transform: translateY(28px) } to { opacity: 1; transform: translateY(0) } }
        @keyframes lr4e-fade { from { opacity: 0 } to { opacity: 1 } }
        .lr4e-rise { animation: lr4e-rise 1.1s cubic-bezier(0.22,0.61,0.36,1) both }
        .lr4e-fade { animation: lr4e-fade 1.6s ease-out both }
        @media (prefers-reduced-motion: reduce) {
          .lr4e-rise, .lr4e-fade { animation: none !important; opacity: 1 !important; transform: none !important }
        }
      `}</style>

      {/* ════════ ACT 1 — PORTRAIT HERO ════════ */}
      <section className="relative isolate flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-[#0d2400] px-6 py-28 text-[#faf8f0]">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_30%,rgba(14,29,94,0.35)_0%,transparent_65%)]" />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_80%,rgba(122,182,72,0.1)_0%,transparent_65%)]" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.09] mix-blend-overlay"
          style={{ backgroundImage: GRAIN }}
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 lr4e-dotgrid" />

        {/* Vertical left-edge label */}
        <div className="pointer-events-none absolute left-6 top-1/2 hidden -translate-y-1/2 md:block">
          <span className="block origin-center -rotate-90 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.5em] text-[#faf8f0]/30">
            colophon · lean revolution 4 earth · 2026
          </span>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Section eyebrow */}
          <div className="mb-10 lr4e-fade" style={{ animationDelay: "100ms" }}>
            <span className="font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.4em] text-[#7ab648]">
              — colophon —
            </span>
          </div>

          {/* Portrait — graceful degradation if image missing */}
          <div className="mx-auto mb-12 lr4e-rise" style={{ animationDelay: "200ms" }}>
            <div className="relative mx-auto h-[200px] w-[200px] overflow-hidden rounded-full bg-gradient-to-br from-[#193d00] to-[#0e1d5e] shadow-[0_32px_80px_-16px_rgba(4,12,0,0.6)] md:h-[240px] md:w-[240px]">
              <Image
                src="/images/colophon/ashok.jpg"
                alt="Ashok Kota"
                fill
                sizes="240px"
                className="object-cover"
              />
              {/* Fallback — initials if image fails to load */}
              <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <span className="font-[family-name:var(--font-display)] text-[5rem] font-light italic text-[#faf8f0]/40">
                  AK
                </span>
              </div>
            </div>
            {/* Decorative dashed ring */}
            <div aria-hidden className="pointer-events-none relative mx-auto h-[200px] w-[200px] md:h-[240px] md:w-[240px]">
              <div className="absolute inset-[-12px] rounded-full border-2 border-dashed border-[#7ab648]/40" style={{ marginTop: "-200px" }} />
            </div>
          </div>

          {/* Headline */}
          <div className="lr4e-rise" style={{ animationDelay: "350ms" }}>
            <p className="text-[13px] italic tracking-[0.08em] text-[#faf8f0]/60">
              This website was designed and built by
            </p>
            <h1 className="mt-5 font-[family-name:var(--font-display)] font-light italic leading-[0.95] tracking-[-0.035em] text-[#faf8f0]"
                style={{ fontSize: "clamp(3rem,9vw,7rem)" }}>
              Ashok <em className="italic" style={{ color: "#7ab648" }}>Kota.</em>
            </h1>
            <p className="mt-6 font-[family-name:var(--font-display)] text-[1.15rem] italic text-[#faf8f0]/70 md:text-[1.3rem]">
              AI-First Engineer & Development Lead
            </p>
          </div>
        </div>
      </section>

      {/* ════════ ACT 2 — BIO + STACK ════════ */}
      <section className="relative overflow-hidden bg-[#faf8f0] px-6 py-28 text-[#0d2400] md:py-32">
        <div aria-hidden className="pointer-events-none absolute -right-32 top-16 h-[480px] w-[480px] rounded-[58%_42%_55%_45%/48%_55%_45%_52%] bg-[rgba(14,29,94,0.04)]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-28 h-[380px] w-[380px] rounded-[42%_58%_47%_53%/55%_42%_58%_45%] bg-[rgba(122,182,72,0.08)]" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-multiply"
          style={{ backgroundImage: GRAIN }}
        />

        <div className="relative mx-auto max-w-6xl">
          {/* Centered eyebrow */}
          <div className="mb-14 text-center">
            <span className="font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.32em] text-[#193d00]/55">
              a note from the builder
            </span>
          </div>

          <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
            {/* LEFT — bio prose */}
            <div className="space-y-6 text-[1rem] leading-[1.75] text-[#0d2400]/80 md:text-[1.0625rem]">
              <p className="font-[family-name:var(--font-display)] text-[1.4rem] font-light italic leading-[1.4] tracking-[-0.015em] text-[#193d00] md:text-[1.6rem]">
                I build production systems where AI sits inside the engineering
                workflow — not bolted on top.
              </p>

              <p>
                I&apos;m comfortable across the stack — .NET and Python on the
                backend, Node and NestJS where the shape calls for it, React,
                Next.js, and Angular on the frontend, AWS or Azure underneath.
              </p>

              <p>
                The stack is the easy part. The harder, more interesting work
                is making AI a real teammate in how products get designed,
                built, and shipped — faster delivery, smarter automation, and
                the kind of user experience that&apos;s only possible when AI
                is part of the build, not a feature glued on at the end.
              </p>

              <p>
                I lead engineering teams, mentor engineers, and like the
                moments when a hard problem turns into a clean solution.
              </p>

              {/* Hand-signed footer */}
              <div className="flex items-center gap-4 pt-8">
                <span className="font-[family-name:var(--font-display)] text-[1.8rem] font-light italic leading-none text-[#193d00]">
                  — Ashok
                </span>
                <span aria-hidden className="h-px w-10 bg-[#193d00]/30" />
                <span className="text-[11px] uppercase tracking-[0.24em] text-[#0d2400]/50">
                  2026
                </span>
              </div>
            </div>

            {/* RIGHT — tech stack */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border border-[#193d00]/10 bg-white/60 p-7 backdrop-blur-sm">
                <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#193d00]/55">
                  built with
                </p>

                <dl className="space-y-5">
                  {Object.entries(STACK).map(([group, items]) => (
                    <div key={group}>
                      <dt className="font-[family-name:var(--font-display)] text-[13px] italic text-[#193d00]/70">
                        {group}
                      </dt>
                      <dd className="mt-2 flex flex-wrap gap-1.5">
                        {items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-[#193d00]/15 bg-[#f4f6f1] px-3 py-1 text-[11.5px] font-medium text-[#0d2400]/80"
                          >
                            {item}
                          </span>
                        ))}
                      </dd>
                    </div>
                  ))}
                </dl>

                {/* Thin divider */}
                <div className="mt-7 border-t border-[#193d00]/10 pt-5">
                  <p className="text-[11px] italic leading-relaxed text-[#0d2400]/50">
                    This site: Next.js 16 · React 19 · Tailwind v4 · Zoho
                    Payments · deployed on Vercel.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ════════ ACT 3 — SOCIAL + CLOSING ════════ */}
      <section className="relative overflow-hidden bg-[#0d2400] px-6 py-24 text-[#faf8f0]">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(122,182,72,0.12)_0%,transparent_65%)]" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
          style={{ backgroundImage: GRAIN }}
        />

        <div className="relative mx-auto max-w-4xl text-center">
          {/* Closing line */}
          <p className="font-[family-name:var(--font-display)] font-light italic leading-[1.2] tracking-[-0.025em] text-[#faf8f0]"
             style={{ fontSize: "clamp(1.5rem,3.5vw,2.5rem)" }}>
            Built with care,<br/>
            for a <em style={{ color: "#7ab648" }}>lean revolution.</em>
          </p>

          {/* Social links */}
          <div className="mt-14">
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#faf8f0]/45">
              find me
            </p>
            <ul className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-10">
              {SOCIAL.map(({ label, href, handle }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group inline-flex items-baseline gap-2.5 transition-colors"
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7ab648] transition-opacity group-hover:opacity-70">
                      {label}
                    </span>
                    <span className="font-[family-name:var(--font-display)] text-[1rem] italic text-[#faf8f0] underline-offset-4 group-hover:underline md:text-[1.1rem]">
                      {handle}
                    </span>
                    <span aria-hidden className="text-[#7ab648] transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Thin signature divider */}
          <div className="mt-16 flex items-center justify-center gap-4 opacity-50">
            <span aria-hidden className="h-px w-10 bg-[#7ab648]/50" />
            <span className="font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.08em] text-[#faf8f0]/50">
              Thank you for reading
            </span>
            <span aria-hidden className="h-px w-10 bg-[#7ab648]/50" />
          </div>

          {/* Back link */}
          <Link
            href="/"
            className="mt-10 inline-flex items-center gap-2 text-[12px] font-medium text-[#faf8f0]/50 underline-offset-4 transition hover:text-[#faf8f0] hover:underline"
          >
            ← back to Lean Revolution 4 Earth
          </Link>
        </div>
      </section>
    </>
  )
}
