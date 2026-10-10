import type { Metadata } from "next"
import Link from "next/link"
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Lean Revolution 4 Earth Foundation collects, uses, and protects your personal information.",
  alternates: { canonical: "/privacy/" },
}

const UPDATED = "10 October 2026"

const SECTIONS = [
  { id: "who-we-are",       title: "Who we are" },
  { id: "what-we-collect",  title: "Information we collect" },
  { id: "how-we-use",       title: "How we use your information" },
  { id: "sharing",          title: "Who we share your information with" },
  { id: "cookies",          title: "Cookies and analytics" },
  { id: "retention",        title: "How long we keep your information" },
  { id: "your-rights",      title: "Your rights" },
  { id: "security",         title: "Security" },
  { id: "children",         title: "Children's privacy" },
  { id: "changes",          title: "Changes to this policy" },
  { id: "grievance",        title: "Grievance Officer" },
]

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbJsonLd trail={[{ name: "Privacy Policy", path: "/privacy" }]} />

      <main className="min-h-screen bg-[#faf8f0] px-6 py-28 text-[#0d2400] md:py-32">
        <article className="mx-auto max-w-3xl">

          {/* Header */}
          <header className="text-center">
            <p className="font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.32em] text-[#193d00]/55">
              legal
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-display)] font-light leading-[1.02] tracking-[-0.025em] text-[#0d2400]"
                style={{ fontSize: "clamp(2.25rem,5vw,3.25rem)" }}>
              Privacy{" "}
              <em className="italic text-[#193d00]">Policy.</em>
            </h1>
            <p className="mt-4 text-[12px] uppercase tracking-[0.22em] text-[#0d2400]/50">
              Last updated · {UPDATED}
            </p>
          </header>

          <div className="my-14 flex items-center justify-center gap-4 opacity-60">
            <span aria-hidden className="h-px w-10 bg-[#193d00]/25" />
            <span aria-hidden className="font-[family-name:var(--font-display)] text-[1rem] italic text-[#193d00]">❧</span>
            <span aria-hidden className="h-px w-10 bg-[#193d00]/25" />
          </div>

          {/* Intro */}
          <p className="text-[15px] leading-[1.8] text-[#0d2400]/80">
            Lean Revolution 4 Earth Foundation (&quot;LR4E&quot;, &quot;we&quot;, &quot;us&quot;)
            is committed to protecting your privacy. This policy explains what
            information we collect when you visit this website or make a
            donation, how we use it, and the rights you have over it.
          </p>

          {/* Table of contents */}
          <nav aria-label="Table of contents" className="mt-10 rounded-xl border border-[#193d00]/10 bg-white/60 p-6">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#193d00]/55">
              on this page
            </p>
            <ol className="grid grid-cols-1 gap-2 text-[13.5px] text-[#193d00]/80 sm:grid-cols-2">
              {SECTIONS.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="hover:text-[#193d00] hover:underline underline-offset-2">
                    <span className="font-[family-name:var(--font-display)] italic text-[#193d00]/50">
                      {String(i + 1).padStart(2, "0")} ·{" "}
                    </span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Sections */}
          <div className="mt-14 space-y-14 text-[15px] leading-[1.8] text-[#0d2400]/80">

            <Section id="who-we-are" title="Who we are" num="01">
              <p>
                Lean Revolution 4 Earth Foundation is a non-profit company
                registered under Section 8 of the Companies Act, 2013.
              </p>
              <p>
                <strong>Registered office:</strong> G-1, BLDG 1, C Wing, Kamala
                Nagar, Chincholi Bunder Road, Malad (W), Mumbai 400 064, India.
                <br />
                <strong>CIN:</strong> U94990MH2025NPL453396.
                <br />
                <strong>Contact:</strong>{" "}
                <a href="mailto:info@leanrevolution4earth.com" className="text-[#193d00] underline underline-offset-2">
                  info@leanrevolution4earth.com
                </a>
              </p>
            </Section>

            <Section id="what-we-collect" title="Information we collect" num="02">
              <p>We collect the following categories of information:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Information you give us</strong> — your name and email
                  address when you donate; your name, email, and message when
                  you contact us; your PAN (optional, where required for 80G
                  tax certificates).
                </li>
                <li>
                  <strong>Payment information</strong> — processed by our
                  payment partner Zoho Payments. We do not see or store your
                  card, UPI, or bank details.
                </li>
                <li>
                  <strong>Automatically collected</strong> — standard log data
                  such as IP address, browser type, and pages visited. If you
                  consent to analytics cookies, we also collect anonymised
                  usage data through Google Analytics.
                </li>
              </ul>
            </Section>

            <Section id="how-we-use" title="How we use your information" num="03">
              <p>We use the information we collect to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Process your donation and send a receipt.</li>
                <li>Issue your 80G tax deduction certificate.</li>
                <li>Respond to your enquiries and feedback.</li>
                <li>Send quarterly impact updates (where you have opted in).</li>
                <li>
                  Understand how our site is used and improve it (only with
                  your consent to analytics cookies).
                </li>
                <li>
                  Comply with our legal obligations under Indian law and
                  prevent fraud or abuse.
                </li>
              </ul>
            </Section>

            <Section id="sharing" title="Who we share your information with" num="04">
              <p>
                We do not sell your information. We only share it with the
                following service providers who help us run this website and
                process donations:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Zoho Payments</strong> — processes your donation
                  payment.{" "}
                  <a href="https://www.zoho.com/privacy.html" target="_blank" rel="noopener noreferrer" className="text-[#193d00] underline underline-offset-2">
                    Zoho privacy policy ↗
                  </a>
                </li>
                <li>
                  <strong>Vercel</strong> — hosts this website.{" "}
                  <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#193d00] underline underline-offset-2">
                    Vercel privacy policy ↗
                  </a>
                </li>
                <li>
                  <strong>Google Analytics</strong> — anonymised usage
                  analytics, only if you accept analytics cookies.{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#193d00] underline underline-offset-2">
                    Google privacy policy ↗
                  </a>
                </li>
              </ul>
              <p>
                We may also disclose your information if required by law, court
                order, or Indian government regulation.
              </p>
            </Section>

            <Section id="cookies" title="Cookies and analytics" num="05">
              <p>
                We use essential cookies that are necessary for the site to
                function. We also use optional analytics cookies (Google
                Analytics 4) to understand aggregate traffic patterns. These
                are only loaded if you give consent via our cookie banner.
              </p>
              <p>
                You can change your choice at any time by clearing your browser
                storage for this site and reloading the page — the banner will
                reappear.
              </p>
            </Section>

            <Section id="retention" title="How long we keep your information" num="06">
              <p>
                We keep donation records for the period required by Indian
                income tax and company law (currently a minimum of eight
                years). Analytics data is retained according to our Google
                Analytics configuration. We delete other personal information
                when it is no longer needed for the purpose for which it was
                collected.
              </p>
            </Section>

            <Section id="your-rights" title="Your rights" num="07">
              <p>Under Indian law (including the Digital Personal Data Protection Act, 2023), you have the right to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Access the personal information we hold about you.</li>
                <li>Correct inaccurate information.</li>
                <li>Request erasure, subject to our legal retention duties.</li>
                <li>Withdraw consent for analytics cookies.</li>
                <li>Lodge a complaint — see the Grievance Officer section below.</li>
              </ul>
              <p>
                To exercise any of these rights, email us at{" "}
                <a href="mailto:info@leanrevolution4earth.com" className="text-[#193d00] underline underline-offset-2">
                  info@leanrevolution4earth.com
                </a>
                . We will respond within 30 days.
              </p>
            </Section>

            <Section id="security" title="Security" num="08">
              <p>
                We use HTTPS encryption for all website traffic. Donation data
                is handled by Zoho Payments, which is PCI-DSS compliant. No
                system is perfectly secure — if you believe your information
                has been compromised, please notify us immediately.
              </p>
            </Section>

            <Section id="children" title="Children's privacy" num="09">
              <p>
                This website is not directed at children under 18. We do not
                knowingly collect information from minors. If you believe a
                child has given us information, please contact us so we can
                delete it.
              </p>
            </Section>

            <Section id="changes" title="Changes to this policy" num="10">
              <p>
                We may update this policy from time to time. Changes will be
                posted on this page with a new &quot;last updated&quot; date.
                Material changes will be communicated via email to active
                donors where feasible.
              </p>
            </Section>

            <Section id="grievance" title="Grievance Officer" num="11">
              <p>
                In accordance with the Information Technology Act, 2000 and
                rules thereunder:
              </p>
              <div className="rounded-xl border border-[#193d00]/15 bg-white/60 p-6">
                <p>
                  <strong>Grievance Officer:</strong> Pragati Shirke, Director
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:info@leanrevolution4earth.com" className="text-[#193d00] underline underline-offset-2">
                    info@leanrevolution4earth.com
                  </a>
                </p>
                <p>
                  <strong>Response time:</strong> within fifteen (15) working
                  days of receipt.
                </p>
              </div>
            </Section>
          </div>

          <div className="mt-20 text-center">
            <Link href="/" className="text-[12px] italic text-[#0d2400]/40 underline-offset-4 transition hover:text-[#0d2400]/80 hover:underline">
              ← back to Lean Revolution 4 Earth
            </Link>
          </div>
        </article>
      </main>
    </>
  )
}

function Section({ id, title, num, children }: { id: string; title: string; num: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="mb-5 flex items-baseline gap-4">
        <span className="font-[family-name:var(--font-display)] text-[1.1rem] font-light italic text-[#193d00]/50">
          {num}
        </span>
        <h2 className="font-[family-name:var(--font-display)] text-[1.5rem] font-light leading-tight tracking-[-0.015em] text-[#0d2400] md:text-[1.75rem]">
          {title}
        </h2>
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </section>
  )
}
