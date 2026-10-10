import type { Metadata } from "next"
import Link from "next/link"
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms governing your use of the Lean Revolution 4 Earth website and donations.",
  alternates: { canonical: "/terms/" },
}

const UPDATED = "10 October 2026"

const SECTIONS = [
  { id: "acceptance",   title: "Acceptance of terms" },
  { id: "about",        title: "About LR4E" },
  { id: "donations",    title: "Donations" },
  { id: "refunds",      title: "Refunds and cancellations" },
  { id: "80g",          title: "80G tax deduction" },
  { id: "ip",           title: "Intellectual property" },
  { id: "prohibited",   title: "Prohibited use" },
  { id: "disclaimers",  title: "Disclaimers" },
  { id: "liability",    title: "Limitation of liability" },
  { id: "law",          title: "Governing law" },
  { id: "changes",      title: "Changes to these terms" },
  { id: "contact",      title: "Contact" },
]

export default function TermsPage() {
  return (
    <>
      <BreadcrumbJsonLd trail={[{ name: "Terms & Conditions", path: "/terms" }]} />

      <main className="min-h-screen bg-[#faf8f0] px-6 py-28 text-[#0d2400] md:py-32">
        <article className="mx-auto max-w-3xl">

          {/* Header */}
          <header className="text-center">
            <p className="font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.32em] text-[#193d00]/55">
              legal
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-display)] font-light leading-[1.02] tracking-[-0.025em] text-[#0d2400]"
                style={{ fontSize: "clamp(2.25rem,5vw,3.25rem)" }}>
              Terms &amp;{" "}
              <em className="italic text-[#193d00]">Conditions.</em>
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

          <p className="text-[15px] leading-[1.8] text-[#0d2400]/80">
            These Terms &amp; Conditions govern your use of leanrevolution4earth.com
            and the donations you make through it. By accessing the site or
            donating, you agree to be bound by them.
          </p>

          {/* TOC */}
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

          <div className="mt-14 space-y-14 text-[15px] leading-[1.8] text-[#0d2400]/80">

            <Section id="acceptance" title="Acceptance of terms" num="01">
              <p>
                By accessing or using this website, you confirm that you are at
                least 18 years old and that you accept these terms along with
                our{" "}
                <Link href="/privacy" className="text-[#193d00] underline underline-offset-2">
                  Privacy Policy
                </Link>
                . If you do not agree, please do not use the site or make a
                donation.
              </p>
            </Section>

            <Section id="about" title="About LR4E" num="02">
              <p>
                Lean Revolution 4 Earth Foundation is a non-profit company
                registered under Section 8 of the Companies Act, 2013 (CIN
                U94990MH2025NPL453396), with its registered office at Mumbai,
                India.
              </p>
            </Section>

            <Section id="donations" title="Donations" num="03">
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  All donations are voluntary and are used by LR4E to further
                  its charitable objects — climate action, afforestation,
                  clean-energy access, and allied community programmes.
                </li>
                <li>
                  Donations are collected through Zoho Payments, our payment
                  partner. By donating, you agree to{" "}
                  <a href="https://www.zoho.com/payments/terms.html" target="_blank" rel="noopener noreferrer" className="text-[#193d00] underline underline-offset-2">
                    Zoho Payments&apos; terms ↗
                  </a>
                  .
                </li>
                <li>
                  Donations are made in Indian Rupees (INR). The minimum
                  donation accepted online is ₹100.
                </li>
                <li>
                  LR4E does not provide any goods or services in exchange for a
                  donation. A donation is not a payment for services rendered.
                </li>
              </ul>
            </Section>

            <Section id="refunds" title="Refunds and cancellations" num="04">
              <p>
                <strong>Donations are generally non-refundable</strong>, as
                funds are typically allocated to programme costs within hours
                of receipt.
              </p>
              <p>Exceptions are considered in the following cases:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Duplicate payments</strong> — if you were charged
                  twice for the same donation due to a technical error.
                </li>
                <li>
                  <strong>Incorrect amount</strong> — if you donated a
                  materially higher amount than intended due to a user-interface
                  or technical issue.
                </li>
                <li>
                  <strong>Unauthorised payments</strong> — if the donation was
                  made without your authorisation.
                </li>
              </ul>
              <p>
                Refund requests must be sent to{" "}
                <a href="mailto:info@leanrevolution4earth.com" className="text-[#193d00] underline underline-offset-2">
                  info@leanrevolution4earth.com
                </a>{" "}
                within <strong>seven (7) days</strong> of the transaction,
                along with the payment reference (ref ID shown on the thank-you
                page or in your email receipt).
              </p>
              <p>
                Approved refunds are processed to the original payment method
                within <strong>10 to 15 working days</strong>, subject to the
                processing time of your bank. If an 80G certificate has already
                been issued, we may ask you to acknowledge its revocation.
              </p>
            </Section>

            <Section id="80g" title="80G tax deduction" num="05">
              <p>
                LR4E is eligible for donations qualifying under Section 80G of
                the Income Tax Act, 1961. 80G certificates are issued by email
                within three (3) working days of a successful donation,
                provided you have supplied a valid PAN where required under
                Indian tax rules.
              </p>
              <p>
                Deductibility depends on your personal tax situation. We do not
                provide tax advice — please consult your tax advisor.
              </p>
            </Section>

            <Section id="ip" title="Intellectual property" num="06">
              <p>
                All content on this website — text, images, logos, graphics,
                and code — is the property of LR4E or its licensors and is
                protected by applicable copyright, trademark, and related laws.
                You may share links to our pages for non-commercial purposes
                with attribution. Any other reuse requires our written
                permission.
              </p>
            </Section>

            <Section id="prohibited" title="Prohibited use" num="07">
              <p>You agree not to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Attempt to breach, probe, or disrupt the security of the site.</li>
                <li>Submit false, misleading, or fraudulent donations.</li>
                <li>Use automated tools to scrape or crawl the site at unreasonable rates.</li>
                <li>Impersonate another person or misrepresent your affiliation with any entity.</li>
                <li>Use the site in any way that violates Indian law.</li>
              </ul>
            </Section>

            <Section id="disclaimers" title="Disclaimers" num="08">
              <p>
                The site is provided &quot;as is&quot; and &quot;as
                available&quot;. We do not warrant that the site will always be
                uninterrupted, error-free, or secure. Statistics, impact
                figures, and programme information on the site are provided in
                good faith and based on available data, but may be revised as
                programmes evolve.
              </p>
            </Section>

            <Section id="liability" title="Limitation of liability" num="09">
              <p>
                To the maximum extent permitted by Indian law, LR4E and its
                trustees, directors, employees, and volunteers shall not be
                liable for any indirect, incidental, special, or consequential
                damages arising from your use of the site. Our total liability
                in any matter shall not exceed the amount of your most recent
                donation to LR4E in the preceding 12 months.
              </p>
            </Section>

            <Section id="law" title="Governing law and jurisdiction" num="10">
              <p>
                These terms are governed by the laws of India. Any dispute
                arising out of or in connection with these terms shall be
                subject to the exclusive jurisdiction of the courts at Mumbai,
                Maharashtra.
              </p>
            </Section>

            <Section id="changes" title="Changes to these terms" num="11">
              <p>
                We may update these terms from time to time. The updated version
                takes effect from the date shown at the top of this page. If you
                do not agree to the updated terms, please stop using the site.
              </p>
            </Section>

            <Section id="contact" title="Contact" num="12">
              <p>
                Questions about these terms? Email us at{" "}
                <a href="mailto:info@leanrevolution4earth.com" className="text-[#193d00] underline underline-offset-2">
                  info@leanrevolution4earth.com
                </a>
                .
              </p>
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
