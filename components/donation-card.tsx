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
      // Clipboard blocked — value is still visible on screen.
    }
  }

  return (
    <div
      className="relative overflow-hidden rounded-2xl text-white shadow-[0_30px_60px_-28px_rgba(14,29,94,0.5)]"
      style={{ backgroundColor: "#0e1d5e" }}
    >
      {/* Cobalt bloom + deep navy sink — matches navy Mission strip */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgba(88,110,220,0.32)_0%,transparent_65%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_100%,rgba(6,13,46,0.55)_0%,transparent_70%)]"
      />

      <div className="relative">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-white/12 px-5 py-4">
          <div>
            <span className="font-[family-name:var(--font-display)] text-[10.5px] italic tracking-[0.3em] text-white/70">
              direct bank transfer
            </span>
            <h3 className="mt-1 font-[family-name:var(--font-display)] text-[1.15rem] font-normal leading-tight text-white">
              Donate <em className="italic">by transfer</em>
            </h3>
          </div>
          <span
            aria-hidden
            className="pointer-events-none select-none font-[family-name:var(--font-display)] text-[2rem] italic leading-none text-white/25"
          >
            ₹
          </span>
        </div>

        {/* Details */}
        <dl className="divide-y divide-white/10">
          <Row label="Organisation">
            <span className="font-[family-name:var(--font-display)] text-[0.95rem] font-normal leading-tight tracking-[0.01em] text-white">
              {BANK.organisation}
            </span>
          </Row>

          <Row label="Bank · Type">
            <span className="text-[0.9rem] text-white/90">
              {BANK.bankName}{" "}
              <span className="text-white/55">· {BANK.accountType}</span>
            </span>
          </Row>

          <Row label="Account No.">
            <div className="flex items-center justify-end gap-2">
              <span className="font-mono tabular-nums text-[1rem] font-medium tracking-[0.05em] text-white">
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

          <Row label="IFSC">
            <div className="flex items-center justify-end gap-2">
              <span className="font-mono tabular-nums text-[1rem] font-medium tracking-[0.05em] text-white">
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

          <Row label="Branch">
            <span className="text-[0.9rem] text-white/90">{BANK.branch}</span>
          </Row>
        </dl>

        {/* Footer */}
        <div className="border-t border-white/10 bg-[rgba(6,13,46,0.45)] px-5 py-3.5">
          <p className="text-[11.5px] leading-relaxed text-white/70">
            Share a transaction reference with{" "}
            <a
              href="mailto:info@leanrevolution4earth.com"
              className="font-medium text-white underline-offset-4 transition-opacity hover:underline hover:opacity-90"
            >
              info@leanrevolution4earth.com
            </a>{" "}
            for a thank-you + official receipt.
          </p>
        </div>
      </div>
    </div>
  )
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1 px-5 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
      <dt className="shrink-0 text-[10px] font-medium uppercase tracking-[0.26em] text-white/55 sm:w-28 sm:pt-0.5">
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
      className={`inline-flex h-6 shrink-0 items-center gap-1 rounded-full border px-2 text-[10.5px] font-medium tracking-wide transition-all duration-200 ${
        copied
          ? "border-white bg-white text-[#0e1d5e]"
          : "border-white/40 bg-white/5 text-white/85 hover:border-white hover:bg-white hover:text-[#0e1d5e]"
      }`}
    >
      {copied ? (
        <Check className="h-3 w-3" strokeWidth={2.25} />
      ) : (
        <Copy className="h-3 w-3" strokeWidth={2} />
      )}
      <span>{copied ? "Copied" : "Copy"}</span>
      <span className="sr-only">{value}</span>
    </button>
  )
}
