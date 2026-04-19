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
      // clipboard blocked — values remain readable on screen
    }
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#193d00]/15 bg-[#faf8f0] shadow-[0_30px_60px_-20px_rgba(6,13,46,0.55)]">
      {/* Decorative perforated edge at the top — like a paper receipt */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[6px]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 4px 3px, #0e1d5e 1.1px, transparent 1.4px)",
          backgroundSize: "8px 6px",
          opacity: 0.35,
        }}
      />

      {/* Header */}
      <div className="flex items-start justify-between gap-4 border-b border-[#193d00]/10 px-6 pb-5 pt-7 md:px-7">
        <div>
          <span className="font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.3em] text-[#193d00]">
            direct bank transfer
          </span>
          <h3 className="mt-1.5 font-[family-name:var(--font-display)] text-[1.35rem] font-normal leading-tight text-foreground">
            Donate <em className="italic text-[#193d00]">by transfer</em>
          </h3>
        </div>
        <span
          aria-hidden
          className="pointer-events-none select-none font-[family-name:var(--font-display)] text-[2.5rem] italic leading-none text-[#193d00]/20"
        >
          ₹
        </span>
      </div>

      {/* Details list */}
      <dl className="divide-y divide-[#193d00]/10">
        <Row label="Organisation">
          <span className="font-[family-name:var(--font-display)] text-[0.95rem] font-normal leading-tight tracking-[0.01em] text-foreground">
            {BANK.organisation}
          </span>
        </Row>

        <Row label="Bank · Type">
          <span className="text-[0.9rem] text-foreground/90">
            {BANK.bankName}{" "}
            <span className="text-foreground/50">· {BANK.accountType}</span>
          </span>
        </Row>

        <Row label="Account No.">
          <div className="flex items-center justify-end gap-2">
            <span className="font-mono tabular-nums text-[1rem] font-medium tracking-[0.05em] text-foreground">
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
            <span className="font-mono tabular-nums text-[1rem] font-medium tracking-[0.05em] text-foreground">
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
          <span className="text-[0.9rem] text-foreground/90">{BANK.branch}</span>
        </Row>
      </dl>

      {/* Perforated edge at the bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[6px]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 4px 3px, #0e1d5e 1.1px, transparent 1.4px)",
          backgroundSize: "8px 6px",
          opacity: 0.35,
        }}
      />
    </div>
  )
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1 px-6 py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 md:px-7">
      <dt className="shrink-0 text-[10px] font-medium uppercase tracking-[0.26em] text-[#193d00]/75 sm:w-28 sm:pt-0.5">
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
          ? "border-[#193d00] bg-[#193d00] text-white"
          : "border-[#193d00]/30 bg-white/70 text-[#193d00]/85 hover:border-[#193d00] hover:bg-[#193d00] hover:text-white"
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
