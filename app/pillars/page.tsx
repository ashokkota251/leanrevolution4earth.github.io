import type { Metadata } from "next"
import Image from "next/image"
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld"
import { CtaSection } from "@/components/home/cta-section"
import pillarsHero from "@/public/images/pillars/4-pillars-hero.jpg"
import greenTransitions from "@/public/images/pillars/green-transitions.jpg"
import natureCommunities from "@/public/images/pillars/nature-communities.jpg"
import climateConsciousness from "@/public/images/pillars/climate-consciousness.jpg"
import climateAdvocacy from "@/public/images/pillars/climate-advocacy.jpg"

export const metadata: Metadata = {
  title: "Our 4 Pillars",
  description:
    "Four action-oriented pillars guiding Lean Revolution 4 Earth — green transitions, nature & communities, climate consciousness, and climate advocacy.",
  alternates: { canonical: "/pillars/" },
}

type Pillar = {
  id: string
  index: string
  title: string
  kicker: string
  lead: string
  body: string[]
  image: typeof greenTransitions
  alt: string
  tone: "light" | "cream"
}

const pillars: Pillar[] = [
  {
    id: "green-transitions",
    index: "i",
    title: "Green Transitions & Resilience",
    kicker: "pillar i",
    lead: "Empowering our people and our earth with clean, resilient futures.",
    body: [
      "The world is shifting — and so must we. At Lean Revolution 4 Earth Foundation, we believe the transition to green energy and resilient systems is not just about technology; it is about justice, dignity, and opportunity.",
      "A green transition is the journey toward a low-carbon, resource-efficient, and inclusive economy. It means harnessing renewable sources like solar, wind, and bio-energy — resulting in a cleaner, affordable, and more sustainable future accessible to all.",
      "Through this pillar, we advance sustainable infrastructure, expand access to clean energy, and foster disaster-resilient communities. We also work with businesses and institutions to reduce emissions and adopt green practices that benefit both people and the planet.",
    ],
    image: greenTransitions,
    alt: "Worker installing solar panels on a rooftop",
    tone: "light",
  },
  {
    id: "nature-communities",
    index: "ii",
    title: "Nature, Communities & Livelihoods",
    kicker: "pillar ii",
    lead: "Protecting ecosystems while creating green livelihoods.",
    body: [
      "This pillar ensures that climate action is fair, inclusive, and community-driven. It empowers vulnerable communities with the skills and resources to lead local solutions that protect ecosystems, create sustainable livelihoods, and uphold basic rights.",
      "Climate change isn't just about rising temperatures — it's about people, communities, and justice. Guided by lean principles, we promote efficient, resource-wise, and adaptive approaches that maximize local impact with minimal waste.",
      "By linking local initiatives with global climate-justice movements, this pillar advances a just transition toward a low-carbon economy that delivers sustainable growth and equity for all.",
    ],
    image: natureCommunities,
    alt: "Women farm workers harvesting in a green field",
    tone: "cream",
  },
  {
    id: "climate-consciousness",
    index: "iii",
    title: "Climate Consciousness",
    kicker: "pillar iii",
    lead: "Inspiring minds, building skills, and shaping climate leaders.",
    body: [
      "This pillar fosters climate literacy, behaviour change, and inclusive capacity-building. It equips communities — especially the youth — with the tools, skills, and opportunities to lead a sustainable transformation.",
      "At Lean Revolution 4 Earth, we make climate literacy simple and accessible, so everyone can understand the crisis, act on solutions, and build a fairer, greener future. Knowledge and awareness are the first steps toward climate action.",
      "Through workshops, campaigns, and digital platforms, we translate complex environmental science into actionable insights. Our programs target schools, colleges, local leaders, and the public — combining traditional knowledge with modern science to create inclusive learning ecosystems that inspire local action and systemic transformation.",
    ],
    image: climateConsciousness,
    alt: "Group of children laughing together",
    tone: "light",
  },
  {
    id: "climate-advocacy",
    index: "iv",
    title: "Climate Advocacy",
    kicker: "pillar iv",
    lead: "Turning local voices into global climate justice.",
    body: [
      "The transition to a climate-just future requires strong, inclusive governance systems that place communities at the center of decision-making. Yet climate policies often remain disconnected from grassroots realities — marginalised groups continue to be excluded from the processes that shape their lives and environment.",
      "This pillar seeks to democratise climate governance: enabling local voices to influence policy, ensuring legal protection of environmental rights, and bridging global climate frameworks with community action.",
      "We believe transformative change only occurs when people — not just policymakers — are empowered to lead the response to the ongoing pollution and climate crisis.",
    ],
    image: climateAdvocacy,
    alt: "Farmer reviewing data on a laptop in a cotton field",
    tone: "cream",
  },
]

const GRAIN_URL =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.9 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

export default function PillarsPage() {
  return (
    <>
      <BreadcrumbJsonLd trail={[{ name: "Pillars", path: "/pillars" }]} />

      {/* 1 — Editorial hero (mirrors About's treatment) */}
      <section className="relative isolate flex min-h-[68vh] items-center overflow-hidden bg-[#0d2400] text-white md:min-h-[76vh]">
        <Image
          src={pillarsHero}
          alt=""
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          className="object-cover"
        />
        {/* Legibility + tonal layers */}
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
              foundation
            </span>
            <span aria-hidden className="mt-5 block h-px w-12 bg-white/50" />
            <h1 className="mt-7 font-[family-name:var(--font-display)] text-[clamp(2.25rem,5.5vw,4.25rem)] font-light leading-[1.04] tracking-[-0.02em] text-white">
              Our <em className="font-normal italic">4 Pillars</em>
            </h1>
          </div>
        </div>
      </section>

      {/* 2 — Simple white intro strip carrying the page's guiding statement */}
      <section className="relative px-6 py-16 md:py-20" style={{ backgroundColor: "#ffffff" }}>
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <p className="text-balance font-[family-name:var(--font-display)] text-[clamp(1.05rem,1.75vw,1.25rem)] font-normal leading-[1.65] tracking-[-0.003em] text-foreground/85">
            Turning <em className="italic text-[#193d00]">vision</em> into{" "}
            <em className="italic text-[#193d00]">action</em> — four action-oriented pillars grounded in{" "}
            <em className="italic text-[#193d00]">local wisdom</em>,{" "}
            <em className="italic text-[#193d00]">clean innovation</em>, and{" "}
            <em className="italic text-[#193d00]">lean thinking</em>.
          </p>
        </div>
      </section>

      {/* 3 — Sticky pillar nav: cream strip with forest pill chips */}
      <nav
        aria-label="Pillars navigation"
        className="sticky top-[56px] z-20 border-y border-[#193d00]/10 bg-[#f6f8f1]/95 backdrop-blur-md md:top-[60px]"
      >
        <ol className="mx-auto flex max-w-6xl items-center gap-2 overflow-x-auto px-4 py-3 md:gap-3 md:px-6">
          {pillars.map((pillar) => (
            <li key={pillar.id} className="shrink-0">
              <a
                href={`#${pillar.id}`}
                className="group flex items-baseline gap-2 rounded-full border border-[#193d00]/15 bg-white/70 px-3.5 py-1.5 text-[12.5px] font-medium tracking-wide text-[#193d00]/85 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#193d00] hover:bg-[#193d00] hover:text-white md:px-4"
              >
                <span
                  aria-hidden
                  className="font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.24em] text-[#193d00]/55 transition-colors group-hover:text-white/80"
                >
                  {pillar.index}
                </span>
                <span className="whitespace-nowrap">{pillar.title}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* 3 — Four editorial pillar chapters with alternating layouts */}
      {pillars.map((pillar, idx) => {
        const flipped = idx % 2 === 1
        const bg = pillar.tone === "cream" ? "#f6f8f1" : "#ffffff"
        return (
          <section
            key={pillar.id}
            id={pillar.id}
            className="relative scroll-mt-32 overflow-hidden px-6 py-16 md:py-20"
            style={{ backgroundColor: bg }}
          >
            {pillar.tone === "cream" && (
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

            <div
              className={`relative mx-auto grid max-w-6xl items-center gap-12 lg:gap-20 ${
                flipped ? "lg:grid-cols-[1fr_1.1fr]" : "lg:grid-cols-[1.1fr_1fr]"
              }`}
            >
              {/* Image panel */}
              <figure
                className={`relative ${flipped ? "lg:order-2" : "lg:order-1"}`}
              >
                <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#f4f6f1] shadow-[0_30px_60px_-30px_rgba(13,36,0,0.35)]">
                  <Image
                    src={pillar.image}
                    alt={pillar.alt}
                    fill
                    sizes="(min-width: 1024px) 540px, (min-width: 640px) 80vw, 100vw"
                    placeholder="blur"
                    className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(13,36,0,0.32)_100%)]"
                  />
                  {/* Tiny roman numeral badge over the image */}
                  <span
                    aria-hidden
                    className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/10 font-[family-name:var(--font-display)] text-[15px] italic tracking-[0.08em] text-white backdrop-blur-sm"
                  >
                    {pillar.index}
                  </span>
                </div>
                <figcaption className="mt-4 flex items-center gap-3 pl-1">
                  <span className="inline-block h-px w-6 bg-[#193d00]/55" />
                  <span className="font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.24em] text-foreground/55">
                    {pillar.kicker}
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
                    pillar {pillar.index}
                  </span>
                  <span aria-hidden className="h-px w-8 bg-[#193d00]/45" />
                </div>

                <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.875rem,3.75vw,2.75rem)] font-light leading-[1.1] tracking-[-0.015em] text-foreground">
                  {pillar.title}
                </h2>

                <p className="text-balance font-[family-name:var(--font-display)] text-[clamp(1.1rem,1.7vw,1.3rem)] italic leading-[1.5] text-[#193d00]">
                  {pillar.lead}
                </p>

                <div className="flex flex-col gap-5 text-[1rem] leading-relaxed text-foreground/75">
                  {pillar.body.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* 4 — Shared CTA */}
      <CtaSection />
    </>
  )
}
