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
  applicationName: "Javier Rodriguez",
  authors: [{ name: "Javier Rodriguez", url: "https://javo.com.ar" }],
  creator: "Javier Rodriguez",
  category: "Portfolio profesional",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Javier Rodriguez | Frontend Engineer",
    description:
      "Tech Lead Frontend enfocado en construir productos claros y sólidos con React, TypeScript y Next.js.",
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: "Javier Rodriguez",
    images: [{ url: "/icon.svg", width: 64, height: 64, alt: "Monograma JR" }],
  },
  twitter: {
    card: "summary",
    title: "Javier Rodriguez | Frontend Engineer",
    description:
      "Tech Lead Frontend enfocado en construir productos claros y sólidos con React, TypeScript y Next.js.",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Javier Rodriguez",
  url: "https://javo.com.ar",
  jobTitle: "Tech Lead Frontend",
  email: "mailto:contacto@javo.com.ar",
  sameAs: [
    "https://github.com/JaviCeRodriguez",
    "https://linkedin.com/in/javicerodriguez",
    "https://twitter.com/javicerodriguez",
  ],
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <Analytics />
      </body>
    </html>
  );
}
