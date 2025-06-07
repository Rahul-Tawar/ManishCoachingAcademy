import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import PopularAppSection from "@/components/popular-app-section"
import WaveDivider from "@/components/wave-divider"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <div className="bg-gradient-to-b from-purple-700 to-purple-600">
        <Navbar />
        <HeroSection />
      </div>

      <WaveDivider position="top" />

      <FeaturesSection />

      <PopularAppSection />

      <WaveDivider position="bottom" />
    </main>
  )
}
