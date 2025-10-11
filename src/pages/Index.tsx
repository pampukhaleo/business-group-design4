import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <>
      <SEO 
        breadcrumbs={[
          { name: "Home", url: "https://globalbridge-agency.de/" }
        ]}
      />
      <div className="min-h-screen">
        <HeroSection />
        <div id="services">
          <ServicesSection />
        </div>
        <div id="about">
          <ContactSection />
        </div>
      </div>
    </>
  );
};

export default Index;