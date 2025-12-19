import Header from "@/components/Header/Header";
import HeroSection from "@/components/Hero/HeroSection";
import ServicesSection from "@/components/Services/ServicesSection";
import WorkforceSection from "@/components/Workforce/WorkforceSection";
import DiversitySection from "@/components/Workforce/DiversitySection";
import MagicOfAI from "@/components/Hero/MagicOfAI";
import TestimonialCarousel from "@/components/Testimonial/TestimonialCarousel";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <HeroSection />
      <ServicesSection />
      <WorkforceSection />
      <DiversitySection />
      <MagicOfAI />
      <TestimonialCarousel />
      <Footer />
    </main>
  );
}
