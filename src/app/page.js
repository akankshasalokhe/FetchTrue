import AboutSection from "@/components/AboutUs";
import KeyFeatures from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import PartnerDiagram from "@/components/Partner";
import ServicesPage from "@/components/Services";
import HowItWorks from "@/components/Steps";
import DownloadApp from "@/components/DownloadApp";
import Testimonials from "@/components/Testimonial";
import ContactUs from "@/components/ContactUs";
import WhatsAppButton from "@/components/WhatsappButton";
import ExtraIncome from "@/components/ExtraIncome";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQ";


export default function Home() {
  return (
    <div>
        <HeroSection />
        <AboutSection />
        <ServicesPage />
        <HowItWorks />
        <DownloadApp />
        <PartnerDiagram />
        <KeyFeatures />
        <ExtraIncome />
        <BlogSection />
        <Testimonials />
        <FAQSection/>
        <ContactUs />
        <WhatsAppButton />
    </div>
  );
}
