"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, ShoppingBag, ArrowUp } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export default function AK47StickyFooter() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky footer after scrolling past hero section (250px)
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const orderMessage = `Bonjour Phyto Santé, je souhaite commander le produit : AK 47 – Dûre au lit (Offre Promo : 8 000 FCFA). Merci de m'indiquer la démarche pour la livraison rapide et discrète.`;
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(orderMessage)}`;

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-40 bg-[#071710]/95 backdrop-blur-xl border-t border-[#D4A843]/30 px-3 py-2.5 sm:px-6 sm:py-3.5 pb-[max(0.65rem,env(safe-area-inset-bottom))] shadow-2xl transition-all duration-300 ${
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2.5 sm:gap-4">
        
        {/* Left: Product & Price Info */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="hidden md:flex flex-col">
            <span className="text-[10px] text-[#D4A843] uppercase tracking-wider font-semibold">
              AK 47 – Dûre au lit
            </span>
            <span className="text-xs text-gray-300">Plus d'endurance & de contrôle</span>
          </div>

          <div className="flex flex-col md:border-l md:border-gray-700 md:pl-3">
            <span className="text-[8px] sm:text-[9px] text-gray-400 uppercase font-medium leading-none mb-0.5">
              Prix Promo
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-base sm:text-xl font-serif font-black text-white">8 000</span>
              <span className="text-[10px] sm:text-xs font-bold text-[#D4A843]">FCFA</span>
            </div>
            <div className="flex items-center gap-1.5 -mt-0.5">
              <span className="text-[9px] sm:text-[10px] text-gray-400 line-through">15 000 F</span>
              <span className="text-[8px] bg-red-600/90 text-white font-bold px-1.5 py-0.2 rounded-full uppercase tracking-tighter md:hidden">
                -47%
              </span>
            </div>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-3 flex-1 sm:flex-initial justify-end">
          
          {/* Back to Shop Link */}
          <Link
            href="/boutique"
            title="Retour à la boutique"
            className="shrink-0 inline-flex items-center gap-1.5 p-2.5 sm:px-4 sm:py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/15 transition-all touch-active"
          >
            <ShoppingBag className="w-4 h-4 text-[#D4A843]" />
            <span className="hidden md:inline">Boutique</span>
          </Link>

          {/* Primary WhatsApp Order Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-6 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold shadow-xl transition-all touch-active active:scale-95 whitespace-nowrap min-w-0"
          >
            <MessageCircle className="w-4 h-4 fill-white shrink-0" />
            <span className="xs:hidden">Commander</span>
            <span className="hidden xs:inline sm:hidden">Commander (8 000 F)</span>
            <span className="hidden sm:inline">Commander sur WhatsApp</span>
          </a>

          {/* Scroll to top button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Retour en haut"
            className="hidden lg:flex p-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white border border-white/10 transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
