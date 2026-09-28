import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ProductGrid from "@/components/boutique/ProductGrid";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { productsData } from "@/data/products";
import { ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";

export default function BoutiquePage() {
  return (
    <div className="pt-24 pb-20 bg-[#FAF8F5]">
      {/* Hero Header */}
      <section className="relative py-20 bg-[#0A1F16] text-white overflow-hidden mb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_bg.jpg"
            alt="Boutique Phyto Santé"
            fill
            className="object-cover opacity-25 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F16] via-[#0A1F16]/80 to-transparent" />
        </div>
        <Container className="relative z-10 text-center">
          <span className="text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold text-[#D4A843] block mb-3">
            Solutions & Produits Naturels
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            La boutique Phyto Santé
          </h1>
          <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto font-light leading-relaxed mb-8">
            Phyto Santé met à votre disposition des produits naturels ainsi qu'un accompagnement personnalisé pour répondre à diverses préoccupations liées au bien-être personnel, conjugal et à l'épanouissement de la vie quotidienne.
          </p>
          <WhatsAppButton
            variant="primary"
            label="Commander directement sur WhatsApp"
          />
        </Container>
      </section>

      {/* Main Content */}
      <Container>
        <SectionTitle
          subtitle="Gamme Officielle"
          title="Nos 8 Solutions Naturelles"
          description="Découvrez nos préparations artisanales et naturelles. Chaque produit est sélectionné et élaboré dans le respect strict des traditions et de la nature."
          centered
          className="mb-16"
        />

        {/* 8 Product Grid */}
        <div className="mb-20">
          <ProductGrid products={productsData} />
        </div>

        {/* Commitment Banner */}
        <div className="bg-[#F3EDE4] border border-[#B8860B]/30 rounded-3xl p-8 sm:p-12 text-center space-y-6 max-w-4xl mx-auto shadow-md">
          <div className="inline-flex items-center gap-2 text-[#B8860B] font-semibold text-xs uppercase tracking-widest bg-white px-4 py-2 rounded-full border border-[#B8860B]/20">
            <Sparkles className="w-4 h-4" />
            <span>Qualité & Discrétion Assurées</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B4332]">
            Un accompagnement sur-mesure avec chaque produit
          </h3>

          <p className="text-sm sm:text-base text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
            Pour toute demande spécifique ou conseil avant achat, échangez directement avec Prince ADAYE et l'équipe Phyto Santé via WhatsApp.
          </p>

          <WhatsAppButton variant="gold" label="Poser une question avant commande" />
        </div>
      </Container>
    </div>
  );
}
