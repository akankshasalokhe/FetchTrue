import AboutSection from "@/components/AboutUs";
import KeyFeatures from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import PartnerDiagram from "@/components/Partner";
import ServicesPage from "@/components/Services";
import HowItWorks from "@/components/Steps";
import DownloadApp from "@/components/DownloadApp";
import Testimonials from "@/components/Testimonial";

export default function Home() {
  return (
    <div>
        <HeroSection />
        <AboutSection />
        <KeyFeatures />
        <HowItWorks />
        <DownloadApp />
        <ServicesPage />
        <PartnerDiagram />
        {/* <Testimonials /> */}
    </div>
  );
}
