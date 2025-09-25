import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Package, Utensils, Home, ShoppingCart, Truck, Shield, Star, Leaf, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  const features = [
    { icon: <Truck className="h-6 w-6" />, title: "24h Lieferung", description: "Schnelle Lieferung deutschlandweit" },
    { icon: <Shield className="h-6 w-6" />, title: "Qualitätsgarantie", description: "100% geprüfte Produkte" },
    { icon: <Leaf className="h-6 w-6" />, title: "Bio-Zertifiziert", description: "Nachhaltige Produkte" },
    { icon: <Award className="h-6 w-6" />, title: "Premium Service", description: "Persönliche Beratung" },
  ];

  const productCategories = [
    {
      icon: <Utensils className="h-16 w-16" />,
      title: "Premium Lebensmittel",
      subtitle: "Frisch & Qualitativ",
      description: "Hochwertige Lebensmittel für Gastronomie und Großkunden",
      badge: "Bestseller",
      color: "products",
      items: [
        { name: "Bio-Fleischprodukte", quality: "Premium", delivery: "Täglich frisch" },
        { name: "Frisches Gemüse", quality: "Regional", delivery: "Saisonale Auswahl" },
        { name: "Milchprodukte", quality: "Bio-zertifiziert", delivery: "Kühlkette garantiert" },
        { name: "Backwaren", quality: "Handgemacht", delivery: "Morgens geliefert" },
        { name: "Gewürze & Kräuter", quality: "International", delivery: "Große Auswahl" },
        { name: "Getränke", quality: "Premium", delivery: "Alle Kategorien" }
      ]
    },
    {
      icon: <Home className="h-16 w-16" />,
      title: "Haushaltswaren",
      subtitle: "Komplett & Praktisch",
      description: "Alles für den professionellen Haushalt und Hotellerie",
      badge: "Neu",
      color: "accent",
      items: [
        { name: "Profi-Küchenausstattung", quality: "Gastronomie", delivery: "Sofort verfügbar" },
        { name: "Reinigungsmittel", quality: "Professionell", delivery: "Großpackungen" },
        { name: "Bettwäsche & Textilien", quality: "Hotel-Standard", delivery: "Verschiedene Größen" },
        { name: "Büroartikel", quality: "Komplett-Set", delivery: "Business Pakete" },
        { name: "Dekorations-Artikel", quality: "Modern", delivery: "Aktuelle Trends" },
        { name: "Technik & Geräte", quality: "Energieeffizient", delivery: "Mit Garantie" }
      ]
    }
  ];

  const testimonials = [
    {
      name: "Hotel Metropol",
      rating: 5,
      text: "Ausgezeichnete Qualität und zuverlässige Lieferungen. Unser Partner seit 3 Jahren."
    },
    {
      name: "Restaurant Silva",
      rating: 5,
      text: "Frische Zutaten täglich geliefert. Die Qualität überzeugt unsere Gäste."
    },
    {
      name: "Klinikum Nord",
      rating: 5,
      text: "Professioneller Service und faire Preise für unsere Großküche."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="outline" className="mb-8 hover:shadow-products transition-all duration-300">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zurück zur Hauptseite
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-products-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto animate-fade-in">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full mb-8 animate-float">
              <Package className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Premium Produkte
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text">
                & Haushaltswaren
              </span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8">
              Hochwertige Lebensmittel und Haushaltswaren für Unternehmen, 
              Gastronomie und den professionellen Handel.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {features.map((feature, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-4 text-center">
                    <div className="text-white/80 mb-2">{feature.icon}</div>
                    <div className="text-sm font-bold text-white">{feature.title}</div>
                    <div className="text-xs text-white/70">{feature.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Catalog */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Unser Sortiment
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Von frischen Lebensmitteln bis zu praktischen Haushaltswaren - 
              alles aus einer Hand
            </p>
          </div>

          <div className="grid gap-12">
            {productCategories.map((category, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-${category.color} transition-all duration-500 animate-slide-up border-0 bg-gradient-to-br from-card to-card/50 overflow-hidden`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <CardHeader className="pb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-4 rounded-2xl bg-${category.color}/10 group-hover:bg-${category.color}/20 transition-colors duration-300`}>
                      <div className={`text-${category.color}`}>
                        {category.icon}
                      </div>
                    </div>
                    <Badge className={`bg-${category.color}/10 text-${category.color} hover:bg-${category.color}/20`}>
                      {category.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-3xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </CardTitle>
                  <p className={`text-${category.color} font-semibold text-lg`}>{category.subtitle}</p>
                  <p className="text-muted-foreground text-lg">{category.description}</p>
                </CardHeader>
                <CardContent>
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                     {category.items.map((item, itemIndex) => (
                        <Card 
                          key={itemIndex}
                          className="p-4 bg-white border-2 border-products/20 shadow-medium hover:shadow-large transition-all duration-300 hover:scale-105"
                        >
                         <div className="space-y-3">
                           <div className={`flex items-center space-x-2`}>
                             <div className={`w-3 h-3 bg-${category.color} rounded-full flex-shrink-0`}></div>
                             <h4 className="font-bold text-card-foreground">{item.name}</h4>
                           </div>
                           <div className="space-y-2 text-sm">
                             <div className="flex justify-between">
                               <span className="text-muted-foreground">Qualität:</span>
                               <span className={`font-medium text-${category.color}`}>{item.quality}</span>
                             </div>
                             <div className="flex justify-between">
                               <span className="text-muted-foreground">Lieferung:</span>
                               <span className="font-medium text-card-foreground">{item.delivery}</span>
                             </div>
                           </div>
                         </div>
                       </Card>
                     ))}
                   </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Star className="h-16 w-16 text-products mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-primary mb-6">
              Was unsere Kunden sagen
            </h2>
            <p className="text-lg text-muted-foreground">
              Vertrauen durch Qualität und Service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-products transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-products text-products" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  <div className="font-bold text-card-foreground">- {testimonial.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-products-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Bereit für eine Partnerschaft?
            </h2>
            <p className="text-white/90 text-lg mb-12 max-w-3xl mx-auto">
              Kontaktieren Sie uns für ein individuelles Angebot und erfahren Sie, 
              wie wir Ihre Versorgung optimieren können.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/kontakt">
                <Button 
                  size="lg"
                  className="bg-white text-products hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Katalog anfordern
                </Button>
              </Link>
              <Link to="/kontakt">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-products transition-all duration-300"
                >
                  Beratung vereinbaren
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;