import { Trash2, Target, Zap, RefreshCw } from "lucide-react"

const principles = [
  {
    icon: Trash2,
    lean: "Removing Waste",
    climate: "Cutting Carbon",
  },
  {
    icon: Target,
    lean: "Focus on What Matters",
    climate: "Listen to Communities",
  },
  {
    icon: Zap,
    lean: "Do More With Less",
    climate: "Affordable Solutions",
  },
  {
    icon: RefreshCw,
    lean: "Continuous Improvement",
    climate: "Adapt with Communities",
  },
]

export function LeanPhilosophyStrip() {
  return (
    <section className="bg-foreground px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-background/50">
          Philosophy
        </p>
        <h2 className="mt-2 text-center font-serif text-2xl font-bold text-background md:text-3xl">
          Lean Thinking for Climate Justice
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-sm leading-relaxed text-background/60">
          We apply Lean principles to climate action — eliminating waste, centering communities, and doing more with less.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((item) => (
            <div key={item.lean} className="flex flex-col items-center gap-3 rounded-xl border border-background/10 p-6 text-center">
              <item.icon className="h-5 w-5 text-primary" />
              <p className="text-sm font-semibold text-background">{item.lean}</p>
              <span className="text-xs text-background/50">{"→"} {item.climate}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
