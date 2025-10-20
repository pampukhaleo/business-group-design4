import ServiceCard from "./ServiceCard";
import hrServices from "@/assets/hr-services.jpg";
import medicalEquipment from "@/assets/medical-equipment.jpg";
import generators from "@/assets/generators.jpg";


const ServicesSection = () => {
  const services = [
    {
      title: "Personalvermittlung",
      description: "Professionelle Personalvermittlung und Rekrutierung für alle Branchen und Positionen.",
      features: [
        "Gezielte Suche und Auswahl von Fachkräften",
        "Umfassende Branchenerfahrung",
        "Qualifizierte und zuverlässige Kandidaten"
      ],
      image: hrServices,
      imageAlt: "Professionelle Personalvermittlung - Ärzte und Pflegekräfte für Deutschland",
      accent: false,
      href: "/personalvermittlung"
    },
    {
      title: "Medizinische Ausrüstung",
      description: "Moderne Diagnosesysteme und medizinische Technologie auf höchstem Niveau.",
      features: [
        "Modernste Diagnosesysteme: MRT, CT",
        "Laser- und Therapiegeräte",
        "Beratung und Service-Unterstützung"
      ],
      image: medicalEquipment,
      imageAlt: "Modernste medizinische Ausrüstung - MRT, CT und Diagnosesysteme",
      accent: false,
      href: "/medizinische-ausruestung"
    },
    {
      title: "Generatoren",
      description: "Professionelle Diesel- und Gasgeneratoren für zuverlässige Stromversorgung.",
      features: [
        "Diesel- und Gas-Generatoren",
        "Notstrom-Systeme und USV",
        "Installation, Wartung und 24/7 Service"
      ],
      image: generators,
      imageAlt: "Professionelle Stromerzeuger - Diesel und Gas Generatoren",
      accent: false,
      href: "/generatoren"
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background via-secondary to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Unsere <span className="text-accent">Dienstleistungen</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Wir bieten umfassende Geschäftslösungen in drei Kernbereichen. 
            Jeder Service wird mit höchster Professionalität und langjähriger Erfahrung durchgeführt.
          </p>
        </div>

        {/* Services Grid */}
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'both' }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                features={service.features}
                image={service.image}
                imageAlt={service.imageAlt}
                accent={service.accent}
                href={service.href}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;