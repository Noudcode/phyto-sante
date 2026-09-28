"use client";

import React, { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ProductGrid from "@/components/boutique/ProductGrid";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { productsData } from "@/data/products";
import { ShieldCheck, HeartHandshake, Sparkles, Filter } from "lucide-react";

export default function BoutiquePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");

  const categories = [
    "Tous",
    ...Array.from(new Set(productsData.map((p) => p.category))),
  ];

  const filteredProducts =
    selectedCategory === "Tous"
      ? productsData
      : productsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="pt-24 pb-20 bg-[#FAF8F5]">
      {/* Hero Header */}
      <section className="relative py-14 sm:py-20 bg-[#0A1F16] text-white overflow-hidden mb-10 sm:mb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_bg.jpg"
            alt="Boutique Phyto Santé"
            fill
            className="object-cover opacity-65 sm:opacity-25 filter brightness-90 sm:brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F16] via-[#0A1F16]/50 sm:via-[#0A1F16]/80 to-transparent" />
        </div>
        <Container className="relative z-10 text-center">
          <span className="text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold text-[#D4A843] block mb-2 sm:mb-3">
            Solutions & Produits Naturels
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-4 sm:mb-6">
            La boutique Phyto Santé
          </h1>
          <p className="text-xs sm:text-lg text-gray-200 max-w-2xl mx-auto font-light leading-relaxed mb-6 sm:mb-8">
            Phyto Santé met à votre disposition des produits naturels ainsi qu'un accompagnement personnalisé pour répondre à diverses préoccupations liées au bien-être personnel, conjugal et à l'épanouissement de la vie quotidienne.
          </p>
          <WhatsAppButton
            variant="primary"
            label="Commander directement sur WhatsApp"
            className="w-full sm:w-auto"
          />
        </Container>
      </section>

      {/* Main Content */}
      <Container>
        <SectionTitle
          subtitle="Gamme Officielle"
          title="Nos Solutions Naturelles"
          description="Découvrez nos préparations artisanales et naturelles. Chaque produit est sélectionné et élaboré dans le respect strict des traditions et de la nature."
          centered
          className="mb-8 sm:mb-12"
        />

        {/* Mobile Horizontal Filter Scrollable Chips */}
        <div className="mb-8 overflow-x-auto no-scrollbar pb-2">
          <div className="flex items-center gap-2 whitespace-nowrap min-w-max px-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#1B4332] pr-2">
              <Filter className="w-3.5 h-3.5 text-[#B8860B]" />
              <span>Filtrer :</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all touch-active ${
                  selectedCategory === cat
                    ? "bg-[#1B4332] text-[#D4A843] shadow-md border border-[#D4A843]/40"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="mb-16 sm:mb-20">
          <ProductGrid products={filteredProducts} />
        </div>

        {/* Commitment Banner */}
        <div className="bg-[#F3EDE4] border border-[#B8860B]/30 rounded-3xl p-6 sm:p-12 text-center space-y-4 sm:space-y-6 max-w-4xl mx-auto shadow-md">
          <div className="inline-flex items-center gap-2 text-[#B8860B] font-bold text-[10px] sm:text-xs uppercase tracking-widest bg-white px-3.5 py-1.5 rounded-full border border-[#B8860B]/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Qualité & Discrétion Assurées</span>
          </div>

          <h3 className="text-xl sm:text-3xl font-serif font-bold text-[#1B4332]">
            Un accompagnement sur-mesure avec chaque produit
          </h3>

          <p className="text-xs sm:text-base text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed font-light">
            Pour toute demande spécifique ou conseil avant achat, échangez directement avec Prince ADAYE et l'équipe Phyto Santé via WhatsApp.
          </p>

          <WhatsAppButton
            variant="gold"
            label="Poser une question avant commande"
            className="w-full sm:w-auto"
          />
        </div>
      </Container>
    </div>
  );
}
