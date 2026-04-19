import type { Metadata } from "next"
import { SDGGrid } from "@/components/sdg-badge"
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld"

export const metadata: Metadata = {
  title: "Our Initiatives",
  description: "Explore LR4E's three flagship projects — Navya Urja, Saahas Taru, and Bank of Plastic.",
  alternates: { canonical: "/initiatives" },
}

const initiatives = [
  {
    id: "navya-urja",
    title: "Project Navya Urja",
    hindi: "प्रोजेक्ट नव्य ऊर्जा",
    theme: "Renewable Energy & Clean Solutions",
    themeColor: "text-sky-blue",
    bg: "#ffffff",
    intro:
      "Project Navya Urja drives energy justice by bringing affordable, decentralized clean energy solutions to rural, coastal, and tribal communities. It combines solar microgrids, biogas units, and energy literacy programs to ensure no home or livelihood is left in the dark.",
    objectives: [
      "Enable universal access to clean energy for low-income and remote areas.",
      "Promote climate-resilient infrastructure for farms, schools, and community hubs.",
      "Create green livelihoods through solar entrepreneurship and repair networks - 'Urja Sakhis and Urja Saathis' (community solar entrepreneurs).",
      "Support local governments and institutions to adopt lean, low-carbon practices.",
    ],
    sdgs: [7, 13, 8, 11],
    placeholder: "Solar panel installation in rural community",
  },
  {
    id: "saahas-taru",
    title: "Project Saahas Taru",
    hindi: "प्रोजेक्ट साहस तरू",
    theme: "Tree of Courage — Community-Led Afforestation",
    themeColor: "text-primary",
    bg: "#f9fafb",
    intro:
      "Project Saahas Taru works at the intersection of ecosystem restoration and community wellbeing. It empowers indigenous and rural communities to protect forests, coasts, and mountains—linking conservation with dignity-based livelihoods.",
    objectives: [
      "Restore degraded ecosystems (forest, mangrove, watershed, and hill).",
      "Strengthen community-led conservation through local governance and rights.",
      "Develop nature-linked green livelihoods (e.g., honey, bamboo, eco-tourism, herbal produce).",
      "Promote biodiversity-based carbon sinks and sustainable land use.",
    ],
    sdgs: [15, 13, 1, 12],
    placeholder: "Community tree planting on degraded land",
  },
  {
    id: "bank-of-waste",
    title: "The Bank of Waste",
    hindi: "प्रोजेक्ट बँक ऑफ वेस्ट",
    theme: "Small Actions. Big Impact",
    themeColor: "text-blue",
    bg: "#ffffff",
    intro:
      "The Bank of Waste is a youth-driven movement transforming educational institutions into plastic-responsible zones. Under this initiative, campuses become 'waste deposit banks', where students, teachers, and staff deposit their plastic waste instead of throwing it away. The deposited items are counted, recorded, and recycled through verified collection partners, ensuring zero plastic leakage from campuses to landfills or the environment.",
    objectives: [
      "To eliminate single-use plastic waste from school and college campuses.",
      "To create environmental accountability and behavioural change among youth.",
      "To establish a circular model of collection, segregation, and recycling at the source.",
      "To link climate education with hands-on sustainability practice.",
      "To build youth ambassadors for the Revolution 4 Earth movement.",
    ],
    sdgs: [12, 13, 4, 17],
    placeholder: "Youth collecting and sorting plastic on campus",
  },
]

export default function InitiativesPage() {
  return (
    <>
      <BreadcrumbJsonLd trail={[{ name: "Initiatives", path: "/initiatives" }]} />
      {/* Page header */}
      <section 
        className="px-6 py-20 text-center"
        style={{ backgroundColor: "#16a34a" }}
      >
        <p className="text-xs font-medium uppercase tracking-widest text-white/80">
          On the Ground
        </p>
        <h1 className="mt-4 text-4xl font-medium tracking-tight text-white md:text-5xl">Our Initiatives</h1>
        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/80">
          Three flagship projects driving real-world impact on the ground.
        </p>
      </section>

      {/* Tab navigation */}
      <div className="sticky top-16 z-20 border-b border-border bg-background/95 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-5xl overflow-x-auto px-4">
          {initiatives.map((project) => (
            <a
              key={project.id}
              href={`#${project.id}`}
              className="shrink-0 border-b-2 border-transparent px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <span>{project.title.replace("Project ", "")}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Initiatives */}
      {initiatives.map((project) => (
        <section 
          key={project.id} 
          id={project.id} 
          className="scroll-mt-32 px-6 py-20"
          style={{ backgroundColor: project.bg }}
        >
          <div className="mx-auto max-w-2xl">
            {/* Header */}
            <div>
              <h2 className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">{project.title}</h2>
              {project.hindi && (
                <p className="mt-2 text-base text-muted-foreground">{project.hindi}</p>
              )}
              <p className={`mt-2 text-xs font-medium uppercase tracking-widest ${project.themeColor}`}>
                {project.theme}
              </p>
            </div>

            {/* Image placeholder */}
            <div className="mt-8 flex aspect-video items-center justify-center rounded-xl bg-muted text-sm text-muted-foreground">
              {project.placeholder}
            </div>

            {/* Intro */}
            <p className="mt-8 text-base leading-relaxed text-muted-foreground">{project.intro}</p>

            {/* Objectives */}
            <div className="mt-8">
              <h3 className="text-base font-medium text-foreground">Objectives</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {project.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {obj}
                  </li>
                ))}
              </ul>
            </div>

            {/* SDG Alignment */}
            <SDGGrid sdgs={project.sdgs} />
          </div>
        </section>
      ))}
    </>
  )
}
