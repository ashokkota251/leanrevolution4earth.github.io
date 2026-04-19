import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const initiatives = [
  {
    index: "i",
    title: "Project Navya Urja",
    hindi: "प्रोजेक्ट नव्य ऊर्जा",
    description:
      "Project Navya Urja drives energy justice by bringing affordable, decentralized clean energy solutions to rural, coastal, and tribal communities.",
    href: "/initiatives#navya-urja",
  },
  {
    index: "ii",
    title: "Project Saahas Taru",
    hindi: "प्रोजेक्ट साहस तरू",
    description:
      "Project Saahas Taru works at the intersection of ecosystem restoration, community-led afforestation and community wellbeing.",
    href: "/initiatives#saahas-taru",
  },
  {
    index: "iii",
    title: "The Bank of Waste",
    hindi: "",
    description:
      "The Bank of Waste is a youth-driven movement transforming educational institutions into waste-responsible zones.",
    href: "/initiatives#bank-of-plastic",
  },
]

export function InitiativesPreview() {
  return (
    <section
      className="relative px-6 py-24 md:py-28"
      style={{ backgroundColor: "#fafbfc" }}
    >
      {/* Fading top hairline */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent"
      />

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-foreground/25" />
            <span className="font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.34em] text-foreground/75">
              on the ground
            </span>
            <span className="inline-block h-px w-8 bg-foreground/25" />
          </div>
          <h2 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3.25rem)] font-light leading-[1.05] tracking-[-0.02em] text-foreground">
            Our <em className="font-normal italic">Initiatives</em>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[0.95rem] leading-relaxed text-foreground/70">
            Three flagship projects driving real-world impact on the ground.
          </p>
        </div>

        {/* Grid */}
        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {initiatives.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="group relative flex h-full flex-col rounded-2xl border border-foreground/[0.08] bg-white p-7 transition-all duration-500 hover:-translate-y-0.5 hover:border-foreground/25 hover:shadow-[0_24px_48px_-24px_rgba(7,20,15,0.28)]"
              >
                {/* Top row: roman index + arrow */}
                <div className="flex items-start justify-between">
                  <span className="font-[family-name:var(--font-display)] text-[13px] italic tracking-[0.24em] text-foreground/50">
                    project {item.index}
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-foreground/35 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3 className="mt-10 font-[family-name:var(--font-display)] text-[1.4rem] font-normal leading-[1.15] tracking-[-0.012em] text-foreground">
                  {item.title}
                </h3>

                {/* Hindi sub-line (reserves space even when empty for row alignment) */}
                <p className="mt-1.5 min-h-[1.35rem] font-[family-name:var(--font-display)] text-[0.9rem] italic text-foreground/55">
                  {item.hindi || "\u00A0"}
                </p>

                {/* Hairline divider that extends on hover */}
                <span
                  aria-hidden
                  className="mt-6 block h-px w-10 bg-foreground/30 transition-all duration-500 group-hover:w-20 group-hover:bg-foreground/70"
                />

                {/* Description */}
                <p className="mt-6 flex-1 text-[0.88rem] leading-relaxed text-foreground/70">
                  {item.description}
                </p>

                {/* Know more CTA */}
                <span className="mt-7 inline-flex items-center gap-2 text-[10.5px] font-medium uppercase tracking-[0.26em] text-foreground/70 transition-colors group-hover:text-foreground">
                  <span
                    aria-hidden
                    className="inline-block h-px w-5 bg-foreground/40 transition-all duration-500 group-hover:w-9 group-hover:bg-foreground"
                  />
                  Know more
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Footer link */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/initiatives"
            className="group inline-flex items-center gap-3 text-[13px] font-medium text-foreground/75 transition-colors hover:text-foreground"
          >
            <span
              aria-hidden
              className="inline-block h-px w-6 bg-foreground/40 transition-all duration-300 group-hover:w-10 group-hover:bg-foreground"
            />
            <span>View all initiatives</span>
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={2}
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
