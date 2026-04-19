import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function WhoWeAreSnapshot() {
  return (
    <section 
      className="px-6 py-20"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-medium uppercase tracking-widest text-primary">
            Who We Are
          </p>
          <h2 className="text-3xl font-medium leading-snug tracking-tight text-foreground md:text-4xl">
            Fighting the climate crisis without leaving anyone behind.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            This revolution is about climate justice and intergenerational equity and ensuring that tomorrow&apos;s children inherit clean air, safe water, and thriving forests. At Lean Revolution 4 Earth, we envision a world where no one is left behind, because justice, dignity, and sustainability are rights that belong to all.
          </p>
          <blockquote className="border-l-2 border-primary/30 pl-4 text-base italic leading-relaxed text-muted-foreground">
            &ldquo;How can we fight the climate crisis without leaving anyone behind?&rdquo;
          </blockquote>
          <Link
            href="/about"
            className="mt-2 inline-flex w-fit items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-green-dark"
          >
            Learn More About Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Image placeholder */}
        <div className="aspect-[4/3] w-full rounded-2xl bg-muted flex items-center justify-center">
          <span className="text-sm text-muted-foreground">Community Photo Placeholder</span>
        </div>
      </div>
    </section>
  )
}
