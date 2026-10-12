"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Zap, CheckCircle2 } from "lucide-react";

export default function AK47Hero() {
  return (
    <section 
      className="relative min-h-[92vh] sm:min-h-screen w-full bg-[#071710] overflow-hidden flex flex-col justify-between py-12 text-white select-none"
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
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-16 sm:py-24 flex flex-col justify-center items-center text-center">
        
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
          <div className="pt-4 flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-200 font-light">
            <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-xl border border-white/15 shadow-md">
              <Zap className="w-4 h-4 text-[#D4A843]" />
              <span>Vigueur immédiate</span>
            </div>
            <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-xl border border-white/15 shadow-md">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Retardateur d'éjaculation</span>
            </div>
            <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-xl border border-white/15 shadow-md">
              <ShieldCheck className="w-4 h-4 text-[#D4A843]" />
              <span>100% Naturel & Sans chimie</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
