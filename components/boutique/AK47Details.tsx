"use client";

import React, { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import {
  Clock,
  Flame,
  Zap,
  Sparkles,
  ShieldCheck,
  Star,
  MessageCircle,
  TrendingUp,
  Maximize2,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";

// 4 Feature Cards corresponding exactly to Capture 1
const featureCards = [
  {
    icon: Clock,
    iconColor: "text-amber-400",
    iconBg: "border-amber-500/30 bg-amber-950/30",
    title: "Endurance Sexuelle",
    description:
      "Permet d'augmenter significativement la durée des rapports sexuels et de tenir plus longtemps au lit sans épuisement.",
    badgeText: "✓ Durée & Résistance",
    badgeColor: "text-[#D4A843]",
  },
  {
    icon: Flame,
    iconColor: "text-rose-400",
    iconBg: "border-rose-500/30 bg-rose-950/30",
    title: "Contrôle de l'Éjaculation",
    description:
      "Aide l'homme à freiner l'éjaculation prématurée et à garder une parfaite maîtrise de son plaisir.",
    badgeText: "✓ Maîtrise Totale",
    badgeColor: "text-rose-400",
  },
  {
    icon: Zap,
    iconColor: "text-emerald-400",
    iconBg: "border-emerald-500/30 bg-emerald-950/30",
    title: "Puissance & Vitalité",
    description:
      "Soutient la vigueur et le tonus masculin pour des érections plus fermes et soutenues tout au long de l'acte.",
    badgeText: "✓ Vigueur Naturelle",
    badgeColor: "text-emerald-400",
  },
  {
    icon: Sparkles,
    iconColor: "text-[#D4A843]",
    iconBg: "border-[#D4A843]/30 bg-amber-950/30",
    title: "Fierté & Complicité",
    description:
      "Retrouvez la fierté de combler votre partenaire et de vivre une intimité de couple épanouie et passionnée.",
    badgeText: "✓ Satisfaction Éprouvée",
    badgeColor: "text-[#D4A843]",
  },
];

export default function AK47Details() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const orderMessage = `Bonjour Phyto Santé, je souhaite commander le produit : AK 47 – Dûre au lit (Offre Promotionnelle : 8 000 FCFA). Merci de m'indiquer la démarche pour la livraison rapide et discrète.`;
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(orderMessage)}`;

  return (
    <div id="details" className="bg-[#071710] text-white py-16 sm:py-24 border-t border-[#D4A843]/20">
      <Container>
        
        {/* ========================================================================= */}
        {/* SECTION 1 (PREMIÈRE SECTION) : SHOWCASE PRODUIT & OFFRE PROMO           */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-8 sm:mb-12">
          
          {/* Left Column: Product Bottle Display (5 cols on lg) */}
          <div className="lg:col-span-5">
            <div 
              className="relative rounded-3xl border-2 border-emerald-800/60 bg-[#0B2217] overflow-hidden p-3 sm:p-6 shadow-2xl group cursor-pointer flex items-center justify-center"
              onClick={() => setIsLightboxOpen(true)}
            >
              {/* Top Left Promo Pill Badge */}
              <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 animate-pulse">
                <Flame className="w-3.5 h-3.5" />
                <span>PROMO -47%</span>
              </div>

              {/* Top Right 100% Natural Pill Badge */}
              <div className="absolute top-4 right-4 z-20 bg-[#071710]/90 backdrop-blur-md border border-emerald-500/40 text-emerald-400 font-semibold text-[11px] px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Naturel</span>
              </div>

              {/* Product Bottle Image */}
              <div className="relative w-full aspect-[4/5] max-h-[500px] flex items-center justify-center">
                <Image
                  src="/img/ak47_product.png"
                  alt="AK 47 Phyto Santé – Dûre au lit"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
                />
              </div>

              {/* Zoom Trigger Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLightboxOpen(true);
                }}
                className="absolute bottom-4 right-4 z-20 bg-black/60 backdrop-blur-md hover:bg-black text-[#D4A843] p-2.5 rounded-full border border-[#D4A843]/40 transition-transform hover:scale-110"
                title="Agrandir l'image"
              >
                <Maximize2 className="w-4.5 h-4.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Definition, Subline & Promo Offer Box (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Header Badge & Rating */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="border border-[#D4A843]/50 text-[#D4A843] text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#0B2217]">
                  ENDURANCE & TONIQUE MASCULIN
                </span>
                
                <div className="bg-[#0B2217] border border-amber-500/30 px-3 py-1 rounded-full flex items-center gap-1.5 text-xs text-amber-400 font-semibold">
                  <div className="flex items-center text-amber-400">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3 h-3 fill-amber-400" />
                    ))}
                  </div>
                  <span>4.95 / 5 (189 avis vérifiés)</span>
                </div>
              </div>

              {/* Main Product Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white leading-tight">
                AK 47 – <span className="italic text-[#D4A843]">DÛRE AU LIT</span> 🔥
              </h2>

              {/* Tagline */}
              <p className="text-lg sm:text-2xl font-serif italic text-[#E6C875] font-medium tracking-wide">
                « Plus d’endurance. Plus de contrôle. Plus de confiance. »
              </p>

              {/* Main Text Copy */}
              <div className="text-gray-300 text-sm sm:text-base leading-relaxed font-light space-y-3 pt-1">
                <p>
                  Vous manquez d’endurance pendant les rapports ? Vous avez tendance à atteindre rapidement l’éjaculation et souhaitez avoir davantage de contrôle et de résistance ?
                </p>
                <p>
                  <strong className="text-white font-semibold">AK 47 – Dûre au lit</strong> est un produit naturel pour une meilleure endurance sexuelle et une expérience intime plus satisfaisante.
                </p>
              </div>
            </div>

            {/* PROMO PRICE CARD */}
            <div className="bg-[#0B2217] border border-[#D4A843]/40 rounded-2xl p-5 sm:p-7 shadow-2xl space-y-5 relative overflow-hidden">
              
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-400 block">
                  Prix Promotionnel d'Exception
                </span>

                <div className="flex flex-wrap items-baseline gap-4">
                  {/* Big Promo Price */}
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl sm:text-5xl font-serif font-black text-[#D4A843]">
                      8 000 F
                    </span>
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-[#D4A843]">
                      CFA
                    </span>
                  </div>

                  {/* Strikethrough Original Price */}
                  <div className="flex items-baseline gap-1 text-gray-400 line-through text-lg font-medium">
                    <span>15 000 F</span>
                    <span>CFA</span>
                  </div>

                  {/* Savings Red Pill Badge */}
                  <span className="bg-red-600 text-white font-bold text-xs px-3 py-1 rounded-full shadow-md">
                    Économisez 7 000 F CFA
                  </span>
                </div>
              </div>

              {/* Demand & Urgency Stock Bar */}
              <div className="space-y-2 pt-2 border-t border-emerald-900/80">
                <div className="flex items-center justify-between text-xs text-amber-200/90 font-medium">
                  <span className="flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-amber-400" />
                    <span>Forte demande — Stock promotionnel limité</span>
                  </span>
                  <span className="text-red-400 font-bold">Plus que 12 coffrets</span>
                </div>
                
                {/* Progress bar */}
                <div className="w-full bg-emerald-950 rounded-full h-2 overflow-hidden border border-emerald-800">
                  <div className="bg-gradient-to-r from-red-500 via-amber-500 to-emerald-400 h-full w-[82%] rounded-full animate-pulse" />
                </div>
              </div>

              {/* Big WhatsApp Order Button */}
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base sm:text-lg shadow-2xl transition-all transform hover:-translate-y-0.5 touch-active border border-[#25D366]"
                >
                  <MessageCircle className="w-6 h-6 fill-white shrink-0" />
                  <span>Commander sur WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* DÉTAILS & PUBLIC CIBLE : EN PLEINE LARGEUR EN BAS (LIGNE ROUGE CAPTURE 14) */}
        {/* ========================================================================= */}
        <div className="mb-20 sm:mb-28">
          <div className="rounded-3xl border border-emerald-800/60 bg-gradient-to-br from-[#0B2217]/95 via-[#081d13]/90 to-[#071710] p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden group hover:border-[#D4A843]/50 transition-all duration-300">
            {/* Liseré supérieur dégradé or & émeraude */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 via-[#D4A843] to-amber-500" />
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#D4A843] via-amber-500 to-emerald-500 hidden sm:block" />

            <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
              {/* Colonne gauche : Titre */}
              <div className="lg:w-1/3 shrink-0">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-snug">
                  À qui s’adresse <span className="text-[#D4A843] italic">AK 47</span> ?
                </h3>
              </div>

              {/* Colonne droite : Texte descriptif et Micro-puces */}
              <div className="lg:w-2/3 space-y-4">
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-light">
                  Il est destiné aux hommes qui souhaitent améliorer leur endurance sexuelle et prolonger leur durée au lit. Il s’adresse particulièrement aux hommes qui ont le sentiment de ne pas tenir suffisamment longtemps pendant les rapports sexuels et qui recherchent davantage de contrôle, d’endurance et de confiance dans leur vie sexuelle.
                </p>

                {/* Micro-puces visuelles d'accroche */}
                <div className="flex flex-wrap gap-2.5 pt-1 text-xs">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-950/90 border border-emerald-700/60 text-emerald-300 font-medium shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Endurance prolongée
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-950/90 border border-amber-700/60 text-amber-300 font-medium shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    Maîtrise du rythme
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0B2217] border border-[#D4A843]/50 text-[#E6C875] font-medium shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D4A843]" />
                    Confiance au lit retrouvée
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 2 (DEUXIÈME SECTION) : POURQUOI CHOISIR AK 47 ?                  */}
        {/* ========================================================================= */}
        <div>
          {/* Header Tag & Title */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#D4A843] block">
              PERFORMANCE & ENDURANCE MASCULINE
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
              Pourquoi choisir <span className="italic text-[#D4A843]">AK 47</span> ?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
              Une formule tonique issue des secrets de phytothérapie traditionnelle pour transformer votre vie intime.
            </p>
          </div>

          {/* 4 Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureCards.map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#0B2217] rounded-2xl border border-emerald-800/50 p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-xl hover:border-[#D4A843]/50 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    {/* Icon Frame */}
                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center ${card.iconBg}`}>
                      <IconComponent className={`w-5 h-5 ${card.iconColor}`} />
                    </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-serif font-bold text-white tracking-wide">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Footer Check Badge */}
                <div className="pt-3 border-t border-emerald-900/80">
                  <span className={`text-xs font-semibold ${card.badgeColor}`}>
                    {card.badgeText}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        </div>

      </Container>

      {/* LIGHTBOX MODAL */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center p-2">
            <Image
              src="/img/ak47_product.png"
              alt="AK 47 Phyto Santé – Dûre au lit"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
