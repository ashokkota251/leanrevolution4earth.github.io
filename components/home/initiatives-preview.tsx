import Link from "next/link"
import { ArrowRight } from "lucide-react"

const initiatives = [
  {
    title: "Project Navya Urja",
    hindi: "प्रोजेक्ट नव्य ऊर्जा",
    description:
      "Project Navya Urja drives energy justice by bringing affordable, decentralized clean energy solutions to rural, coastal, and tribal communities.",
    href: "/initiatives#navya-urja",
    accent: "border-t-sky-blue",
  },
  {
    title: "Project Saahas Taru",
    hindi: "प्रोजेक्ट साहस तरू",
    description:
      "Project Saahas Taru works at the intersection of ecosystem restoration, community-led afforestation and community wellbeing.",
    href: "/initiatives#saahas-taru",
    accent: "border-t-primary",
  },
  {
    title: "The Bank of Waste",
    hindi: "",
    description:
      "The Bank of Waste is a youth-driven movement transforming educational institutions into waste-responsible zones.",
    href: "/initiatives#bank-of-plastic",
    accent: "border-t-blue",
  },
]

export function InitiativesPreview() {
  return (
    <section 
      className="px-6 py-20"
      style={{ backgroundColor: "#f9fafb" }}
    >
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-primary">
          On the Ground
        </p>
        <h2 className="mt-4 text-center text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Our Initiatives
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-base leading-relaxed text-muted-foreground">
          Three flagship projects driving real-world impact on the ground.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {initiatives.map((item) => (
            <div
              key={item.title}
              className={`group flex flex-col rounded-xl border-t-3 bg-white p-6 shadow-sm transition-all hover:shadow-md ${item.accent}`}
            >
              <h3 className="text-base font-medium text-foreground">{item.title}</h3>
              {item.hindi && (
                <p className="mt-1 text-sm text-muted-foreground">{item.hindi}</p>
              )}
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <Link
                href={item.href}
                className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-green-dark"
              >
                Know More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
