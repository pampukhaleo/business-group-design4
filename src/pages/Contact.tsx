import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { supabase } from "@/integrations/supabase/client";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Name ist erforderlich" }).max(100, { message: "Name muss weniger als 100 Zeichen haben" }),
  email: z.string().trim().email({ message: "Ungültige E-Mail-Adresse" }).max(255, { message: "E-Mail muss weniger als 255 Zeichen haben" }),
  phone: z.string().trim().min(1, { message: "Telefonnummer ist erforderlich" }).max(20, { message: "Telefonnummer muss weniger als 20 Zeichen haben" }),
  subject: z.string().trim().min(1, { message: "Betreff ist erforderlich" }).max(200, { message: "Betreff muss weniger als 200 Zeichen haben" }),
  message: z.string().trim().min(1, { message: "Nachricht ist erforderlich" }).max(1000, { message: "Nachricht muss weniger als 1000 Zeichen haben" })
});

const Contact = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Kontakt - Global bridge agency AML (UG)",
    "description": "Kontaktieren Sie Global bridge agency AML (UG) in Hamburg. Telefon: +491 57 525 95235, +216 94 237 848, Email: info@globalbridge-agency.de",
    "mainEntity": {
      "@type": "Organization",
      "name": "Global bridge agency AML (UG)",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Zeidlerstraße 12",
        "addressLocality": "Hamburg",
        "postalCode": "21107",
        "addressCountry": "DE"
      },
      "telephone": ["+491-57-525-95235", "+216-94-237-848"],
      "email": "info@globalbridge-agency.de"
    }
  };
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);
      
      // Save to database
      const { error: dbError } = await supabase
        .from('leads')
        .insert([{
          name: validatedData.name,
          email: validatedData.email,
          phone: validatedData.phone,
          subject: validatedData.subject,
          message: validatedData.message,
          status: 'new' as const
        }]);

      if (dbError) throw dbError;
      
      toast({
        title: "Nachricht gesendet!",
        description: "Vielen Dank für Ihre Anfrage. Wir werden uns bald bei Ihnen melden.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      } else {
        toast({
          title: "Fehler",
          description: "Beim Senden der Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "E-Mail",
      content: "info@globalbridge-agency.de",
      link: "mailto:info@globalbridge-agency.de"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefon",
      content: (
        <>
          <a href="tel:+4915752595235" className="hover:underline block">+491 57 525 95235</a>
          <a href="tel:+21694237848" className="hover:underline block">+216 94 237 848</a>
        </>
      ),
      link: ""
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Adresse",
      content: "Zeidlerstraße 12, 21107 Hamburg, Germany",
      link: "https://maps.google.com/?q=Zeidlerstraße+12,+21107+Hamburg,+Germany"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Öffnungszeiten",
      content: "Mo-Fr: 9:00-18:00 Uhr",
      link: null
    }
  ];

  return (
    <>
      <SEO
        title="Kontakt - Global bridge agency AML (UG) Hamburg"
        description="Kontaktieren Sie Global bridge agency AML (UG) in Hamburg. Zeidlerstraße 12, 21107 Hamburg. Telefon: +491 57 525 95235 oder +216 94 237 848, Email: info@globalbridge-agency.de"
        keywords="Kontakt, Global bridge agency, Hamburg, Zeidlerstraße, Beratung"
        canonicalUrl="https://globalbridge-agency.de/kontakt"
        jsonLd={jsonLd}
      />
      <div className="min-h-screen bg-background">
        {/* Back Button */}
        <div className="container mx-auto px-4 py-8">
          <Link to="/">
            <Button variant="outline" className="mb-8 hover:shadow-soft transition-all duration-300">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Zurück zur Hauptseite
            </Button>
          </Link>
          <Breadcrumbs items={[{ label: "Kontakt" }]} />
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-primary-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Mail className="h-16 w-16 text-primary-foreground mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Kontakt
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Haben Sie Fragen zu unseren Dienstleistungen? Wir sind gerne für Sie da 
              und freuen uns auf Ihre Nachricht.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-card rounded-2xl p-8 shadow-soft">
                <h2 className="text-2xl font-bold text-card-foreground mb-6">
                  Senden Sie uns eine Nachricht
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={errors.name ? "border-destructive" : ""}
                        placeholder="Ihr vollständiger Name"
                      />
                      {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                    </div>
                    
                    <div>
                      <Label htmlFor="email">E-Mail *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={errors.email ? "border-destructive" : ""}
                        placeholder="ihre.email@beispiel.de"
                      />
                      {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Telefon *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={errors.phone ? "border-destructive" : ""}
                        placeholder="+49 (0) 30 123 456 78"
                      />
                      {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Betreff *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={errors.subject ? "border-destructive" : ""}
                        placeholder="Worum geht es?"
                      />
                      {errors.subject && <p className="text-destructive text-sm mt-1">{errors.subject}</p>}
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Nachricht *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`min-h-[120px] ${errors.message ? "border-destructive" : ""}`}
                      placeholder="Beschreiben Sie Ihr Anliegen..."
                    />
                    {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-accent-dark text-accent-foreground"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Wird gesendet..."
                    ) : (
                      <>
                        Nachricht senden
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-8">
                  Kontaktinformationen
                </h2>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-card shadow-soft hover:shadow-medium transition-all duration-200">
                      <div className="bg-accent-gradient p-2 rounded-lg flex-shrink-0">
                        <div className="text-accent-foreground">
                          {info.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground mb-1">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-muted-foreground hover:text-accent transition-colors"
                            target={info.link.startsWith('http') ? '_blank' : '_self'}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-secondary/30 rounded-2xl">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Warum Global bridge agency AML (UG) wählen?
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Über 10 Jahre Erfahrung im deutschen Markt</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Professionelle Beratung in drei Kernbereichen</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Zuverlässige und transparente Zusammenarbeit</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Individuelle Lösungen für Ihre Bedürfnisse</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
    </>
  );
};

export default Contact;