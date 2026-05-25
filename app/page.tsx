import { AnnouncementBar } from '@/components/AnnouncementBar'
import { NavBar } from '@/components/NavBar'
import { HeroSection } from '@/components/HeroSection'
import { ValueProps } from '@/components/ValueProps'
import { ServicesCards } from '@/components/ServicesCards'
import { HowItWorks } from '@/components/HowItWorks'
import { TradeGrid } from '@/components/TradeGrid'
import { VoiceWidget } from '@/components/VoiceWidget'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <NavBar />
      <main>
        <HeroSection />
        <ValueProps />
        <ServicesCards />
        <HowItWorks />
        <VoiceWidget />
        <TradeGrid />
      </main>
      <Footer />
    </>
  )
}
