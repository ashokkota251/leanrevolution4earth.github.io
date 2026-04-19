// SDG Badge Component with official UN colors and icons
// Based on UN Sustainable Development Goals visual identity

const sdgConfig: Record<number, { name: string; color: string; icon: React.ReactNode }> = {
  1: {
    name: "No Poverty",
    color: "#E5243B",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
  },
  4: {
    name: "Quality Education",
    color: "#C5192D",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" />
      </svg>
    ),
  },
  7: {
    name: "Affordable and Clean Energy",
    color: "#FCC30B",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" />
      </svg>
    ),
  },
  8: {
    name: "Decent Work and Economic Growth",
    color: "#A21942",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" />
      </svg>
    ),
  },
  11: {
    name: "Sustainable Cities",
    color: "#FD9D24",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z" />
      </svg>
    ),
  },
  12: {
    name: "Responsible Consumption",
    color: "#BF8B2E",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
  },
  13: {
    name: "Climate Action",
    color: "#3F7E44",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
  },
  15: {
    name: "Life on Land",
    color: "#56C02B",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M17.5 12c1.93 0 3.5-1.57 3.5-3.5 0-1.58-1.06-2.9-2.5-3.36V3h-2v2.14c-1.44.46-2.5 1.78-2.5 3.36 0 1.93 1.57 3.5 3.5 3.5zm0-5c.83 0 1.5.67 1.5 1.5S18.33 10 17.5 10 16 9.33 16 8.5 16.67 7 17.5 7zM3 21h18v-2H3v2zM6.5 12c1.93 0 3.5-1.57 3.5-3.5 0-1.58-1.06-2.9-2.5-3.36V3h-2v2.14C4.06 5.6 3 6.92 3 8.5 3 10.43 4.57 12 6.5 12zm0-5C7.33 7 8 7.67 8 8.5S7.33 10 6.5 10 5 9.33 5 8.5 5.67 7 6.5 7zM12 14c-1.93 0-3.5 1.57-3.5 3.5S10.07 21 12 21s3.5-1.57 3.5-3.5S13.93 14 12 14zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 16 12 16s1.5.67 1.5 1.5S12.83 19 12 19z" />
      </svg>
    ),
  },
  17: {
    name: "Partnerships for the Goals",
    color: "#19486A",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <circle cx="9" cy="9" r="4" />
        <path d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z" />
      </svg>
    ),
  },
}

interface SDGBadgeProps {
  sdgNumber: number
}

export function SDGBadge({ sdgNumber }: SDGBadgeProps) {
  const sdg = sdgConfig[sdgNumber]
  if (!sdg) return null

  return (
    <div
      className="group relative flex flex-col items-center gap-2.5 rounded-xl p-4 transition-transform hover:scale-105"
      style={{ backgroundColor: sdg.color }}
    >
      {/* Large number */}
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
        <span className="text-xl font-medium text-white">{sdgNumber}</span>
      </div>
      
      {/* Icon */}
      <div className="text-white/90">
        {sdg.icon}
      </div>
      
      {/* Name */}
      <p className="text-center text-xs font-medium leading-tight text-white">
        {sdg.name}
      </p>
    </div>
  )
}

interface SDGGridProps {
  sdgs: number[]
}

export function SDGGrid({ sdgs }: SDGGridProps) {
  return (
    <div className="mt-10 border-t border-border pt-10">
      <h3 className="text-sm font-medium text-foreground">
        Aligned with UN Sustainable Development Goals
      </h3>
      
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {sdgs.map((sdgNum) => (
          <SDGBadge key={sdgNum} sdgNumber={sdgNum} />
        ))}
      </div>
      
      <p className="mt-5 text-sm text-muted-foreground">
        Learn more about the{" "}
        <a
          href="https://sdgs.un.org/goals"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-green-dark"
        >
          UN Sustainable Development Goals
        </a>
      </p>
    </div>
  )
}
