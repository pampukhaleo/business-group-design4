import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Bereit für die Zusammenarbeit?
          </h2>
          
          <p className="text-xl mb-12 opacity-90 leading-relaxed">
            Kontaktieren Sie uns noch heute und erfahren Sie, wie wir Ihr Unternehmen 
            mit unseren professionellen Dienstleistungen unterstützen können.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                <Mail className="h-8 w-8 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">E-Mail</h3>
                <p className="opacity-80">info@businesshub.de</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                <Phone className="h-8 w-8 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Telefon</h3>
                <p className="opacity-80">+49 (0) 40 123 456 789</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                <MapPin className="h-8 w-8 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Standort</h3>
                <p className="opacity-80">Hamburg, Deutschland</p>
              </div>
            </div>
          </div>

          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent-dark text-accent-foreground shadow-large px-8 py-4 text-lg"
          >
            Kostenlose Beratung anfragen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;