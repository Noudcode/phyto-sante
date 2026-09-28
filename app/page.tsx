import HeroSection from "@/components/home/HeroSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import DomainsSection from "@/components/home/DomainsSection";
import FounderSection from "@/components/home/FounderSection";
import BoutiqueShowcaseSection from "@/components/home/BoutiqueShowcaseSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <PhilosophySection />
      <DomainsSection />
      <FounderSection />
      <BoutiqueShowcaseSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
