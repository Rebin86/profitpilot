"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data } = useSession();

  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: 16, borderBottom: "1px solid #eee" }}>
      <Link href="/" style={{ fontWeight: 800 }}>ProfitPilot</Link>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        {data?.user ? (
          <>
            <Link href="/dashboard">Dashboard</Link>
            <button onClick={() => signOut()} style={{ padding: "8px 12px" }}>
              Logg ut
            </button>
          </>
        ) : (
          <button onClick={() => signIn("google")} style={{ padding: "8px 12px" }}>
            Logg inn med Google
          </button>
        )}
      </div>
    </div>
  );
}
