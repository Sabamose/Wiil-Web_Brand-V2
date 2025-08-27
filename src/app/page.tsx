import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import MadeByHumans from "@/components/MadeByHumans";
import HumanIntuitionSection from "@/components/HumanIntuitionSection";
import ImageShowcaseSection from "@/components/ImageShowcaseSection";
import RobotShowcaseSection from "@/components/RobotShowcaseSection";
import SpecsSection from "@/components/SpecsSection";
import DetailsSection from "@/components/DetailsSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <HumanIntuitionSection />
      <ImageShowcaseSection />
      <RobotShowcaseSection />
      <SpecsSection />
      <DetailsSection />
      <Testimonials />
      <MadeByHumans />
      <CTA />
      <Newsletter />
      <Footer />
    </div>
  );
}