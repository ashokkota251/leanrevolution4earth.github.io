import type { Metadata } from "next"
import Image from "next/image"
import { SDGGrid } from "@/components/sdg-badge"
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld"
import { CtaSection } from "@/components/home/cta-section"
import initiativesHero from "@/public/images/initiatives/initiatives-hero.jpg"
import navyaUrja from "@/public/images/initiatives/project-navya-urja.jpg"
import saahasTaru from "@/public/images/initiatives/project-saahas-taru.jpg"
import bankOfWaste from "@/public/images/initiatives/bank-of-waste.jpg"

export const metadata: Metadata = {
  title: "Our Initiatives",
  description:
    "Three flagship projects driving real-world climate impact — Project Navya Urja, Project Saahas Taru, and The Bank of Waste.",
  alternates: { canonical: "/initiatives/" },
}

type Initiative = {
  id: string
  index: string
  title: string
  shortLabel: string
  hindi: string
  theme: string
  lead: string
  intro: string
  objectives: string[]
  sdgs: number[]
  image: typeof navyaUrja
  alt: string
  tone: "light" | "cream"
}

const initiatives: Initiative[] = [
  {
    id: "navya-urja",
    index: "i",
    title: "Project Navya Urja",
    shortLabel: "Navya Urja",
    hindi: "प्रोजेक्ट नव्य ऊर्जा",
    theme: "Renewable Energy & Clean Solutions",
    lead: "Energy justice for every home, farm, and community — no one left in the dark.",
    intro:
      "Project Navya Urja drives energy justice by bringing affordable, decentralized clean-energy solutions to rural, coastal, and tribal communities. It combines solar microgrids, biogas units, and energy-literacy programs to ensure no home or livelihood is left in the dark.",
    objectives: [
      "Enable universal access to clean energy for low-income and remote areas.",
      "Promote climate-resilient infrastructure for farms, schools, and community hubs.",
      "Create green livelihoods through solar entrepreneurship and repair networks — 'Urja Sakhis' and 'Urja Saathis' (community solar entrepreneurs).",
      "Support local governments and institutions to adopt lean, low-carbon practices.",
    ],
    sdgs: [2, 3, 4, 5, 7, 8, 11, 13, 17],
    image: navyaUrja,
    alt: "Solar installation serving a rural community",
    tone: "light",
  },
  {
    id: "saahas-taru",
    index: "ii",
    title: "Project Saahas Taru",
    shortLabel: "Saahas Taru",
    hindi: "प्रोजेक्ट साहस तरू",
    theme: "Tree of Courage — Community-Led Afforestation",
    lead: "Restoring ecosystems and livelihoods, hand-in-hand with the communities who know them best.",
    intro:
      "Project Saahas Taru works at the intersection of ecosystem restoration and community wellbeing. It empowers indigenous and rural communities to protect forests, coasts, and mountains — linking conservation with dignity-based livelihoods.",
    objectives: [
      "Restore degraded ecosystems — forests, mangroves, watersheds, and hills.",
      "Strengthen community-led conservation through local governance and rights.",
      "Develop nature-linked green livelihoods such as honey, bamboo, eco-tourism, and herbal produce.",
      "Promote biodiversity-based carbon sinks and sustainable land-use.",
    ],
    sdgs: [1, 5, 8, 11, 12, 13, 14, 15, 17],
    image: saahasTaru,
    alt: "A hand pressed gently against the bark of a living tree",
    tone: "cream",
  },
  {
    id: "bank-of-waste",
    index: "iii",
    title: "The Bank of Waste",
    shortLabel: "Bank of Waste",
    hindi: "प्रोजेक्ट बँक ऑफ वेस्ट",
    theme: "Small Actions. Big Impact.",
    lead: "Campuses become deposit banks — turning plastic waste into accountability and action.",
    intro:
      "The Bank of Waste is a youth-driven movement transforming educational institutions into plastic-responsible zones. Campuses become 'waste deposit banks' where students, teachers, and staff deposit plastic waste instead of throwing it away. Items are counted, recorded, and recycled through verified collection partners — ensuring zero plastic leakage from campuses to landfills or the environment.",
    objectives: [
      "Eliminate single-use plastic waste from school and college campuses.",
      "Create environmental accountability and behavioural change among youth.",
      "Establish a circular model of collection, segregation, and recycling at the source.",
      "Link climate education with hands-on sustainability practice.",
      "Build youth ambassadors for the Revolution 4 Earth movement.",
    ],
    sdgs: [4, 11, 12, 13, 14, 15, 17],
    image: bankOfWaste,
    alt: "Buckets of collected bottles and caps ready for sorting",
    tone: "light",
  },
]

const GRAIN_URL =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.9 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

export default function InitiativesPage() {
  return (
    <>
      <BreadcrumbJsonLd trail={[{ name: "Initiatives", path: "/initiatives" }]} />

      {/* 1 — Editorial hero with image backdrop */}
      <section className="relative isolate flex min-h-[68vh] items-center overflow-hidden bg-[#0d2400] text-white md:min-h-[76vh]">
        <Image
          src={initiativesHero}
          alt=""
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          className="object-cover"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(14,29,94,0.5)_0%,rgba(13,36,0,0.3)_40%,rgba(7,18,0,0.85)_100%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_15%,rgba(14,29,94,0.3)_0%,transparent_55%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.1] mix-blend-overlay"
          style={{ backgroundImage: GRAIN_URL }}
        />
        {/* Halftone dot overlay — editorial texture + text legibility */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 lr4e-dotgrid"
        />

        <div className="relative z-10 w-full px-6 py-24 md:py-28">
          <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
            <span className="font-[family-name:var(--font-display)] text-[12px] italic tracking-[0.3em] text-white/80">
              on the ground
            </span>
            <span aria-hidden className="mt-5 block h-px w-12 bg-white/50" />
            <h1 className="mt-7 font-[family-name:var(--font-display)] text-[clamp(2.25rem,5.5vw,4.25rem)] font-light leading-[1.04] tracking-[-0.02em] text-white">
              Our <em className="font-normal italic">Initiatives</em>
            </h1>
          </div>
        </div>
      </section>

      {/* 2 — Simple white intro strip */}
      <section className="relative px-6 py-16 md:py-20" style={{ backgroundColor: "#ffffff" }}>
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <p className="text-balance font-[family-name:var(--font-display)] text-[clamp(1.05rem,1.75vw,1.25rem)] font-normal leading-[1.65] tracking-[-0.003em] text-foreground/85">
            Three flagship projects turning{" "}
            <em className="italic text-[#193d00]">climate justice</em> into{" "}
            <em className="italic text-[#193d00]">lived reality</em> — through{" "}
            <em className="italic text-[#193d00]">clean energy</em>,{" "}
            <em className="italic text-[#193d00]">community-led afforestation</em>, and{" "}
            <em className="italic text-[#193d00]">circular waste systems</em>.
          </p>
        </div>
      </section>

      {/* 3 — Sticky nav: cream strip with forest pill chips */}
      <nav
        aria-label="Initiatives navigation"
        className="sticky top-[56px] z-20 border-y border-[#193d00]/10 bg-[#f6f8f1]/95 backdrop-blur-md md:top-[60px]"
      >
        <ol className="mx-auto flex max-w-6xl items-center gap-2 overflow-x-auto px-4 py-3 md:gap-3 md:px-6">
          {initiatives.map((project) => (
            <li key={project.id} className="shrink-0">
              <a
                href={`#${project.id}`}
                className="group flex items-baseline gap-2 rounded-full border border-[#193d00]/15 bg-white/70 px-3.5 py-1.5 text-[12.5px] font-medium tracking-wide text-[#193d00]/85 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#193d00] hover:bg-[#193d00] hover:text-white md:px-4"
              >
                <span
                  aria-hidden
                  className="font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.24em] text-[#193d00]/55 transition-colors group-hover:text-white/80"
                >
                  {project.index}
                </span>
                <span className="whitespace-nowrap">{project.shortLabel}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* 4 — Three initiative chapters with alternating image/text layouts */}
      {initiatives.map((project, idx) => {
        const flipped = idx % 2 === 1
        const bg = project.tone === "cream" ? "#f6f8f1" : "#ffffff"
        return (
          <section
            key={project.id}
            id={project.id}
            className="relative scroll-mt-32 overflow-hidden px-6 py-16 md:py-20"
            style={{ backgroundColor: bg }}
          >
            {project.tone === "cream" && (
              <>
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_50%,rgba(255,255,255,0.7)_0%,transparent_75%)]"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#193d00]/20 to-transparent"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#193d00]/20 to-transparent"
                />
              </>
            )}

            <div className="relative mx-auto max-w-6xl">
            <div
              className={`grid items-start gap-12 lg:gap-20 ${
                flipped ? "lg:grid-cols-[1fr_1.1fr]" : "lg:grid-cols-[1.1fr_1fr]"
              }`}
            >
              {/* Image panel */}
              <figure
                className={`relative ${flipped ? "lg:order-2" : "lg:order-1"} lg:sticky lg:top-36`}
              >
                <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#f4f6f1] shadow-[0_30px_60px_-30px_rgba(13,36,0,0.35)]">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 1024px) 540px, (min-width: 640px) 80vw, 100vw"
                    placeholder="blur"
                    className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(13,36,0,0.32)_100%)]"
                  />
                  <span
                    aria-hidden
                    className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/10 font-[family-name:var(--font-display)] text-[15px] italic tracking-[0.08em] text-white backdrop-blur-sm"
                  >
                    {project.index}
                  </span>
                </div>
                <figcaption className="mt-4 flex items-center gap-3 pl-1">
                  <span className="inline-block h-px w-6 bg-[#193d00]/55" />
                  <span className="font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.24em] text-foreground/55">
                    project {project.index}
                  </span>
                </figcaption>
              </figure>

              {/* Text column */}
              <div
                className={`flex flex-col gap-6 ${flipped ? "lg:order-1" : "lg:order-2"}`}
              >
                <div className="flex items-baseline gap-3">
                  <span
                    aria-hidden
                    className="font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.3em] text-[#193d00]"
                  >
                    initiative {project.index}
                  </span>
                  <span aria-hidden className="h-px w-8 bg-[#193d00]/45" />
                </div>

                <div>
                  <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.875rem,3.75vw,2.75rem)] font-light leading-[1.1] tracking-[-0.015em] text-foreground">
                    {project.title}
                  </h2>
                  {project.hindi && (
                    <p className="mt-2 font-[family-name:var(--font-display)] text-[1.05rem] leading-snug text-foreground/55">
                      {project.hindi}
                    </p>
                  )}
                  <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.24em] text-[#193d00]/80">
                    {project.theme}
                  </p>
                </div>

                <p className="text-balance font-[family-name:var(--font-display)] text-[clamp(1.1rem,1.7vw,1.3rem)] italic leading-[1.5] text-[#193d00]">
                  {project.lead}
                </p>

                <p className="text-[1rem] leading-relaxed text-foreground/75">
                  {project.intro}
                </p>

                {/* Objectives — editorial list with Fraunces numerals */}
                <div className="mt-2">
                  <div className="flex items-center gap-3">
                    <span className="font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.3em] text-foreground/60">
                      objectives
                    </span>
                    <span aria-hidden className="h-px w-10 bg-[#193d00]/35" />
                  </div>
                  <ol className="mt-5 flex flex-col divide-y divide-[#193d00]/10 border-y border-[#193d00]/10">
                    {project.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-5 py-4">
                        <span
                          aria-hidden
                          className="shrink-0 font-[family-name:var(--font-display)] text-[1.25rem] italic tabular-nums leading-none text-[#193d00]/70"
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[0.95rem] leading-relaxed text-foreground/80">
                          {obj}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>

              </div>
            </div>

            {/* SDG alignment — full-width, below the image+text grid */}
            <SDGGrid sdgs={project.sdgs} />
            </div>
          </section>
        )
      })}

      {/* 5 — Shared CTA */}
      <CtaSection />
    </>
  )
}
