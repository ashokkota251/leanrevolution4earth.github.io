import type { Metadata } from "next"
import { Heart, Mail, MapPin } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Get Involved | Lean Revolution 4 Earth",
  description: "Support LR4E through donations or get in touch with our team. Every action counts.",
}

export default function GetInvolvedPage() {
  return (
    <>
      {/* Page header */}
      <section 
        className="px-6 py-20 text-center"
        style={{ backgroundColor: "#16a34a" }}
      >
        <p className="text-xs font-medium uppercase tracking-widest text-white/80">
          Get Involved
        </p>
        <h1 className="mt-4 text-4xl font-medium tracking-tight text-white md:text-5xl">Take Action</h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-white/80">
          Every contribution, every connection, every voice matters.
        </p>
      </section>

      {/* Support Us - Main section */}
      <section 
        className="px-6 py-20"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="mx-auto max-w-2xl">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">Support Us</h2>
          </div>

          {/* Picture space */}
          <div className="mt-8 flex aspect-video items-center justify-center rounded-xl bg-muted">
            <p className="text-sm text-muted-foreground">Picture Space</p>
          </div>

          {/* Content */}
          <div className="mt-10 flex flex-col gap-5">
            <p className="text-base leading-relaxed text-muted-foreground">
              Your donation directly supports communities on the frontlines of climate change. From solar panels in energy-poor villages to trees planted on degraded land, every rupee makes a measurable difference.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Lean Revolution 4 Earth Foundation is a not-for-profit organization, registered under Section 8 of the Companies Act, 2013 (Mumbai, India).
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              We believe that trust and transparency are the foundation of impact. All contributions, grants, and donations are used responsibly to support our mission of climate action, community empowerment, and environmental justice.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              We maintain audited accounts and prioritize lean, cost-efficient operations to maximize impact.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Your support helps us turn resources into real action—protecting nature, empowering communities, and building a sustainable future for generations to come.
            </p>
          </div>

          {/* Animals Welfare Section */}
          <div className="mt-12 border-t border-border pt-12">
            <p className="text-base font-medium text-foreground italic">
              &ldquo;Part Of The Donation Will Also Be Used For Wellbeing And Welfare Of Animals.&rdquo;
            </p>

            {/* Picture space for animals welfare */}
            <div className="mt-6 flex aspect-video items-center justify-center rounded-xl bg-muted">
              <p className="text-sm text-muted-foreground">Picture Space for Animals Welfare</p>
            </div>
          </div>

          {/* Donation CTA placeholder */}
          <div className="mt-10 rounded-xl border-2 border-dashed border-primary/30 p-8 text-center">
            <p className="text-base font-medium text-foreground">Donation options coming soon</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Razorpay / UPI / Bank Transfer details will be added here.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section 
        id="contact" 
        className="px-6 py-20"
        style={{ backgroundColor: "#f9fafb" }}
      >
        <div className="mx-auto max-w-2xl">
          <p className="text-center text-xs font-medium uppercase tracking-widest text-primary">
            Reach Out
          </p>
          <h2 className="mt-4 text-center text-2xl font-medium tracking-tight text-foreground md:text-3xl">Contact Us</h2>
          <p className="mx-auto mt-4 max-w-md text-center text-base leading-relaxed text-muted-foreground">
            Have a question, idea, or want to collaborate? Drop us a message.
          </p>

          <div className="mt-12 grid items-start gap-10 md:grid-cols-2">
            {/* Form */}
            <ContactForm />

            {/* Info */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4 rounded-xl bg-white p-6">
                <h3 className="text-base font-medium text-foreground">Reach us at</h3>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>G-1, BLDG 1, C Wing, Kamala Nagar, Chincholi Bunder Rd, Malad (W), Mumbai - 400 064</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  <span>info@leanrevolution4earth.com</span>
                </div>
              </div>

              <div className="rounded-xl bg-white p-6">
                <h3 className="text-base font-medium text-foreground">Follow Us</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Social media handles will be linked here once available.
                </p>
                <div className="mt-4 flex gap-2">
                  {["Twitter", "Instagram", "LinkedIn"].map((s) => (
                    <span key={s} className="rounded-lg border border-border px-3 py-2 text-xs text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
