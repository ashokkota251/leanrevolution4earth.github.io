export function OurVision() {
  return (
    <section
      className="relative overflow-hidden px-6 py-16 text-white md:py-20"
      style={{ backgroundColor: "#193d00" }}
    >
      {/* Moss bloom from top-center */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgba(122,180,60,0.32)_0%,transparent_65%)]"
      />
      {/* Deep-forest anchor at the bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_100%,rgba(4,12,0,0.55)_0%,transparent_70%)]"
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
      {/* Fading top + bottom hairlines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Kicker */}
        <span className="font-[family-name:var(--font-display)] text-[12px] italic tracking-[0.3em] text-white/70">
          our vision
        </span>

        {/* Vision statement */}
        <p className="mt-7 text-balance font-[family-name:var(--font-display)] text-[clamp(1.05rem,1.75vw,1.25rem)] font-normal leading-[1.65] tracking-[-0.003em] text-white/90 md:mt-8">
          A future where people together with nature{" "}
          <em className="italic text-white">flourish</em>. And every generation inherits a{" "}
          <em className="italic text-white">healthier</em>,{" "}
          <em className="italic text-white">fairer</em>, and{" "}
          <em className="italic text-white">greener</em> Earth.
        </p>
      </div>
    </section>
  )
}
