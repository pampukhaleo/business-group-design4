import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">GlobalBridge Agency</h3>
            <p className="text-sm text-muted-foreground">
              Ihr Partner für Personalvermittlung, Produktvertrieb und medizinische Ausrüstung in Deutschland.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Dienstleistungen</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/personalvermittlung" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Personalvermittlung
                </Link>
              </li>
              <li>
                <Link to="/medizinische-ausruestung" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Medizinische Ausrüstung
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/impressum" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Datenschutzerklärung
                </Link>
              </li>
              <li>
                <Link to="/agb" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  AGB
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Kontakt</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Musterstraße 123</li>
              <li>10115 Berlin</li>
              <li>Deutschland</li>
              <li>
                <a href="tel:+493012345678" className="hover:text-primary transition-colors">
                  +49 (0) 30 12345678
                </a>
              </li>
              <li>
                <a href="mailto:info@globalbridge-agency.de" className="hover:text-primary transition-colors">
                  info@globalbridge-agency.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} GlobalBridge Agency. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
