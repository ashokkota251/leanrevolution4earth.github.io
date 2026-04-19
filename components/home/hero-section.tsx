"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import hero1 from "@/public/images/hero/hero-1.jpg"
import hero2 from "@/public/images/hero/hero-2.jpg"
import hero3 from "@/public/images/hero/hero-3.jpg"
import hero4 from "@/public/images/hero/hero-4.jpg"
import hero5 from "@/public/images/hero/hero-5.jpg"

const slides = [hero1, hero2, hero3, hero4, hero5]

const AUTOPLAY_MS = 6500

export function HeroSection() {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [progressKey, setProgressKey] = useState(0)
  const timerRef = useRef<number | null>(null)

  const go = useCallback((i: number) => {
    setIndex(((i % slides.length) + slides.length) % slides.length)
    setProgressKey((k) => k + 1)
  }, [])

  const next = useCallback(() => go(index + 1), [go, index])
  const prev = useCallback(() => go(index - 1), [go, index])

  useEffect(() => {
    if (isPaused) return
    timerRef.current = window.setTimeout(() => {
      setIndex((i) => (i + 1) % slides.length)
      setProgressKey((k) => k + 1)
    }, AUTOPLAY_MS)
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current)
    }
  }, [index, isPaused])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [next, prev])

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Lean Revolution 4 Earth hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative isolate flex min-h-screen min-h-[100dvh] items-center overflow-hidden bg-[#0d2400] text-white"
    >
      {/* ── Slides ─────────────────────────────────────────── */}
      <div className="absolute inset-0">
        {slides.map((src, i) => {
          const active = i === index
          return (
            <div
              key={i}
              aria-hidden={!active}
              className="absolute inset-0 transition-opacity duration-[1800ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{ opacity: active ? 1 : 0 }}
            >
              <div
                className="absolute inset-0 lr4e-kenburns"
                style={{ animationDelay: `${-i * 6}s` }}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
                  placeholder="blur"
                />
              </div>
            </div>
          )
        })}
      </div>

      {/* ── Atmosphere: legibility gradient (softer at bottom) ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(14,29,94,0.55)_0%,rgba(14,29,94,0.18)_30%,rgba(13,36,0,0.42)_70%,rgba(7,18,0,0.78)_100%)]"
      />
      {/* ── Radial vignette: navy sky over deep forest ──── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_15%,rgba(14,29,94,0.35)_0%,transparent_55%),radial-gradient(ellipse_at_center,transparent_0%,rgba(7,18,0,0.45)_75%,rgba(4,12,0,0.78)_100%)]"
      />
      {/* ── Film grain overlay ───────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.9 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* ── Main content: only the wordmark ──────────────── */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-5 text-center sm:px-6">
        <h1
          className="text-balance font-[family-name:var(--font-display)] text-[clamp(2.1rem,6.5vw,4.75rem)] font-normal leading-[1.05] tracking-[-0.015em] text-white sm:whitespace-nowrap lr4e-rise"
          style={{
            animationDelay: "200ms",
            textShadow:
              "0 1px 2px rgba(0,0,0,0.35), 0 8px 30px rgba(0,0,0,0.35)",
          }}
        >
          <span aria-hidden="true">Lean Revolution 4 Earth</span>
          <span className="sr-only">
            Lean Revolution 4 Earth — climate justice through lean action, afforestation, and community-led clean energy.
          </span>
        </h1>
        {/* decorative hairline under wordmark */}
        <span
          aria-hidden
          className="mt-8 block h-px w-20 origin-left scale-x-0 bg-white/60 lr4e-hairline"
        />

        {/* Mobile-only scroll cue (hidden on md+ because desktop has the bottom bar) */}
        <div
          aria-hidden
          className="mt-14 flex flex-col items-center gap-2 md:hidden lr4e-fade"
          style={{ animationDelay: "900ms" }}
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/60">
            scroll
          </span>
          <span className="relative block h-9 w-px overflow-hidden bg-white/15">
            <span
              className="absolute inset-x-0 top-0 h-3 animate-[lr4e-scrollcue_2.4s_ease-in-out_infinite] bg-white/80"
              style={{ animationName: "lr4e-scrollcue" }}
            />
          </span>
        </div>
      </div>

      <style>{`
        @keyframes lr4e-scrollcue {
          0% { transform: translateY(-100%); }
          60% { transform: translateY(300%); }
          100% { transform: translateY(300%); }
        }
      `}</style>

      {/* ── Bottom bar: controls + indicators ────────────── */}
      <div className="absolute bottom-8 left-6 right-6 z-10 flex items-center justify-between gap-6 md:bottom-10 md:left-12 md:right-12">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white/85 backdrop-blur-sm transition-all duration-300 hover:-translate-x-0.5 hover:border-white hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white/85 backdrop-blur-sm transition-all duration-300 hover:translate-x-0.5 hover:border-white hover:bg-white/10 hover:text-white"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center gap-3">
          {slides.map((_, i) => {
            const active = i === index
            return (
              <button
                key={i}
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={active}
                className="group relative flex h-6 items-center"
              >
                <span
                  className={`relative block h-[2px] overflow-hidden transition-[width,background-color] duration-500 ${
                    active ? "w-16 bg-white/25" : "w-7 bg-white/35 group-hover:bg-white/60"
                  }`}
                >
                  {active && !isPaused && (
                    <span
                      key={`fill-${progressKey}`}
                      className="absolute inset-y-0 left-0 w-full bg-primary lr4e-fill"
                      style={{ ["--lr4e-autoplay" as string]: `${AUTOPLAY_MS}ms` }}
                    />
                  )}
                  {active && isPaused && (
                    <span className="absolute inset-y-0 left-0 w-full bg-primary" />
                  )}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
