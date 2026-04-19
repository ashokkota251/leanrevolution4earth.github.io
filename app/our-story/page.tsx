import type { Metadata } from "next"
import Image from "next/image"
import { Trash2, Target, RefreshCw, Zap } from "lucide-react"
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld"
import { CtaSection } from "@/components/home/cta-section"
import aboutHero from "@/public/images/about/about-hero.jpg"
import pragatiShirke from "@/public/images/about/team/pragati-shirke.jpg"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Story, mission, and team behind Lean Revolution 4 Earth — India's climate justice NGO building inclusive, community-led solutions to the climate crisis.",
  alternates: { canonical: "/our-story/" },
}

const leanPrinciples = [
  { icon: Trash2, lean: "Removing Waste", climate: "Cutting Carbon" },
  { icon: Target, lean: "Focus on What Matters", climate: "Listen to Communities" },
  { icon: Zap, lean: "Do More With Less", climate: "Affordable Solutions" },
  { icon: RefreshCw, lean: "Continuous Improvement", climate: "Adapt with Communities" },
]

type Member = {
  id: string
  name: string
  role: string
  image: typeof pragatiShirke | null
  alt?: string
  bio: string[]
}

const team: Member[] = [
  {
    id: "pragati-shirke",
    name: "Pragati Shirke",
    role: "Co-Founder & Director",
    image: pragatiShirke,
    alt: "Pragati Shirke tending plants in a mountain garden",
    bio: [
      "I didn't begin my journey in the fields. I began in courtrooms. Trained as a lawyer, I was taught to seek justice within defined frameworks. But over time, I found myself drawn beyond those four courtroom walls — towards the people and places where justice isn't argued.",
      "My work slowly shifted from legal texts to lived realities. Working with my hands, alongside communities, changed me. Whether it's climate action or social development, I believe transformation happens when we show up, stay present, and work together.",
      "Today, I see my role as a bridge — between systems and people, between policy and practice.",
      "I carry a quiet but firm belief: that the work we do now can shape a more just, balanced, and compassionate world — not just for us, but for those who come after us.",
    ],
  },
  {
    id: "rohan-kotwalkar",
    name: "Rohan Kotwalkar",
    role: "Co-Founder & Director",
    image: null,
    bio: [
      "Co-directs Lean Revolution 4 Earth alongside Pragati — guiding strategy, partnerships, and the long-view direction of the work.",
      "Full bio coming soon.",
    ],
  },
  {
    id: "dinesh-awari",
    name: "Dinesh Awari",
    role: "Admin Head",
    image: null,
    bio: [
      "Keeps the administrative and operational backbone of LR4E running day-to-day — the quiet engine behind the programs.",
      "Full bio coming soon.",
    ],
  },
  {
    id: "sandesh-shirke",
    name: "Sandesh Shirke",
    role: "Animal Welfare",
    image: null,
    bio: [
      "Leads LR4E's animal welfare work — ensuring compassion for every living being stays at the heart of our climate-justice practice.",
      "Full bio coming soon.",
    ],
  },
]

const GRAIN_URL =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.9 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd trail={[{ name: "Our Story", path: "/our-story" }]} />

      {/* 1 — Editorial hero with image backdrop */}
      <section className="relative isolate flex min-h-[68vh] items-center overflow-hidden bg-[#0d2400] text-white md:min-h-[76vh]">
        <Image
          src={aboutHero}
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
              our story
            </span>
            <span aria-hidden className="mt-5 block h-px w-12 bg-white/50" />
            <h1 className="mt-7 font-[family-name:var(--font-display)] text-[clamp(2.25rem,5.5vw,4.25rem)] font-light leading-[1.04] tracking-[-0.02em] text-white">
              About <em className="font-normal italic">Us</em>
            </h1>
          </div>
        </div>
      </section>

      {/* 2 — Origin: white breather with a single editorial statement */}
      <section className="relative px-6 py-20" style={{ backgroundColor: "#ffffff" }}>
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <span className="font-[family-name:var(--font-display)] text-[12px] italic tracking-[0.3em] text-foreground/70">
            origin
          </span>
          <p className="mt-7 text-balance font-[family-name:var(--font-display)] text-[clamp(1.05rem,1.75vw,1.25rem)] font-normal leading-[1.65] tracking-[-0.003em] text-foreground/85">
            Lean Revolution 4 Earth Foundation is a{" "}
            <em className="italic text-[#193d00]">not-for-profit organization</em>, registered under Section 8 of the Companies Act, 2013 in Mumbai, India — committed to accelerating{" "}
            <em className="italic text-[#193d00]">systemic solutions</em> for a low-carbon, equitable future.
          </p>
        </div>
      </section>

      {/* 3 — Who We Are: light cream with forest accents + pull quote */}
      <section
        id="who-we-are"
        className="relative overflow-hidden px-6 py-24 md:py-28"
        style={{ backgroundColor: "#f6f8f1" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_50%,rgba(255,255,255,0.7)_0%,transparent_75%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#193d00]/25 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#193d00]/25 to-transparent"
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="flex flex-col items-center text-center">
            <span className="font-[family-name:var(--font-display)] text-[12px] italic tracking-[0.3em] text-[#193d00]">
              who we are
            </span>
            <span aria-hidden className="mt-4 block h-px w-10 bg-[#193d00]/50" />
            <h2 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(1.875rem,4.5vw,3rem)] font-light leading-[1.12] tracking-[-0.02em] text-foreground">
              We began with a{" "}
              <em className="font-normal italic text-[#193d00]">simple question</em>.
            </h2>
          </div>

          <blockquote className="mt-10 border-l-2 border-[#193d00]/40 pl-6 font-[family-name:var(--font-display)] text-[1.2rem] italic leading-[1.5] text-foreground/85 md:pl-8 md:text-[1.35rem]">
            &ldquo;How can we fight the climate crisis without leaving anyone behind?&rdquo;
          </blockquote>

          <div className="mt-10 flex flex-col gap-6 text-[1rem] leading-relaxed text-foreground/75">
            <p>
              At Lean Revolution 4 Earth Foundation, we believe caring for the planet should never mean giving up the simple joys of daily life. Every child should be able to enjoy a chocolate bar — and the wrapper should return safely to a circular system, not a landfill or the ocean. Sustainability must meet the needs of today while protecting the rights and opportunities of future generations, especially for frontline communities already facing the harshest impacts of climate change.
            </p>
            <p>
              For us, climate justice is not an abstract idea. It is the lived reality of villagers facing droughts, tribal herders whose livelihoods depend on fragile mountain ecosystems, and urban poor families who lose their homes to floods every monsoon. Sustainability means protecting nature — and the people who depend on it.
            </p>
          </div>
        </div>
      </section>

      {/* 4 — Vision + Mission: navy editorial band */}
      <section
        className="relative overflow-hidden px-6 py-20 text-white md:py-24"
        style={{ backgroundColor: "#0e1d5e" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgba(88,110,220,0.32)_0%,transparent_65%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_100%,rgba(6,13,46,0.55)_0%,transparent_70%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
          style={{ backgroundImage: GRAIN_URL }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />

        <div className="relative mx-auto grid max-w-6xl gap-14 md:grid-cols-2 md:gap-20">
          <div className="flex flex-col gap-5">
            <span className="font-[family-name:var(--font-display)] text-[12px] italic tracking-[0.3em] text-white/70">
              our vision
            </span>
            <span aria-hidden className="block h-px w-10 bg-white/35" />
            <h3 className="font-[family-name:var(--font-display)] text-[clamp(1.625rem,3.25vw,2.25rem)] font-light leading-[1.12] tracking-[-0.015em] text-white">
              A future where people, together with{" "}
              <em className="font-normal italic">nature flourish</em>.
            </h3>
            <p className="mt-2 text-[1rem] leading-relaxed text-white/80">
              And every generation inherits a{" "}
              <em className="italic text-white">healthier</em>,{" "}
              <em className="italic text-white">fairer</em>, and{" "}
              <em className="italic text-white">greener</em> Earth.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <span className="font-[family-name:var(--font-display)] text-[12px] italic tracking-[0.3em] text-white/70">
              our mission
            </span>
            <span aria-hidden className="block h-px w-10 bg-white/35" />
            <h3 className="font-[family-name:var(--font-display)] text-[clamp(1.625rem,3.25vw,2.25rem)] font-light leading-[1.12] tracking-[-0.015em] text-white">
              Advance{" "}
              <em className="font-normal italic">equitable climate solutions</em>.
            </h3>
            <p className="mt-2 text-[1rem] leading-relaxed text-white/80">
              Through community-led action, clean innovation, and sustainable systems built on{" "}
              <em className="italic text-white">lean</em>,{" "}
              <em className="italic text-white">inclusive</em>, and{" "}
              <em className="italic text-white">regenerative</em> principles.
            </p>
          </div>
        </div>
      </section>

      {/* 5 — The Team: white, editorial intro + photo grid */}
      <section
        id="team"
        className="relative px-6 py-24 md:py-28"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <span className="font-[family-name:var(--font-display)] text-[12px] italic tracking-[0.3em] text-[#193d00]">
              the team
            </span>
            <h2 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3.25rem)] font-light leading-[1.05] tracking-[-0.02em] text-foreground">
              The <em className="font-normal italic text-[#193d00]">changemakers</em> behind LR4E.
            </h2>
          </div>

          <div className="mx-auto mt-10 flex max-w-4xl flex-col gap-6 text-[1rem] leading-relaxed text-foreground/75">
            <p>
              Lean Revolution 4 Earth Foundation is started by a group of changemakers who believe that climate action must be just, inclusive, and people-centered. Coming from diverse backgrounds in social development and grassroots action, our team brings together hands-on experience and deep passion for change. But LR4E is not the story of just its founders — it is the story of all the changemakers they have met along the way.
            </p>
            <p>
              Every plastic-cleaning volunteer, every villager who conserves water, every woman who builds livelihoods through sustainable farming, every youth who raises their voice for climate justice — they all are part of this journey. Our team simply carries forward these sparks of wisdom, action, and care, shaping them into a collective movement for a leaner, fairer, and greener Earth.
            </p>
          </div>

          <div className="mx-auto mt-16 flex max-w-5xl flex-col gap-16 md:gap-20">
            {team.map((member, idx) => {
              const flipped = idx % 2 === 1
              const [firstName, ...rest] = member.name.split(" ")
              const lastName = rest.join(" ")
              return (
                <article
                  key={member.id}
                  className={`grid items-start gap-8 md:gap-12 md:grid-cols-[auto_1fr] ${
                    flipped ? "md:grid-cols-[1fr_auto]" : ""
                  }`}
                >
                  {/* Portrait */}
                  <figure
                    className={`relative ${flipped ? "md:order-2" : ""}`}
                  >
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-[#f4f6f1] shadow-[0_24px_48px_-24px_rgba(13,36,0,0.3)] md:w-[260px] lg:w-[300px]">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.alt ?? member.name}
                          fill
                          sizes="(min-width: 1024px) 300px, (min-width: 768px) 260px, 100vw"
                          placeholder="blur"
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center font-[family-name:var(--font-display)] text-[10.5px] italic tracking-[0.3em] text-foreground/35">
                          photo
                        </div>
                      )}
                      {member.image && (
                        <div
                          aria-hidden
                          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_65%,rgba(13,36,0,0.28)_100%)]"
                        />
                      )}
                    </div>
                  </figure>

                  {/* Bio */}
                  <div className="flex flex-col gap-5">
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#193d00]/80">
                        {member.role}
                      </p>
                      <h3 className="mt-2 font-[family-name:var(--font-display)] text-[clamp(1.75rem,3.25vw,2.5rem)] font-light leading-[1.08] tracking-[-0.015em] text-foreground">
                        {firstName}{" "}
                        {lastName && (
                          <em className="font-normal italic text-[#193d00]">
                            {lastName}
                          </em>
                        )}
                      </h3>
                    </div>
                    <div className="flex flex-col gap-4 text-[0.975rem] leading-relaxed text-foreground/75">
                      {member.bio.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* 6 — Lean Philosophy: cream with forest-accented cards */}
      <section
        className="relative overflow-hidden px-6 py-24 md:py-28"
        style={{ backgroundColor: "#f6f8f1" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_50%,rgba(255,255,255,0.7)_0%,transparent_75%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#193d00]/25 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#193d00]/25 to-transparent"
        />

        <div className="relative mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <span className="font-[family-name:var(--font-display)] text-[12px] italic tracking-[0.3em] text-[#193d00]">
              philosophy
            </span>
            <span aria-hidden className="mt-4 block h-px w-10 bg-[#193d00]/50" />
            <h2 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3.25rem)] font-light leading-[1.05] tracking-[-0.02em] text-foreground">
              Why <em className="font-normal italic text-[#193d00]">Lean</em> for Climate?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[1rem] leading-relaxed text-foreground/75">
              Lean thinking is about eliminating waste, focusing on value, and continuously improving. We reimagine these principles for climate justice.
            </p>
          </div>

          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {leanPrinciples.map((item) => (
              <li
                key={item.lean}
                className="group relative flex flex-col gap-4 rounded-2xl border border-[#193d00]/10 bg-white p-7 transition-all duration-500 hover:-translate-y-0.5 hover:border-[#193d00]/35 hover:shadow-[0_24px_48px_-24px_rgba(13,36,0,0.28)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#193d00]/10 text-[#193d00]">
                  <item.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-[family-name:var(--font-display)] text-[1.1rem] font-normal leading-tight text-foreground">
                    {item.lean}
                  </p>
                  <p className="mt-2 inline-flex items-center gap-1.5 text-[13.5px] text-foreground/65">
                    <span aria-hidden className="text-[#193d00]">→</span>
                    {item.climate}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7 — Shared CTA (same component as home) */}
      <CtaSection />
    </>
  )
}
