import { Helmet } from "react-helmet-async";
import Breadcrumbs from "@/components/Breadcrumbs";

const AGB = () => {
  return (
    <>
      <Helmet>
        <title>AGB - Allgemeine Geschäftsbedingungen - GlobalBridge Agency</title>
        <meta name="description" content="Allgemeine Geschäftsbedingungen der GlobalBridge Agency - Rechtliche Grundlagen für unsere Dienstleistungen im Bereich Personal und Business." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[{ label: "AGB" }]} />
          
          <article className="max-w-4xl mx-auto mt-8">
            <h1 className="text-4xl font-bold mb-8 text-foreground">Allgemeine Geschäftsbedingungen</h1>
            
            <div className="bg-card p-8 rounded-lg shadow-lg space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Geltungsbereich</h2>
                <p className="text-muted-foreground mb-4">
                  Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der GlobalBridge Agency
                  (nachfolgend "Anbieter") und ihren Kunden über die Erbringung von Dienstleistungen im Bereich
                  Personalvermittlung, Produktvertrieb und medizinische Ausrüstung.
                </p>
                <p className="text-muted-foreground">
                  Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, der Anbieter stimmt ihrer
                  Geltung ausdrücklich schriftlich zu.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Vertragsschluss</h2>
                <p className="text-muted-foreground mb-4">
                  Ein Vertrag kommt durch die schriftliche Auftragsbestätigung des Anbieters oder durch Beginn der
                  Leistungserbringung zustande.
                </p>
                <p className="text-muted-foreground">
                  Alle Angebote des Anbieters sind freibleibend und unverbindlich, sofern sie nicht ausdrücklich als
                  verbindlich gekennzeichnet sind.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Leistungsumfang</h2>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground">3.1 Personalvermittlung</h3>
                <p className="text-muted-foreground mb-4">
                  Der Anbieter vermittelt qualifiziertes Personal entsprechend den Anforderungen des Kunden. Die
                  Vermittlung erfolgt nach bestem Wissen und Gewissen, jedoch ohne Garantie für die dauerhafte
                  Eignung des vermittelten Personals.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-foreground">3.2 Produktvertrieb</h3>
                <p className="text-muted-foreground mb-4">
                  Der Anbieter liefert Produkte gemäß den vereinbarten Spezifikationen. Technische Änderungen und
                  Änderungen im Produktdesign bleiben vorbehalten, sofern sie die Funktionalität nicht wesentlich
                  beeinträchtigen.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-foreground">3.3 Medizinische Ausrüstung</h3>
                <p className="text-muted-foreground">
                  Die Lieferung medizinischer Ausrüstung erfolgt unter Beachtung aller relevanten Zertifizierungen
                  und gesetzlichen Vorschriften. Der Kunde ist für die sachgemäße Verwendung verantwortlich.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Preise und Zahlungsbedingungen</h2>
                <p className="text-muted-foreground mb-4">
                  Alle Preise verstehen sich in Euro zzgl. der gesetzlichen Mehrwertsteuer. Die Zahlung ist innerhalb
                  von 14 Tagen nach Rechnungsstellung ohne Abzug fällig.
                </p>
                <p className="text-muted-foreground">
                  Bei Zahlungsverzug werden Verzugszinsen in Höhe von 9 Prozentpunkten über dem Basiszinssatz berechnet.
                  Die Geltendmachung weiterer Schadensersatzansprüche bleibt vorbehalten.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Lieferung und Lieferzeit</h2>
                <p className="text-muted-foreground mb-4">
                  Liefertermine sind nur verbindlich, wenn sie vom Anbieter ausdrücklich schriftlich bestätigt wurden.
                  Bei Nichteinhaltung der Lieferfristen muss der Kunde dem Anbieter eine angemessene Nachfrist setzen.
                </p>
                <p className="text-muted-foreground">
                  Die Gefahr geht mit Übergabe der Ware an den Spediteur, Frachtführer oder sonst zur Ausführung der
                  Versendung bestimmten Dritten auf den Kunden über.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Gewährleistung</h2>
                <p className="text-muted-foreground mb-4">
                  Der Anbieter leistet Gewähr für die Vertragsgemäßheit der Leistungen nach den gesetzlichen
                  Bestimmungen. Die Gewährleistungsfrist beträgt 12 Monate ab Lieferung bzw. Leistungserbringung.
                </p>
                <p className="text-muted-foreground">
                  Bei berechtigten Mängelrügen hat der Anbieter zunächst das Recht zur Nachbesserung oder Ersatzlieferung.
                  Schlägt die Nacherfüllung fehl, kann der Kunde nach seiner Wahl Minderung verlangen oder vom Vertrag
                  zurücktreten.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Haftung</h2>
                <p className="text-muted-foreground mb-4">
                  Der Anbieter haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie für die Verletzung von
                  Leben, Körper und Gesundheit.
                </p>
                <p className="text-muted-foreground">
                  Bei leichter Fahrlässigkeit haftet der Anbieter nur bei Verletzung wesentlicher Vertragspflichten
                  (Kardinalpflichten), wobei die Haftung auf den vorhersehbaren, vertragstypischen Schaden begrenzt ist.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Vertraulichkeit</h2>
                <p className="text-muted-foreground">
                  Beide Vertragsparteien verpflichten sich, alle im Rahmen der Geschäftsbeziehung bekannt gewordenen
                  vertraulichen Informationen geheim zu halten und nur für die vereinbarten Zwecke zu verwenden.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Datenschutz</h2>
                <p className="text-muted-foreground">
                  Der Anbieter verarbeitet personenbezogene Daten des Kunden ausschließlich im Rahmen der gesetzlichen
                  Bestimmungen. Weitere Informationen enthält die Datenschutzerklärung.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Schlussbestimmungen</h2>
                <p className="text-muted-foreground mb-4">
                  Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
                </p>
                <p className="text-muted-foreground mb-4">
                  Erfüllungsort und ausschließlicher Gerichtsstand für alle Streitigkeiten aus diesem Vertrag ist der
                  Geschäftssitz des Anbieters, sofern der Kunde Kaufmann, juristische Person des öffentlichen Rechts
                  oder öffentlich-rechtliches Sondervermögen ist.
                </p>
                <p className="text-muted-foreground">
                  Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der
                  übrigen Bestimmungen hiervon unberührt.
                </p>
              </section>

              <section className="border-t pt-6">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Stand:</span> Oktober 2025
                  <br />
                  <span className="font-semibold text-foreground">Version:</span> 1.0
                </p>
              </section>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default AGB;
