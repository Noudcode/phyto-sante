import type { Metadata } from "next";
import AK47Hero from "@/components/boutique/AK47Hero";
import AK47Details from "@/components/boutique/AK47Details";
import AK47Usage from "@/components/boutique/AK47Usage";
import AK47Poster from "@/components/boutique/AK47Poster";
import AK47Dressing from "@/components/boutique/AK47Dressing";
import AK47StickyFooter from "@/components/boutique/AK47StickyFooter";

export const metadata: Metadata = {
  title: "AK 47 – Dûre au lit | Soyez des vrais hommes au lit | Phyto Santé",
  description:
    "Découvrez la préparation naturelle souveraine AK 47 – Dûre au lit par Phyto Santé. Soyez des vrais hommes au lit. Formule 100% naturelle du Bénin.",
  keywords: [
    "AK 47 Dûre au lit",
    "Phyto Santé AK 47",
    "Endurance sexuelle naturelle",
    "Contrôle de l'éjaculation",
    "Phytothérapie Bénin",
    "Prince ADAYE AK 47",
    "Traitement naturel faiblesse masculine",
  ],
  openGraph: {
    title: "AK 47 – Dûre au lit | Phyto Santé",
    description: "Soyez des vrais hommes au lit — Endurance et contrôle.",
    images: [
      {
        url: "/img/IP1.jpg",
        width: 1200,
        height: 630,
        alt: "AK 47 – Dûre au lit",
      },
    ],
  },
};

export default function AK47Page() {
  return (
    <div className="min-h-screen bg-[#071710] selection:bg-[#B8860B] selection:text-white">
      {/* 1. Hero Section (5 slides changing every 3s with fade animation) */}
      <AK47Hero />

      {/* 2. Product Details, Definition, Prices & 5 Key Characteristics */}
      <AK47Details />

      {/* 3. Mode d'Utilisation & Posologie */}
      <AK47Usage />

      {/* 4. Visualisation Affiche Officielle Phyto Santé AK 47 */}
      <AK47Poster />

      {/* 4. Testimonials, Reassurance, FAQs & Final CTA */}
      <AK47Dressing />

      {/* Sticky Bottom Order Bar */}
      <AK47StickyFooter />
    </div>
  );
}
