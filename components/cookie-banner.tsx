"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

const STORAGE_KEY = "lr4e-consent"

type Consent = "granted" | "essential" | null

// Updates Google Consent Mode. Called when user makes a choice.
function updateGtagConsent(consent: Consent) {
  // @ts-expect-error — gtag is injected by GA4 script
  if (typeof window.gtag !== "function") return
  const granted = consent === "granted"
  // @ts-expect-error
  window.gtag("consent", "update", {
    analytics_storage: granted ? "granted" : "denied",
    ad_storage:        granted ? "granted" : "denied",
    ad_user_data:      granted ? "granted" : "denied",
    ad_personalization:granted ? "granted" : "denied",
  })
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null
    if (!stored) {
      setVisible(true)
    } else {
      // Re-apply stored consent to gtag on each page load
      updateGtagConsent(stored as Consent)
    }
  }, [])

  function choose(consent: Consent) {
    localStorage.setItem(STORAGE_KEY, consent ?? "")
    updateGtagConsent(consent)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-2xl rounded-2xl border border-[#193d00]/15 bg-[#faf8f0] p-5 shadow-[0_32px_64px_-16px_rgba(4,12,0,0.3)] md:bottom-6 md:p-6"
    >
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-6">
        <div className="flex-1">
          <p className="font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.3em] text-[#193d00]/55">
            cookies
          </p>
          <p className="mt-2 text-[13.5px] leading-[1.6] text-[#0d2400]/80">
            We use essential cookies to run the site and optional analytics
            cookies to understand how it&apos;s used. Your choice —{" "}
            <Link href="/privacy" className="font-medium text-[#193d00] underline underline-offset-2">
              read our privacy policy
            </Link>.
          </p>
        </div>

        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => choose("essential")}
            className="rounded-full border border-[#193d00]/25 bg-transparent px-4 py-2 text-[12px] font-medium text-[#193d00] transition hover:border-[#193d00] hover:bg-[#f4f6f1]"
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="rounded-full bg-[#193d00] px-5 py-2 text-[12px] font-medium text-white transition hover:bg-[#0d2400]"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  )
}
