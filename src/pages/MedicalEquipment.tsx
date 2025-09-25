import { Button } from "@/components/ui/button";
import { ArrowLeft, Stethoscope, Zap, Settings, Heart, Brain, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const MedicalEquipment = () => {
  const equipmentCategories = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Diagnostische Systeme",
      description: "Modernste Bildgebungsverfahren für präzise Diagnosen",
      items: [
        "Magnetresonanztomographie (MRT)",
        "Computertomographie (CT)",
        "Ultraschallgeräte der neuesten Generation",
        "Röntgensysteme digital",
        "Mammographie-Systeme",
        "PET-CT Kombinationsgeräte"
      ]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Laser- und Therapiegeräte",
      description: "Hochmoderne Behandlungsgeräte für verschiedene medizinische Bereiche",
      items: [
        "Chirurgische Laser verschiedener Wellenlängen",
        "Physiotherapie-Lasersysteme",
        "Dermatologische Behandlungsgeräte",
        "Schmerztherapie-Geräte",
        "Rehabilitation-Technologie",
        "Kosmetische Behandlungsgeräte"
      ]
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Intensivmedizin",
      description: "Lebensrettende Technologie für kritische Situationen",
      items: [
        "Beatmungsgeräte der neuesten Generation",
        "Patientenmonitoring-Systeme",
        "Defibrillationsgeräte",
        "Infusionssysteme programmierbar",
        "Notfall-Ausrüstung komplett",
        "Intensivpflege-Arbeitsplätze"
      ]
    }
  ];

  const services = [
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Installation & Wartung",
      description: "Professionelle Installation und regelmäßige Wartung aller Geräte"
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Schulungen",
      description: "Umfassende Schulungen für medizinisches Personal"
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: "24/7 Support",
      description: "Rund-um-die-Uhr technischer Support und Notfallservice"
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
            <Stethoscope className="h-16 w-16 text-primary-foreground mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Medizinische Ausrüstung
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Moderne Diagnosesysteme und medizinische Technologie auf höchstem Niveau. 
              Von MRT und CT bis hin zu Laser- und Therapiegeräten.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              Technologie für das Leben
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Wir liefern und installieren hochmoderne medizinische Geräte für Krankenhäuser, 
              Kliniken und Praxen. Unser Fokus liegt auf Präzision, Zuverlässigkeit und 
              innovativer Technologie, die Leben rettet.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-card shadow-soft hover:shadow-medium transition-all duration-300">
                  <div className="bg-accent-gradient p-3 rounded-full w-fit mx-auto mb-4">
                    <div className="text-accent-foreground">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Unser Technologie-Portfolio
              </h2>
              <p className="text-lg text-muted-foreground">
                Hochmoderne medizinische Geräte für alle Bereiche der Medizin
              </p>
            </div>

            <div className="grid gap-12">
              {equipmentCategories.map((category, index) => (
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

      {/* Quality Assurance Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-8">
              Qualität und Zertifizierung
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-left p-6 rounded-2xl bg-card shadow-soft">
                <h3 className="text-xl font-bold text-card-foreground mb-4">
                  Unsere Standards:
                </h3>
                <ul className="space-y-2 text-card-foreground">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>CE-Kennzeichnung für alle Geräte</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>ISO 13485 Qualitätsmanagementsystem</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>FDA-Zulassung wo erforderlich</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Regelmäßige Qualitätskontrollen</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-left p-6 rounded-2xl bg-card shadow-soft">
                <h3 className="text-xl font-bold text-card-foreground mb-4">
                  Ihre Vorteile:
                </h3>
                <ul className="space-y-2 text-card-foreground">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Neueste Technologie-Standards</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Umfassende Garantieleistungen</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Schnelle Ersatzteilversorgung</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Kompetente Beratung</span>
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
              Investieren Sie in die Zukunft der Medizin
            </h2>
            <p className="text-accent-foreground/90 text-lg mb-8">
              Kontaktieren Sie uns für eine persönliche Beratung und erfahren Sie, 
              wie unsere Technologie Ihre medizinische Einrichtung voranbringen kann.
            </p>
            
            <Button 
              variant="secondary" 
              className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 shadow-glow"
            >
              Beratungstermin vereinbaren
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalEquipment;