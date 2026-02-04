"use client";

import { useState } from "react";

export default function CampaignForm() {
  const [offer, setOffer] = useState("");
  const [audience, setAudience] = useState("Lokale kunder");
  const [goal, setGoal] = useState<"calls" | "bookings" | "leads">("calls");
  const [channel, setChannel] = useState<"facebook" | "google" | "both">("both");
  const [tone, setTone] = useState<"direct" | "safe" | "premium">("direct");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  async function onGenerate() {
  setError(null);
  setLoading(true);
  setOutput(null);

  try {
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ offer, audience, goal, channel, tone }),
    });

    const text = await res.text(); // <-- les alltid tekst først
    let data: any = null;

    try {
      data = text ? JSON.parse(text) : null;
    } catch {
      // hvis serveren returnerer HTML/blankt
      data = { error: text || "Tomt svar fra server" };
    }

    setLoading(false);

    if (!res.ok) {
    if (data?.error === "PAYWALL") {
    window.location.href = "/upgrade";
    return;
  }

  setError(data?.error ?? `HTTP ${res.status}`);
  return;
}


    setOutput(data.output);
  } catch (e: any) {
    setLoading(false);
    setError(e?.message ?? "Network error");
  }
}


  return (
    <div style={{ display: "grid", gap: 12, maxWidth: 760 }}>
      <label>
        Hva selger du?
        <input value={offer} onChange={(e) => setOffer(e.target.value)} style={{ width: "100%", padding: 10 }} />
      </label>

      <label>
        Hvem er kunden?
        <input value={audience} onChange={(e) => setAudience(e.target.value)} style={{ width: "100%", padding: 10 }} />
      </label>

      <div style={{ display: "flex", gap: 12 }}>
        <label style={{ flex: 1 }}>
          Mål
          <select value={goal} onChange={(e) => setGoal(e.target.value as any)} style={{ width: "100%", padding: 10 }}>
            <option value="calls">Flere telefoner</option>
            <option value="bookings">Bookinger</option>
            <option value="leads">Leads</option>
          </select>
        </label>

        <label style={{ flex: 1 }}>
          Kanal
          <select value={channel} onChange={(e) => setChannel(e.target.value as any)} style={{ width: "100%", padding: 10 }}>
            <option value="facebook">Facebook</option>
            <option value="google">Google</option>
            <option value="both">Begge</option>
          </select>
        </label>

        <label style={{ flex: 1 }}>
          Tone
          <select value={tone} onChange={(e) => setTone(e.target.value as any)} style={{ width: "100%", padding: 10 }}>
            <option value="direct">Direkte</option>
            <option value="safe">Trygg</option>
            <option value="premium">Premium</option>
          </select>
        </label>
      </div>

      <button
        onClick={onGenerate}
        disabled={!offer || loading}
        style={{ padding: "12px 14px", border: "1px solid #111" }}
      >
        {loading ? "🔨 Lager annonser… 🧱 Landingside… 📩 Oppfølging…" : "Få flere kunder"}
      </button>

      {error && <div style={{ padding: 12, border: "1px solid #f99" }}>{error}</div>}

      {output && (
        <pre style={{ whiteSpace: "pre-wrap", padding: 12, border: "1px solid #eee" }}>
{JSON.stringify(output, null, 2)}
        </pre>
      )}
    </div>
  );
}
