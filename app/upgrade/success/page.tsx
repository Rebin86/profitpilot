import Link from "next/link";

export default function UpgradeSuccessPage() {
  return (
    <div style={{ padding: "48px 0", textAlign: "center" }}>
      <h1>Betaling mottatt ✅</h1>
      <p>Takk! Du kan gå tilbake og lage ny kampanje.</p>

      <div style={{ marginTop: 20 }}>
        <Link href="/campaign/new">Gå til ny kampanje</Link>
      </div>

      <div style={{ marginTop: 10 }}>
        <Link href="/campaigns">Se mine kampanjer</Link>
      </div>
    </div>
  );
}
