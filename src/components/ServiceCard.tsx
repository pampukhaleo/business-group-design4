import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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

const ServiceCard = ({ title, description, features, image, imageAlt, accent = false, href }: ServiceCardProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const CardContent = (
    <div className="h-full flex flex-col">
      {/* Image section */}
      <div className="relative h-64 overflow-hidden rounded-t-2xl">
        <img 
          src={image} 
          alt={imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-500"
        />
        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent"></div>
        {/* Decorative accent border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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