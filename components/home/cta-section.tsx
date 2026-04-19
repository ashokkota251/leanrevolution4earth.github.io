import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section
      className="relative overflow-hidden px-6 py-28 text-white md:py-32"
      style={{ backgroundColor: "#0d2400" }}
    >
      {/* Atmospheric bloom — navy sky glow over forest floor */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_10%,rgba(14,29,94,0.45)_0%,transparent_65%)]"
      />
      {/* Moss glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_90%,rgba(42,100,20,0.22)_0%,transparent_65%)]"
      />
      {/* Deep forest vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(180deg,transparent_0%,rgba(4,12,0,0.65)_100%)]"
      />

      {/* Film grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.9 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Backdrop watermark word */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-[family-name:var(--font-display)] text-[14rem] font-light italic leading-none tracking-[-0.04em] text-white/[0.045] md:text-[22rem]"
      >
        act
      </span>

      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* Kicker */}
        <span className="font-[family-name:var(--font-display)] text-[12px] italic tracking-[0.3em] text-white/90">
          join us
        </span>

        {/* Headline */}
        <h2 className="mt-8 text-balance font-[family-name:var(--font-display)] text-[clamp(2.25rem,5.5vw,4rem)] font-light leading-[1.02] tracking-[-0.025em] text-white">
          Be Part of the <em className="font-normal italic">Revolution</em>
        </h2>

        <p className="mx-auto mt-6 max-w-lg text-[1rem] leading-relaxed text-white/85 md:text-[1.0625rem]">
          Every action counts. Join us in building a just and sustainable future for all.
        </p>

        {/* CTAs */}
        <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
          <Link
            href="/get-involved"
            className="group inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-3.5 text-[13px] font-medium text-[#193d00] transition-all duration-300 hover:bg-[#0e1d5e] hover:text-white"
          >
            <span>Donate Now</span>
            <span
              aria-hidden
              className="inline-flex h-5 w-5 items-center justify-center overflow-hidden"
            >
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </span>
          </Link>

          <Link
            href="/get-involved#contact"
            className="group relative inline-flex items-center text-[14px] font-medium text-white/90 transition-colors hover:text-white"
          >
            <span className="relative">
              Contact Us
              <span
                aria-hidden
                className="absolute -bottom-0.5 left-0 block h-px w-full origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100"
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
