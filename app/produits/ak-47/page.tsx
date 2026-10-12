import type { Metadata } from "next";
import AK47Hero from "@/components/boutique/AK47Hero";
import AK47Details from "@/components/boutique/AK47Details";
import AK47Usage from "@/components/boutique/AK47Usage";
import AK47Poster from "@/components/boutique/AK47Poster";
import AK47Dressing from "@/components/boutique/AK47Dressing";
import AK47StickyFooter from "@/components/boutique/AK47StickyFooter";

export const metadata: Metadata = {
  title: "AK 47 – Dûre au lit | Endurance & Vigueur Masculine Naturelle | Phyto Santé",
  description:
    "Découvrez AK 47 – Dûre au lit par le Cabinet Phyto Santé. Préparation naturelle souveraine pour une endurance décuplée, le contrôle de l'éjaculation et une confiance retrouvée. Offre promo 8 000 FCFA. Livraison rapide et discrète au Burkina Faso.",
  keywords: [
    "AK 47 Dûre au lit",
    "AK 47 Phyto Santé",
    "Togbé ADAYE AK 47",
    "Endurance sexuelle naturelle",
    "Contrôle de l'éjaculation",
    "Faiblesse sexuelle traitement naturel",
    "Phytothérapie Bénin",
    "Phytothérapie Burkina Faso",
    "Vigueur masculine naturelle",
    "Retardateur naturel éjaculation",
  ],
  alternates: {
    canonical: "https://phytosante.site/produits/ak-47",
  },
  openGraph: {
    title: "AK 47 – Dûre au lit | Soyez des vrais hommes au lit | Phyto Santé",
    description:
      "Préparation naturelle d'exception pour une meilleure endurance sexuelle et un contrôle absolu. Offre promotionnelle 8 000 FCFA.",
    url: "https://phytosante.site/produits/ak-47",
    type: "website",
    locale: "fr_FR",
    siteName: "Cabinet Phyto Santé",
    images: [
      {
        url: "/img/hero_pc.jpg",
        width: 1200,
        height: 630,
        alt: "AK 47 – Dûre au lit Phyto Santé",
      },
      {
        url: "/img/ak47_poster.png",
        width: 800,
        height: 1000,
        alt: "Affiche Officielle AK 47",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AK 47 – Dûre au lit | Phyto Santé",
    description: "Soyez des vrais hommes au lit — Endurance et contrôle naturels.",
    images: ["/img/hero_pc.jpg"],
  },
};

export default function AK47Page() {
  const productJsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "AK 47 – Dûre au lit",
    image: [
      "https://phytosante.site/img/ak47_product.png",
      "https://phytosante.site/img/ak47_poster.png",
      "https://phytosante.site/img/hero_pc.jpg",
    ],
    description:
      "Préparation naturelle traditionnelle pour une endurance sexuelle prolongée, le contrôle de l'éjaculation prématurée et une vigueur masculine soutenue.",
    sku: "AK47-DURE-LIT",
    brand: {
      "@type": "Brand",
      name: "Cabinet Phyto Santé",
    },
    offers: {
      "@type": "Offer",
      url: "https://phytosante.site/produits/ak-47",
      priceCurrency: "XOF",
      price: 8000,
      priceValidUntil: "2027-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Cabinet Phyto Santé",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.95",
      reviewCount: "189",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "La livraison se fait-elle vraiment partout au Burkina Faso ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui ! Nous livrons rapidement et en toute sécurité partout au Burkina Faso (Ouagadougou, Bobo-Dioulasso, Koudougou, Banfora, Ouahigouya, etc.) ainsi que dans toute l'Afrique de l'Ouest et à l'international.",
        },
      },
      {
        "@type": "Question",
        name: "La livraison est-elle discrète ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolument. Nous accordons une priorité totale à votre vie privée. Votre commande AK 47 est emballée dans un colis neutre et opaque sans aucune étiquette ou mention du produit sur le carton extérieur.",
        },
      },
      {
        "@type": "Question",
        name: "Le produit AK 47 est-il 100% naturel et sans danger ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, AK 47 est préparé exclusivement à partir de plantes médicinales et écorces traditionnelles. Il ne contient aucun additif chimique ni stimulant de synthèse.",
        },
      },
      {
        "@type": "Question",
        name: "Au bout de combien de temps ressent-on les effets ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Il suffit de boire un verre de thé 15 minutes avant le rapport intime pour ressentir une vigueur immédiate et une endurance décuplée.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#071710] selection:bg-[#B8860B] selection:text-white">
      {/* Structured Data (Schema.org JSON-LD for Google Rich Snippets) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

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
