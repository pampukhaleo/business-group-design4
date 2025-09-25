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
    <>
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${
          accent ? 'from-accent/60 to-transparent' : 'from-primary/40 to-transparent'
        }`}></div>
      </div>

      {/* Content Section */}
      <div className="p-8">
        <h3 className={`text-2xl font-bold mb-4 ${
          accent ? 'text-accent-foreground' : 'text-card-foreground'
        }`}>
          {title}
        </h3>
        
        <p className={`text-lg mb-6 leading-relaxed ${
          accent ? 'text-accent-foreground/90' : 'text-muted-foreground'
        }`}>
          {description}
        </p>

        {/* Features List */}
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className={`flex items-start space-x-3 ${
              accent ? 'text-accent-foreground/90' : 'text-card-foreground'
            }`}>
              <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                accent ? 'bg-accent-foreground/60' : 'bg-accent'
              }`}></div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Button 
          variant={accent ? "secondary" : "default"}
          className={`w-full group-hover:scale-105 transition-transform duration-300 ${
            accent ? 'bg-accent-foreground text-accent hover:bg-accent-foreground/90' : 'bg-accent hover:bg-accent-dark text-accent-foreground'
          }`}
        >
          Mehr erfahren
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>
    </>
  );

  if (href) {
    return (
      <Link 
        to={href} 
        onClick={scrollToTop}
        className={`group block relative overflow-hidden rounded-2xl shadow-large hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
          accent ? 'bg-accent-gradient' : 'bg-card-gradient'
        }`}
      >
        {CardContent}
      </Link>
    );
  }

  return (
    <div className={`group relative overflow-hidden rounded-2xl shadow-large hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
      accent ? 'bg-accent-gradient' : 'bg-card-gradient'
    }`}>
      {CardContent}
    </div>
  );
};

export default ServiceCard;