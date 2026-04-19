export function MissionStrip() {
  return (
    <section
      className="relative overflow-hidden px-6 py-14 md:py-16"
      style={{ backgroundColor: "var(--blue-light)" }}
    >
      {/* Soft radial lift from top-center */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,255,255,0.75)_0%,transparent_70%)]"
      />
      {/* Hairline top border fading in from sides */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Kicker */}
        <div className="flex items-center gap-3">
          <span className="inline-block h-px w-8 bg-foreground/25" />
          <span className="font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.34em] text-foreground/75">
            our mission
          </span>
          <span className="inline-block h-px w-8 bg-foreground/25" />
        </div>

        {/* Manifesto text */}
        <p className="mt-6 text-balance font-[family-name:var(--font-display)] text-[clamp(0.95rem,1.55vw,1.125rem)] font-normal leading-[1.6] tracking-[-0.003em] text-foreground/85 md:mt-7">
          By combining{" "}
          <em className="whitespace-nowrap italic">Lean philosophy</em> with{" "}
          <em className="whitespace-nowrap italic">environmental stewardship</em>
          , we act on climate solutions that are{" "}
          <em className="italic">community-led</em>,{" "}
          <em className="italic">circular</em>,{" "}
          <em className="italic">inclusive</em>, and built for{" "}
          <em className="whitespace-nowrap italic">long-term climate resilience</em>
          .
        </p>
      </div>
    </section>
  )
}
