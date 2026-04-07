import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { WhySection } from "@/components/WhySection";
import { CTASection } from "@/components/CTASection";
import { StatsSection } from "@/components/StatsSection";
import { BlogSection } from "@/components/BlogSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <WhySection />
        <CTASection />
        <StatsSection />
        <BlogSection />
      </main>
      <Footer />
    </>
  );
}
