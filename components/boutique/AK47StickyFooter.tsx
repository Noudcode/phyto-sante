"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, ShoppingBag, ArrowUp } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export default function AK47StickyFooter() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky footer after scrolling past hero section (300px)
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  const orderMessage = `Bonjour Phyto Santé, je souhaite commander le produit AK 47 – Dûre au lit (15 000 FCFA).`;
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(orderMessage)}`;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-[#071710]/95 backdrop-blur-xl border-t border-[#D4A843]/30 p-3 sm:py-3.5 shadow-2xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Left: Product & Price Info */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex flex-col">
            <span className="text-[10px] text-[#D4A843] uppercase tracking-wider font-semibold">
              AK 47 – Dûre au lit
            </span>
            <span className="text-xs text-gray-300">Plus d'endurance & de contrôle</span>
          </div>

          <div className="flex flex-col pl-1 sm:border-l sm:border-gray-700 sm:pl-3">
            <span className="text-[9px] text-gray-400 uppercase font-medium">Prix Promo</span>
            <div className="flex items-baseline gap-1">
              <span className="text-lg sm:text-xl font-serif font-bold text-white">8 000</span>
              <span className="text-xs font-bold text-[#D4A843]">FCFA</span>
              <span className="hidden sm:inline text-[10px] text-gray-400 line-through">15 000 FCFA</span>
            </div>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Back to Shop Link */}
          <Link
            href="/boutique"
            className="inline-flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/15 transition-all touch-active"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#D4A843]" />
            <span className="hidden sm:inline">Boutique</span>
          </Link>

          {/* Primary WhatsApp Order Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold shadow-xl transition-all touch-active"
          >
            <MessageCircle className="w-4 h-4 fill-white shrink-0" />
            <span>Commander sur WhatsApp</span>
          </a>

          {/* Scroll to top button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Retour en haut"
            className="hidden sm:flex p-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white border border-white/10 transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
