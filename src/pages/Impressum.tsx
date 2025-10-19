import { Helmet } from "react-helmet-async";
import Breadcrumbs from "@/components/Breadcrumbs";

const Impressum = () => {
  return (
    <>
      <Helmet>
        <title>Impressum - GlobalBridge Agency</title>
        <meta name="description" content="Impressum und rechtliche Informationen der GlobalBridge Agency - Ihr Partner für Personaldienste und Geschäftslösungen in Deutschland." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[{ label: "Impressum" }]} />
          
          <article className="max-w-4xl mx-auto mt-8">
            <h1 className="text-4xl font-bold mb-8 text-foreground">Impressum</h1>
            
            <div className="bg-card p-8 rounded-lg shadow-lg space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Angaben gemäß § 5 TMG</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p className="font-semibold text-foreground">Global bridge agency AML (UG)</p>
                  <p>Zeidlerstraße 12</p>
                  <p>21107 Hamburg</p>
                  <p>Deutschland</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Kontakt</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <span className="font-semibold text-foreground">Telefon:</span> +491 57 525 95235
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Telefon:</span> +216 94 237 848
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">E-Mail:</span>{" "}
                    <a href="mailto:info@globalbridge-agency.de" className="text-primary hover:underline">
                      info@globalbridge-agency.de
                    </a>
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Vertreten durch</h2>
                <p className="text-muted-foreground">Geschäftsführer: Max Mustermann</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Registereintrag</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <span className="font-semibold text-foreground">Registergericht:</span> Amtsgericht Berlin
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Registernummer:</span> HRB 123456
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Umsatzsteuer-ID</h2>
                <p className="text-muted-foreground">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                  <br />
                  <span className="font-semibold text-foreground">DE123456789</span>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p>Max Mustermann</p>
                  <p>Zeidlerstraße 12</p>
                  <p>21107 Hamburg</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Streitschlichtung</h2>
                <p className="text-muted-foreground mb-4">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p className="text-muted-foreground">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Haftung für Inhalte</h2>
                <p className="text-muted-foreground">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                  allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                  verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
                  zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Haftung für Links</h2>
                <p className="text-muted-foreground">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                  Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                  verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Urheberrecht</h2>
                <p className="text-muted-foreground">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                  Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                  Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </section>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Impressum;
