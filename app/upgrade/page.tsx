"use client";

export default function UpgradePage() {
  return (
    <div style={{ padding: "48px 0", textAlign: "center" }}>
      <h1>Lås opp flere kampanjer 🚀</h1>
      <p>Du har brukt din gratis kampanje.</p>

      <div style={{ marginTop: 24 }}>
        <button
          style={{
            padding: "12px 24px",
            fontSize: 16,
            cursor: "pointer",
          }}
          onClick={async () => {
  try {
    const res = await fetch("/api/checkout", { method: "POST" });
    const text = await res.text();

    let data: any = null;
    try {
      data = text ? JSON.parse(text) : null;
    } catch {
      alert(text || "Tomt svar fra server");
      return;
    }

    if (!res.ok) {
      alert(data?.error ?? `HTTP ${res.status}`);
      return;
    }

    if (data?.url) {
      window.location.href = data.url;
    }
  } catch (e: any) {
    alert(e?.message ?? "Network error");
  }
}}

        >
          Kjøp ny kampanje – 49 kr
        </button>
      </div>
    </div>
  );
}
