import type { Metadata } from "next"
import { Suspense } from "react"
import { SuccessView } from "@/components/donate/success-view"

export const metadata: Metadata = {
  title: "Thank You for Your Donation",
  description: "Your contribution to Lean Revolution 4 Earth supports climate justice across India.",
  robots: { index: false, follow: false },
}

export default function DonateSuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#faf8f0]" />}>
      <SuccessView />
    </Suspense>
  )
}
