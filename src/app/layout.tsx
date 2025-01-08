import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import Navbar from "@/components/custom/navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://javicerodriguez.com.ar"),
  title: {
    template: "%s | Javier Rodriguez",
    default: "Javier Rodriguez",
  },
  description: "Frontend Dev and Data Engineer 🧉",
  keywords: [
    "Mate",
    "Javo",
    "React",
    "Typescript",
    "Python",
    "Data",
    "Frontend",
    "UI",
    "Engineer",
    "Developer",
  ],
  openGraph: {
    title: "Javier Rodriguez",
    url: "https://javicerodriguez.com.ar",
    description: "Frontend Dev and Data Engineer 🧉",
    siteName: "Javier Rodriguez",
    images: [
      {
        url: "https://javicerodriguez.com.ar/images/og_javo.png",
        width: 360,
        height: 128,
        alt: "Javier Rodriguez",
      },
      {
        url: "https://javicerodriguez.com.ar/images/og_javo.png",
        width: 600,
        height: 212,
        alt: "Javier Rodriguez",
      },
      {
        url: "https://javicerodriguez.com.ar/images/og_javo.png",
        width: 840,
        height: 297,
        alt: "Javier Rodriguez",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧉</text></svg>"
        />
      </head>
      <body className={`${inter.className} relative`}>
        <Navbar />
        <div className="container mx-auto py-20 min-h-[100vh] flex flex-col">
          <main className="flex items-center justify-center flex-grow">
            {children}
          </main>
          <Analytics />
        </div>
      </body>
    </html>
  );
}
