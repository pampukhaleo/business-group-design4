import { Helmet } from "react-helmet-async";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  jsonLd?: object;
  breadcrumbs?: BreadcrumbItem[];
}

const SEO = ({
  title = "Global bridge agency AML (UG) - Professionelle Geschäftslösungen",
  description = "Global bridge agency AML (UG) - Ihr zuverlässiger Partner in Deutschland für professionelle Personalvermittlung, Handel mit Premium-Produkten und modernste Medizintechnik. Über 10 Jahre Erfahrung im deutschen Markt.",
  keywords = "Global bridge agency, AML, Personalvermittlung Deutschland, medizinische Fachkräfte vermittlung, Medizintechnik, Premium Lebensmittel Großhandel, Haushaltswaren, Geschäftslösungen Hamburg, Ärzte vermittlung, Pflegekräfte Deutschland",
  ogImage = "https://globalbridge-agency.de/og-image.jpg",
  ogType = "website",
  canonicalUrl = "https://globalbridge-agency.de/",
  jsonLd,
  breadcrumbs,
}: SEOProps) => {
  // Generate BreadcrumbList schema if breadcrumbs are provided
  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  } : null;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content="de_DE" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
      
      {/* BreadcrumbList Schema */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
