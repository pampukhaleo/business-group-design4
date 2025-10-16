import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Users, Heart, Code, GraduationCap, Building2, Star, TrendingUp, Award } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";

const PersonnelService = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Personalvermittlung",
    "description": "Professionelle Personalvermittlung für Ärzte, Pflegekräfte, IT-Spezialisten und Studenten in Deutschland",
    "provider": {
      "@type": "Organization",
      "name": "Global bridge agency AML (UG)",
      "url": "https://globalbridge-agency.de"
    },
    "serviceType": "Personalvermittlung",
    "areaServed": "DE"
  };
  const stats = [
    { 
      label: "Individueller Ansatz", 
      description: "Persönliche Betreuung für jeden Kandidaten",
      icon: <Users className="h-5 w-5" /> 
    },
    { 
      label: "Professionelle Unterstützung", 
      description: "Von der ersten Kontaktaufnahme bis zur Vertragsunterzeichnung",
      icon: <Building2 className="h-5 w-5" /> 
    },
    { 
      label: "Transparenter Prozess", 
      description: "Klare Kommunikation in jedem Schritt",
      icon: <Star className="h-5 w-5" /> 
    },
    { 
      label: "Verlässlicher Partner", 
      description: "Ihr Erfolg ist unser Ziel",
      icon: <Award className="h-5 w-5" /> 
    },
  ];

  const categories = [
    {
      icon: <Users className="h-12 w-12" />,
      title: "Ärzte",
      subtitle: "Medizinische Fachkräfte",
      description: "Spezialisierte Ärzte für alle Fachrichtungen",
      color: "personnel",
      positions: [
        "Allgemeinmediziner", "Chirurgen", "Anästhesisten", "Internisten",
        "Kardiologen", "Gynäkologen", "Kinderärzte", "Neurologen"
      ]
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: "Pflegekräfte",
      subtitle: "Qualifizierte Pflege",
      description: "Erfahrene Pflegekräfte für verschiedene Bereiche",
      color: "medical",
      positions: [
        "Krankenschwestern", "OP-Personal", "Intensivpflege", "Ambulante Pflege",
        "Altenpflege", "Stationspflege", "Anästhesieassistenz", "Geriatrie"
      ]
    },
    {
      icon: <Code className="h-12 w-12" />,
      title: "IT-Spezialisten",
      subtitle: "Technologie Experten",
      description: "IT-Fachkräfte für digitale Gesundheitslösungen",
      color: "accent",
      positions: [
        "Software Entwickler", "System Administration", "IT-Support", "Projektmanager",
        "Cybersecurity", "Data Science", "DevOps", "UI/UX Designer"
      ]
    },
    {
      icon: <GraduationCap className="h-12 w-12" />,
      title: "Studenten",
      subtitle: "Flexible Arbeitsplätze",
      description: "Nebenjobs und Praktika für Studenten",
      color: "products",
      positions: [
        "Medizin Studenten", "Pflege Praktikanten", "IT Werkstudenten", "Hilfskräfte",
        "Forschungsassistenz", "Service Personal", "Administration", "Support"
      ]
    }
  ];

  const benefits = [
    {
      title: "Schnelle Vermittlung",
      description: "Effiziente Prozesse für zeitnahe Stellenbesetzung"
    },
    {
      title: "Qualitätsgarantie",
      description: "Alle Kandidaten werden sorgfältig geprüft und qualifiziert"
    },
    {
      title: "Langfristige Partnerschaften",
      description: "Aufbau dauerhafter und erfolgreicher Arbeitsbeziehungen"
    }
  ];

  const faqItems = [
    {
      question: "Wie lange dauert der Vermittlungsprozess?",
      answer: "Der Vermittlungsprozess erfolgt zeitnah von der ersten Kontaktaufnahme bis zur erfolgreichen Vermittlung. Je nach Spezialisierung und Anforderungen kann dies variieren. Wir arbeiten effizient, um die beste Besetzung für jede Position zu finden."
    },
    {
      question: "Welche Qualifikationen müssen Kandidaten haben?",
      answer: "Alle medizinischen Fachkräfte müssen über anerkannte deutsche oder EU-Abschlüsse verfügen. Bei internationalen Abschlüssen unterstützen wir bei der Anerkennung. IT-Spezialisten benötigen nachweisbare Erfahrung und relevante Zertifizierungen."
    },
    {
      question: "Fallen für Kandidaten Kosten an?",
      answer: "Nein, unsere Dienstleistungen sind für Arbeitssuchende komplett kostenlos. Wir werden ausschließlich von den Arbeitgebern bezahlt. Sie profitieren von unserem Service ohne jegliche finanzielle Verpflichtungen."
    },
    {
      question: "Bieten Sie auch internationale Vermittlungen an?",
      answer: "Ja, wir vermitteln qualifizierte Fachkräfte aus dem gesamten EU-Raum nach Deutschland. Wir unterstützen bei Visa-Angelegenheiten, Anerkennung von Abschlüssen und helfen bei der Integration in Deutschland."
    },
    {
      question: "Welche Branchen bedienen Sie hauptsächlich?",
      answer: "Wir spezialisieren uns auf das Gesundheitswesen (Ärzte, Pflegekräfte), IT-Branche (Software-Entwicklung, Cybersecurity) und bieten flexible Lösungen für Studenten in verschiedenen Bereichen. Wir bauen kontinuierlich unser Netzwerk von Partner-Kliniken und Unternehmen aus."
    },
    {
      question: "Gibt es eine Probezeit oder Garantie?",
      answer: "Ja, wir bieten eine 6-monatige Garantie auf alle Vermittlungen. Sollte die Zusammenarbeit in dieser Zeit nicht funktionieren, suchen wir kostenfrei einen passenden Ersatz. Ihre Zufriedenheit ist unser oberstes Ziel."
    }
  ];

  return (
    <>
      <SEO
        title="Personalvermittlung - Ärzte, Pflegekräfte & IT-Spezialisten | Global bridge agency AML (UG)"
        description="Professionelle Personalvermittlung für medizinische Fachkräfte, Pflegepersonal und IT-Spezialisten in Deutschland. Individuelle Betreuung und transparenter Vermittlungsprozess."
        keywords="Personalvermittlung, Ärzte Deutschland, Pflegekräfte vermittlung, IT-Spezialisten, Hamburg"
        canonicalUrl="https://globalbridge-agency.de/personalvermittlung"
        jsonLd={jsonLd}
        breadcrumbs={[
          { name: "Home", url: "https://globalbridge-agency.de/" },
          { name: "Personalvermittlung", url: "https://globalbridge-agency.de/personalvermittlung" }
        ]}
      />
      <div className="min-h-screen bg-background">
        {/* Back Button */}
        <div className="container mx-auto px-4 py-8">
          <Link to="/">
            <Button variant="outline" className="mb-8 hover:shadow-personnel transition-all duration-300">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Zurück zur Hauptseite
            </Button>
          </Link>
          <Breadcrumbs items={[{ label: "Personalvermittlung" }]} />
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-primary-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto animate-fade-in">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full mb-8 animate-float">
              <Users className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Personalvermittlung
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text">
                der Zukunft
              </span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Spezialisiert auf medizinisches Personal, Pflegekräfte, IT-Experten und Studenten. 
              Wir verbinden Talente mit den besten Arbeitgebern in Deutschland.
            </p>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6 text-center">
                    <div className="text-white/80 mb-3 flex justify-center">{stat.icon}</div>
                    <div className="text-lg font-bold text-white mb-2">{stat.label}</div>
                    <div className="text-sm text-white/70">{stat.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Unsere Bereiche
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Von medizinischen Fachkräften bis zu IT-Spezialisten - 
              wir finden die perfekte Besetzung für jede Position
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-${category.color} transition-all duration-500 hover:scale-105 animate-slide-up border-0 bg-gradient-to-br from-card to-card/50`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className={`p-4 rounded-2xl bg-${category.color}/10 group-hover:bg-${category.color}/20 transition-colors duration-300`}>
                      <div className={`text-${category.color}`}>
                        {category.icon}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </CardTitle>
                  <p className={`text-${category.color} font-medium`}>{category.subtitle}</p>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardHeader>
                <CardContent>
                   <div className="grid grid-cols-2 gap-3">
                     {category.positions.map((position, posIndex) => (
                       <div 
                         key={posIndex}
                          className="flex items-center space-x-2 p-3 rounded-lg bg-white border-2 border-personnel/40 shadow-medium hover:bg-secondary hover:shadow-large transition-all duration-300"
                        >
                         <div className={`w-2 h-2 bg-${category.color} rounded-full flex-shrink-0`}></div>
                         <span className="text-sm font-medium text-card-foreground">{position}</span>
                       </div>
                     ))}
                   </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <TrendingUp className="h-16 w-16 text-personnel mx-auto mb-6" />
               <h2 className="text-4xl font-bold text-primary mb-6">
                Warum mit uns zusammenarbeiten?
              </h2>
              <p className="text-lg text-muted-foreground">
                Unser Engagement für Ihren Erfolg
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center p-8 hover:shadow-personnel transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="space-y-4">
                    <h3 className="text-xl font-bold text-card-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ 
        items={faqItems}
        description="Antworten auf die wichtigsten Fragen zur Personalvermittlung"
      />

      {/* CTA Section */}
      <section className="py-20 bg-primary-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Bereit für den nächsten Karriereschritt?
            </h2>
            <p className="text-white/90 text-lg mb-12 max-w-3xl mx-auto">
              Ob Sie eine Fachkraft suchen oder eine neue Herausforderung - 
              wir bringen die richtigen Menschen zusammen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/kontakt">
                <Button 
                  size="lg"
                  className="bg-white text-personnel hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Als Arbeitgeber registrieren
                </Button>
              </Link>
              <Link to="/kontakt">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-personnel transition-all duration-300"
                >
                  Stellenangebote ansehen
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

export default PersonnelService;