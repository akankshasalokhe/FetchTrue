import AboutSection from "@/components/AboutUs";
import KeyFeatures from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import PartnerDiagram from "@/components/Partner";
import ServicesPage from "@/components/Services";
import HowItWorks from "@/components/Steps";


export default function Home() {
  return (
    <div>
        <HeroSection />
        <AboutSection />
        <KeyFeatures />
        <HowItWorks />
        <ServicesPage />
        <PartnerDiagram />
    </div>
  );
}
