import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import greenTransitions from "@/public/images/pillars/green-transitions.jpg"
import natureCommunities from "@/public/images/pillars/nature-communities.png"
import climateConsciousness from "@/public/images/pillars/climate-consciousness.png"
import climateAdvocacy from "@/public/images/pillars/climate-advocacy.png"

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
      {/* Fading top hairline to separate from previous section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent"
      />

      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-foreground/25" />
            <span className="font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.34em] text-foreground/75">
              foundation
            </span>
            <span className="inline-block h-px w-8 bg-foreground/25" />
          </div>
          <h2 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3.25rem)] font-light leading-[1.05] tracking-[-0.02em] text-foreground">
            Our <em className="font-normal italic">4</em> Pillars
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[0.95rem] leading-relaxed text-foreground/70">
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
                  className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.15)_40%,rgba(7,20,15,0.85)_100%)] transition-opacity duration-500 group-hover:opacity-95"
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
                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-5">
                  <h3 className="font-[family-name:var(--font-display)] text-[1.05rem] font-normal leading-[1.18] text-white md:text-[1.15rem]">
                    {pillar.title}
                  </h3>
                  <p className="max-h-0 overflow-hidden text-[12px] leading-snug text-white/80 opacity-0 transition-all duration-500 ease-out group-hover:max-h-24 group-hover:opacity-100">
                    {pillar.description}
                  </p>
                  <span className="mt-1 inline-flex items-center gap-2 text-[10.5px] font-medium uppercase tracking-[0.24em] text-white/85">
                    <span
                      aria-hidden
                      className="inline-block h-px w-5 bg-white/60 transition-all duration-500 group-hover:w-9 group-hover:bg-white"
                    />
                    Explore
                    <ArrowUpRight
                      className="h-3 w-3 translate-y-[0.5px] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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
            className="group inline-flex items-center gap-3 text-[13px] font-medium text-foreground/75 transition-colors hover:text-foreground"
          >
            <span
              aria-hidden
              className="inline-block h-px w-6 bg-foreground/40 transition-all duration-300 group-hover:w-10 group-hover:bg-foreground"
            />
            <span>View all 4 pillars</span>
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
