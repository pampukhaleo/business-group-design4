import { Button } from "@/components/ui/button";
import { ArrowLeft, Building, Mountain, Truck, CheckCircle, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const ConstructionMaterials = () => {
  const materialCategories = [
    {
      icon: <Mountain className="h-8 w-8" />,
      title: "Naturstein & Marmor",
      description: "Exklusive Natursteine für hochwertige Bauprojekte",
      items: [
        "Granit in verschiedenen Farben",
        "Marmor für Innen- und Außenbereiche",
        "Sandstein für Fassadengestaltung",
        "Schiefer für Dächer und Böden",
        "Travertin für elegante Oberflächen",
        "Kalkstein für traditionelle Bauweise"
      ]
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Beton & Zement",
      description: "Hochwertige Betonprodukte für alle Bauvorhaben",
      items: [
        "Transportbeton verschiedener Festigkeitsklassen",
        "Spezialbeton für besondere Anforderungen",
        "Estrichbeton für Innenausbau",
        "Sichtbeton für Architektur",
        "Fertigteile aus Beton",
        "Zement und Bindemittel"
      ]
    }
  ];

  const advantages = [
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Geprüfte Qualität",
      description: "Alle Materialien entsprechen höchsten Standards"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Pünktliche Lieferung",
      description: "Termintreue Lieferungen zu Ihrer Baustelle"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Langzeitgarantie",
      description: "Garantie auf alle unsere Baumaterialien"
    }
  ];

  const projectTypes = [
    "Wohnungsbau und Eigenheime",
    "Gewerbliche Bauprojekte",
    "Öffentliche Gebäude",
    "Infrastrukturprojekte",
    "Sanierung und Renovierung",
    "Landschaftsbau und Gartengestaltung"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="outline" className="mb-8 hover:shadow-soft transition-all duration-300">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zurück zur Hauptseite
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-primary-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Building className="h-16 w-16 text-primary-foreground mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Baumaterialien
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Hochwertige Baumaterialien für professionelle Bauprojekte aller Größenordnungen. 
              Von Naturstein bis Beton - alles aus einer Hand.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              Ihr Partner für Qualitätsbau
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Seit Jahren beliefern wir Bauunternehmen, Architekten und Bauherren mit 
              erstklassigen Baumaterialien. Unser Sortiment umfasst alles von exklusivem 
              Naturstein bis hin zu hochwertigem Beton für Ihre Bauprojekte.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-card shadow-soft hover:shadow-medium transition-all duration-300">
                  <div className="bg-accent-gradient p-3 rounded-full w-fit mx-auto mb-4">
                    <div className="text-accent-foreground">
                      {advantage.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Material Categories */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Unser Materialsortiment
              </h2>
              <p className="text-lg text-muted-foreground">
                Von Naturstein bis Beton - alles für Ihr Bauprojekt
              </p>
            </div>

            <div className="grid gap-12">
              {materialCategories.map((category, index) => (
                <div key={index} className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="bg-accent-gradient p-3 rounded-lg mr-4">
                      <div className="text-accent-foreground">
                        {category.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-card-foreground">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground text-lg mt-2">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className="flex items-center space-x-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-200"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                        <span className="text-card-foreground font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Für jedes Bauprojekt gerüstet
              </h2>
              <p className="text-lg text-muted-foreground">
                Unsere Materialien kommen in vielfältigen Projekten zum Einsatz
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projectTypes.map((type, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 p-4 rounded-lg bg-card shadow-soft hover:shadow-medium transition-all duration-200"
                >
                  <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-card-foreground text-lg font-medium">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Promise Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Truck className="h-16 w-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-primary mb-8">
              Unser Service-Versprechen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-left p-6 rounded-2xl bg-card shadow-soft">
                <h3 className="text-xl font-bold text-card-foreground mb-4">
                  Lieferservice:
                </h3>
                <ul className="space-y-2 text-card-foreground">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Lieferung direkt zur Baustelle</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Flexible Lieferzeiten</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Spezialtransporte möglich</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Kranentladung verfügbar</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-left p-6 rounded-2xl bg-card shadow-soft">
                <h3 className="text-xl font-bold text-card-foreground mb-4">
                  Konditionen:
                </h3>
                <ul className="space-y-2 text-card-foreground">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Mengenrabatte ab größeren Bestellungen</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Flexible Zahlungsbedingungen</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Kostenlose Beratung</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Langfristige Partnerschaften</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-8">
              Bauen Sie auf Qualität
            </h2>
            <p className="text-accent-foreground/90 text-lg mb-8">
              Kontaktieren Sie uns für ein unverbindliches Angebot und lassen Sie sich 
              von unserer Materialqualität überzeugen.
            </p>
            
            <Button 
              variant="secondary" 
              className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 shadow-glow"
            >
              Materialanfrage stellen
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConstructionMaterials;