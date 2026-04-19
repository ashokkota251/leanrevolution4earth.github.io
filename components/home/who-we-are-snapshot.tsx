import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import whoWeArePhoto from "@/public/images/home-who-we-are.jpg"

export function WhoWeAreSnapshot() {
  return (
    <section
      className="px-6 py-20"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-5">
          <span className="font-[family-name:var(--font-display)] text-[12px] italic tracking-[0.3em] text-foreground/75">
            who we are
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.875rem,4.5vw,3rem)] font-light leading-[1.12] tracking-[-0.02em] text-foreground">
            Fighting the climate crisis{" "}
            <em className="font-normal italic">
              without leaving anyone behind
            </em>
            .
          </h2>
          <p className="mt-1 text-base leading-relaxed text-foreground/70">
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

        {/* Image */}
        <figure className="relative">
          <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted shadow-[0_20px_50px_-20px_rgba(6,24,18,0.35)]">
            <Image
              src={whoWeArePhoto}
              alt="Children playing and splashing water in a forest stream"
              fill
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
              placeholder="blur"
            />
            {/* soft inner vignette for depth */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(6,24,18,0.25)_100%)]"
            />
          </div>
          <figcaption className="mt-3 flex items-center gap-3 pl-1">
            <span className="inline-block h-px w-6 bg-primary/50" />
            <span className="font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.24em] text-muted-foreground">
              a just, lean, and living earth
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
