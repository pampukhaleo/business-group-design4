import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div id="services">
        <ServicesSection />
      </div>
      <div id="about">
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;