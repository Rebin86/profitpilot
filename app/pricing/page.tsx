import Link from "next/link";

export default function PricingPage() {
  return (
    <div style={{ padding: "48px 0" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/" style={{ textDecoration: "none", color: "inherit", fontWeight: 800 }}>
          ProfitPilot
        </Link>
        <nav style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/campaign/new">Ny kampanje</Link>
        </nav>
      </header>

      <main style={{ marginTop: 38, maxWidth: 820 }}>
        <h1 style={{ fontSize: 36, margin: 0 }}>Priser</h1>
        <p style={{ opacity: 0.8, marginTop: 10, maxWidth: 700 }}>
          Start med 1 gratis kampanje. Når du vil lage flere, kjøper du credits. En credit = én kampanje.
        </p>

        <div style={{ marginTop: 22, display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {/* Gratis */}
          <div style={{ border: "1px solid #eee", borderRadius: 12, padding: 16 }}>
            <div style={{ fontWeight: 800, fontSize: 18 }}>Gratis</div>
            <div style={{ opacity: 0.75, marginTop: 6 }}>1 kampanje</div>

            <ul style={{ margin: "12px 0 0", paddingLeft: 18, opacity: 0.85 }}>
              <li>Annonsetekster (varianter)</li>
              <li>Landing (hero + bullets + CTA)</li>
              <li>Oppfølging (SMS/epost)</li>
            </ul>

            <div style={{ marginTop: 14 }}>
              <Link
                href="/campaign/new"
                style={{
                  display: "inline-block",
                  padding: "10px 14px",
                  borderRadius: 10,
                  border: "1px solid #111",
                  background: "#111",
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                Start gratis
              </Link>
            </div>

            <div style={{ marginTop: 10, fontSize: 12, opacity: 0.65 }}>
              Ingen kort nødvendig.
            </div>
          </div>

          {/* Credits */}
          <div style={{ border: "1px solid #eee", borderRadius: 12, padding: 16 }}>
            <div style={{ fontWeight: 800, fontSize: 18 }}>Credits</div>
            <div style={{ opacity: 0.75, marginTop: 6 }}>49 kr per kampanje</div>

            <ul style={{ margin: "12px 0 0", paddingLeft: 18, opacity: 0.85 }}>
              <li>Kjøp når du trenger</li>
              <li>Credits legges til automatisk etter betaling</li>
              <li>Alt lagres i dashboard</li>
            </ul>

            <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link
                href="/upgrade"
                style={{
                  display: "inline-block",
                  padding: "10px 14px",
                  borderRadius: 10,
                  border: "1px solid #111",
                  background: "#111",
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                Kjøp 1 kampanje (49 kr)
              </Link>

              <Link
                href="/campaign/new"
                style={{
                  display: "inline-block",
                  padding: "10px 14px",
                  borderRadius: 10,
                  border: "1px solid #ddd",
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                Test generatoren
              </Link>
            </div>

            <div style={{ marginTop: 10, fontSize: 12, opacity: 0.65 }}>
              Abonnement kommer senere (månedlig/årlig) når vi ser bruken.
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginTop: 26, display: "grid", gap: 12 }}>
          <div style={{ border: "1px solid #eee", borderRadius: 12, padding: 14 }}>
            <div style={{ fontWeight: 800 }}>FAQ</div>

            <div style={{ marginTop: 10, display: "grid", gap: 10 }}>
              <details>
                <summary style={{ cursor: "pointer", fontWeight: 700 }}>
                  Hva er en credit?
                </summary>
                <div style={{ marginTop: 8, opacity: 0.85 }}>
                  En credit = én kampanje-generering (annonse + landing + oppfølging).
                </div>
              </details>

              <details>
                <summary style={{ cursor: "pointer", fontWeight: 700 }}>
                  Mister jeg credits hvis jeg logger ut?
                </summary>
                <div style={{ marginTop: 8, opacity: 0.85 }}>
                  Nei. Credits er knyttet til brukeren din og lagres i databasen.
                </div>
              </details>

              <details>
                <summary style={{ cursor: "pointer", fontWeight: 700 }}>
                  Kan jeg få tilbake credits hvis jeg angrer?
                </summary>
                <div style={{ marginTop: 8, opacity: 0.85 }}>
                  Ikke automatisk i MVP. Vi kan legge til refusjonsflyt senere.
                </div>
              </details>
            </div>
          </div>

          {/* Final CTA */}
          <div style={{ padding: 20, borderRadius: 16, background: "#111", color: "#fff" }}>
            <div style={{ fontWeight: 800, fontSize: 20 }}>Klar?</div>
            <div style={{ opacity: 0.85, marginTop: 8 }}>
              Lag en kampanje nå og se output på 30 sekunder.
            </div>

            <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link
                href="/campaign/new"
                style={{
                  display: "inline-block",
                  padding: "10px 14px",
                  borderRadius: 10,
                  background: "#fff",
                  color: "#111",
                  textDecoration: "none",
                  fontWeight: 800,
                }}
              >
                Start gratis
              </Link>

              <Link
                href="/upgrade"
                style={{
                  display: "inline-block",
                  padding: "10px 14px",
                  borderRadius: 10,
                  border: "1px solid #fff",
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: 800,
                }}
              >
                Kjøp credits
              </Link>
            </div>
          </div>
        </div>

        <footer style={{ marginTop: 26, fontSize: 12, opacity: 0.6 }}>
          © {new Date().getFullYear()} ProfitPilot
        </footer>
      </main>
    </div>
  );
}
