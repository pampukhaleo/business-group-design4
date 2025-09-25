import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Heart, Activity, Microscope, Stethoscope, Zap, Settings, Users, Shield, Award, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const MedicalEquipment = () => {
  const services = [
    { icon: <Settings className="h-6 w-6" />, title: "Installation", description: "Professionelle Geräte-Installation" },
    { icon: <Users className="h-6 w-6" />, title: "Schulung", description: "Umfassende Mitarbeiter-Schulungen" },
    { icon: <Shield className="h-6 w-6" />, title: "Wartung", description: "Regelmäßige Wartung & Service" },
    { icon: <Clock className="h-6 w-6" />, title: "24/7 Support", description: "Rund-um-die-Uhr Betreuung" },
  ];

  const equipmentCategories = [
    {
      icon: <Heart className="h-16 w-16" />,
      title: "Kardiologie",
      subtitle: "Herz-Diagnostik",
      description: "Modernste Geräte für Herzdiagnostik und -behandlung",
      badge: "Hightech",
      color: "medical",
      certification: "CE & FDA",
      equipment: [
        { name: "EKG-Geräte", specs: "12-Kanal Digital", status: "Verfügbar" },
        { name: "Echokardiographie", specs: "4D Doppler", status: "Premium" },
        { name: "Herzkatheterlabor", specs: "Interventionell", status: "Komplett-Set" },
        { name: "Holter-Monitoren", specs: "48h Aufzeichnung", status: "Drahtlos" },
        { name: "Defibrillatoren", specs: "AED & Manual", status: "Notfall-bereit" },
        { name: "Ergometer", specs: "Belastungs-EKG", status: "Automatisch" }
      ]
    },
    {
      icon: <Activity className="h-16 w-16" />,
      title: "Intensivmedizin",
      subtitle: "Kritische Versorgung",
      description: "Lebensrettende Technologie für die Intensivstation",
      badge: "Kritisch",
      color: "personnel",
      certification: "ISO 13485",
      equipment: [
        { name: "Beatmungsgeräte", specs: "NIV & Invasiv", status: "24/7 Ready" },
        { name: "Patient Monitoring", specs: "Multi-Parameter", status: "Zentral-System" },
        { name: "Infusionspumpen", specs: "Smart-Dose", status: "Vernetzt" },
        { name: "ECMO-Systeme", specs: "Extrakorporal", status: "Spezialist" },
        { name: "Dialyse-Geräte", specs: "CRRT & SLEDD", status: "Kontinuierlich" },
        { name: "Temperatur-Management", specs: "Hypothermie", status: "Präzise" }
      ]
    },
    {
      icon: <Microscope className="h-16 w-16" />,
      title: "Labor & Diagnostik",
      subtitle: "Präzise Analyse",
      description: "Hochpräzise Laborgeräte für exakte Diagnostik",
      badge: "Präzision",
      color: "accent",
      certification: "ISO 15189",
      equipment: [
        { name: "Hämatologie-Analyzer", specs: "5-Part Diff", status: "Vollautomatisch" },
        { name: "Chemie-Analyzer", specs: "Random Access", status: "Hochdurchsatz" },
        { name: "Mikroskope", specs: "Digital & Fluoreszenz", status: "KI-unterstützt" },
        { name: "PCR-Systeme", specs: "Real-Time qPCR", status: "Molekular" },
        { name: "Immunoassay", specs: "ELISA & CLIA", status: "Automatisiert" },
        { name: "Blutgasanalyse", specs: "Point-of-Care", status: "Sofortig" }
      ]
    },
    {
      icon: <Stethoscope className="h-16 w-16" />,
      title: "Bildgebung",
      subtitle: "Moderne Radiologie",
      description: "Fortschrittliche Bildgebungsverfahren für präzise Diagnosen",
      badge: "Innovation",
      color: "products",
      certification: "IEC 60601",
      equipment: [
        { name: "MRT-Systeme", specs: "1.5T & 3T", status: "KI-Enhanced" },
        { name: "CT-Scanner", specs: "Multi-Slice", status: "Low-Dose" },
        { name: "Ultraschall", specs: "4D & Elastographie", status: "Portable" },
        { name: "Röntgengeräte", specs: "Digital DR", status: "Drahtlos" },
        { name: "Angiographie", specs: "3D Rotational", status: "Interventionell" },
        { name: "Mammographie", specs: "Tomosynthese", status: "Screening" }
      ]
    }
  ];

  const certifications = [
    { name: "ISO 13485", description: "Qualitätsmanagement Medizinprodukte" },
    { name: "CE Kennzeichnung", description: "Europäische Konformität" },
    { name: "FDA Zulassung", description: "US-amerikanische Zulassung" },
    { name: "IEC 60601", description: "Elektrische Sicherheit" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="outline" className="mb-8 hover:shadow-medical transition-all duration-300">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zurück zur Hauptseite
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-medical-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto animate-fade-in">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full mb-8 animate-float">
              <Heart className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Medizintechnik
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text">
                der Zukunft
              </span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8">
              Modernste medizinische Geräte und Technologien für Kliniken, 
              Praxen und Gesundheitseinrichtungen.
            </p>

            {/* Service Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {services.map((service, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-4 text-center">
                    <div className="text-white/80 mb-2">{service.icon}</div>
                    <div className="text-sm font-bold text-white">{service.title}</div>
                    <div className="text-xs text-white/70">{service.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Unser Geräte-Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Von der Kardiologie bis zur Bildgebung - 
              modernste Medizintechnik für alle Fachbereiche
            </p>
          </div>

          <div className="grid gap-12">
            {equipmentCategories.map((category, index) => (
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
                          className="p-4 bg-white border-2 border-medical/40 shadow-medium hover:shadow-large transition-all duration-300 hover:scale-105"
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
                               <span className="text-muted-foreground">Spezifikation:</span>
                               <span className="font-medium text-card-foreground">{item.specs}</span>
                             </div>
                             <div className="flex justify-between">
                               <span className="text-muted-foreground">Status:</span>
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
            <Award className="h-16 w-16 text-medical mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-primary mb-6">
              Qualität & Zertifizierungen
            </h2>
            <p className="text-lg text-muted-foreground">
              Höchste Standards für Ihre Sicherheit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-medical transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-medical/10 rounded-full flex items-center justify-center mx-auto">
                    <Shield className="h-8 w-8 text-medical" />
                  </div>
                  <h3 className="font-bold text-card-foreground">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-medical-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Modernisieren Sie Ihre Ausstattung
            </h2>
            <p className="text-white/90 text-lg mb-12 max-w-3xl mx-auto">
              Lassen Sie uns gemeinsam die beste Lösung für Ihre medizinischen 
              Anforderungen finden. Beratung, Installation und Service - alles aus einer Hand.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/kontakt">
                <Button 
                  size="lg"
                  className="bg-white text-medical hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Beratungstermin vereinbaren
                </Button>
              </Link>
              <Link to="/kontakt">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-medical transition-all duration-300"
                >
                  Geräte-Katalog anfordern
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalEquipment;