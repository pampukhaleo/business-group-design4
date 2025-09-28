import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first, then scroll to section
      navigate('/');
      // Use setTimeout to allow navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If on home page, scroll to section immediately
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" onClick={scrollToTop} className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Global Bridge Agency ALM UG Logo" 
              className="h-8 w-auto"
            />
            <h1 className="text-xl font-bold text-primary hidden sm:block">
              <span className="text-accent">Global Bridge</span> Agency ALM UG
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick('services')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Dienstleistungen
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Über uns
            </button>
            <Link 
              to="/kontakt" 
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Kontakt
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleNavClick('services')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Dienstleistungen
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Über uns
              </button>
              <Link
                to="/kontakt"
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToTop();
                }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Kontakt
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;