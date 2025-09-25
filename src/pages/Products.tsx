import { Button } from "@/components/ui/button";
import { ArrowLeft, Package, Utensils, Home, ShoppingCart, Truck, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  const productCategories = [
    {
      icon: <Utensils className="h-8 w-8" />,
      title: "Lebensmittellieferungen",
      description: "Professionelle Lebensmittelversorgung für Organisationen und den Handel",
      items: [
        "Frische Produkte täglich geliefert",
        "Großhandelspreise für Organisationen",
        "Bio- und konventionelle Lebensmittel",
        "Spezielle Diätprodukte verfügbar",
        "Saisonale und regionale Spezialitäten",
        "Halal- und Koscher-Produkte"
      ]
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Haushaltswaren",
      description: "Umfassende Ausstattung für Privathaushalte und Gewerbe",
      items: [
        "Küchenausstattung und Geschirr",
        "Reinigungsmittel und Hygieneartikel",
        "Bettwäsche und Heimtextilien",
        "Kleingeräte für den Haushalt",
        "Bürobedarf und Organisationsmittel",
        "Dekorations- und Einrichtungsgegenstände"
      ]
    }
  ];

  const advantages = [
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Zuverlässige Lieferung",
      description: "Pünktliche Lieferung direkt zu Ihnen"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Qualitätsgarantie",
      description: "Nur hochwertige, geprüfte Produkte"
    },
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "Flexible Bestellungen",
      description: "Einzelbestellungen oder regelmäßige Lieferungen"
    }
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
            <Package className="h-16 w-16 text-primary-foreground mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Produkte & Haushaltswaren
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Hochwertige Lebensmittel und Haushaltswaren für Unternehmen und den Handel. 
              Zuverlässige Lieferketten und flexible Lösungen für alle Ihre Bedürfnisse.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              Ihre verlässliche Versorgung
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Wir beliefern Restaurants, Hotels, Krankenhäuser, Schulen und andere Organisationen 
              mit hochwertigen Lebensmitteln und Haushaltswaren. Unser Sortiment umfasst alles 
              von frischen Produkten bis hin zu praktischen Haushaltshelfern.
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

      {/* Product Categories */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Unser Sortiment
              </h2>
              <p className="text-lg text-muted-foreground">
                Von frischen Lebensmitteln bis zu praktischen Haushaltswaren
              </p>
            </div>

            <div className="grid gap-12">
              {productCategories.map((category, index) => (
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

      {/* CTA Section */}
      <section className="py-20 bg-accent-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-8">
              Bereit für eine Partnerschaft?
            </h2>
            <p className="text-accent-foreground/90 text-lg mb-8">
              Kontaktieren Sie uns für ein individuelles Angebot und erfahren Sie, 
              wie wir Ihre Versorgung optimieren können.
            </p>
            
            <Button 
              variant="secondary" 
              className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 shadow-glow"
            >
              Angebot anfordern
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;