import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Navbar from "@/components/custom/navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://javicerodriguez.com.ar"),
  title: {
    template: "%s | Javier Rodriguez",
    default: "Javier Rodriguez",
  },
  description: "Frontend developer and data scientist's apprentice 🧉",
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
    description: "Frontend developer and data scientist's apprentice 🧉",
    siteName: "Javier Rodriguez",
    images: [
      {
        url: "https://javicerodriguez.com.ar/images/javo.jpg",
        width: 360,
        height: 270,
        alt: "Javier Rodriguez",
      },
      {
        url: "https://javicerodriguez.com.ar/images/javo.jpg",
        width: 600,
        height: 450,
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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <div className="container mx-auto pt-20 min-h-[100vh]">
            {children}
            <Analytics />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
