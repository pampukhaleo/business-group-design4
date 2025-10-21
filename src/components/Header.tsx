import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logoNew.png";
import { useAuth } from "@/hooks/useAuth";
import { useUserRole } from "@/hooks/useUserRole";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const { canManageLeads } = useUserRole();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md' : 'bg-background/80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" onClick={scrollToTop} className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="Global bridge agency AML (UG) Logo" 
              className="h-8 w-auto group-hover:scale-110 transition-transform duration-300"
            />
            <h1 className="text-xl font-bold text-foreground hidden sm:block">
              <span className="text-accent">Global bridge</span> agency AML (UG)
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick('services')}
              className="relative text-muted-foreground hover:text-accent transition-colors group"
            >
              Dienstleistungen
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className="relative text-muted-foreground hover:text-accent transition-colors group"
            >
              Über uns
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </button>
            <Link 
              to="/kontakt" 
              onClick={scrollToTop}
              className="relative text-muted-foreground hover:text-accent transition-colors group"
            >
              Kontakt
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
            {user && canManageLeads && (
              <Link 
                to="/crm" 
                onClick={scrollToTop}
                className="px-4 py-2 bg-accent hover:bg-accent-dark text-accent-foreground rounded-lg transition-all duration-300 font-medium shadow-glow hover:shadow-glow-strong"
              >
                CRM
              </Link>
            )}
            {user && (
              <Button
                variant="ghost"
                size="sm"
                onClick={async () => {
                  await signOut();
                  navigate('/');
                }}
                className="hover:bg-accent/10 hover:text-accent transition-colors"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            )}
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
              {user && canManageLeads && (
                <Link
                  to="/crm"
                  onClick={() => {
                    setIsMenuOpen(false);
                    scrollToTop();
                  }}
                  className="text-accent hover:text-accent-dark transition-colors font-medium"
                >
                  CRM
                </Link>
              )}
              {user && (
                <button
                  onClick={async () => {
                    await signOut();
                    setIsMenuOpen(false);
                    navigate('/');
                  }}
                  className="text-left text-muted-foreground hover:text-primary transition-colors"
                >
                  Выйти
                </button>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;