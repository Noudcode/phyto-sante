"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Zap, CheckCircle2 } from "lucide-react";

export default function AK47Hero() {
  return (
    <section 
      className="relative w-full bg-[#071710] overflow-hidden flex flex-col justify-center pt-20 pb-6 sm:pt-28 sm:pb-10 text-white select-none"
    >
      {/* DEDICATED RESPONSIVE HERO IMAGES (PC/DESKTOP & MOBILE) */}
      <div className="absolute inset-0 z-0">
        {/* Desktop / PC Image (16:9 Landscape) */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/img/hero_pc.jpg"
            alt="AK 47 – Image Héro PC"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Mobile / Tablet Image (9:16 Portrait) */}
        <div className="block md:hidden absolute inset-0">
          <Image
            src="/img/hero_mobile.jpg"
            alt="AK 47 – Image Héro Mobile"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Ambient Gradient Overlays for optimal text contrast and dark forest aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071710] via-[#071710]/70 to-[#071710]/40" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#071710]/50 to-[#071710]" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#071710] to-transparent" />
      </div>

      {/* AMBIENT LIGHTING DECORATIONS */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D4A843]/15 rounded-full blur-3xl pointer-events-none z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#1B4332]/40 rounded-full blur-3xl pointer-events-none z-10" />

      {/* HERO CONTENT OVERLAY */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12 flex flex-col justify-center items-center text-center">
        
        {/* MAIN PRODUCT TITLE & SUBTITLE */}
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black tracking-tight leading-[1.1] text-white drop-shadow-2xl">
            <span className="bg-gradient-to-r from-amber-200 via-[#D4A843] to-amber-500 bg-clip-text text-transparent">
              AK 47
            </span>
            <span className="block text-2xl sm:text-4xl md:text-5xl text-gray-100 font-serif font-bold mt-2 sm:mt-3">
              – Dûre au lit –
            </span>
          </h1>

          <p className="text-xl sm:text-3xl md:text-4xl font-serif italic text-[#E6C875] font-medium tracking-wide max-w-3xl mx-auto drop-shadow-md">
            « Soyez des vrais hommes au lit »
          </p>

          {/* KEY BENEFITS HIGHLIGHT STRIP */}
          <div className="pt-4 flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-[11px] sm:text-sm text-gray-200 font-light">
            <div className="flex items-center gap-1.5 sm:gap-2 bg-black/60 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl border border-white/15 shadow-md">
              <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4A843]" />
              <span>Vigueur immédiate</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-black/60 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl border border-white/15 shadow-md">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
              <span>Retardateur d'éjaculation</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-black/60 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl border border-white/15 shadow-md">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4A843]" />
              <span>100% Naturel & Bio</span>
            </div>
          </div>

          {/* QUICK HERO CTA (MOBILE & DESKTOP) */}
          <div className="pt-10 sm:pt-14 mt-2 sm:mt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto px-4">
            {/* Button 1: PUISSANT ET VITALITE (Orange Gradient - Centré sur mobile, côte à côte sur PC) */}
            <a
              href="https://wa.me/22605855017?text=Bonjour%20Phyto%20Sant%C3%A9%2C%20je%20souhaite%20commander%20le%20produit%20%3A%20AK%2047%20%E2%80%93%20D%C3%BBre%20au%20lit%20(Offre%20Promo%20%3A%208%20000%20FCFA)."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-xs sm:max-w-none sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-[#FF6B00] via-[#F4511E] to-[#D83600] hover:from-[#E65C00] hover:to-[#C02E00] text-white font-bold text-sm sm:text-base border border-[#FF6B00]/40 shadow-xl shadow-[#FF6B00]/30 transition-all duration-300 transform active:scale-95 touch-active uppercase tracking-wide text-center"
            >
              <span>PUISSANT ET VITALITE</span>
            </a>

            {/* Button 2: Vert - Uniquement sur écran large (masqué sur mobile) */}
            <a
              href="#details"
              className="hidden sm:inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base shadow-xl hover:shadow-[#25D366]/30 border border-[#25D366] transition-all duration-300 transform active:scale-95 touch-active text-center"
            >
              <span>Découvrir la formule</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
