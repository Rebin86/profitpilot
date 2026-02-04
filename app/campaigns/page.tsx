import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { prisma } from "@/lib/prisma";

export default async function CampaignsPage() {
  const session = await getServerSession(authOptions);
  const userId = (session?.user as any)?.id as string | undefined;

  if (!userId) {
    return (
      <div style={{ padding: "24px 0" }}>
        <h1>Mine kampanjer</h1>
        <p>Du må være logget inn.</p>
        <Link href="/">Til forsiden</Link>
      </div>
    );
  }

  const items = await prisma.campaign.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    take: 50,
  });

  return (
    <div style={{ padding: "24px 0" }}>
      <h1>Mine kampanjer</h1>

      <div style={{ margin: "12px 0" }}>
        <Link href="/campaign/new">➕ Ny kampanje</Link>
      </div>

      {items.length === 0 ? (
        <p>Ingen kampanjer enda.</p>
      ) : (
        <div style={{ display: "grid", gap: 12 }}>
          {items.map((c) => (
            <div key={c.id} style={{ border: "1px solid #eee", padding: 12 }}>
              <div style={{ fontWeight: 700 }}>{c.title}</div>
              <div style={{ opacity: 0.7, fontSize: 12 }}>
                {new Date(c.createdAt).toLocaleString()}
              </div>
              <details style={{ marginTop: 8 }}>
                <summary>Vis output</summary>
                <pre style={{ whiteSpace: "pre-wrap" }}>{c.outputJson}</pre>
              </details>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
