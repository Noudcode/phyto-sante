import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { siteConfig } from "@/data/site-config";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://phytosante.site"),
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  keywords: [
    "Phyto Santé",
    "Togbé ADAYE",
    "Solutions naturelles",
    "Accompagnement spirituel",
    "Fertilité naturelle",
    "Bien-être intime",
    "Harmonie conjugale",
    "Tradition béninoise",
    "Phytothérapie Burkina Faso",
    "AK 47 Dûre au lit",
  ],
  alternates: {
    canonical: "https://phytosante.site",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/images/logo_emblem.png" },
      { url: "/images/logo_emblem.png", type: "image/png" },
    ],
    shortcut: "/images/logo_emblem.png",
    apple: "/images/logo_emblem.png",
  },
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: "https://phytosante.site",
    siteName: siteConfig.name,
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/images/logo_emblem.png",
        width: 800,
        height: 800,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/images/logo_emblem.png"],
  },
};

import ProtectionProvider from "@/components/ui/ProtectionProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased selection:bg-[#B8860B] selection:text-white">
        <ProtectionProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </ProtectionProvider>
      </body>
    </html>
  );
}
