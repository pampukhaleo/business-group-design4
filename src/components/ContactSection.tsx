import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import QuickContactButtons from "./QuickContactButtons";

const ContactSection = () => {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate('/kontakt');
  };

  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Bereit für die Zusammenarbeit?
          </h2>
          
          <p className="text-xl mb-12 opacity-90 leading-relaxed">
            Kontaktieren Sie Global bridge agency AML (UG) noch heute und erfahren Sie, wie wir Ihr Unternehmen 
            mit unseren professionellen Dienstleistungen unterstützen können.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 md:mb-10 lg:mb-12">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                <Mail className="h-8 w-8 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">E-Mail</h3>
                <p className="opacity-80">info@globalbridge-agency.de</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                <Phone className="h-8 w-8 text-accent-foreground" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-1">Telefon</h3>
                <p className="opacity-80">+491 57 525 95235</p>
                <p className="opacity-80">+216 94 237 848</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                <MapPin className="h-8 w-8 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Standort</h3>
                <p className="opacity-80">Deutschland</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <Button 
              size="lg" 
              onClick={navigateToContact}
              className="bg-accent hover:bg-accent-dark text-accent-foreground shadow-large px-8 py-4 text-lg"
            >
              Kostenlose Beratung anfragen
            </Button>
            
            <div className="text-center">
              <p className="text-sm opacity-70 mb-4">Oder kontaktieren Sie uns direkt:</p>
              <QuickContactButtons variant="footer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;