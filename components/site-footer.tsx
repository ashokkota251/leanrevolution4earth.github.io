import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin } from "lucide-react"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Pillars", href: "/pillars" },
  { name: "Initiatives", href: "/initiatives" },
  { name: "Get Involved", href: "/get-involved" },
]

export function SiteFooter() {
  return (
    <footer className="bg-[#1f2937] text-white">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Image 
              src="/images/lr4e-logo.png" 
              alt="LR4E Logo" 
              width={36} 
              height={36}
              className="h-9 w-9"
            />
            <p className="text-sm leading-relaxed text-white/70">
              A Just, Lean, and Living Earth for All.
            </p>
            <p className="text-xs leading-relaxed text-white/50">
              Regd. at G-1, BLDG 1, C Wing, Kamala Nagar, Chincholi Bunder Rd, Malad (W), Mumbai - 400 064
            </p>
            <p className="text-xs text-white/50">
              CIN: U94990MH2025NPL453396
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-medium uppercase tracking-widest text-white/60">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-medium uppercase tracking-widest text-white/60">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-white/60">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/50" />
                <span>Mumbai, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-white/50" />
                <span>info@leanrevolution4earth.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          &copy; {new Date().getFullYear()} Lean Revolution 4 Earth. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
