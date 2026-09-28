import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Leaf,
  HeartPulse,
  ShoppingBag,
} from "lucide-react";

export default function BoutiqueShowcaseSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#0A1F16] text-white overflow-hidden border-y border-[#B8860B]/30 min-h-[85vh] flex items-center">
      {/* Exact Phyto Santé Product Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/boutique_showcase_bg.jpg"
          alt="Tonique Naturel Phyto Santé - Bouteille et plantes"
          fill
          priority
          className="object-cover object-right filter brightness-95 scale-105"
        />
        {/* Dark Gradient Overlay on Left Side for Optimal Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F16] via-[#0A1F16]/90 to-transparent lg:w-3/4" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F16] via-transparent to-[#0A1F16]/40" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-2xl space-y-8">
          {/* Badge */}
          <AnimateOnScroll animation="fade-down">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1B4332]/90 border border-[#D4A843]/50 shadow-lg backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <Sparkles className="w-4 h-4 text-[#D4A843]" />
              <span className="text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-[#D4A843]">
                Boutique Phyto Santé • Produit Phare
              </span>
            </div>
          </AnimateOnScroll>

          {/* Title & Tagline matching FounderSection typography */}
          <AnimateOnScroll animation="fade-up" delay={150}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15]">
              Tonique Naturel <br />
              <span className="gold-gradient-text">Puissance & Vitalité</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-light mt-4 max-w-xl">
              Une formule d'exception <strong className="text-white font-medium">100% naturelle</strong> à base de racines, écorces et plantes traditionnelles sélectionnées du Bénin pour stimuler la libido, améliorer la performance et redonner vitalité et confiance.
            </p>
          </AnimateOnScroll>

          {/* 4 Benefit Cards Grid */}
          <AnimateOnScroll animation="fade-up" delay={300}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 max-w-xl">
              <div className="p-4 rounded-2xl bg-[#1B4332]/85 border border-[#B8860B]/30 backdrop-blur-md flex items-start gap-3.5 hover:border-[#D4A843]/60 transition-colors shadow-md">
                <div className="w-9 h-9 rounded-xl bg-[#D4A843]/15 border border-[#D4A843]/30 flex items-center justify-center text-[#D4A843] shrink-0 mt-0.5">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-serif font-bold text-white">Stimule le désir & la Libido</h4>
                  <p className="text-xs text-gray-300 mt-0.5">Favorise la vigueur et la vitalité naturelle.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#1B4332]/85 border border-[#B8860B]/30 backdrop-blur-md flex items-start gap-3.5 hover:border-[#D4A843]/60 transition-colors shadow-md">
                <div className="w-9 h-9 rounded-xl bg-[#D4A843]/15 border border-[#D4A843]/30 flex items-center justify-center text-[#D4A843] shrink-0 mt-0.5">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-serif font-bold text-white">Performance & Endurance</h4>
                  <p className="text-xs text-gray-300 mt-0.5">Améliore la résistance au quotidien.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#1B4332]/85 border border-[#B8860B]/30 backdrop-blur-md flex items-start gap-3.5 hover:border-[#D4A843]/60 transition-colors shadow-md">
                <div className="w-9 h-9 rounded-xl bg-[#D4A843]/15 border border-[#D4A843]/30 flex items-center justify-center text-[#D4A843] shrink-0 mt-0.5">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-serif font-bold text-white">Recette Traditionnelle</h4>
                  <p className="text-xs text-gray-300 mt-0.5">Plantes et écorces du Bénin.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#1B4332]/85 border border-[#B8860B]/30 backdrop-blur-md flex items-start gap-3.5 hover:border-[#D4A843]/60 transition-colors shadow-md">
                <div className="w-9 h-9 rounded-xl bg-[#D4A843]/15 border border-[#D4A843]/30 flex items-center justify-center text-[#D4A843] shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-serif font-bold text-white">Anti-Stress & Anti-Fatigue</h4>
                  <p className="text-xs text-gray-300 mt-0.5">Renforce l'énergie globale.</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* CTAs Action Buttons with Equal Sizes */}
          <AnimateOnScroll animation="fade-up" delay={450}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                href="/boutique"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#D4A843] via-[#B8860B] to-[#9A6F09] hover:from-[#E6B84D] hover:to-[#B8860B] text-white text-base font-semibold shadow-xl shadow-[#B8860B]/20 transition-all duration-300 transform hover:-translate-y-0.5 group min-w-[220px]"
              >
                <ShoppingBag className="w-5 h-5 shrink-0" />
                <span>Boutique Phyto Santé</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform shrink-0" />
              </Link>

              <WhatsAppButton
                variant="primary"
                size="lg"
                label="Commander"
                className="min-w-[220px]"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
