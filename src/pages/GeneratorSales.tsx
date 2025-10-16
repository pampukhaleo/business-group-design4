import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Zap, Battery, Wind, Factory, Settings, Users, Shield, Clock, CheckCircle, Award } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";

const GeneratorSales = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Generatoren Verkauf",
    "description": "Professionelle Diesel- und Gasgeneratoren für Industrie, Gewerbe und Notstromversorgung. Hochwertige Stromerzeuger mit Installation und Service.",
    "provider": {
      "@type": "Organization",
      "name": "Global bridge agency AML (UG)",
      "url": "https://globalbridge-agency.de"
    },
    "serviceType": "Energietechnik",
    "areaServed": "DE"
  };

  const services = [
    { icon: <Settings className="h-6 w-6" />, title: "Installation", description: "Professionelle Generator-Installation" },
    { icon: <Users className="h-6 w-6" />, title: "Schulung", description: "Umfassende Bedienungs-Schulungen" },
    { icon: <Shield className="h-6 w-6" />, title: "Wartung", description: "Regelmäßige Wartung & Service" },
    { icon: <Clock className="h-6 w-6" />, title: "24/7 Support", description: "Rund-um-die-Uhr Notfall-Service" },
  ];

  const generatorCategories = [
    {
      icon: <Zap className="h-16 w-16" />,
      title: "Diesel-Generatoren",
      subtitle: "Zuverlässige Stromversorgung",
      description: "Robuste Dieselgeneratoren für kontinuierlichen Betrieb",
      badge: "Leistungsstark",
      color: "primary",
      certification: "ISO 8528",
      equipment: [
        { name: "Kompakt-Generatoren", specs: "10-50 kVA", status: "Portabel" },
        { name: "Industrie-Generatoren", specs: "100-500 kVA", status: "Stationär" },
        { name: "Heavy-Duty", specs: "500-2000 kVA", status: "Hochleistung" },
        { name: "Container-Generatoren", specs: "bis 3000 kVA", status: "Wettergeschützt" },
        { name: "Notstrom-Aggregate", specs: "Automatischer Start", status: "USV-Kompatibel" },
        { name: "Mobile Einheiten", specs: "Auf Anhänger", status: "Flexibel" }
      ]
    },
    {
      icon: <Wind className="h-16 w-16" />,
      title: "Gas-Generatoren",
      subtitle: "Umweltfreundliche Energie",
      description: "Effiziente Gasgeneratoren für saubere Stromerzeugung",
      badge: "Eco-Friendly",
      color: "accent",
      certification: "CE Zertifiziert",
      equipment: [
        { name: "Erdgas-Generatoren", specs: "50-200 kVA", status: "Netzgekoppelt" },
        { name: "Biogas-Anlagen", specs: "100-500 kVA", status: "Nachhaltig" },
        { name: "Blockheizkraftwerke", specs: "Kraft-Wärme", status: "KWK" },
        { name: "Flüssiggas-LPG", specs: "20-100 kVA", status: "Dual-Fuel" },
        { name: "Hybrid-Systeme", specs: "Solar + Gas", status: "Smart-Grid" },
        { name: "Mikro-KWK", specs: "5-20 kVA", status: "Residential" }
      ]
    },
    {
      icon: <Battery className="h-16 w-16" />,
      title: "Notstrom-Systeme",
      subtitle: "Ausfallsicherheit",
      description: "Automatische Notstromversorgung für kritische Infrastruktur",
      badge: "Critical Power",
      color: "medical",
      certification: "VDE 0100-710",
      equipment: [
        { name: "USV-Systeme", specs: "Online/Offline", status: "Unterbrechungsfrei" },
        { name: "Krankenhaus-Notstrom", specs: "Medizin-konform", status: "EN 50171" },
        { name: "Rechenzentrum-USV", specs: "Redundant N+1", status: "Tier III/IV" },
        { name: "Industrie-Backup", specs: "Schnellstart <10s", status: "Automatisch" },
        { name: "Batterie-Speicher", specs: "Li-Ion / AGM", status: "Hybrid-Ready" },
        { name: "Lastmanagement", specs: "Smart-Control", status: "Peak-Shaving" }
      ]
    },
    {
      icon: <Factory className="h-16 w-16" />,
      title: "Industrie-Lösungen",
      subtitle: "Komplette Energiesysteme",
      description: "Maßgeschneiderte Energielösungen für Industrie und Gewerbe",
      badge: "Industrial",
      color: "products",
      certification: "ISO 9001",
      equipment: [
        { name: "Parallelbetrieb", specs: "Multi-Generator", status: "Synchronisiert" },
        { name: "Lastverteilung", specs: "Automatisch", status: "Load-Sharing" },
        { name: "Fernüberwachung", specs: "IoT-Connected", status: "Cloud-basiert" },
        { name: "Prime Power", specs: "Dauerbetrieb", status: "24/7" },
        { name: "Spitzenlast-Abdeckung", specs: "Peak-Shaving", status: "Energiemanagement" },
        { name: "Netzersatzanlagen", specs: "Stand-alone", status: "Off-Grid" }
      ]
    }
  ];

  const certifications = [
    { name: "ISO 8528", description: "Generator-Sets Standard" },
    { name: "CE Kennzeichnung", description: "Europäische Konformität" },
    { name: "VDE Zertifizierung", description: "Elektrische Sicherheit" },
    { name: "Emissions-Norm", description: "EU Stage V konform" }
  ];

  const faqItems = [
    {
      question: "Welcher Generator ist für meine Anwendung geeignet?",
      answer: "Die Wahl hängt von Ihrem Leistungsbedarf, der geplanten Betriebszeit und den örtlichen Gegebenheiten ab. Für kontinuierlichen Betrieb empfehlen wir Diesel-Generatoren, für umweltbewusste Lösungen Gas-Generatoren. Wir führen eine kostenlose Bedarfsanalyse durch und erstellen Ihnen ein passendes Angebot."
    },
    {
      question: "Wie lange ist die Lieferzeit für Generatoren?",
      answer: "Standard-Generatoren sind oft innerhalb von 2-4 Wochen lieferbar. Bei Sonderanfertigungen oder Großprojekten planen wir 6-12 Wochen für Produktion, Lieferung und Installation ein. Wir halten auch Mietgeneratoren für Überbrückungszeiten bereit."
    },
    {
      question: "Bieten Sie auch Wartungs-Verträge an?",
      answer: "Ja, wir bieten umfassende Wartungsverträge mit regelmäßigen Inspektionen, Ölwechsel, Filterwechsel und Funktionsprüfungen. Je nach Betriebsstunden empfehlen wir quartalsweise oder halbjährliche Wartung. Unsere Techniker sind deutschlandweit im Einsatz."
    },
    {
      question: "Können Generatoren parallel zum Stromnetz betrieben werden?",
      answer: "Ja, wir installieren Generatoren mit automatischer Netzumschaltung (ATS) oder für Parallelbetrieb mit dem öffentlichen Netz. Dies ermöglicht Lastspitzenkappung, Notstromversorgung und Netzstabilisierung. Alle Systeme sind netzbetreiberkonform."
    },
    {
      question: "Welche Kraftstoffe können verwendet werden?",
      answer: "Wir bieten Generatoren für Diesel, Erdgas, Flüssiggas (LPG), Biogas und Dual-Fuel-Systeme an. Hybrid-Lösungen mit Solar- oder Batteriespeicher sind ebenfalls verfügbar. Die Wahl hängt von Verfügbarkeit, Kosten und Umweltanforderungen ab."
    },
    {
      question: "Gibt es Finanzierungsmöglichkeiten?",
      answer: "Ja, wir bieten flexible Finanzierungs-, Leasing- und Mietkauf-Optionen an. Auch Kurz- und Langzeitmiete ist möglich. Unsere Finanzierungspartner erstellen individuelle Angebote für Ihre Investition."
    }
  ];

  return (
    <>
      <SEO
        title="Generatoren Verkauf - Diesel & Gas Stromerzeuger | Global bridge agency AML (UG)"
        description="Professionelle Diesel- und Gasgeneratoren für Industrie, Gewerbe und Notstromversorgung. Kompletter Service von Installation bis Wartung in ganz Deutschland."
        keywords="Generatoren, Diesel Generator, Gas Generator, Notstrom, Stromerzeuger, Hamburg"
        canonicalUrl="https://globalbridge-agency.de/generatoren"
        jsonLd={jsonLd}
        breadcrumbs={[
          { name: "Home", url: "https://globalbridge-agency.de/" },
          { name: "Generatoren", url: "https://globalbridge-agency.de/generatoren" }
        ]}
      />
      <div className="min-h-screen bg-background">
        {/* Back Button */}
        <div className="container mx-auto px-4 py-8">
          <Link to="/">
            <Button variant="outline" className="mb-8 hover:shadow-primary transition-all duration-300">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Zurück zur Hauptseite
            </Button>
          </Link>
          <Breadcrumbs items={[{ label: "Generatoren" }]} />
        </div>

        {/* Generator Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Unser Generator-Portfolio
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Von kompakten Notstromanlagen bis zu Industrie-Kraftwerken - 
                die perfekte Energielösung für jeden Bedarf
              </p>
            </div>

            <div className="grid gap-12">
              {generatorCategories.map((category, index) => (
                <Card 
                  key={index} 
                  className={`group hover:shadow-${category.color} transition-all duration-500 animate-slide-up border-0 bg-gradient-to-br from-card to-card/50 overflow-hidden`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader className="pb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-4 rounded-2xl bg-${category.color}/10 group-hover:bg-${category.color}/20 transition-colors duration-300`}>
                        <div className={`text-${category.color}`}>
                          {category.icon}
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Badge className={`bg-${category.color}/10 text-${category.color} hover:bg-${category.color}/20`}>
                          {category.badge}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {category.certification}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-3xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </CardTitle>
                    <p className={`text-${category.color} font-semibold text-lg`}>{category.subtitle}</p>
                    <p className="text-muted-foreground text-lg">{category.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.equipment.map((item, itemIndex) => (
                        <Card 
                          key={itemIndex}
                          className="p-4 bg-white border-2 border-primary/40 shadow-medium hover:shadow-large transition-all duration-300 hover:scale-105"
                        >
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <div className={`w-3 h-3 bg-${category.color} rounded-full flex-shrink-0`}></div>
                                <h4 className="font-bold text-card-foreground text-sm">{item.name}</h4>
                              </div>
                              <CheckCircle className={`h-4 w-4 text-${category.color}`} />
                            </div>
                            <div className="space-y-2 text-xs">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Leistung:</span>
                                <span className="font-medium text-card-foreground">{item.specs}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Typ:</span>
                                <Badge className={`bg-${category.color}/10 text-${category.color} text-xs`}>
                                  {item.status}
                                </Badge>
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

        {/* Quality & Certifications */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <Award className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-primary mb-6">
                Qualität & Zertifizierungen
              </h2>
              <p className="text-lg text-muted-foreground">
                Höchste Standards für zuverlässige Stromversorgung
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-primary transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-card-foreground">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ 
          items={faqItems}
          description="Antworten auf die wichtigsten Fragen zu unseren Generatoren"
        />

        {/* CTA Section */}
        <section className="py-20 bg-primary-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Sichern Sie Ihre Stromversorgung
              </h2>
              <p className="text-white/90 text-lg mb-12 max-w-3xl mx-auto">
                Lassen Sie uns gemeinsam die optimale Energielösung für Ihren Bedarf finden. 
                Beratung, Installation und Wartung - alles aus einer Hand.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/kontakt">
                  <Button 
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Kostenlose Beratung anfragen
                  </Button>
                </Link>
                <Link to="/kontakt">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
                  >
                    Generator-Katalog anfordern
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GeneratorSales;
