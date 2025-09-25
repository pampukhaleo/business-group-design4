import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Heart, Code, GraduationCap, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const PersonnelService = () => {
  const sections = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Für Ärzte",
      description: "Wir bieten Stellen für Spezialisten verschiedener Fachrichtungen:",
      items: [
        "Allgemeinmediziner",
        "Chirurgen",
        "Anästhesisten",
        "Internisten",
        "Kardiologen",
        "Gynäkologen",
        "Kinderärzte",
        "Neurologen",
        "Radiologen",
        "Dermatologen",
        "Psychiater und Psychotherapeuten",
        "Intensivmediziner",
        "Orthopäden und Unfallchirurgen",
        "Notärzte",
        "Andere medizinische Fachrichtungen"
      ]
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Für Krankenschwestern",
      description: "Wir vermitteln Personal in den wichtigsten Bereichen der Pflege und Medizin:",
      items: [
        "Allgemeine Krankenschwestern",
        "OP-Schwestern",
        "Anästhesieassistenten",
        "Intensivpflegekräfte",
        "Stationspflege",
        "Ambulante Pflege",
        "Spezialisten für Geriatrie und Altenpflege"
      ]
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Altenpflege",
      description: "Separater Bereich - Stellen für Pflegespezialisten:",
      items: [
        "Pflegehelfer (mit und ohne Erfahrung)",
        "Qualifizierte Pflegekräfte",
        "Krankenschwestern in Pflegeheimen",
        "Personal für ambulante häusliche Pflege",
        "Sozialarbeiter"
      ]
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "IT-Stellen",
      description: "Wir bieten auch Arbeit im Bereich der Informationstechnologie:",
      items: [
        "Entwicklung und Programmierung",
        "Systemadministration",
        "Benutzersupport (IT-Support)",
        "Projektmanagement in der IT",
        "Cybersecurity-Spezialisten",
        "Data Science und Datenanalyse"
      ]
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Arbeit für Studenten",
      description: "Wir bieten flexible Arbeitsplätze für Studenten in Deutschland:",
      items: [
        "Nebenjobs in Pflege und Medizin (als Hilfskräfte)",
        "IT-Projekte",
        "Leichte Lager- und Logistikarbeiten",
        "Arbeit im Service- und Supportbereich"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="outline" className="mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zurück zur Hauptseite
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-primary-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Personal für Medizin, Pflege, IT und Studenten in Deutschland
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Spezialisierung auf die Vermittlung qualifizierter Fachkräfte in den Bereichen 
              Medizin, Pflege, IT und Studentenjobs in ganz Deutschland.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Building2 className="h-16 w-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Über uns
              </h2>
              <div className="prose prose-lg mx-auto text-muted-foreground">
                <p className="mb-6">
                  Wir spezialisieren uns auf die Vermittlung qualifizierter Fachkräfte in den Bereichen:
                </p>
                <ul className="text-left mb-6">
                  <li>Medizin und Pflege</li>
                  <li>IT-Bereiche</li>
                  <li>Arbeit für Studenten in Deutschland</li>
                </ul>
                <p className="mb-6">
                  Unser Ziel ist es, Spezialisten mit zuverlässigen Kliniken, Unternehmen und 
                  Organisationen in ganz Deutschland zu verbinden. Wir bieten sowohl zeitlich 
                  befristete Aufgaben als auch feste Arbeitsplätze an.
                </p>
                <p>
                  Je nach Stellenausschreibung können Deutschkenntnisse erforderlich sein, 
                  in einigen Fällen sind sie jedoch nicht notwendig.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-12">
              {sections.map((section, index) => (
                <div key={index} className="bg-card rounded-2xl p-8 shadow-soft">
                  <div className="flex items-center mb-6">
                    <div className="bg-accent-gradient p-3 rounded-lg mr-4">
                      <div className="text-accent-foreground">
                        {section.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-card-foreground">
                      {section.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 text-lg">
                    {section.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {section.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-200"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                        <span className="text-card-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Student Work Special Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <GraduationCap className="h-16 w-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-primary mb-6">
              Eine großartige Gelegenheit für Studenten
            </h2>
            <p className="text-lg text-muted-foreground">
              Studium und Arbeit zu verbinden und erste Erfahrungen auf dem deutschen Arbeitsmarkt zu sammeln.
            </p>
          </div>
        </div>
      </section>

      {/* For Clinics Section */}
      <section className="py-20 bg-accent-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-8">
              Für Kliniken und Unternehmen
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="text-left">
                <h3 className="text-xl font-bold text-accent-foreground mb-4">
                  Wir stellen zur Verfügung:
                </h3>
                <ul className="space-y-2 text-accent-foreground/90">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent-foreground/60 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Qualifiziertes medizinisches Personal</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent-foreground/60 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Pflegespezialisten</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent-foreground/60 rounded-full mt-2 flex-shrink-0"></div>
                    <span>IT-Fachkräfte</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent-foreground/60 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Studenten für Nebenjobs</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-left">
                <h3 className="text-xl font-bold text-accent-foreground mb-4">
                  Unsere Vorteile:
                </h3>
                <ul className="space-y-2 text-accent-foreground/90">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent-foreground/60 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Zuverlässiges Netzwerk von Spezialisten</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent-foreground/60 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Flexible Personallösungen</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent-foreground/60 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Schnelle Personalvermittlung</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent-foreground/60 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Transparente Zusammenarbeit</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <p className="text-accent-foreground/90 text-lg">
              Wir garantieren eine professionelle Personalvermittlung unter Berücksichtigung individueller Anforderungen.
            </p>
            
            <Button 
              variant="secondary" 
              className="mt-8 bg-accent-foreground text-accent hover:bg-accent-foreground/90"
            >
              Jetzt Kontakt aufnehmen
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonnelService;