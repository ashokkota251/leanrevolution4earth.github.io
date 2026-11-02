import type { Metadata } from "next"
import Link from "next/link"
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms governing your use of the Lean Revolution 4 Earth website and donations.",
  alternates: { canonical: "/terms/" },
}

const UPDATED = "27 October 2026"

const SECTIONS = [
  { id: "acceptance",   title: "Introduction and acceptance" },
  { id: "about",        title: "About the Foundation" },
  { id: "donations",    title: "Donation processing" },
  { id: "refunds",      title: "Refunds, cancellations and erroneous payments" },
  { id: "how-to-refund",title: "How to request a refund" },
  { id: "80g",          title: "Tax deductions and Section 80G" },
  { id: "foreign",      title: "Foreign contributions" },
  { id: "privacy",      title: "Privacy and personal information" },
  { id: "ip",           title: "Intellectual property" },
  { id: "prohibited",   title: "Prohibited use" },
  { id: "disclaimers",  title: "Disclaimers" },
  { id: "liability",    title: "Limitation of liability" },
  { id: "law",          title: "Governing law and jurisdiction" },
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
            These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern access to
            and use of the website operated by Lean Revolution 4 Earth
            Foundation (&ldquo;LR4E&rdquo;, &ldquo;Foundation&rdquo;,
            &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;), including
            its content, donation facilities and related online features.
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

            <Section id="acceptance" title="Introduction and acceptance" num="01">
              <p>
                By accessing or using the website at{" "}
                <a href="https://leanrevolution4earth.com" className="text-[#193d00] underline underline-offset-2">
                  https://leanrevolution4earth.com
                </a>
                , or by making a donation through it, you agree to these Terms,
                together with our{" "}
                <Link href="/privacy" className="text-[#193d00] underline underline-offset-2">
                  Privacy Policy
                </Link>{" "}
                and any applicable donation or refund policy referenced on the
                website.
              </p>
            </Section>

            <Section id="about" title="About the Foundation" num="02">
              <p>
                Lean Revolution 4 Earth Foundation is a not-for-profit company
                incorporated under Section 8 of the Companies Act, 2013, India.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Corporate Identity Number (CIN):</strong>{" "}
                  U94990MH2025NPL453396
                </li>
                <li>
                  <strong>Registered office:</strong> G-1, Building 1, C Wing,
                  Kamala Nagar, Chincholi Bunder Road, Malad (West), Mumbai
                  – 400064, Maharashtra, India.
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:info@leanrevolution4earth.com" className="text-[#193d00] underline underline-offset-2">
                    info@leanrevolution4earth.com
                  </a>
                </li>
              </ul>
              <p>
                The Foundation works towards its charitable and environmental
                objectives, including climate action, renewable energy access,
                ecological restoration, afforestation, sustainable livelihoods,
                waste reduction, community resilience, climate awareness and
                related public-interest initiatives, subject to its
                constitutional documents and applicable law.
              </p>
            </Section>

            <Section id="donations" title="Donation processing" num="03">
              <p>
                Online donations may be processed through Zoho Payments or
                another payment service provider identified at checkout. By
                proceeding with a transaction, you may also be subject to the
                relevant payment provider&rsquo;s applicable terms, privacy
                practices and security procedures.
              </p>
              <p>
                Unless expressly stated otherwise at checkout, online donations
                are accepted in Indian Rupees (INR), with a minimum online
                donation amount of ₹100.
              </p>
              <p>
                Donations are collected through Zoho Payments, our payment
                partner. By donating, you agree to{" "}
                <a href="https://www.zoho.com/payments/terms.html" target="_blank" rel="noopener noreferrer" className="text-[#193d00] underline underline-offset-2">
                  Zoho Payments&apos; terms ↗
                </a>
                .
              </p>
              <p>
                The Foundation will apply donations towards its charitable
                objects, administrative and operational costs reasonably
                associated with its activities, and other lawful purposes
                consistent with its governing documents.
              </p>
              <p>
                The Foundation may issue an electronic donation acknowledgement
                or receipt after receiving and verifying a donation. Donors
                should provide accurate information reasonably required for
                payment reconciliation, recordkeeping, statutory reporting and
                the issuance of any applicable tax documentation. An
                acknowledgement of receipt is not, by itself, a representation
                that the donation qualifies for a tax deduction.
              </p>
            </Section>

            <Section id="refunds" title="Refunds, cancellations and erroneous payments" num="04">
              <p>
                Completed charitable donations are generally not refundable
                merely because a donor subsequently changes their mind or
                because the donor&rsquo;s preferred programme changes.
              </p>
              <p>
                However, the Foundation will review genuine requests involving
                duplicate transactions, technical errors, incorrect amounts,
                unauthorised transactions or other circumstances warranting a
                refund under applicable law or the Foundation&rsquo;s policies.
              </p>
              <p>
                Nothing in these Terms removes any refund, reversal, chargeback
                or other remedy available to a donor under applicable law or
                the rules of the relevant payment provider.
              </p>
              <p>A donor may contact the Foundation to request a review where:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>The same donation was charged more than once.</li>
                <li>
                  A technical or interface error caused an incorrect amount to
                  be charged.
                </li>
                <li>
                  A payment was debited but the donation was not successfully
                  recorded.
                </li>
                <li>
                  A refund is otherwise required by applicable law or an
                  applicable payment-provider rule.
                </li>
              </ul>
              <p>
                Each request will be assessed on its facts. The Foundation may
                request reasonable supporting information to verify the
                transaction and prevent fraud.
              </p>
            </Section>

            <Section id="how-to-refund" title="How to request a refund" num="05">
              <p>
                Email{" "}
                <a href="mailto:info@leanrevolution4earth.com" className="text-[#193d00] underline underline-offset-2">
                  info@leanrevolution4earth.com
                </a>
                , preferably within <strong>seven (7) days</strong> after the
                transaction, with the following information:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Date and amount of the transaction.</li>
                <li>Payment reference or transaction ID.</li>
                <li>
                  Registered email address or other identifying information
                  used for the donation.
                </li>
                <li>A brief explanation of the issue.</li>
              </ul>
              <p>
                The seven-day period is a requested reporting period to
                facilitate timely investigation; it does not extinguish any
                statutory right or remedy that may remain available to the
                donor.
              </p>
              <p>
                Please do not email complete card numbers, CVVs, passwords,
                payment PINs or other sensitive payment credentials.
              </p>
              <p>
                Where a refund is approved, the Foundation will ordinarily
                initiate it through the original payment method, subject to
                payment-provider procedures and applicable law.
              </p>
              <p>
                The Foundation aims to initiate approved refunds within{" "}
                <strong>ten (10) to fifteen (15) working days</strong> after
                approval. The time taken for the funds to appear in the
                donor&rsquo;s account may depend on the bank or payment
                provider. If additional verification is necessary, the
                Foundation will communicate the reason for any material delay
                where reasonably practicable.
              </p>
              <p>
                Donors who suspect an unauthorised transaction should promptly
                notify their bank or payment provider and inform the
                Foundation. The Foundation may cooperate with banks, payment
                providers and relevant authorities to investigate disputed
                transactions. Any applicable refund, reversal or chargeback
                will be handled in accordance with the relevant procedures and
                applicable law.
              </p>
            </Section>

            <Section id="80g" title="Tax deductions and Section 80G" num="06">
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
              <p>
                A donation qualifies for a deduction under Section 80G of the
                Income-tax Act, 1961, only where the Foundation holds a valid
                and applicable approval under that provision, the donation
                satisfies the relevant statutory conditions, and the donor
                meets the applicable requirements.
              </p>
            </Section>

            <Section id="foreign" title="Foreign contributions" num="07">
              <p>
                Donors located outside India should contact the Foundation
                before attempting to make a contribution.
              </p>
              <p>
                The Foundation will accept foreign contributions only where it
                is legally permitted and has satisfied the applicable
                requirements, including the Foreign Contribution (Regulation)
                Act, 2010 (FCRA), where applicable.
              </p>
              <p>
                A payment in foreign currency or a donation initiated from
                outside India will not be accepted merely because the
                website&rsquo;s payment system permits the transaction.
              </p>
            </Section>

            <Section id="privacy" title="Privacy and personal information" num="08">
              <p>
                The Foundation may collect and process personal information
                submitted by users and donors for purposes such as processing
                donations, issuing receipts, maintaining records, responding to
                enquiries, meeting legal obligations and protecting against
                fraud.
              </p>
              <p>
                Personal information will be handled in accordance with the
                Foundation&rsquo;s{" "}
                <Link href="/privacy" className="text-[#193d00] underline underline-offset-2">
                  Privacy Policy
                </Link>{" "}
                and applicable data protection law.
              </p>
              <p>
                Where consent is required, the Foundation will seek it in the
                manner prescribed by applicable law. The Foundation will not
                treat acceptance of these Terms as a substitute for a separate
                consent where separate consent is legally required.
              </p>
            </Section>

            <Section id="ip" title="Intellectual property" num="09">
              <p>
                All content on this website — text, images, logos, graphics,
                and code — is the property of LR4E or its licensors and is
                protected by applicable copyright, trademark, and related laws.
                You may share links to our pages for non-commercial purposes
                with attribution. Any other reuse requires our written
                permission.
              </p>
            </Section>

            <Section id="prohibited" title="Prohibited use" num="10">
              <p>You agree not to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Attempt to breach, probe, or disrupt the security of the site.</li>
                <li>Submit false, misleading, or fraudulent donations.</li>
                <li>Use automated tools to scrape or crawl the site at unreasonable rates.</li>
                <li>Impersonate another person or misrepresent your affiliation with any entity.</li>
                <li>Use the site in any way that violates Indian law.</li>
              </ul>
            </Section>

            <Section id="disclaimers" title="Disclaimers" num="11">
              <p>
                The site is provided &quot;as is&quot; and &quot;as
                available&quot;. We do not warrant that the site will always be
                uninterrupted, error-free, or secure. Statistics, impact
                figures, and programme information on the site are provided in
                good faith and based on available data, but may be revised as
                programmes evolve.
              </p>
            </Section>

            <Section id="liability" title="Limitation of liability" num="12">
              <p>
                To the maximum extent permitted by Indian law, LR4E and its
                trustees, directors, employees, and volunteers shall not be
                liable for any indirect, incidental, special, or consequential
                damages arising from your use of the site. Our total liability
                in any matter shall not exceed the amount of your most recent
                donation to LR4E in the preceding 12 months.
              </p>
            </Section>

            <Section id="law" title="Governing law and jurisdiction" num="13">
              <p>
                These terms are governed by the laws of India. Any dispute
                arising out of or in connection with these terms shall be
                subject to the exclusive jurisdiction of the courts at Mumbai,
                Maharashtra.
              </p>
            </Section>

            <Section id="changes" title="Changes to these terms" num="14">
              <p>
                We may update these terms from time to time. The updated version
                takes effect from the date shown at the top of this page. If you
                do not agree to the updated terms, please stop using the site.
              </p>
            </Section>

            <Section id="contact" title="Contact" num="15">
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
