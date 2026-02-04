import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ padding: "48px 0" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontWeight: 800, fontSize: 18 }}>ProfitPilot</div>
        <nav style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <Link href="/pricing">Priser</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>
      </header>

      <main style={{ marginTop: 48, display: "grid", gap: 18, maxWidth: 720 }}>
        <h1 style={{ fontSize: 44, lineHeight: 1.05, margin: 0 }}>
          Lag ferdige kampanjer på minutter — med AI.
        </h1>

        <p style={{ fontSize: 18, opacity: 0.8, margin: 0 }}>
          ProfitPilot genererer annonsetekster, landingside-innhold og oppfølging på ett sted.
          Perfekt for små bedrifter som vil få ut kampanjer raskt.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 10 }}>
          <Link
            href="/campaign/new"
            style={{
              padding: "12px 16px",
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

          <Link
            href="/pricing"
            style={{
              padding: "12px 16px",
              borderRadius: 10,
              border: "1px solid #ddd",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Se priser
          </Link>

          <span style={{ alignSelf: "center", fontSize: 13, opacity: 0.7 }}>
            Ingen kort nødvendig for gratis kampanje
          </span>
        </div>

        {/* Info seksjoner */}
        <div style={{ marginTop: 28, display: "grid", gap: 12 }}>
          <div style={{ border: "1px solid #eee", borderRadius: 12, padding: 14 }}>
            <div style={{ fontWeight: 800 }}>Hvordan det funker</div>
            <ol style={{ margin: "10px 0 0", paddingLeft: 18, opacity: 0.85 }}>
              <li>Beskriv tilbudet ditt</li>
              <li>AI lager annonse + landing + oppfølging</li>
              <li>Bruk kampanjen med én gang</li>
            </ol>
          </div>

          <div style={{ border: "1px solid #eee", borderRadius: 12, padding: 14 }}>
            <div style={{ fontWeight: 800 }}>Hva du får</div>
            <ul style={{ margin: "10px 0 0", paddingLeft: 18, opacity: 0.85 }}>
              <li>Annonsetekster (flere varianter)</li>
              <li>Landingside “hero + bullets + CTA”</li>
              <li>Oppfølging (SMS/epost)</li>
            </ul>
          </div>

          <div style={{ border: "1px solid #eee", borderRadius: 12, padding: 14 }}>
            <div style={{ fontWeight: 800 }}>Prismodell</div>
            <p style={{ margin: "10px 0 0", opacity: 0.85 }}>
              1 gratis kampanje. Deretter kan du kjøpe flere kampanjer med credits.
              <Link href="/pricing" style={{ marginLeft: 6 }}>
                Se priser →
              </Link>
            </p>
          </div>
        </div>

        {/* EKSEMPEL OUTPUT */}
        <div style={{ marginTop: 28 }}>
          <div style={{ fontWeight: 800, marginBottom: 10 }}>Eksempel på output</div>

          <div style={{ border: "1px solid #eee", borderRadius: 12, padding: 14 }}>
            <div style={{ fontWeight: 700, marginBottom: 8 }}>Annonse (beste variant)</div>
            <div style={{ opacity: 0.85 }}>
              🚀 dgsfhsfhsfh – Ring nå. Lokal, rask og enkel prosess.
            </div>

            <div style={{ height: 12 }} />

            <div style={{ fontWeight: 700, marginBottom: 8 }}>Landing (hero + bullets)</div>
            <div style={{ opacity: 0.85, marginBottom: 6 }}>
              <b>dgsfhsfhsfh – få hjelp i dag</b>
            </div>
            <ul style={{ margin: 0, paddingLeft: 18, opacity: 0.85 }}>
              <li>Rask respons</li>
              <li>Lokal ekspertise</li>
              <li>Tydelig pris og neste steg</li>
            </ul>

            <div style={{ height: 12 }} />

            <div style={{ fontWeight: 700, marginBottom: 8 }}>Oppfølging (SMS)</div>
            <div style={{ opacity: 0.85 }}>
              Hei! Trenger du hjelp med dgsfhsfhsfh? Svar JA.
            </div>

            <div style={{ height: 14 }} />

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link
                href="/campaign/new"
                style={{
                  padding: "10px 14px",
                  borderRadius: 10,
                  border: "1px solid #111",
                  background: "#111",
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                Lag min kampanje
              </Link>

              <Link
                href="/pricing"
                style={{
                  padding: "10px 14px",
                  borderRadius: 10,
                  border: "1px solid #ddd",
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                Se priser
              </Link>
            </div>
          </div>
        </div>

{/* TRUST + FAQ */}
<div style={{ marginTop: 28, display: "grid", gap: 12 }}>
  <div style={{ border: "1px solid #eee", borderRadius: 12, padding: 14 }}>
    <div style={{ fontWeight: 800 }}>Trygt og enkelt</div>
    <ul style={{ margin: "10px 0 0", paddingLeft: 18, opacity: 0.85 }}>
      <li>Ingen kort nødvendig for gratis kampanje</li>
      <li>Du betaler kun når du trenger flere kampanjer</li>
      <li>Alt lagres i dashboardet ditt</li>
    </ul>
  </div>

  <div style={{ border: "1px solid #eee", borderRadius: 12, padding: 14 }}>
    <div style={{ fontWeight: 800 }}>FAQ</div>

    <div style={{ marginTop: 10, display: "grid", gap: 10 }}>
      <details>
        <summary style={{ cursor: "pointer", fontWeight: 700 }}>
          Hva får jeg i en kampanje?
        </summary>
        <div style={{ marginTop: 8, opacity: 0.85 }}>
          Du får annonsetekster (flere varianter), landingside-innhold (hero + bullets + CTA) og
          oppfølging (SMS/epost).
        </div>
      </details>

      <details>
        <summary style={{ cursor: "pointer", fontWeight: 700 }}>
          Må jeg legge inn kort for å teste?
        </summary>
        <div style={{ marginTop: 8, opacity: 0.85 }}>
          Nei. Du kan starte gratis og lage 1 kampanje uten betalingsinfo.
        </div>
      </details>

      <details>
        <summary style={{ cursor: "pointer", fontWeight: 700 }}>
          Hva skjer når jeg har brukt gratis kampanjen?
        </summary>
        <div style={{ marginTop: 8, opacity: 0.85 }}>
          Da låses generering, og du kan kjøpe credits for å lage flere kampanjer.
        </div>
      </details>

      <details>
        <summary style={{ cursor: "pointer", fontWeight: 700 }}>
          Kan jeg redigere teksten før jeg bruker den?
        </summary>
        <div style={{ marginTop: 8, opacity: 0.85 }}>
          Ja – du kan kopiere og tilpasse teksten. (Neste: vi bygger editor direkte i appen.)
        </div>
      </details>

      <details>
        <summary style={{ cursor: "pointer", fontWeight: 700 }}>
          Hvem passer ProfitPilot for?
        </summary>
        <div style={{ marginTop: 8, opacity: 0.85 }}>
          Små bedrifter, gründere og lokale tjenester som vil få ut kampanjer raskt uten å bruke tid
          på copywriting.
        </div>
      </details>
    </div>
  </div>
</div>

{/* FINAL CTA */}
<div
  style={{
    marginTop: 40,
    padding: 24,
    borderRadius: 16,
    background: "#111",
    color: "#fff",
    textAlign: "center",
  }}
>
  <h2 style={{ margin: 0, fontSize: 26 }}>
    Klar til å lage din første kampanje?
  </h2>

  <p style={{ opacity: 0.8, marginTop: 10 }}>
    Start gratis — ingen betalingskort nødvendig.
  </p>

  <div style={{ marginTop: 18, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
    <Link
      href="/campaign/new"
      style={{
        padding: "12px 18px",
        borderRadius: 10,
        background: "#fff",
        color: "#111",
        textDecoration: "none",
        fontWeight: 700,
      }}
    >
      Start gratis nå
    </Link>

    <Link
      href="/pricing"
      style={{
        padding: "12px 18px",
        borderRadius: 10,
        border: "1px solid #fff",
        color: "#fff",
        textDecoration: "none",
        fontWeight: 700,
      }}
    >
      Se priser
    </Link>
  </div>
</div>

        <footer style={{ marginTop: 26, fontSize: 12, opacity: 0.6 }}>
          © {new Date().getFullYear()} ProfitPilot
        </footer>
      </main>
    </div>
  );
}
