// Minimal SDG listing — editorial, no boxes

import Link from "next/link"

export const sdgConfig: Record<number, { name: string; color: string }> = {
  1: { name: "No Poverty", color: "#E5243B" },
  2: { name: "Zero Hunger", color: "#DDA63A" },
  3: { name: "Good Health and Well-being", color: "#4C9F38" },
  4: { name: "Quality Education", color: "#C5192D" },
  5: { name: "Gender Equality", color: "#FF3A21" },
  7: { name: "Affordable and Clean Energy", color: "#FCC30B" },
  8: { name: "Decent Work and Economic Growth", color: "#A21942" },
  11: { name: "Sustainable Cities and Communities", color: "#FD9D24" },
  12: { name: "Responsible Consumption and Production", color: "#BF8B2E" },
  13: { name: "Climate Action", color: "#3F7E44" },
  14: { name: "Life Below Water", color: "#0A97D9" },
  15: { name: "Life on Land", color: "#56C02B" },
  17: { name: "Partnerships for the Goals", color: "#19486A" },
}

interface SDGBadgeProps {
  sdgNumber: number
}

export function SDGBadge({ sdgNumber }: SDGBadgeProps) {
  const sdg = sdgConfig[sdgNumber]
  if (!sdg) return null

  return (
    <div className="flex items-baseline gap-4">
      <span
        aria-hidden
        className="shrink-0 font-[family-name:var(--font-display)] text-[1.4rem] font-normal tabular-nums leading-none"
        style={{ color: sdg.color }}
      >
        {String(sdgNumber).padStart(2, "0")}
      </span>
      <span className="text-[0.95rem] leading-snug text-foreground/80">
        {sdg.name}
      </span>
    </div>
  )
}

interface SDGGridProps {
  sdgs: number[]
}

export function SDGGrid({ sdgs }: SDGGridProps) {
  return (
    <div className="mt-16">
      <div className="flex items-baseline gap-3">
        <span className="font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.3em] text-[#193d00]">
          aligned with
        </span>
        <span aria-hidden className="h-px w-10 bg-[#193d00]/35" />
      </div>
      <h3 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(1.25rem,2.2vw,1.6rem)] font-normal leading-tight text-foreground">
        UN <em className="italic text-[#193d00]">Sustainable Development Goals</em>
      </h3>

      <ul className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
        {sdgs.map((sdgNum) => (
          <li key={sdgNum}>
            <SDGBadge sdgNumber={sdgNum} />
          </li>
        ))}
      </ul>

      <p className="mt-10 text-[12.5px] leading-relaxed text-foreground/55">
        Learn more about the{" "}
        <Link
          href="/sdgs"
          className="text-[#193d00] underline-offset-4 transition-colors hover:text-[#0d2400] hover:underline"
        >
          UN Sustainable Development Goals
        </Link>
        .
      </p>
    </div>
  )
}
