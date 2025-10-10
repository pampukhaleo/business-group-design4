import { Helmet } from "react-helmet-async";
import Breadcrumbs from "@/components/Breadcrumbs";

const Datenschutz = () => {
  return (
    <>
      <Helmet>
        <title>Datenschutzerklärung - GlobalBridge Agency</title>
        <meta name="description" content="Datenschutzerklärung der GlobalBridge Agency - Informationen zum Umgang mit Ihren personenbezogenen Daten gemäß DSGVO." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[{ label: "Datenschutzerklärung" }]} />
          
          <article className="max-w-4xl mx-auto mt-8">
            <h1 className="text-4xl font-bold mb-8 text-foreground">Datenschutzerklärung</h1>
            
            <div className="bg-card p-8 rounded-lg shadow-lg space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Datenschutz auf einen Blick</h2>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground">Allgemeine Hinweise</h3>
                <p className="text-muted-foreground mb-4">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
                  passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                  persönlich identifiziert werden können.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-foreground">Datenerfassung auf dieser Website</h3>
                <p className="text-muted-foreground mb-4">
                  <span className="font-semibold text-foreground">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</span>
                  <br />
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
                  können Sie dem Impressum dieser Website entnehmen.
                </p>

                <p className="text-muted-foreground mb-4">
                  <span className="font-semibold text-foreground">Wie erfassen wir Ihre Daten?</span>
                  <br />
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B.
                  um Daten handeln, die Sie in ein Kontaktformular eingeben.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Hosting und Content Delivery Networks (CDN)</h2>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground">Externes Hosting</h3>
                <p className="text-muted-foreground">
                  Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten,
                  die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es
                  sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten,
                  Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground">Datenschutz</h3>
                <p className="text-muted-foreground mb-4">
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
                  personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie
                  dieser Datenschutzerklärung.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-foreground">Hinweis zur verantwortlichen Stelle</h3>
                <p className="text-muted-foreground mb-4">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                <div className="text-muted-foreground space-y-1 mb-4">
                  <p className="font-semibold text-foreground">GlobalBridge Agency</p>
                  <p>Musterstraße 123</p>
                  <p>10115 Berlin</p>
                  <p>Deutschland</p>
                  <p>Telefon: +49 (0) 30 12345678</p>
                  <p>
                    E-Mail:{" "}
                    <a href="mailto:info@globalbridge-agency.de" className="text-primary hover:underline">
                      info@globalbridge-agency.de
                    </a>
                  </p>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-foreground">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                <p className="text-muted-foreground mb-4">
                  Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können
                  eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf
                  erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-foreground">Recht auf Datenübertragbarkeit</h3>
                <p className="text-muted-foreground mb-4">
                  Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
                  automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format
                  aushändigen zu lassen.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-foreground">Auskunft, Löschung und Berichtigung</h3>
                <p className="text-muted-foreground">
                  Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
                  Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck
                  der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Datenerfassung auf dieser Website</h2>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground">Kontaktformular</h3>
                <p className="text-muted-foreground mb-4">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
                  inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall
                  von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-foreground">Server-Log-Dateien</h3>
                <p className="text-muted-foreground mb-4">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien,
                  die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p className="text-muted-foreground">
                  Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser
                  Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Plugins und Tools</h2>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground">Google Fonts (lokales Hosting)</h3>
                <p className="text-muted-foreground">
                  Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von
                  Google bereitgestellt werden. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern von
                  Google findet dabei nicht statt.
                </p>
              </section>

              <section className="border-t pt-6">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Stand:</span> Oktober 2025
                </p>
              </section>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Datenschutz;
