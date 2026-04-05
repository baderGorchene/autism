import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from 'next/link';
import Image from 'next/image';
import { ThemeProvider } from './providers';
import { ThemeToggle } from './ThemeToggle';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IONIS Autism Screening API",
  description: "A professional ML-driven ASD screening intake tool.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`} style={{ background: "var(--bg)", color: "var(--text)" }}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Navigation Bar */}
          <nav style={{ padding: "1.25rem 2rem", background: "var(--panel)", borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", color: "var(--text)", fontWeight: 700, fontSize: "1.25rem" }}>
              <Image src="/Final_SheSignals_Logo.png" alt="SheSignals Logo" width={32} height={32} style={{ borderRadius: "4px" }} />
              <span style={{ color: "#fe70d7" }}>SheSignals</span>
            </Link>

            <div className="nav-links" style={{ display: "flex", gap: "2rem", alignItems: "center", fontSize: "0.9rem", fontWeight: 500 }}>
              <Link href="/about" style={{ textDecoration: "none", color: "var(--muted)" }}>About</Link>
              <Link href="/technology" style={{ textDecoration: "none", color: "var(--muted)" }}>Technology</Link>

              <ThemeToggle />

              <Link href="/screening" style={{ textDecoration: "none", padding: "0.5rem 1rem", background: "#fe70d7", color: "#ffffff", borderRadius: "6px", fontWeight: 600 }}>
                Access Form
              </Link>
            </div>
          </nav>

          {/* Main Content Area */}
          <main style={{ flexGrow: 1, padding: "2rem 0" }}>
            {children}
          </main>

          {/* Footer */}
          <footer style={{ padding: "2rem", background: "var(--panel)", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", fontSize: "0.85rem", color: "var(--muted)" }}>
            <p>© {new Date().getFullYear()} IONIS Healthcare Analytics. All rights reserved.</p>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <Link href="/privacy" style={{ textDecoration: "none", color: "var(--muted)" }}>Privacy Policy</Link>
              <Link href="/contact" style={{ textDecoration: "none", color: "var(--muted)" }}>Contact Us</Link>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
