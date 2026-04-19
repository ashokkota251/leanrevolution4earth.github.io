import type { Metadata } from "next"
import Image from "next/image"
import { Mail, MapPin } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld"
import getInvolvedHero from "@/public/images/get-involved/get-involved-hero.jpg"
import supportUsImage from "@/public/images/get-involved/support-us.jpg"

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Donate or partner with Lean Revolution 4 Earth — India's climate justice NGO. Support community-led action, clean energy, afforestation, and circular solutions.",
  alternates: { canonical: "/get-involved/" },
}

const GRAIN_URL =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.9 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

const supportParagraphs = [
  "Your donation directly supports communities on the frontlines of climate change. From solar panels in energy-poor villages to trees planted on degraded land, every rupee makes a measurable difference.",
  "Lean Revolution 4 Earth Foundation is a not-for-profit organization, registered under Section 8 of the Companies Act, 2013 in Mumbai, India.",
  "We believe that trust and transparency are the foundation of impact. All contributions, grants, and donations are used responsibly to support our mission of climate action, community empowerment, and environmental justice.",
  "We maintain audited accounts and prioritise lean, cost-efficient operations to maximise impact.",
  "Your support helps us turn resources into real action — protecting nature, empowering communities, and building a sustainable future for generations to come.",
]

export default function GetInvolvedPage() {
  return (
    <>
      <BreadcrumbJsonLd trail={[{ name: "Get Involved", path: "/get-involved" }]} />

      {/* 1 — Editorial hero: ACT NOW mural backdrop */}
      <section className="relative isolate flex min-h-[68vh] items-center overflow-hidden bg-[#0d2400] text-white md:min-h-[76vh]">
        <Image
          src={getInvolvedHero}
          alt=""
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          className="object-cover"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(14,29,94,0.5)_0%,rgba(13,36,0,0.3)_40%,rgba(7,18,0,0.85)_100%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_15%,rgba(14,29,94,0.3)_0%,transparent_55%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.1] mix-blend-overlay"
          style={{ backgroundImage: GRAIN_URL }}
        />
        {/* Halftone dot overlay — editorial texture + text legibility */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 lr4e-dotgrid"
        />

        <div className="relative z-10 w-full px-6 py-24 md:py-28">
          <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
            <span className="font-[family-name:var(--font-display)] text-[12px] italic tracking-[0.3em] text-white/80">
              take action
            </span>
            <span aria-hidden className="mt-5 block h-px w-12 bg-white/50" />
            <h1 className="mt-7 font-[family-name:var(--font-display)] text-[clamp(2.25rem,5.5vw,4.25rem)] font-light leading-[1.04] tracking-[-0.02em] text-white">
              Get <em className="font-normal italic">Involved</em>
            </h1>
          </div>
        </div>
      </section>

      {/* 2 — Simple white intro strip */}
      <section className="relative px-6 py-16 md:py-20" style={{ backgroundColor: "#ffffff" }}>
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <p className="text-balance font-[family-name:var(--font-display)] text-[clamp(1.05rem,1.75vw,1.25rem)] font-normal leading-[1.65] tracking-[-0.003em] text-foreground/85">
            Every <em className="italic text-[#193d00]">contribution</em>, every{" "}
            <em className="italic text-[#193d00]">connection</em>, every{" "}
            <em className="italic text-[#193d00]">voice</em> matters. Join the revolution — support the work, or reach out to build it with us.
          </p>
        </div>
      </section>

      {/* 3 — Sticky nav: cream strip with forest pill chips */}
      <nav
        aria-label="Get involved navigation"
        className="sticky top-[56px] z-20 border-y border-[#193d00]/10 bg-[#f6f8f1]/95 backdrop-blur-md md:top-[60px]"
      >
        <ol className="mx-auto flex max-w-6xl items-center gap-2 overflow-x-auto px-4 py-3 md:gap-3 md:px-6">
          {[
            { id: "support", label: "Support Us", index: "i" },
            { id: "contact", label: "Contact Us", index: "ii" },
          ].map((tab) => (
            <li key={tab.id} className="shrink-0">
              <a
                href={`#${tab.id}`}
                className="group flex items-baseline gap-2 rounded-full border border-[#193d00]/15 bg-white/70 px-3.5 py-1.5 text-[12.5px] font-medium tracking-wide text-[#193d00]/85 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#193d00] hover:bg-[#193d00] hover:text-white md:px-4"
              >
                <span
                  aria-hidden
                  className="font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.24em] text-[#193d00]/55 transition-colors group-hover:text-white/80"
                >
                  {tab.index}
                </span>
                <span className="whitespace-nowrap">{tab.label}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* 4 — Support Us chapter */}
      <section
        id="support"
        className="relative scroll-mt-32 overflow-hidden px-6 py-16 md:py-20"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="relative mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          {/* Image panel */}
          <figure className="relative lg:sticky lg:top-36">
            <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#f4f6f1] shadow-[0_30px_60px_-30px_rgba(13,36,0,0.35)]">
              <Image
                src={supportUsImage}
                alt="A sea turtle gliding gently through sunlit ocean water"
                fill
                sizes="(min-width: 1024px) 540px, (min-width: 640px) 80vw, 100vw"
                placeholder="blur"
                className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(13,36,0,0.32)_100%)]"
              />
              <span
                aria-hidden
                className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/10 font-[family-name:var(--font-display)] text-[15px] italic tracking-[0.08em] text-white backdrop-blur-sm"
              >
                i
              </span>
            </div>
            <figcaption className="mt-4 flex items-center gap-3 pl-1">
              <span className="inline-block h-px w-6 bg-[#193d00]/55" />
              <span className="font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.24em] text-foreground/55">
                for every living being
              </span>
            </figcaption>
          </figure>

          {/* Text column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-baseline gap-3">
              <span
                aria-hidden
                className="font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.3em] text-[#193d00]"
              >
                chapter i
              </span>
              <span aria-hidden className="h-px w-8 bg-[#193d00]/45" />
            </div>

            <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.875rem,3.75vw,2.75rem)] font-light leading-[1.1] tracking-[-0.015em] text-foreground">
              Support <em className="font-normal italic text-[#193d00]">Us</em>
            </h2>

            <p className="text-balance font-[family-name:var(--font-display)] text-[clamp(1.1rem,1.7vw,1.3rem)] italic leading-[1.5] text-[#193d00]">
              Every rupee turns into something real — a solar panel, a sapling, a clean campus.
            </p>

            <div className="flex flex-col gap-5 text-[1rem] leading-relaxed text-foreground/75">
              {supportParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Animals welfare note */}
            <div className="mt-4 rounded-2xl border-l-2 border-[#193d00]/40 bg-[#f6f8f1]/60 px-6 py-5">
              <p className="font-[family-name:var(--font-display)] text-[1.05rem] italic leading-relaxed text-foreground/85">
                &ldquo;A portion of every donation also supports the wellbeing and welfare of animals.&rdquo;
              </p>
            </div>

            {/* Donation placeholder card */}
            <div className="mt-4 rounded-2xl border border-dashed border-[#193d00]/30 bg-white p-8 text-center">
              <span className="font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.3em] text-[#193d00]/75">
                coming soon
              </span>
              <p className="mt-4 font-[family-name:var(--font-display)] text-[1.3rem] font-normal leading-tight text-foreground">
                Donate via <em className="italic text-[#193d00]">Razorpay</em>,{" "}
                <em className="italic text-[#193d00]">UPI</em>, or{" "}
                <em className="italic text-[#193d00]">Bank transfer</em>.
              </p>
              <p className="mx-auto mt-3 max-w-md text-[0.9rem] leading-relaxed text-foreground/60">
                Secure donation details will be published here shortly. In the meantime, reach out below to support us directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 — Contact Us chapter */}
      <section
        id="contact"
        className="relative scroll-mt-32 overflow-hidden px-6 py-16 md:py-20"
        style={{ backgroundColor: "#f6f8f1" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_50%,rgba(255,255,255,0.7)_0%,transparent_75%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#193d00]/20 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#193d00]/20 to-transparent"
        />

        <div className="relative mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-baseline gap-3">
              <span
                aria-hidden
                className="font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.3em] text-[#193d00]"
              >
                chapter ii
              </span>
              <span aria-hidden className="h-px w-8 bg-[#193d00]/45" />
            </div>

            <h2 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(1.875rem,3.75vw,2.75rem)] font-light leading-[1.1] tracking-[-0.015em] text-foreground">
              Contact <em className="font-normal italic text-[#193d00]">Us</em>
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-[1rem] leading-relaxed text-foreground/75">
              Have a question, an idea, or want to collaborate?{" "}
              <em className="italic text-[#193d00]">Drop us a message.</em>
            </p>
          </div>

          <div className="mt-12 grid items-start gap-8 md:grid-cols-[1.15fr_0.85fr] md:gap-10">
            {/* Form */}
            <ContactForm />

            {/* Info column */}
            <div className="flex flex-col gap-5">
              <div className="rounded-2xl border border-[#193d00]/15 bg-white p-7">
                <span className="font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.24em] text-[#193d00]/75">
                  reach us at
                </span>
                <div className="mt-5 flex flex-col gap-4">
                  <div className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-foreground/75">
                    <MapPin
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#193d00]"
                      strokeWidth={1.5}
                    />
                    <span>
                      G-1, BLDG 1, C Wing, Kamala Nagar, Chincholi Bunder Rd, Malad (W), Mumbai — 400 064
                    </span>
                  </div>
                  <a
                    href="mailto:info@leanrevolution4earth.com"
                    className="group flex items-start gap-3 text-[0.95rem] leading-relaxed text-foreground/75 transition-colors hover:text-[#193d00]"
                  >
                    <Mail
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#193d00]"
                      strokeWidth={1.5}
                    />
                    <span className="break-all underline-offset-4 group-hover:underline">
                      info@leanrevolution4earth.com
                    </span>
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-[#193d00]/15 bg-white p-7">
                <span className="font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.24em] text-[#193d00]/75">
                  follow us
                </span>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-foreground/70">
                  Social channels will be linked here once live.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Twitter", "Instagram", "LinkedIn"].map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-[#193d00]/20 bg-white px-3.5 py-1 text-[11.5px] font-medium tracking-wide text-[#193d00]/75"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-[#193d00]/15 bg-white p-7">
                <span className="font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.24em] text-[#193d00]/75">
                  partner with us
                </span>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-foreground/70">
                  Institutions, corporates, and grant-makers — drop us a line; we&apos;ll share a brief on current program needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
