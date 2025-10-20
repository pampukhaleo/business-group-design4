import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Stethoscope, Zap } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  accent?: boolean;
  href?: string;
}

const getServiceIcon = (title: string) => {
  if (title.includes("Personal")) return Users;
  if (title.includes("Medizin")) return Stethoscope;
  if (title.includes("Generator")) return Zap;
  return Users;
};

const ServiceCard = ({ title, description, features, image, imageAlt, accent = false, href }: ServiceCardProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const Icon = getServiceIcon(title);

  const CardContent = (
    <div className="h-full flex flex-col">
      {/* Icon section with glassmorphism */}
      <div className="relative h-48 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center overflow-hidden rounded-t-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent"></div>
        <div className="relative z-10 glass-strong rounded-2xl p-6 group-hover:scale-110 transition-transform duration-500">
          <Icon className="w-16 h-16 text-accent group-hover:animate-bounce-in" />
        </div>
        {/* Decorative blur circles */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
      </div>

      {/* Content section */}
      <div className="flex-1 p-6 flex flex-col">
        <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>

        {/* Features List */}
        <ul className="space-y-2 mb-6 flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0 group-hover:animate-pulse"></div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Button 
          variant="default"
          className="w-full bg-accent hover:bg-accent-dark text-accent-foreground shadow-glow hover:shadow-glow-strong transition-all duration-300 group/btn"
        >
          Mehr erfahren
          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link 
        to={href} 
        onClick={scrollToTop}
        className="group block h-full glass-strong rounded-2xl overflow-hidden hover-lift hover-glow transition-all duration-500 cursor-pointer border border-accent/20"
      >
        {CardContent}
      </Link>
    );
  }

  return (
    <div className="group h-full glass-strong rounded-2xl overflow-hidden hover-lift hover-glow transition-all duration-500 border border-accent/20">
      {CardContent}
    </div>
  );
};

export default ServiceCard;