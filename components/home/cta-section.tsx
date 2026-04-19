import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section 
      className="px-6 py-20 text-center"
      style={{ backgroundColor: "#16a34a" }}
    >
      <p className="text-xs font-medium uppercase tracking-widest text-white/80">
        Join Us
      </p>
      <h2 className="mt-4 text-3xl font-medium tracking-tight text-white md:text-4xl">
        Be Part of the Revolution
      </h2>
      <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/80">
        Every action counts. Join us in building a just and sustainable future for all.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/get-involved"
          className="inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3 text-sm font-medium text-primary transition-colors hover:bg-white/90"
        >
          Donate Now
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href="/get-involved#contact"
          className="rounded-lg border border-white/60 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
        >
          Contact Us
        </Link>
      </div>
    </section>
  )
}
