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
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/15 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content - Left on desktop, Top on mobile */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 animate-fade-in-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Professionelle Geschäftslösungen
                <span className="block text-accent mt-2 animate-shimmer bg-gradient-to-r from-accent via-accent-light to-accent bg-[length:200%_100%] bg-clip-text text-transparent">
                  für Sie
                </span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 leading-relaxed">
                Spezialisiert auf Personalvermittlung für medizinische Fachkräfte, Handel mit Premium-Produkten 
                und modernste Medizintechnik – Ihr zuverlässiger Partner für geschäftlichen Erfolg seit über 10 Jahren.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="default" 
                  onClick={scrollToServices}
                  className="group bg-accent hover:bg-accent-dark text-accent-foreground shadow-glow hover:shadow-glow-strong transition-all duration-300 w-full sm:w-auto shimmer"
                >
                  Unsere Dienstleistungen
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="secondary" 
                  onClick={navigateToContact}
                  className="glass hover:glass-strong text-foreground border-accent/30 hover:border-accent transition-all duration-300 w-full sm:w-auto"
                >
                  Kontakt aufnehmen
                </Button>
              </div>
            </div>

            {/* Logo - Right on desktop, Top on mobile */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2 animate-fade-in-right">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <img
                  src={logo}
                  alt="Global bridge agency AML (UG) Logo"
                  className="w-full h-auto drop-shadow-2xl hover:drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;