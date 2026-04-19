import { HeroSection } from "@/components/home/hero-section"
import { MissionStrip } from "@/components/home/mission-strip"
import { WhoWeAreSnapshot } from "@/components/home/who-we-are-snapshot"
import { OurVision } from "@/components/home/our-vision"
import { PillarsPreview } from "@/components/home/pillars-preview"
import { InitiativesPreview } from "@/components/home/initiatives-preview"
import { CtaSection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionStrip />
      <WhoWeAreSnapshot />
      <OurVision />
      <PillarsPreview />
      <InitiativesPreview />
      <CtaSection />
    </>
  )
}
