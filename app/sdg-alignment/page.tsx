import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld"
import { CtaSection } from "@/components/home/cta-section"
import { sdgConfig } from "@/components/sdg-badge"

export const metadata: Metadata = {
  title: "SDG Alignment",
  description:
    "How Lean Revolution 4 Earth's climate work in India aligns with the UN Sustainable Development Goals — a consolidated view across 13 goals.",
  alternates: { canonical: "/sdg-alignment/" },
}

const GRAIN_URL =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.9 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

type Contribution = {
  project: string
  description: string
}

type SDGEntry = {
  num: number
  contributions: Contribution[]
}

// Consolidated list across all three projects, ordered by SDG number.
const sdgs: SDGEntry[] = [
  {
    num: 1,
    contributions: [
      {
        project: "Project Saahas Taru",
        description:
          "By linking ecosystem restoration with secure, nature-dependent livelihoods and access to ecosystem-service payments, the project strengthens economic resilience and reduces vulnerability among forest- and coast-dependent households.",
      },
    ],
  },
  {
    num: 2,
    contributions: [
      {
        project: "Project Navya Urja",
        description:
          "Solar cold storage and biogas units for farmers help reduce post-harvest losses, improve food security, and support climate-resilient agricultural practices.",
      },
    ],
  },
  {
    num: 3,
    contributions: [
      {
        project: "Project Navya Urja",
        description:
          "Reliable clean energy for health centres improves service delivery, cold-chain reliability for medicines, and overall health outcomes — while reduced indoor air pollution from biogas use supports community well-being.",
      },
    ],
  },
  {
    num: 4,
    contributions: [
      {
        project: "Project Navya Urja",
        description:
          "Solar-powered schools and anganwadis ensure uninterrupted learning environments, improved digital access, and safer educational infrastructure — particularly in energy-deficient regions.",
      },
      {
        project: "The Bank of Waste",
        description:
          "The initiative transforms campuses into living sustainability labs, embedding environmental literacy, climate education, and practical sustainability skills into everyday student life — beyond classroom learning.",
      },
    ],
  },
  {
    num: 5,
    contributions: [
      {
        project: "Project Navya Urja",
        description:
          "By prioritising women's leadership in clean-energy enterprises and community energy management, the project promotes women's economic empowerment, participation in decision-making, and access to non-traditional livelihood opportunities.",
      },
      {
        project: "Project Saahas Taru",
        description:
          "Eco-Livelihood Training Centres prioritise women's participation and leadership, enabling women to access skills, resources, and income-generating opportunities in conservation-based enterprises.",
      },
    ],
  },
  {
    num: 7,
    contributions: [
      {
        project: "Project Navya Urja",
        description:
          "Project Navya Urja directly advances SDG 7 by enabling access to reliable, affordable, and modern energy services in rural, coastal, and tribal regions. Through decentralised solar microgrids and biogas systems, the project reduces energy poverty while promoting clean-energy adoption in underserved communities.",
      },
    ],
  },
  {
    num: 8,
    contributions: [
      {
        project: "Project Navya Urja",
        description:
          "The initiative creates green livelihoods by training women and youth as Urja Sakhis and Urja Saathis, supporting local solar entrepreneurship, maintenance, and repair services. This enhances income security while building a skilled green workforce.",
      },
      {
        project: "Project Saahas Taru",
        description:
          "The project creates dignity-based, green livelihoods by supporting nature-linked enterprises such as honey, bamboo products, eco-tourism, and herbal produce — ensuring sustainable income opportunities for rural and indigenous communities.",
      },
    ],
  },
  {
    num: 11,
    contributions: [
      {
        project: "Project Navya Urja",
        description:
          "By working with panchayats and municipalities on energy planning and low-carbon practices, Project Navya Urja strengthens inclusive, resilient, and sustainable local governance systems.",
      },
      {
        project: "Project Saahas Taru",
        description:
          "Nature-based solutions implemented under the project enhance climate resilience of rural and peri-urban settlements, protecting communities from environmental degradation and climate-induced disasters.",
      },
      {
        project: "The Bank of Waste",
        description:
          "Plastic-responsible campuses contribute to cleaner, healthier urban and peri-urban environments by reducing the waste burden on municipal systems and preventing plastic pollution in public spaces and waterways.",
      },
    ],
  },
  {
    num: 12,
    contributions: [
      {
        project: "Project Saahas Taru",
        description:
          "Sustainable harvesting, value chains, and ecosystem stewardship promote responsible use of natural resources while maintaining ecological balance.",
      },
      {
        project: "The Bank of Waste",
        description:
          "Project Bank of Plastic directly advances SDG 12 by promoting responsible consumption patterns and circular waste-management systems within educational institutions. By eliminating single-use plastics and ensuring segregation and recycling at source, the initiative strengthens sustainable material use and zero-waste practices.",
      },
    ],
  },
  {
    num: 13,
    contributions: [
      {
        project: "Project Navya Urja",
        description:
          "By replacing fossil-fuel–based energy with renewable solutions, the project contributes to climate-change mitigation and adaptation. Climate-resilient energy infrastructure for farms, schools, and community institutions strengthens local capacity to respond to climate shocks and extreme weather events.",
      },
      {
        project: "Project Saahas Taru",
        description:
          "By promoting biodiversity-based carbon sinks and nature-based solutions, the project advances climate-change mitigation and adaptation. Restored forests and mangroves reduce climate risks such as floods, erosion, and extreme weather impacts on vulnerable communities.",
      },
      {
        project: "The Bank of Waste",
        description:
          "By preventing plastic leakage into landfills and the environment, the project reduces greenhouse-gas emissions associated with plastic production, burning, and unmanaged disposal. Climate education integrated with hands-on waste action enables students to understand and respond to climate change at a behavioural level.",
      },
    ],
  },
  {
    num: 14,
    contributions: [
      {
        project: "Project Saahas Taru",
        description:
          "Through mangrove restoration and coastal conservation linked to fisherfolk livelihoods, the project supports the protection and sustainable management of coastal and marine ecosystems — enhancing fish breeding grounds and shoreline resilience.",
      },
      {
        project: "The Bank of Waste",
        description:
          "By ensuring zero plastic leakage from campuses, the project helps protect rivers, lakes, and marine ecosystems from plastic pollution — supporting healthier aquatic biodiversity.",
      },
    ],
  },
  {
    num: 15,
    contributions: [
      {
        project: "Project Saahas Taru",
        description:
          "Project Saahas Taru directly contributes to SDG 15 by restoring degraded forests, watersheds, hills, and biodiversity-rich landscapes through native-species planting and community protection. The initiative strengthens sustainable land use and ecosystem regeneration while conserving habitats and biodiversity.",
      },
      {
        project: "The Bank of Waste",
        description:
          "Reduced plastic dumping protects soil health, terrestrial biodiversity, and green spaces around educational institutions and surrounding communities.",
      },
    ],
  },
  {
    num: 17,
    contributions: [
      {
        project: "Project Navya Urja",
        description:
          "The project is built on multi-stakeholder collaboration involving local governments, community institutions, civil-society organisations, and clean-energy practitioners — to scale decentralised renewable-energy solutions.",
      },
      {
        project: "Project Saahas Taru",
        description:
          "Project Saahas Taru leverages partnerships with local communities, panchayats, civil society, and climate-finance mechanisms — including PES and carbon-credit frameworks — to scale conservation impact.",
      },
      {
        project: "The Bank of Waste",
        description:
          "The initiative relies on partnerships between schools and colleges, youth groups, recycling enterprises, municipal bodies, and verified waste-collection partners — to scale impact and strengthen circular-economy ecosystems.",
      },
    ],
  },
]

export default function SDGAlignmentPage() {
  return (
    <>
      <BreadcrumbJsonLd
        trail={[
          { name: "Our Work", path: "/our-work" },
          { name: "SDG Alignment", path: "/sdg-alignment" },
        ]}
      />

      {/* 1 — Minimal dark hero */}
      <section className="relative isolate overflow-hidden bg-[#0d2400] px-6 py-24 text-white md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(14,29,94,0.5)_0%,transparent_65%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(42,100,20,0.25)_0%,transparent_65%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.1] mix-blend-overlay"
          style={{ backgroundImage: GRAIN_URL }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 lr4e-dotgrid"
        />

        <div className="relative mx-auto flex max-w-6xl flex-col items-center text-center">
          <Link
            href="/our-work"
            className="group inline-flex items-center gap-2 font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.28em] text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft
              className="h-3 w-3 transition-transform duration-300 group-hover:-translate-x-0.5"
              strokeWidth={2}
            />
            back to initiatives
          </Link>
          <span className="mt-8 font-[family-name:var(--font-display)] text-[12px] italic tracking-[0.3em] text-white/80">
            aligned with
          </span>
          <span aria-hidden className="mt-5 block h-px w-12 bg-white/50" />
          <h1 className="mt-7 font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-[1.08] tracking-[-0.02em] text-white">
            UN <em className="font-normal italic">Sustainable Development Goals</em>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[1rem] leading-relaxed text-white/75">
            Thirteen goals, one movement. A consolidated view of how our work connects to the global development agenda.
          </p>
        </div>
      </section>

      {/* 2 — Sticky jump-to nav: colored number chips, one per SDG */}
      <nav
        aria-label="Jump to SDG"
        className="sticky top-[56px] z-20 border-y border-[#193d00]/10 bg-[#f6f8f1]/95 backdrop-blur-md md:top-[60px]"
      >
        <ol className="mx-auto flex max-w-6xl items-center gap-1.5 overflow-x-auto px-4 py-3 md:px-6">
          {sdgs.map((entry) => {
            const sdg = sdgConfig[entry.num]
            if (!sdg) return null
            return (
              <li key={entry.num} className="shrink-0">
                <a
                  href={`#sdg-${entry.num}`}
                  aria-label={`SDG ${entry.num}: ${sdg.name}`}
                  className="group flex h-9 w-9 items-center justify-center rounded-full border border-transparent font-[family-name:var(--font-display)] text-[12px] font-normal tabular-nums text-foreground/70 transition-all duration-300 hover:-translate-y-0.5 hover:text-white"
                  style={
                    {
                      ["--sdg-color" as string]: sdg.color,
                    } as React.CSSProperties
                  }
                >
                  <span
                    aria-hidden
                    className="flex h-full w-full items-center justify-center rounded-full border border-[#193d00]/15 bg-white/70 transition-colors duration-300 group-hover:border-[var(--sdg-color)] group-hover:bg-[var(--sdg-color)]"
                  >
                    {String(entry.num).padStart(2, "0")}
                  </span>
                </a>
              </li>
            )
          })}
        </ol>
      </nav>

      {/* 3 — Unified ordered list of all SDGs */}
      <section className="relative px-6 py-20 md:py-24" style={{ backgroundColor: "#ffffff" }}>
        <div className="relative mx-auto max-w-6xl">
          <ol className="flex flex-col divide-y divide-[#193d00]/10">
            {sdgs.map((entry) => {
              const sdg = sdgConfig[entry.num]
              if (!sdg) return null
              return (
                <li
                  key={entry.num}
                  id={`sdg-${entry.num}`}
                  className="scroll-mt-32 py-14 first:pt-4 md:py-16"
                >
                  <div className="grid gap-x-10 gap-y-6 md:grid-cols-[auto_1fr]">
                    {/* Big colored numeral */}
                    <div className="md:min-w-[7rem]">
                      <span
                        aria-hidden
                        className="font-[family-name:var(--font-display)] text-[clamp(3.5rem,7vw,5rem)] font-normal tabular-nums leading-[0.9]"
                        style={{ color: sdg.color }}
                      >
                        {String(entry.num).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-5">
                      <div>
                        <span
                          className="text-[10px] font-medium uppercase tracking-[0.28em]"
                          style={{ color: sdg.color }}
                        >
                          SDG {entry.num}
                        </span>
                        <h2 className="mt-2 font-[family-name:var(--font-display)] text-[clamp(1.5rem,2.8vw,2rem)] font-normal leading-tight text-foreground">
                          {sdg.name}
                        </h2>
                      </div>

                      <div className="flex flex-col gap-6">
                        {entry.contributions.map((c, i) => (
                          <div key={i} className="flex flex-col gap-2">
                            <div className="flex items-center gap-2.5">
                              <span
                                aria-hidden
                                className="inline-block h-1.5 w-1.5 rounded-full"
                                style={{ backgroundColor: sdg.color }}
                              />
                              <span className="font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.26em] text-foreground/65">
                                {c.project.toLowerCase()}
                              </span>
                            </div>
                            <p className="text-[1rem] leading-relaxed text-foreground/75">
                              {c.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      {/* 4 — Further reading + back link */}
      <section
        className="relative overflow-hidden px-6 py-16 md:py-20"
        style={{ backgroundColor: "#f6f8f1" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#193d00]/20 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#193d00]/20 to-transparent"
        />

        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.3em] text-foreground/60">
            further reading
          </span>
          <p className="mt-6 text-balance text-[1rem] leading-relaxed text-foreground/75">
            For the official framework, full goal list, and global targets, visit the{" "}
            <a
              href="https://sdgs.un.org/goals"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#193d00] underline-offset-4 transition-colors hover:text-[#0d2400] hover:underline"
            >
              United Nations SDG portal
            </a>
            .
          </p>
          <Link
            href="/our-work"
            className="group mt-8 inline-flex items-center gap-2 rounded-full border border-[#193d00]/25 px-5 py-2.5 text-[12.5px] font-medium tracking-wide text-[#193d00] transition-all duration-300 hover:border-[#193d00] hover:bg-[#193d00] hover:text-white"
          >
            <ArrowLeft
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-0.5"
              strokeWidth={2}
            />
            <span>Back to Initiatives</span>
          </Link>
        </div>
      </section>

      {/* 5 — Shared CTA */}
      <CtaSection />
    </>
  )
}
