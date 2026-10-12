"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, MessageCircle, ShoppingBag } from "lucide-react";
import PhytoSanteLogo from "@/components/ui/PhytoSanteLogo";
import { siteConfig } from "@/data/site-config";

export default function AK47TopNav() {
  const orderMessage = `Bonjour Phyto Santé, je souhaite commander le produit : AK 47 – Dûre au lit (Offre promo : 15 000 FCFA).`;
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(orderMessage)}`;

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#071710]/90 backdrop-blur-xl border-b border-[#D4A843]/20 py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Return to Shop Button */}
        <Link
          href="/boutique"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-[#1B4332] text-white hover:text-[#D4A843] text-xs sm:text-sm font-semibold border border-white/15 transition-all touch-active group"
        >
          <ArrowLeft className="w-4 h-4 text-[#D4A843] group-hover:-translate-x-1 transition-transform" />
          <span>Boutique</span>
        </Link>

        {/* Center: Official Logo */}
        <div className="scale-90 sm:scale-100">
          <PhytoSanteLogo subtitle="Édition Spéciale AK 47" variant="light" />
        </div>

        {/* Right: WhatsApp Quick Order Button */}
        <div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-lg transition-all touch-active border border-[#25D366]"
          >
            <MessageCircle className="w-4 h-4 fill-current shrink-0" />
            <span className="hidden sm:inline">Commander sur WhatsApp</span>
            <span className="sm:hidden">Commander</span>
          </a>
        </div>
      </div>
    </header>
  );
}
