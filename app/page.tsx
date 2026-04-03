import { Navbar } from "@/components/navbar"
import { HeroCarousel } from "@/components/hero-carousel"
import { StatsSection } from "@/components/stats-section"
import { ProgramsSection } from "@/components/programs-section"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CoachesSection } from "@/components/coaches-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      <HeroCarousel />
      <StatsSection />
      <ProgramsSection />
      <AboutSection />
      <TestimonialsSection />
      <CoachesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
