import Link from "next/link";

export default function Dashboard() {
  return (
    <div style={{ padding: "24px 0" }}>
      <h1>Dashboard</h1>
      <p style={{ opacity: 0.8 }}>Velg hva du vil gjøre:</p>

      <div style={{ display: "flex", gap: 16, marginTop: 12 }}>
        <Link href="/campaign/new">➕ Ny kampanje</Link>
        <Link href="/campaigns">📂 Mine kampanjer</Link>
      </div>
    </div>
  );
}
