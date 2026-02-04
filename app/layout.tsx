import "./globals.css";
import Providers from "./providers";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no">
      <body>
        <Providers>
          <Navbar />
          <main style={{ maxWidth: 980, margin: "0 auto", padding: 16 }}>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}

