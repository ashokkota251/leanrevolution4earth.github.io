"use client"

import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
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
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-2xl border border-[#193d00]/15 bg-white p-7 shadow-[0_20px_40px_-28px_rgba(13,36,0,0.25)]"
    >
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
          className="rounded-lg border border-[#193d00]/15 bg-white px-4 py-3 text-[0.95rem] text-foreground placeholder:text-foreground/35 transition-colors focus:border-[#193d00]/60 focus:outline-none focus:ring-2 focus:ring-[#193d00]/15"
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
          className="rounded-lg border border-[#193d00]/15 bg-white px-4 py-3 text-[0.95rem] text-foreground placeholder:text-foreground/35 transition-colors focus:border-[#193d00]/60 focus:outline-none focus:ring-2 focus:ring-[#193d00]/15"
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
          rows={5}
          className="resize-none rounded-lg border border-[#193d00]/15 bg-white px-4 py-3 text-[0.95rem] text-foreground placeholder:text-foreground/35 transition-colors focus:border-[#193d00]/60 focus:outline-none focus:ring-2 focus:ring-[#193d00]/15"
          placeholder="How can we help?"
        />
      </div>

      <button
        type="submit"
        className="group mt-2 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#193d00] px-7 py-3.5 text-[13px] font-medium tracking-wide text-white transition-all duration-300 hover:bg-[#0d2400]"
      >
        <span>Send Message</span>
        <ArrowRight
          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
          strokeWidth={2}
        />
      </button>
    </form>
  )
}
