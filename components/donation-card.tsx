"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"

const BANK = {
  organisation: "LEAN REVOLUTION 4 EARTH FOUNDATION",
  bankName: "Kotak Mahindra Bank",
  accountType: "Current Account",
  accountNumber: "4051562951",
  branch: "Mumbai — Andheri (W), Seven Bungalows",
  ifsc: "KKBK0001242",
}

export function DonationCard() {
  const [copied, setCopied] = useState<string | null>(null)

  const copy = async (key: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(key)
      window.setTimeout(() => setCopied((c) => (c === key ? null : c)), 1800)
    } catch {
      // Clipboard blocked — fall back silently; the value is still visible.
    }
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[#193d00]/20 bg-white shadow-[0_20px_40px_-28px_rgba(13,36,0,0.22)]">
      {/* Header bar */}
      <div className="relative flex items-start justify-between gap-4 border-b border-[#193d00]/10 bg-[#f6f8f1]/70 px-6 py-5">
        <div>
          <span className="font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.3em] text-[#193d00]">
            direct bank transfer
          </span>
          <h3 className="mt-1.5 font-[family-name:var(--font-display)] text-[1.3rem] font-normal leading-tight text-foreground">
            Donate <em className="italic text-[#193d00]">by transfer</em>
          </h3>
        </div>
        <span
          aria-hidden
          className="pointer-events-none select-none font-[family-name:var(--font-display)] text-[2.25rem] italic leading-none text-[#193d00]/25"
        >
          ₹
        </span>
      </div>

      {/* Details list */}
      <dl className="divide-y divide-[#193d00]/10">
        <Row label="Organisation">
          <span className="font-[family-name:var(--font-display)] text-[1rem] font-normal leading-tight tracking-[0.01em] text-foreground">
            {BANK.organisation}
          </span>
        </Row>

        <Row label="Bank">
          <span className="text-[0.95rem] text-foreground">{BANK.bankName}</span>
        </Row>

        <Row label="Account Number">
          <div className="flex items-center gap-2.5">
            <span className="font-mono tabular-nums text-[1.05rem] font-medium tracking-[0.05em] text-foreground">
              {BANK.accountNumber}
            </span>
            <CopyButton
              value={BANK.accountNumber}
              copied={copied === "account"}
              onCopy={() => copy("account", BANK.accountNumber)}
              label="account number"
            />
          </div>
        </Row>

        <Row label="IFSC Code">
          <div className="flex items-center gap-2.5">
            <span className="font-mono tabular-nums text-[1.05rem] font-medium tracking-[0.05em] text-foreground">
              {BANK.ifsc}
            </span>
            <CopyButton
              value={BANK.ifsc}
              copied={copied === "ifsc"}
              onCopy={() => copy("ifsc", BANK.ifsc)}
              label="IFSC code"
            />
          </div>
        </Row>

        <Row label="Account Type">
          <span className="text-[0.95rem] text-foreground">{BANK.accountType}</span>
        </Row>

        <Row label="Branch">
          <span className="text-[0.95rem] text-foreground">{BANK.branch}</span>
        </Row>
      </dl>

      {/* Footer note */}
      <div className="border-t border-[#193d00]/10 bg-[#f6f8f1]/40 px-6 py-4">
        <p className="text-[12.5px] leading-relaxed text-foreground/70">
          Please share a screenshot or transaction reference with{" "}
          <a
            href="mailto:info@leanrevolution4earth.com"
            className="font-medium text-[#193d00] underline-offset-4 transition-colors hover:underline"
          >
            info@leanrevolution4earth.com
          </a>{" "}
          so we can send you a thank-you and an official receipt.
        </p>
      </div>
    </div>
  )
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5 px-6 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
      <dt className="shrink-0 text-[10px] font-medium uppercase tracking-[0.24em] text-[#193d00]/75 sm:w-36 sm:pt-1">
        {label}
      </dt>
      <dd className="flex-1 sm:text-right">{children}</dd>
    </div>
  )
}

function CopyButton({
  value,
  copied,
  onCopy,
  label,
}: {
  value: string
  copied: boolean
  onCopy: () => void
  label: string
}) {
  return (
    <button
      type="button"
      onClick={onCopy}
      aria-label={copied ? `${label} copied` : `Copy ${label}`}
      aria-live="polite"
      className={`inline-flex h-7 shrink-0 items-center gap-1.5 rounded-full border px-2.5 text-[11px] font-medium tracking-wide transition-all duration-200 ${
        copied
          ? "border-[#193d00] bg-[#193d00] text-white"
          : "border-[#193d00]/25 bg-white text-[#193d00]/85 hover:border-[#193d00] hover:bg-[#193d00] hover:text-white"
      }`}
    >
      {copied ? (
        <Check className="h-3 w-3" strokeWidth={2} />
      ) : (
        <Copy className="h-3 w-3" strokeWidth={2} />
      )}
      <span>{copied ? "Copied" : "Copy"}</span>
      <span className="sr-only">{value}</span>
    </button>
  )
}
