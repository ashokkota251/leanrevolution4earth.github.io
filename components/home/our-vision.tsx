export function OurVision() {
  return (
    <section
      className="relative overflow-hidden px-6 py-16 md:py-20"
      style={{ backgroundColor: "#f6f8f1" }}
    >
      {/* Soft warm-white lift from center */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_50%,rgba(255,255,255,0.85)_0%,transparent_75%)]"
      />
      {/* Whisper of moss at the edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(25,61,0,0.06)_100%)]"
      />
      {/* Fading top + bottom hairlines in forest */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#193d00]/25 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#193d00]/25 to-transparent"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Kicker in forest */}
        <span className="font-[family-name:var(--font-display)] text-[12px] italic tracking-[0.3em] text-[#193d00]">
          our vision
        </span>

        {/* Tiny forest hairline under the kicker */}
        <span
          aria-hidden
          className="mt-4 block h-px w-10 bg-[#193d00]/50"
        />

        {/* Vision statement */}
        <p className="mt-6 text-balance font-[family-name:var(--font-display)] text-[clamp(1.05rem,1.75vw,1.25rem)] font-normal leading-[1.65] tracking-[-0.003em] text-foreground/85 md:mt-7">
          A future where people together with nature{" "}
          <em className="italic text-[#193d00]">flourish</em>. And every generation inherits a{" "}
          <em className="italic text-[#193d00]">healthier</em>,{" "}
          <em className="italic text-[#193d00]">fairer</em>, and{" "}
          <em className="italic text-[#193d00]">greener</em> Earth.
        </p>
      </div>
    </section>
  )
}
