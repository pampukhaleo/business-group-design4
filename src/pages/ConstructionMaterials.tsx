import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Hammer, Building, Truck, Shield, Clock, Award, CheckCircle, Zap, Leaf, Target } from "lucide-react";
import { Link } from "react-router-dom";

const ConstructionMaterials = () => {
  const processes = [
    { 
      step: 1, 
      title: "Beratung", 
      description: "Individuelle Projektberatung",
      icon: <Target className="h-6 w-6" />,
      duration: "1-2 Tage"
    },
    { 
      step: 2, 
      title: "Planung", 
      description: "Detaillierte Materialplanung",
      icon: <Building className="h-6 w-6" />,
      duration: "3-5 Tage"
    },
    { 
      step: 3, 
      title: "Lieferung", 
      description: "Termingerechte Anlieferung",
      icon: <Truck className="h-6 w-6" />,
      duration: "1-3 Tage"
    },
    { 
      step: 4, 
      title: "Support", 
      description: "Nachbetreuung & Service",
      icon: <Shield className="h-6 w-6" />,
      duration: "Dauerhaft"
    }
  ];

  const advantages = [
    { title: "Termingerechte Lieferung", percentage: 98, color: "construction" },
    { title: "Qualitätsgarantie", percentage: 100, color: "construction" },
    { title: "Kostenoptimierung", percentage: 95, color: "construction" }
  ];

  const materialCategories = [
    {
      icon: <Building className="h-16 w-16" />,
      title: "Naturstein & Marmor",
      subtitle: "Premium Naturmaterialien",
      description: "Hochwertige Natursteine für exklusive Bauprojekte",
      badge: "Premium",
      color: "construction",
      certification: "DIN EN 12058",
      materials: [
        { name: "Carrara Marmor", origin: "Italien", quality: "A-Klasse", availability: "Sofort" },
        { name: "Granit Platten", origin: "Brasilien", quality: "Premium", availability: "2-3 Wochen" },
        { name: "Travertin", origin: "Türkei", quality: "Rustikal", availability: "Lager" },
        { name: "Schiefer", origin: "Deutschland", quality: "Natur", availability: "Sofort" },
        { name: "Sandstein", origin: "Regional", quality: "Behauen", availability: "1 Woche" },
        { name: "Kalkstein", origin: "Frankreich", quality: "Geschliffen", availability: "Sofort" }
      ]
    },
    {
      icon: <Hammer className="h-16 w-16" />,
      title: "Beton & Zement",
      subtitle: "Robuste Grundlagen",
      description: "Bewährte Baustoffe für solide Fundamente und Strukturen",
      badge: "Bewährt",
      color: "personnel",
      certification: "DIN EN 206",
      materials: [
        { name: "Transportbeton", origin: "Regional", quality: "C25/30", availability: "Täglich" },
        { name: "Fertigbeton", origin: "Werk", quality: "C35/45", availability: "48h" },
        { name: "Zement CEM I", origin: "Deutschland", quality: "52,5 R", availability: "Lager" },
        { name: "Estrich-Beton", origin: "Lokal", quality: "CT-C40-F5", availability: "Sofort" },
        { name: "Leichtbeton", origin: "Speziell", quality: "LC25/28", availability: "1 Woche" },
        { name: "Faserbeton", origin: "Hightech", quality: "Verstärkt", availability: "Auf Anfrage" }
      ]
    },
    {
      icon: <Zap className="h-16 w-16" />,
      title: "Hightech Materialien",
      subtitle: "Innovation & Effizienz",
      description: "Moderne Baustoffe für energieeffiziente und nachhaltige Projekte",
      badge: "Innovation",
      color: "accent",
      certification: "DGNB Zertifiziert",
      materials: [
        { name: "Aerogel Dämmung", origin: "Deutschland", quality: "λ=0,013", availability: "2 Wochen" },
        { name: "Smart Glass", origin: "USA", quality: "Elektrochrom", availability: "4 Wochen" },
        { name: "Carbon Verstärkung", origin: "Japan", quality: "Ultra-Leicht", availability: "3 Wochen" },
        { name: "Photovoltaik-Ziegel", origin: "Schweden", quality: "Integriert", availability: "6 Wochen" },
        { name: "Selbstheilender Beton", origin: "Niederlande", quality: "Bio-basiert", availability: "8 Wochen" },
        { name: "Phase Change Materials", origin: "Deutschland", quality: "PCM-28", availability: "4 Wochen" }
      ]
    },
    {
      icon: <Leaf className="h-16 w-16" />,
      title: "Nachhaltige Materialien",
      subtitle: "Umwelt & Zukunft",
      description: "Ökologische Baustoffe für verantwortungsvolles Bauen",
      badge: "Öko",
      color: "medical",
      certification: "Cradle2Cradle",
      materials: [
        { name: "Hanfbeton", origin: "Österreich", quality: "CO₂-negativ", availability: "3 Wochen" },
        { name: "Lehmbauplatten", origin: "Regional", quality: "Naturfaser", availability: "1 Woche" },
        { name: "Recycling-Beton", origin: "Lokal", quality: "RC-C20/25", availability: "Sofort" },
        { name: "Bambus-Verbund", origin: "Sustainable", quality: "Tropical", availability: "4 Wochen" },
        { name: "Strohballendämmung", origin: "Regional", quality: "λ=0,045", availability: "Saison" },
        { name: "Kork-Elemente", origin: "Portugal", quality: "Expandiert", availability: "2 Wochen" }
      ]
    }
  ];

  const projectTypes = [
    { name: "Wohnungsbau", projects: "250+ Projekte", specialty: "Mehrfamilienhäuser" },
    { name: "Gewerbebau", projects: "180+ Projekte", specialty: "Bürokomplexe" },
    { name: "Infrastruktur", projects: "95+ Projekte", specialty: "Brücken & Straßen" },
    { name: "Sanierung", projects: "320+ Projekte", specialty: "Denkmalschutz" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="outline" className="mb-8 hover:shadow-construction transition-all duration-300">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zurück zur Hauptseite
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-construction-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto animate-fade-in">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full mb-8 animate-float">
              <Hammer className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Baumaterialien
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text">
                für die Zukunft
              </span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8">
              Von traditionellen Natursteinen bis zu innovativen Hightech-Materialien - 
              die beste Auswahl für Ihr Bauprojekt.
            </p>

            {/* Process Steps */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {processes.map((process, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-4 text-center">
                    <div className="text-white/80 mb-2">{process.icon}</div>
                    <div className="text-sm font-bold text-white">{process.title}</div>
                    <div className="text-xs text-white/70">{process.duration}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Material Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Unser Material-Sortiment
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Vom traditionellen Naturstein bis zu innovativen Zukunftsmaterialien - 
              alles für Ihr perfektes Bauprojekt
            </p>
          </div>

          <div className="grid gap-12">
            {materialCategories.map((category, index) => (
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
                    {category.materials.map((material, materialIndex) => (
                      <Card 
                        key={materialIndex}
                        className="p-4 hover:shadow-medium transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-secondary/30 to-secondary/10"
                      >
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className={`w-3 h-3 bg-${category.color} rounded-full flex-shrink-0`}></div>
                              <h4 className="font-bold text-card-foreground text-sm">{material.name}</h4>
                            </div>
                            <CheckCircle className={`h-4 w-4 text-${category.color}`} />
                          </div>
                          <div className="space-y-2 text-xs">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Herkunft:</span>
                              <span className="font-medium text-card-foreground">{material.origin}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Qualität:</span>
                              <span className={`font-medium text-${category.color}`}>{material.quality}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Verfügbarkeit:</span>
                              <Badge className={`bg-${category.color}/10 text-${category.color} text-xs`}>
                                {material.availability}
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

      {/* Project Types & Performance */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Project Types */}
            <div className="animate-fade-in">
              <h3 className="text-3xl font-bold text-primary mb-8">Unsere Projekt-Expertise</h3>
              <div className="grid gap-4">
                {projectTypes.map((project, index) => (
                  <Card key={index} className="p-4 hover:shadow-construction transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-card-foreground">{project.name}</h4>
                        <p className="text-sm text-muted-foreground">{project.specialty}</p>
                      </div>
                      <Badge className="bg-construction/10 text-construction">{project.projects}</Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="animate-fade-in">
              <h3 className="text-3xl font-bold text-primary mb-8">Unsere Leistung</h3>
              <div className="space-y-6">
                {advantages.map((advantage, index) => (
                  <Card key={index} className="p-6 hover:shadow-construction transition-all duration-300">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h4 className="font-bold text-card-foreground">{advantage.title}</h4>
                        <span className="text-2xl font-bold text-construction">{advantage.percentage}%</span>
                      </div>
                      <Progress value={advantage.percentage} className="h-3" />
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Award className="h-4 w-4 text-construction" />
                        <span>Basierend auf über 800 Projekten</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-construction-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Starten Sie Ihr nächstes Projekt
            </h2>
            <p className="text-white/90 text-lg mb-12 max-w-3xl mx-auto">
              Lassen Sie uns gemeinsam die perfekten Materialien für Ihr Bauprojekt finden. 
              Von der Planung bis zur Lieferung - wir sind Ihr verlässlicher Partner.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-construction hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Material-Beratung anfragen
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-construction transition-all duration-300"
              >
                Projekt besprechen
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConstructionMaterials;