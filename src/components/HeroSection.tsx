import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-business.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToContact = () => {
    navigate('/kontakt');
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional business environment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Ihre Geschäftslösungen
            <span className="block text-accent">in Deutschland</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Professionelle Dienstleistungen in den Bereichen Personalvermittlung, Handel, 
            Medizintechnik und Baumaterialien – Ihr zuverlässiger Partner für geschäftlichen Erfolg.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="default" 
              onClick={scrollToServices}
              className="bg-accent hover:bg-accent-dark text-accent-foreground shadow-medium"
            >
              Unsere Dienstleistungen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="secondary" 
              onClick={navigateToContact}
              className="bg-white/10 text-white border border-white/20 hover:bg-white/20 shadow-medium"
            >
              Kontakt aufnehmen
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;