import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import greenTransitions from "@/public/images/pillars/green-transitions.jpg"
import natureCommunities from "@/public/images/pillars/nature-communities.jpg"
import climateConsciousness from "@/public/images/pillars/climate-consciousness.jpg"
import climateAdvocacy from "@/public/images/pillars/climate-advocacy.jpg"

const pillars = [
  {
    image: greenTransitions,
    alt: "Worker installing solar panels on a rooftop",
    title: "Green Transitions & Resilience",
    description:
      "Building sustainable energy and climate-resilient communities.",
    href: "/pillars#green-transitions",
  },
  {
    image: natureCommunities,
    alt: "Women farm workers harvesting in a green field",
    title: "Nature, Communities & Livelihoods",
    description:
      "Protecting ecosystems while strengthening local livelihoods.",
    href: "/pillars#nature-communities",
  },
  {
    image: climateConsciousness,
    alt: "Group of children laughing together",
    title: "Climate Consciousness",
    description:
      "Raising awareness and empowering informed climate action.",
    href: "/pillars#climate-consciousness",
  },
  {
    image: climateAdvocacy,
    alt: "Farmer reviewing data on a laptop in a cotton field",
    title: "Climate Advocacy",
    description:
      "Amplifying grassroots voices for systemic policy change.",
    href: "/pillars#climate-advocacy",
  },
]

export function PillarsPreview() {
  return (
    <section className="relative bg-background px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="flex flex-col items-center text-center">
          <span className="font-[family-name:var(--font-display)] text-[12px] italic tracking-[0.3em] text-foreground/75">
            foundation
          </span>
          <h2 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3.25rem)] font-light leading-[1.05] tracking-[-0.02em] text-foreground">
            Our 4 Pillars
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[1rem] leading-relaxed text-foreground/70">
            To turn vision into action, we&apos;ve built our work around 4 action
            oriented pillars with local wisdom, clean innovation, and lean thinking.
          </p>
        </div>

        {/* Pillars grid */}
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {pillars.map((pillar) => (
            <li key={pillar.title}>
              <Link
                href={pillar.href}
                className="group relative block aspect-[4/5] w-full overflow-hidden rounded-2xl bg-foreground/5"
              >
                {/* Image */}
                <Image
                  src={pillar.image}
                  alt={pillar.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                  placeholder="blur"
                />
                {/* Legibility gradient */}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,29,94,0.22)_0%,rgba(13,36,0,0.3)_45%,rgba(7,18,0,0.95)_100%)] transition-opacity duration-500 group-hover:opacity-95"
                />
                {/* Grain */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-[0.1] mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.9 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                  }}
                />

                {/* Bottom content */}
                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2.5 p-5">
                  <h3 className="font-[family-name:var(--font-display)] text-[1.125rem] font-normal leading-[1.18] text-white md:text-[1.2rem]">
                    {pillar.title}
                  </h3>
                  <p className="text-[13.5px] leading-snug text-white/85">
                    {pillar.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-2 self-start rounded-full border border-white/45 bg-white/5 px-4 py-1.5 text-[12.5px] font-medium text-white backdrop-blur-sm transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[#193d00]">
                    Explore
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth={2}
                    />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* Footer link */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/pillars"
            className="group inline-flex items-center gap-2.5 rounded-full border border-foreground/25 px-6 py-3 text-[14px] font-medium text-foreground transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background"
          >
            <span>View all 4 pillars</span>
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={2}
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
