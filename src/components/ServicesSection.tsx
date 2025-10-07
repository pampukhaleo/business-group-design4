import ServiceCard from "./ServiceCard";
import hrServices from "@/assets/hr-services.jpg";
import productsGoods from "@/assets/products-goods.jpg";
import medicalEquipment from "@/assets/medical-equipment.jpg";


const ServicesSection = () => {
  const services = [
    {
      title: "Kaderpostenservice",
      description: "Professionelle Personalvermittlung und Rekrutierung für alle Branchen und Positionen.",
      features: [
        "Gezielte Suche und Auswahl von Fachkräften",
        "Umfassende Branchenerfahrung",
        "Qualifizierte und zuverlässige Kandidaten"
      ],
      image: hrServices,
      imageAlt: "Professional HR and recruitment services",
      accent: false,
      href: "/kaderpostenservice"
    },
    {
      title: "Produkte & Haushaltswaren",
      description: "Hochwertige Lebensmittel und Haushaltswaren für Unternehmen und den Handel.",
      features: [
        "Lebensmittellieferungen für Organisationen",
        "Haushaltswaren für Privat und Gewerbe",
        "Zuverlässige Lieferketten"
      ],
      image: productsGoods,
      imageAlt: "Quality products and household goods supply",
      accent: true,
      href: "/produkte-haushaltswaren"
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
      imageAlt: "Advanced medical equipment and diagnostic systems",
      accent: false,
      href: "/medizinische-ausruestung"
    },
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Unsere Dienstleistungen
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Wir bieten umfassende Geschäftslösungen in drei Kernbereichen. 
            Jeder Service wird mit höchster Professionalität und langjähriger Erfahrung durchgeführt.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              features={service.features}
              image={service.image}
              imageAlt={service.imageAlt}
              accent={service.accent}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;