"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
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
  const isHome = pathname === "/"
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
      if (e.key === "Escape") setOpenMenu(null)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const overHero = isHome && !scrolled && !mobileOpen
  const headerPosition = isHome ? "fixed" : "sticky"

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
                          ? "bg-white text-[#07140f] hover:bg-white/90"
                          : "bg-primary text-primary-foreground hover:bg-green-dark"
                      }`}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <span
                        aria-hidden
                        className="relative z-10 inline-block h-1.5 w-1.5 rounded-full bg-primary transition-transform duration-300 group-hover:scale-150"
                        style={{
                          backgroundColor: overHero
                            ? "#16a34a"
                            : "rgba(255,255,255,0.85)",
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
                    aria-haspopup={hasChildren ? "menu" : undefined}
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
                      role="menu"
                      aria-label={item.name}
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
                            View all
                            <span aria-hidden>→</span>
                          </Link>
                        </div>

                        <ul className="p-2">
                          {item.children!.map((child, ci) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={() => setOpenMenu(null)}
                                className="group/item relative flex items-start gap-4 rounded-xl px-3 py-2.5 transition-colors hover:bg-[var(--color-green-light)]"
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

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t border-border/50 bg-background px-5 pb-6 md:hidden">
          <ul className="flex flex-col gap-1 pt-3">
            {navigation.map((item) => {
              const hasChildren = !!item.children?.length
              const expanded = mobileExpanded === item.name
              if (item.cta) {
                return (
                  <li key={item.name} className="mt-3">
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-full bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground transition-colors hover:bg-green-dark"
                    >
                      {item.name}
                    </Link>
                  </li>
                )
              }
              return (
                <li key={item.name}>
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex-1 rounded-lg px-3 py-2.5 text-sm text-foreground/85 transition-colors hover:bg-muted"
                    >
                      {item.name}
                    </Link>
                    {hasChildren && (
                      <button
                        onClick={() =>
                          setMobileExpanded(expanded ? null : item.name)
                        }
                        className="rounded-lg p-2 text-muted-foreground hover:bg-muted"
                        aria-label={`Toggle ${item.name} submenu`}
                        aria-expanded={expanded}
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 ${
                            expanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  {hasChildren && expanded && (
                    <ul className="ml-3 mt-1 flex flex-col gap-0.5 border-l border-border/60 pl-3">
                      {item.children!.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => {
                              setMobileOpen(false)
                              setMobileExpanded(null)
                            }}
                            className="block rounded-md px-2 py-2 text-[13px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
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
        </nav>
      )}
    </header>
  )
}
