import { Users, TreePine, Weight, School } from "lucide-react"

const stats = [
  { icon: Users, label: "Communities Reached", value: "--" },
  { icon: TreePine, label: "Trees Planted", value: "--" },
  { icon: Weight, label: "Kg Plastic Collected", value: "--" },
  { icon: School, label: "Schools Engaged", value: "--" },
]

export function ImpactNumbers() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Measuring Change
        </p>
        <h2 className="mt-2 text-center font-serif text-3xl font-bold text-foreground">
          Our Impact
        </h2>
        <p className="mx-auto mt-3 max-w-sm text-center text-sm leading-relaxed text-muted-foreground">
          Numbers coming soon as our projects grow.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-light">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-3xl font-bold tracking-tight text-foreground">{stat.value}</span>
              <span className="text-xs font-medium text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
