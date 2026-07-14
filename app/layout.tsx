import type React from "react";
import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://javo.com.ar"),
  title: {
    default: "Javier Rodriguez | Frontend Engineer",
    template: "%s | Javier Rodriguez",
  },
  description:
    "Tech Lead Frontend enfocado en construir productos claros y sólidos con React, TypeScript y Next.js.",
  openGraph: {
    title: "Javier Rodriguez | Frontend Engineer",
    description:
      "Tech Lead Frontend enfocado en construir productos claros y sólidos con React, TypeScript y Next.js.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <body className={`${manrope.variable} ${plexMono.variable} antialiased`}>
        <a href="#main-content" className="skip-link">
          Ir al contenido
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
