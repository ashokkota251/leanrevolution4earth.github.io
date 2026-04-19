"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react"
import logo from "@/public/images/lr4e-logo.png"

type Child = {
  name: string
  href: string
  description: string
}
type NavItem = {
  name: string
  href: string
  children?: Child[]
  cta?: boolean
}

const navigation: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Pillars",
    href: "/pillars",
    children: [
      {
        name: "Green Transitions & Resilience",
        description: "Clean energy. Resilient futures.",
        href: "/pillars#green-transitions",
      },
      {
        name: "Nature, Communities & Livelihoods",
        description: "Ecosystems and green livelihoods.",
        href: "/pillars#nature-communities",
      },
      {
        name: "Climate Consciousness",
        description: "Inspiring minds and leaders.",
        href: "/pillars#climate-consciousness",
      },
      {
        name: "Climate Advocacy",
        description: "Local voices, global justice.",
        href: "/pillars#climate-advocacy",
      },
    ],
  },
  {
    name: "Initiatives",
    href: "/initiatives",
    children: [
      {
        name: "Project Navya Urja",
        description: "Renewable energy for all.",
        href: "/initiatives#navya-urja",
      },
      {
        name: "Project Saahas Taru",
        description: "Community-led afforestation.",
        href: "/initiatives#saahas-taru",
      },
      {
        name: "The Bank of Waste",
        description: "Campuses as zero-plastic zones.",
        href: "/initiatives#bank-of-waste",
      },
    ],
  },
  { name: "Get Involved", href: "/get-involved", cta: true },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const pathname = usePathname()
  const normalizedPath = pathname.replace(/\/+$/, "") || "/"
  const overHeroPage =
    normalizedPath === "/" ||
    normalizedPath === "/about" ||
    normalizedPath === "/pillars" ||
    normalizedPath === "/initiatives" ||
    normalizedPath === "/get-involved" ||
    normalizedPath === "/sdgs"
  const closeTimer = useRef<number | null>(null)

  useEffect(() => {
    let current = window.scrollY > 80
    setScrolled(current)
    const onScroll = () => {
      const next = window.scrollY > 80
      if (next !== current) {
        current = next
        setScrolled(next)
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null)
        setMobileOpen(false)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    if (!mobileOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [mobileOpen])

  // Close drawer on route change
  useEffect(() => {
    setMobileOpen(false)
    setMobileExpanded(null)
  }, [pathname])

  const overHero = overHeroPage && !scrolled && !mobileOpen
  const headerPosition = overHeroPage ? "fixed" : "sticky"

  const hoverOpen = (name: string) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
    setOpenMenu(name)
  }
  const hoverClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(
      () => setOpenMenu(null),
      140
    ) as unknown as number
  }

  return (
    <header
      className={`${headerPosition} top-0 inset-x-0 z-50 transition-[background-color,border-color] duration-300 ease-out will-change-[background-color] ${
        overHero
          ? "bg-transparent border-b border-transparent"
          : "bg-background/90 backdrop-blur-md border-b border-border/60"
      }`}
    >
      {overHero && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/55 via-black/25 to-transparent"
        />
      )}

      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3 md:px-10">
        {/* Logo */}
        <Link href="/" className="relative flex items-center" aria-label="Home">
          <Image
            src={logo}
            alt="LR4E"
            width={96}
            height={96}
            priority
            className={`transition-all duration-500 ease-out ${
              overHero
                ? "h-14 w-14 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
                : "h-9 w-9"
            }`}
          />
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center md:flex"
          onMouseLeave={hoverClose}
        >
          <ul className="flex items-center gap-1">
            {navigation.map((item) => {
              const hasChildren = !!item.children?.length
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href))
              const isOpen = openMenu === item.name

              if (item.cta) {
                return (
                  <li key={item.name} className="ml-2">
                    <Link
                      href={item.href}
                      className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-[13px] font-medium tracking-wide transition-all duration-300 ${
                        overHero
                          ? "bg-white text-[#193d00] hover:bg-white/90"
                          : "bg-primary text-primary-foreground hover:bg-[#0d2400]"
                      }`}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <span
                        aria-hidden
                        className="relative z-10 inline-block h-1.5 w-1.5 rounded-full bg-primary transition-transform duration-300 group-hover:scale-150"
                        style={{
                          backgroundColor: overHero
                            ? "#0e1d5e"
                            : "rgba(255,255,255,0.9)",
                        }}
                      />
                    </Link>
                  </li>
                )
              }

              return (
                <li
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => hasChildren && hoverOpen(item.name)}
                  onFocus={() => hasChildren && hoverOpen(item.name)}
                >
                  <Link
                    href={item.href}
                    className={`group relative flex items-center gap-1.5 px-3 py-2 text-[13px] font-medium tracking-[0.01em] transition-colors ${
                      overHero
                        ? "text-white/85 hover:text-white"
                        : "text-foreground/80 hover:text-foreground"
                    }`}
                    aria-expanded={hasChildren ? isOpen : undefined}
                    aria-haspopup={hasChildren ? "true" : undefined}
                  >
                    <span className="relative">
                      {item.name}
                      <span
                        aria-hidden
                        className={`absolute -bottom-1 left-0 block h-px origin-left bg-current transition-transform duration-300 ease-out ${
                          isOpen || isActive
                            ? "w-full scale-x-100"
                            : "w-full scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </span>
                    {hasChildren && (
                      <ChevronDown
                        className={`h-3 w-3 opacity-70 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        strokeWidth={2.25}
                      />
                    )}
                  </Link>

                  {/* Dropdown panel */}
                  {hasChildren && (
                    <div
                      aria-label={`${item.name} submenu`}
                      className={`absolute left-1/2 top-full -translate-x-1/2 pt-3 transition-[opacity,transform] duration-300 ease-out ${
                        isOpen
                          ? "pointer-events-auto translate-y-0 opacity-100"
                          : "pointer-events-none -translate-y-2 opacity-0"
                      }`}
                    >
                      <div className="relative w-[380px] overflow-hidden rounded-2xl border border-black/5 bg-white/95 shadow-[0_30px_60px_-20px_rgba(6,24,18,0.35),0_10px_20px_-10px_rgba(6,24,18,0.2)] backdrop-blur-xl">
                        {/* header strip inside panel */}
                        <div className="flex items-center justify-between border-b border-black/5 px-5 pb-3 pt-4">
                          <span className="font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.28em] text-muted-foreground">
                            {item.name.toLowerCase()}
                          </span>
                          <Link
                            href={item.href}
                            onClick={() => setOpenMenu(null)}
                            className="flex items-center gap-1 text-[10px] font-medium uppercase tracking-[0.2em] text-primary transition-opacity hover:opacity-70"
                          >
                            View all {item.name.toLowerCase()}
                            <span aria-hidden>→</span>
                          </Link>
                        </div>

                        <ul className="p-2">
                          {item.children!.map((child, ci) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={() => setOpenMenu(null)}
                                className="group/item relative flex items-start gap-4 rounded-xl px-3 py-2.5 transition-colors hover:bg-[#f6f8f1]"
                                style={{
                                  transitionDelay: isOpen
                                    ? `${ci * 40}ms`
                                    : "0ms",
                                }}
                              >
                                <span
                                  aria-hidden
                                  className="mt-0.5 font-[family-name:var(--font-display)] text-[11px] italic tabular-nums text-muted-foreground/70 transition-colors duration-300 group-hover/item:text-primary"
                                >
                                  {String(ci + 1).padStart(2, "0")}
                                </span>
                                <span className="flex flex-1 flex-col gap-0.5">
                                  <span className="text-[13px] font-medium leading-tight text-foreground">
                                    {child.name}
                                  </span>
                                  <span className="text-[11.5px] leading-snug text-muted-foreground">
                                    {child.description}
                                  </span>
                                </span>
                                <span
                                  aria-hidden
                                  className="ml-2 self-center text-muted-foreground opacity-0 transition-all duration-200 group-hover/item:translate-x-0.5 group-hover/item:opacity-100"
                                >
                                  →
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`inline-flex items-center justify-center rounded-lg p-2 transition-colors md:hidden ${
            overHero
              ? "text-white hover:bg-white/10"
              : "text-foreground hover:bg-muted"
          }`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer — full-screen editorial */}
      {mobileOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-[60] flex h-[100dvh] flex-col bg-[#0d2400] text-white md:hidden lr4e-drawer-in"
        >
          {/* Atmosphere: navy sky glow at top */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(14,29,94,0.42)_0%,transparent_65%)]"
          />
          {/* Moss glow at bottom */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(42,100,20,0.2)_0%,transparent_65%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.1] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.9 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />

          {/* Top bar — pinned */}
          <div className="relative z-10 flex shrink-0 items-center justify-between px-5 py-3">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center"
              aria-label="Home"
            >
              <Image
                src={logo}
                alt="LR4E"
                width={96}
                height={96}
                className="h-11 w-11 drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]"
              />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/85 transition-all duration-300 hover:rotate-90 hover:border-white hover:bg-white/10 hover:text-white"
            >
              <X className="h-4 w-4" strokeWidth={1.75} />
            </button>
          </div>

          {/* Scrollable middle — nav + CTA */}
          <div className="relative z-10 flex-1 overflow-y-auto overscroll-contain">
            <div className="flex min-h-full flex-col px-5 pb-6 pt-2">
              {/* Nav list */}
              <ul className="flex flex-col">
                {navigation
                  .filter((item) => !item.cta)
                  .map((item, i) => {
                    const hasChildren = !!item.children?.length
                    const expanded = mobileExpanded === item.name
                    const delay = 80 + i * 60
                    return (
                      <li
                        key={item.name}
                        className="border-b border-white/10 lr4e-rise"
                        style={{ animationDelay: `${delay}ms` }}
                      >
                        <div className="flex items-stretch">
                          <Link
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="group flex flex-1 items-center py-3.5 pr-2"
                          >
                            <span className="font-[family-name:var(--font-display)] text-[1.35rem] font-light leading-none tracking-[-0.01em] text-white transition-colors group-hover:text-white sm:text-[1.5rem]">
                              {item.name}
                            </span>
                            <ArrowUpRight
                              className="ml-auto h-4 w-4 text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                              strokeWidth={1.5}
                            />
                          </Link>
                          {hasChildren && (
                            <button
                              type="button"
                              onClick={() =>
                                setMobileExpanded(expanded ? null : item.name)
                              }
                              aria-label={`Toggle ${item.name} submenu`}
                              aria-expanded={expanded}
                              className="inline-flex h-10 w-10 shrink-0 items-center justify-center self-center rounded-full text-white/60 transition-colors hover:text-white"
                            >
                              <ChevronDown
                                className={`h-4 w-4 transition-transform duration-300 ${
                                  expanded ? "rotate-180" : ""
                                }`}
                                strokeWidth={1.5}
                              />
                            </button>
                          )}
                        </div>

                        {hasChildren && expanded && (
                          <ul className="pb-3">
                            {item.children!.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  onClick={() => {
                                    setMobileOpen(false)
                                    setMobileExpanded(null)
                                  }}
                                  className="block py-1.5 text-[14px] leading-snug text-white/65 transition-colors hover:text-white"
                                >
                                  {child.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
              </ul>

              {/* CTA */}
              <div
                className="mt-7 lr4e-rise"
                style={{
                  animationDelay: `${80 + (navigation.length - 1) * 60 + 60}ms`,
                }}
              >
                <Link
                  href="/get-involved"
                  onClick={() => setMobileOpen(false)}
                  className="group flex items-center justify-between gap-3 rounded-full bg-white px-6 py-3.5 text-[14px] font-medium text-[#193d00] transition-all duration-300 hover:bg-[#0e1d5e] hover:text-white"
                >
                  <span>Get Involved</span>
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={2}
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Footer — pinned bottom */}
          <div
            className="relative z-10 shrink-0 border-t border-white/10 px-5 py-5 lr4e-fade"
            style={{ animationDelay: "600ms" }}
          >
            <p className="font-[family-name:var(--font-display)] text-[0.95rem] italic leading-snug text-white/85">
              A Just, Lean, and Living Earth for All.
            </p>
            <a
              href="mailto:info@leanrevolution4earth.com"
              className="mt-1.5 inline-block text-[13px] text-white/60 transition-colors hover:text-white"
            >
              info@leanrevolution4earth.com
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
