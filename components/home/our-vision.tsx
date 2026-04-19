export function OurVision() {
  return (
    <section
      className="relative overflow-hidden px-6 py-14 md:py-16"
      style={{ backgroundColor: "var(--green-light)" }}
    >
      {/* Soft white lift from center */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(255,255,255,0.65)_0%,transparent_75%)]"
      />
      {/* Fading top + bottom hairlines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Kicker */}
        <span className="font-[family-name:var(--font-display)] text-[12px] italic tracking-[0.3em] text-foreground/75">
          our vision
        </span>

        {/* Vision statement */}
        <p className="mt-6 text-balance font-[family-name:var(--font-display)] text-[clamp(1rem,1.7vw,1.2rem)] font-normal leading-[1.6] tracking-[-0.003em] text-foreground/90 md:mt-7">
          A future where people together with nature{" "}
          <em className="italic">flourish</em>. And every generation inherits a{" "}
          <em className="italic">healthier</em>,{" "}
          <em className="italic">fairer</em>, and{" "}
          <em className="italic">greener</em> Earth.
        </p>
      </div>
    </section>
  )
}
