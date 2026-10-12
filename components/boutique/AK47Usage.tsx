"use client";

import React from "react";
import Container from "@/components/ui/Container";
import { Coffee, Flame, ChevronRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export default function AK47Usage() {
  const orderMessage = `Bonjour Phyto Santé, je souhaite commander le produit : AK 47 – Dûre au lit (Offre promo : 8 000 FCFA). Merci de m'indiquer la démarche pour la livraison rapide et discrète.`;
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(orderMessage)}`;

  return (
    <section id="usage" className="bg-[#071710] text-white py-16 sm:py-24 border-t border-[#D4A843]/20 relative overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#D4A843]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1B4332]/30 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        
        {/* MAIN CARD MATCHING CAPTURE 100% */}
        <div className="bg-[#0B2217] border border-[#D4A843]/30 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: RITUEL & STEPS (7 COLS ON LG) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Pill Badge */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4A843]/40 bg-[#071710]/80 text-[#D4A843] text-xs font-bold uppercase tracking-wider shadow-md">
                <Coffee className="w-4 h-4 text-[#D4A843]" />
                <span>MODE D'UTILISATION SIMPLE</span>
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Le Rituel Facile & Rapide en <span className="italic text-[#D4A843]">15 Minutes</span>
            </h2>

            {/* Quote Box with Left Gold Bar */}
            <div className="border-l-4 border-[#D4A843] pl-4 py-1 my-5">
              <blockquote className="font-serif italic text-lg sm:text-xl text-[#E6C875] font-medium leading-relaxed">
                “Buvez un verre de thé 15 minutes avant d'aller à l'acte, votre partenaire vous félicitera.”
              </blockquote>
            </div>

            {/* 3 Numbered Steps List */}
            <div className="space-y-4 pt-2">
              
              {/* Step 1 */}
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-amber-500 text-black font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-md">
                  1
                </div>
                <p className="text-sm sm:text-base text-gray-200 font-light leading-relaxed">
                  Prenez un verre de thé du produit <strong className="text-white font-semibold">AK 47</strong>.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-amber-500 text-black font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-md">
                  2
                </div>
                <p className="text-sm sm:text-base text-gray-200 font-light leading-relaxed">
                  Buvez le verre tranquillement <strong className="text-white font-semibold">15 minutes avant le rapport intime</strong>.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-amber-500 text-black font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-md">
                  3
                </div>
                <p className="text-sm sm:text-base text-gray-200 font-light leading-relaxed">
                  Profitez d'une endurance décuplée, d'un contrôle naturel et du plaisir partagé.
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN: RÉSULTATS GARANTIS CARD (5 COLS ON LG) */}
          <div className="lg:col-span-5">
            <div className="bg-[#071710] border border-[#D4A843]/30 rounded-2xl p-6 sm:p-8 text-center flex flex-col items-center justify-center space-y-5 shadow-2xl">
              
              {/* Circular Flame Icon Badge */}
              <div className="w-16 h-16 rounded-full border-2 border-[#D4A843] bg-amber-950/40 text-[#D4A843] flex items-center justify-center shadow-lg">
                <Flame className="w-7 h-7 text-[#D4A843]" />
              </div>

              {/* Title */}
              <h3 className="font-serif font-bold text-white text-xl sm:text-2xl">
                Résultats Garantis
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed max-w-xs mx-auto">
                100% à base d'extraits naturels et de recettes végétales éprouvées par le Cabinet Phyto Santé.
              </p>

              {/* Gold CTA Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#D4A843] hover:bg-[#B8860B] text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider py-3.5 px-6 rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 touch-active group"
              >
                <span>COMMANDER MAINTENANT</span>
                <ChevronRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
              </a>

            </div>
          </div>

        </div>

      </Container>
    </section>
  );
}
