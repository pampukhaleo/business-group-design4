import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-business.jpg";
import logo from "@/assets/logo.png";

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
          alt="Professionelle Geschäftslösungen Deutschland - Personalvermittlung und Medizintechnik"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content - Left on desktop, Top on mobile */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Professionelle Geschäftslösungen
                <span className="block text-accent">für Sie</span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
                Spezialisiert auf Personalvermittlung für medizinische Fachkräfte, Handel mit Premium-Produkten 
                und modernste Medizintechnik – Ihr zuverlässiger Partner für geschäftlichen Erfolg seit über 10 Jahren.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="default" 
                  onClick={scrollToServices}
                  className="bg-accent hover:bg-accent-dark text-accent-foreground shadow-medium w-full sm:w-auto"
                >
                  Unsere Dienstleistungen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="secondary" 
                  onClick={navigateToContact}
                  className="bg-white/10 text-white border border-white/20 hover:bg-white/20 shadow-medium w-full sm:w-auto"
                >
                  Kontakt aufnehmen
                </Button>
              </div>
            </div>

            {/* Logo - Right on desktop, Top on mobile */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="w-full max-w-md lg:max-w-lg animate-fade-in">
                <img
                  src={logo}
                  alt="Global bridge agency AML (UG) Logo"
                  className="w-full h-auto drop-shadow-2xl hover-scale"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;