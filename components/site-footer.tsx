import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin } from "lucide-react"
import logo from "@/public/images/lr4e-logo.png"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Our Story", href: "/our-story" },
  { name: "Our Pillars", href: "/our-pillars" },
  { name: "Our Work", href: "/our-work" },
  { name: "Get Involved", href: "/get-involved" },
]

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{ backgroundColor: "#050d0a" }}
    >
      {/* Moss bloom from the top edge — continues the CTA's ground glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(42,100,20,0.18)_0%,transparent_65%)]"
      />
      {/* Whisper of navy sky, tucked into a corner */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_55%_at_12%_5%,rgba(14,29,94,0.22)_0%,transparent_70%)]"
      />
      {/* Film grain for paper-like texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.9 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      {/* Fading top hairline */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
        {/* Top row */}
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr] md:gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <Image
                src={logo}
                alt="LR4E"
                width={56}
                height={56}
                className="h-12 w-12 shrink-0"
              />
              <span className="font-[family-name:var(--font-display)] text-[1.125rem] font-normal leading-tight tracking-[-0.01em] text-white md:text-[1.2rem]">
                Lean Revolution <em className="italic">4 Earth</em>
              </span>
            </div>
            <p className="font-[family-name:var(--font-display)] text-[1.15rem] italic leading-[1.4] text-white/90">
              A Just, Lean, and Living Earth for All.
            </p>
            <p className="max-w-sm text-[12px] leading-[1.6] text-white/55">
              Regd. at G-1, BLDG 1, C Wing, Kamala Nagar, Chincholi Bunder Rd,
              Malad (W), Mumbai — 400 064
            </p>
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">
              CIN · U94990MH2025NPL453396
            </p>
          </div>

          {/* Navigate */}
          <div className="flex flex-col gap-5">
            <span className="font-[family-name:var(--font-display)] text-[12px] italic tracking-[0.28em] text-white/75">
              navigate
            </span>
            <nav className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group inline-flex w-fit items-center gap-2 text-[14px] text-white/75 transition-colors hover:text-white"
                >
                  <span
                    aria-hidden
                    className="inline-block h-px w-0 bg-white transition-all duration-300 group-hover:w-5"
                  />
                  <span>{link.name}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Reach us */}
          <div className="flex flex-col gap-5">
            <span className="font-[family-name:var(--font-display)] text-[12px] italic tracking-[0.28em] text-white/75">
              reach us
            </span>
            <div className="flex flex-col gap-4 text-[14px] text-white/75">
              <a
                href="mailto:info@leanrevolution4earth.com"
                className="group inline-flex items-start gap-3 transition-colors hover:text-white"
              >
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-white/45 transition-colors group-hover:text-white"
                  strokeWidth={1.5}
                />
                <span className="break-all">info@leanrevolution4earth.com</span>
              </a>
              <div className="inline-flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-white/45"
                  strokeWidth={1.5}
                />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-[11px] text-white/45 md:flex-row md:text-[12px]">
          <span>
            © {year} Lean Revolution 4 Earth. All rights reserved.
          </span>
          <span className="font-[family-name:var(--font-display)] italic tracking-[0.24em] text-white/40">
            made with care for earth
          </span>
        </div>
      </div>
    </footer>
  )
}
