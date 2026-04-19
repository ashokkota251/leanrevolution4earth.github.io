import Link from "next/link"
import { Sprout, Waves, Lightbulb, Megaphone } from "lucide-react"

const pillars = [
  {
    id: "green-transitions",
    icon: Sprout,
    title: "Green Transitions & Resilience",
    bg: "#ffffff",
    description: [
      "Empowering our people and our earth with clean, resilient futures.",
      "The world is shifting and so must we. At Lean Revolution 4 Earth Foundation, we believe the transition to green energy and resilient systems is not just about technology, it is about justice, dignity, and opportunity.",
      "A Green Transition is the journey toward a low-carbon, resource-efficient, and inclusive economy. It means efficiently harnessing renewable energy sources such as solar, wind, and bio energy, resulting in a cleaner, affordable, and more sustainable future accessible to all.",
      "Through this pillar, we promote climate mitigation and adaptation by advancing sustainable infrastructure, expanding access to clean energy, and fostering disaster-resilient communities. We also work with businesses and institutions to reduce emissions and adopt green practices that benefit both people and the planet.",
    ],
  },
  {
    id: "nature-communities",
    icon: Waves,
    title: "Nature, Communities & Livelihoods",
    bg: "#f9fafb",
    description: [
      "Protecting ecosystems while creating green livelihoods",
      "This pillar ensures that climate action is fair, inclusive, and community-driven. It empowers vulnerable communities with the skills and resources to lead local solutions that protect ecosystems, create sustainable livelihoods, and uphold basic rights. Climate change isn't just about rising temperatures. It's about people, communities, and justice.",
      "Guided by lean principles, it promotes efficient, resource-wise, and adaptive approaches that maximize local impact with minimal waste. By linking local initiatives with global climate justice movements, it advances a just transition toward a low-carbon economy that delivers sustainable growth and equity for all.",
    ],
  },
  {
    id: "climate-consciousness",
    icon: Lightbulb,
    title: "Climate Consciousness",
    bg: "#ffffff",
    description: [
      "Inspiring minds, building skills, and shaping climate leaders",
      "This pillar fosters climate literacy, behaviour change, and inclusive capacity-building. It equips communities, especially the youth with tools, skills, and opportunities to lead a sustainable transformation.",
      "At Lean Revolution 4 Earth, we make climate literacy simple and accessible, so everyone can understand the crisis, act on solutions, and build a fairer, greener future. Because knowledge and awareness are the first step toward climate action.",
      "Through workshops, campaigns, and digital platforms, we translate complex environmental science into actionable insights. Our programs target schools, colleges, local leaders, and the public to foster climate literacy, behavioral change, and community-led solutions. By combining traditional knowledge with modern science, we create inclusive learning ecosystems that inspire local action and systemic transformation. Knowledge becomes the power that drives grassroots climate solutions.",
    ],
  },
  {
    id: "climate-advocacy",
    icon: Megaphone,
    title: "Climate Advocacy",
    bg: "#f9fafb",
    description: [
      "Turning local voices into global climate justice",
      "The transition to a climate-just future requires strong, inclusive governance systems that place communities at the center of decision-making. Yet, climate policies often remain disconnected from grassroots realities, and marginalized groups continue to be excluded from key processes that shape their lives and environment.",
      "The Governance, Policy & Advocacy pillar of Lean Revolution 4 Earth seeks to democratize climate governance by enabling local voices to influence policy, ensuring legal protection of environmental rights, and bridging global climate frameworks with community action. We believe that transformative change can only occur when people - not just policymakers- are empowered to lead the response to the ongoing pollution and climate crisis.",
    ],
  },
]

export default function PillarsPage() {
  return (
    <>
      {/* Page header */}
      <section 
        className="px-6 py-20 text-center"
        style={{ backgroundColor: "#f9fafb" }}
      >
        <p className="text-xs font-medium uppercase tracking-widest text-primary">Foundation</p>
        <h1 className="mt-4 text-4xl font-medium tracking-tight text-foreground md:text-5xl">Our 4 Pillars</h1>
        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
          To turn vision into action, we&apos;ve built our work around 4 action oriented pillars with local wisdom, clean innovation, and lean thinking.
        </p>
      </section>

      {/* Sticky tab nav */}
      <div className="sticky top-16 z-20 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl overflow-x-auto px-4">
          {pillars.map((pillar) => {
            const TabIcon = pillar.icon
            return (
              <a
                key={pillar.id}
                href={`#${pillar.id}`}
                className="group flex shrink-0 items-center gap-2 border-b-2 border-transparent px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <TabIcon className="h-4 w-4" />
                <span className="hidden sm:inline">{pillar.title}</span>
                <span className="sm:hidden">{pillar.title.split(" ")[0]}</span>
              </a>
            )
          })}
        </div>
      </div>

      {/* All pillar sections */}
      {pillars.map((pillar) => {
        const Icon = pillar.icon
        return (
          <section
            key={pillar.id}
            id={pillar.id}
            className="scroll-mt-32 px-6 py-20"
            style={{ backgroundColor: pillar.bg }}
          >
            <div className="mx-auto max-w-2xl">
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </div>

              {/* Heading */}
              <h2 className="mt-6 text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                {pillar.title}
              </h2>

              {/* Picture space */}
              <div className="mt-8 flex aspect-video items-center justify-center rounded-xl bg-muted">
                <p className="text-sm text-muted-foreground">Picture Space</p>
              </div>

              {/* Description */}
              <div className="mt-8 flex flex-col gap-5">
                {pillar.description.map((para, i) => (
                  <p key={i} className="text-base leading-relaxed text-muted-foreground">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* CTA Section */}
      <section 
        className="px-6 py-20"
        style={{ backgroundColor: "#1a5a9e" }}
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-white/80">Support</p>
          <h2 className="mt-4 text-2xl font-medium tracking-tight text-white md:text-3xl">
            Support and Make Pillars Strong
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/80">
            Join our movement for climate justice and be part of the transformation.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/get-involved"
              className="rounded-lg bg-white px-7 py-3 text-sm font-medium text-blue transition-colors hover:bg-white/90"
            >
              Join Us
            </Link>
            <Link
              href="/get-involved"
              className="rounded-lg border border-white/60 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Donate & Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
