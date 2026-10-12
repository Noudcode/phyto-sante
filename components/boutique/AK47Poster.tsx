"use client";

import React, { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import {
  ShieldCheck,
  Maximize2,
  MessageCircle,
  PhoneCall,
  ExternalLink,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";

export default function AK47Poster() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const orderMessage = `Bonjour Phyto Santé, je souhaite commander le produit : AK 47 – Dûre au lit (Offre promo : 8 000 FCFA). Merci de m'indiquer la démarche pour la livraison rapide et discrète.`;
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(orderMessage)}`;

  return (
    <section className="bg-[#071710] text-white py-16 sm:py-24 border-t border-[#D4A843]/20 relative overflow-hidden">
      
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D4A843]/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: OFFICIAL POSTER IMAGE FRAME (5 COLS ON LG) */}
          <div className="lg:col-span-5">
            <div className="bg-[#0B2217] rounded-3xl border-2 border-emerald-800/60 p-3 sm:p-4 shadow-2xl space-y-3 group">
              
              {/* Poster Image Viewport */}
              <div 
                className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer bg-black/40 flex items-center justify-center"
                onClick={() => setIsLightboxOpen(true)}
              >
                <Image
                  src="/img/ak47_poster.png"
                  alt="Affiche Officielle Phyto Santé – AK 47"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Bottom Frame Trigger Button */}
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="w-full bg-[#071710] hover:bg-[#113123] text-white hover:text-[#D4A843] py-3 px-4 rounded-xl text-xs sm:text-sm font-bold border border-[#D4A843]/30 transition-all flex items-center justify-center gap-2 shadow-md touch-active"
              >
                <Maximize2 className="w-4 h-4 text-[#D4A843]" />
                <span>Voir le produit</span>
              </button>

            </div>
          </div>

          {/* RIGHT COLUMN: TEXT, AUTHENTICITY ALERT & BUTTONS (7 COLS ON LG) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Pill / Tag */}
            <div>
              <span className="text-[#D4A843] text-xs font-bold uppercase tracking-widest block">
                AK 47, plus fort au lit
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
              L’endurance et à la performance <span className="italic text-[#D4A843]">sexuelle masculine</span>
            </h2>

            {/* Sub-description */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
              Si vous trouvez que vous éjaculez trop rapidement ou que votre endurance n'est pas à la hauteur de vos attentes, <strong className="text-white font-semibold">AK 47</strong> est proposé pour vous accompagner vers plus de résistance, de contrôle et de confiance au lit.
            </p>

            {/* Authenticity Alert Card */}
            <div className="bg-[#0B2217] border border-[#D4A843]/30 rounded-2xl p-5 sm:p-6 space-y-2 shadow-xl">
              <div className="flex items-center gap-2 text-[#D4A843] font-bold text-sm sm:text-base">
                <ShieldCheck className="w-5 h-5 text-[#D4A843] shrink-0" />
                <span>Produit Authentique Phyto Santé</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                Attention aux imitations ! Commandez uniquement via notre canal WhatsApp officiel pour bénéficier du vrai produit AK 47 et de l'accompagnement personnalisé de Son Altesse Togbé ADAYE.
              </p>
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              {/* Button 1: Appel Téléphonique Direct (ouvre l'application d'appel sur smartphone) */}
              <a
                href={`tel:+${siteConfig.contact.whatsappNumber}`}
                className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#0B2217] hover:bg-[#113123] text-white hover:text-[#D4A843] font-bold text-xs uppercase tracking-wider border border-[#D4A843]/40 shadow-lg transition-all touch-active"
              >
                <PhoneCall className="w-4 h-4 text-[#D4A843]" />
                <span>APPELER DIRECTEMENT</span>
              </a>

              {/* Button 2: WhatsApp Order */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs uppercase tracking-wider shadow-xl transition-all touch-active"
              >
                <MessageCircle className="w-4.5 h-4.5 fill-black shrink-0" />
                <span>COMMANDER VIA WHATSAPP</span>
              </a>
            </div>

          </div>

        </div>
      </Container>

      {/* LIGHTBOX MODAL FOR FULL SCREEN POSTER */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="relative max-w-4xl max-h-[92vh] w-full h-full flex items-center justify-center p-2">
            <Image
              src="/img/ak47_poster.png"
              alt="Affiche Officielle Phyto Santé – AK 47 Grand Format"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
