import Link from "next/link"
import { Sprout, Waves, Lightbulb, Megaphone, ArrowRight } from "lucide-react"

const pillars = [
  {
    icon: Sprout,
    title: "Green Transitions & Resilience",
    description: "Building sustainable energy and climate-resilient communities.",
    href: "/pillars#green-transitions",
  },
  {
    icon: Waves,
    title: "Nature, Communities & Livelihoods",
    description: "Protecting ecosystems while strengthening local livelihoods.",
    href: "/pillars#nature-communities",
  },
  {
    icon: Lightbulb,
    title: "Climate Consciousness",
    description: "Raising awareness and empowering informed climate action.",
    href: "/pillars#climate-consciousness",
  },
  {
    icon: Megaphone,
    title: "Climate Advocacy",
    description: "Amplifying grassroots voices for systemic policy change.",
    href: "/pillars#climate-advocacy",
  },
]

export function PillarsPreview() {
  return (
    <section 
      className="px-6 py-20"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-primary">
          Foundation
        </p>
        <h2 className="mt-4 text-center text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Our 4 Pillars
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-base leading-relaxed text-muted-foreground">
          To turn vision into action, we&apos;ve built our work around 4 action oriented pillars with local wisdom, clean innovation, and lean thinking.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <Link
              key={pillar.title}
              href={pillar.href}
              className="group flex flex-col gap-4 rounded-xl bg-muted/70 p-6 transition-all hover:bg-muted hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                <pillar.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-base font-medium leading-snug text-foreground">{pillar.title}</h3>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Learn more <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
