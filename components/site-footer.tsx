import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin } from "lucide-react"
import logo from "@/public/images/lr4e-logo.png"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Pillars", href: "/pillars" },
  { name: "Initiatives", href: "/initiatives" },
  { name: "Get Involved", href: "/get-involved" },
]

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{ backgroundColor: "#050d0a" }}
    >
      {/* Subtle green glow from the top edge */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_45%_at_50%_0%,rgba(22,163,74,0.12)_0%,transparent_65%)]"
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
            <Image
              src={logo}
              alt="LR4E"
              width={56}
              height={56}
              className="h-12 w-12"
            />
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
            <h4 className="font-[family-name:var(--font-display)] text-[12px] italic tracking-[0.28em] text-white/75">
              navigate
            </h4>
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
            <h4 className="font-[family-name:var(--font-display)] text-[12px] italic tracking-[0.28em] text-white/75">
              reach us
            </h4>
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
