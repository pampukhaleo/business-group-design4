import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Users, Heart, Code, GraduationCap, Building2, Star, TrendingUp, Award, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const PersonnelService = () => {
  const stats = [
    { label: "Erfolgreiche Vermittlungen", value: "2,500+", icon: <Award className="h-5 w-5" /> },
    { label: "Partner Kliniken", value: "150+", icon: <Building2 className="h-5 w-5" /> },
    { label: "Zufriedenheitsrate", value: "98%", icon: <Star className="h-5 w-5" /> },
    { label: "Durchschnittliche Vermittlungszeit", value: "7 Tage", icon: <Clock className="h-5 w-5" /> },
  ];

  const categories = [
    {
      icon: <Users className="h-12 w-12" />,
      title: "Ärzte",
      subtitle: "Medizinische Fachkräfte",
      description: "Spezialisierte Ärzte für alle Fachrichtungen",
      count: "800+",
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
      count: "1,200+",
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
      count: "300+",
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
      count: "500+",
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
      description: "Durchschnittlich 7 Tage bis zur Stellenbesetzung",
      percentage: 95
    },
    {
      title: "Qualitätsgarantie",
      description: "Alle Kandidaten werden sorgfältig geprüft",
      percentage: 98
    },
    {
      title: "Langfristige Partnerschaften",
      description: "Aufbau dauerhafter Arbeitsbeziehungen",
      percentage: 92
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="outline" className="mb-8 hover:shadow-personnel transition-all duration-300">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zurück zur Hauptseite
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-personnel-gradient relative overflow-hidden">
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
                  <CardContent className="p-4 text-center">
                    <div className="text-white/80 mb-1">{stat.icon}</div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-white/70">{stat.label}</div>
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
                    <div className={`px-3 py-1 bg-${category.color}/10 text-${category.color} rounded-full text-sm font-semibold`}>
                      {category.count}
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
                        className="flex items-center space-x-2 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-200"
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
                Warum wir die beste Wahl sind
              </h2>
              <p className="text-lg text-muted-foreground">
                Unsere Erfolgsbilanz spricht für sich
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center p-8 hover:shadow-personnel transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-card-foreground">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Erfolgsrate</span>
                        <span className="font-bold text-personnel">{benefit.percentage}%</span>
                      </div>
                      <Progress value={benefit.percentage} className="h-3" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-personnel-gradient">
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
              <Button 
                size="lg"
                className="bg-white text-personnel hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Als Arbeitgeber registrieren
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-personnel transition-all duration-300"
              >
                Stellenangebote ansehen
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonnelService;