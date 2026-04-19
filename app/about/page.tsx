import type { Metadata } from "next"
import { Trash2, Target, RefreshCw, Zap } from "lucide-react"
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about LR4E — our story, mission, team, values, and commitment to climate justice.",
  alternates: { canonical: "/about" },
}

const leanPrinciples = [
  { icon: Trash2, lean: "Removing Waste", climate: "Cutting Carbon" },
  { icon: Target, lean: "Focus on What Matters", climate: "Listen to Communities" },
  { icon: Zap, lean: "Do More With Less", climate: "Affordable Solutions" },
  { icon: RefreshCw, lean: "Continuous Improvement", climate: "Adapt with Communities" },
]

const team = [
  { name: "Aditya", role: "Founder & Director", image: "placeholder" },
  { name: "Priya", role: "Operations Lead", image: "placeholder" },
  { name: "Rajesh", role: "Community Outreach", image: "placeholder" },
  { name: "Neha", role: "Program Manager", image: "placeholder" },
  { name: "Vikram", role: "Tech Lead", image: "placeholder" },
  { name: "Asha", role: "Communications", image: "placeholder" },
  { name: "Arjun", role: "Impact Lead", image: "placeholder" },
  { name: "Meera", role: "Field Coordinator", image: "placeholder" },
]

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd trail={[{ name: "About", path: "/about" }]} />
      {/* Page header */}
      <section 
        className="px-6 py-20 text-center"
        style={{ backgroundColor: "#f9fafb" }}
      >
        <p className="text-xs font-medium uppercase tracking-widest text-primary">
          Our Story
        </p>
        <h1 className="mt-4 text-4xl font-medium tracking-tight text-foreground md:text-5xl">About Us</h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
          Our story, our mission, and the people behind LR4E.
        </p>
      </section>

      {/* Organization Description */}
      <section 
        className="px-6 py-16"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="mx-auto max-w-2xl">
          <p className="text-base leading-relaxed text-muted-foreground">
            Lean Revolution 4 Earth Foundation is a not-for-profit organization, registered under Section 8 of the Companies Act, 2013 (Mumbai, India) as an environmental organisation committed to accelerating systemic solutions for a low-carbon, equitable future.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section 
        id="who-we-are" 
        className="px-6 py-20"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">Who We Are</h2>
          <div className="mt-8 flex flex-col gap-5 text-base leading-relaxed text-muted-foreground">
            <p>
              We began with a simple question:
              <br />
              <span className="font-medium text-foreground">How can we fight the climate crisis without leaving anyone behind?</span>
            </p>
            <p>
              At Lean Revolution 4 Earth Foundation, we believe caring for the planet should never mean giving up the simple joys of daily life. Every child should be able to enjoy a chocolate bar and the wrapper should return safely to a circular system, not a landfill or the ocean. Sustainability must meet the needs of today while protecting the rights and opportunities of future generations, especially for frontline communities already facing the harshest impacts of climate change.
            </p>
            <p>
              For us, climate justice is not an abstract idea. It is the lived reality of villagers facing droughts, tribal herders whose livelihoods depend on fragile mountain ecosystems, and urban poor families who lose their homes to floods every monsoon. Sustainability means protecting nature and the people who depend on it.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section 
        className="px-6 py-20"
        style={{ backgroundColor: "#16a34a" }}
      >
        <div className="mx-auto grid max-w-2xl gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h3 className="text-xl font-medium tracking-tight text-white">Our Vision</h3>
            <p className="mt-4 text-base leading-relaxed text-white/80">
              A future where people together with nature flourish. And every generation inherits a healthier, fairer, and greener Earth.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium tracking-tight text-white">Our Mission</h3>
            <p className="mt-4 text-base leading-relaxed text-white/80">
              To advance equitable climate solutions through community-led action, clean innovation, and sustainable systems built on lean, inclusive, and regenerative principles.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section 
        id="team" 
        className="px-6 py-20"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">Our Team</h2>
          <div className="mt-8 flex flex-col gap-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Lean Revolution 4 Earth Foundation is started by a group of change makers who believe that climate action must be just, inclusive, and people-centered. Coming from diverse backgrounds in social development and grassroots action, our team bring together hands-on experience and deep passion for change. But LR4E is not the story of just its founders. It is the story of all the changemakers they have met along the way.
            </p>
            <p>
              Every plastic cleaning volunteer, villagers who conserve water, every woman who builds livelihoods through sustainable farming, every youth who raises their voice for climate justice - they all are part of this journey. Our team simply carry forward these sparks of wisdom, action, and care, shaping them into a collective movement for a leaner, fairer, and greener Earth.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="group relative aspect-square overflow-hidden rounded-xl bg-muted"
              >
                {/* Placeholder image background */}
                <div className="h-full w-full flex items-center justify-center text-muted-foreground text-sm">
                  Photo
                </div>
                
                {/* Overlay with name and role on hover */}
                <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-sm font-medium text-white">{member.name}</h3>
                  <p className="text-xs text-white/80 mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lean Philosophy */}
      <section 
        className="px-6 py-20"
        style={{ backgroundColor: "#f9fafb" }}
      >
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-widest text-primary">
            Philosophy
          </p>
          <h2 className="mt-4 text-2xl font-medium tracking-tight text-foreground md:text-3xl">Why Lean for Climate?</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Lean thinking is about eliminating waste, focusing on value, and continuously
            improving. We reimagine these principles for climate justice.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {leanPrinciples.map((item) => (
              <div key={item.lean} className="flex items-start gap-4 rounded-xl bg-white p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-base font-medium text-foreground">{item.lean}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.climate}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
