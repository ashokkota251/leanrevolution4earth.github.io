"use client"

import { useState } from "react"
import { AlertCircle, ArrowRight, Check, Loader2 } from "lucide-react"

const WEB3FORMS_ACCESS_KEY = "1b49d3c4-25c0-47ca-aeb6-ccba86eecd57"
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit"

type Status = "idle" | "submitting" | "success" | "error"

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [errorMessage, setErrorMessage] = useState<string>("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === "submitting") return

    const form = e.currentTarget
    const formData = new FormData(form)
    formData.append("access_key", WEB3FORMS_ACCESS_KEY)
    formData.append("subject", "New message from leanrevolution4earth.com")
    formData.append("from_name", "Lean Revolution 4 Earth — Contact Form")

    setStatus("submitting")
    setErrorMessage("")

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      })
      const data: { success?: boolean; message?: string } = await response.json()

      if (response.ok && data.success) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
        setErrorMessage(data.message || "Something went wrong. Please try again.")
      }
    } catch {
      setStatus("error")
      setErrorMessage(
        "Couldn't reach the server. Please check your connection and try again."
      )
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-[#193d00]/15 bg-white p-10 text-center shadow-[0_20px_40px_-28px_rgba(13,36,0,0.25)]">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#193d00]/10 text-[#193d00]">
          <Check className="h-5 w-5" strokeWidth={1.75} />
        </div>
        <h3 className="mt-6 font-[family-name:var(--font-display)] text-[1.4rem] font-normal leading-tight text-foreground">
          Thank <em className="italic text-[#193d00]">you</em>.
        </h3>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-foreground/70">
          Your message has been received. We&apos;ll get back to you soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-[12px] italic tracking-[0.24em] text-[#193d00]/70 underline-offset-4 transition-colors hover:text-[#193d00] hover:underline"
        >
          send another message
        </button>
      </div>
    )
  }

  const busy = status === "submitting"

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-2xl border border-[#193d00]/15 bg-white p-7 shadow-[0_20px_40px_-28px_rgba(13,36,0,0.25)]"
    >
      {/* Honeypot for simple bot filtering — hidden from real users */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.24em] text-[#193d00]/75"
        >
          name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          disabled={busy}
          autoComplete="name"
          className="rounded-lg border border-[#193d00]/15 bg-white px-4 py-3 text-[0.95rem] text-foreground placeholder:text-foreground/35 transition-colors focus:border-[#193d00]/60 focus:outline-none focus:ring-2 focus:ring-[#193d00]/15 disabled:opacity-60"
          placeholder="Your name"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.24em] text-[#193d00]/75"
        >
          email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          disabled={busy}
          autoComplete="email"
          className="rounded-lg border border-[#193d00]/15 bg-white px-4 py-3 text-[0.95rem] text-foreground placeholder:text-foreground/35 transition-colors focus:border-[#193d00]/60 focus:outline-none focus:ring-2 focus:ring-[#193d00]/15 disabled:opacity-60"
          placeholder="your@email.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="font-[family-name:var(--font-display)] text-[11px] italic tracking-[0.24em] text-[#193d00]/75"
        >
          message
        </label>
        <textarea
          id="message"
          name="message"
          required
          disabled={busy}
          rows={5}
          className="resize-none rounded-lg border border-[#193d00]/15 bg-white px-4 py-3 text-[0.95rem] text-foreground placeholder:text-foreground/35 transition-colors focus:border-[#193d00]/60 focus:outline-none focus:ring-2 focus:ring-[#193d00]/15 disabled:opacity-60"
          placeholder="How can we help?"
        />
      </div>

      {status === "error" && errorMessage && (
        <div
          role="alert"
          className="flex items-start gap-2.5 rounded-lg border border-[#dc2626]/25 bg-[#dc2626]/[0.04] px-4 py-3 text-[0.9rem] leading-snug text-[#9a1c1c]"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.75} />
          <span>{errorMessage}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={busy}
        className="group mt-2 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#193d00] px-7 py-3.5 text-[13px] font-medium tracking-wide text-white transition-all duration-300 hover:bg-[#0d2400] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {busy ? (
          <>
            <Loader2 className="h-3.5 w-3.5 animate-spin" strokeWidth={2} />
            <span>Sending…</span>
          </>
        ) : (
          <>
            <span>Send Message</span>
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
              strokeWidth={2}
            />
          </>
        )}
      </button>
    </form>
  )
}
