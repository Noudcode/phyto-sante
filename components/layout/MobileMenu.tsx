"use client";

import React from "react";
import Link from "next/link";
import { X, MessageCircle, Phone, Sparkles, ChevronRight } from "lucide-react";
import { navItems } from "@/data/navigation";
import { siteConfig } from "@/data/site-config";
import PhytoSanteLogo from "@/components/ui/PhytoSanteLogo";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activePath: string;
}

export default function MobileMenu({
  isOpen,
  onClose,
  activePath,
}: MobileMenuProps) {
  if (!isOpen) return null;

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#0A1F16] text-white transition-all duration-300 overflow-y-auto">
      {/* Menu Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#D4A843]/25 sticky top-0 bg-[#0A1F16] z-10 shadow-md">
        <PhytoSanteLogo subtitle="Cabinet de tous" variant="light" onClick={onClose} />
        <button
          onClick={onClose}
          aria-label="Fermer le menu"
          className="p-2.5 text-[#D4A843] hover:text-white bg-white/10 rounded-full border border-[#D4A843]/40 transition-all touch-active"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Nav Links */}
      <div className="flex-1 px-6 py-8 space-y-3 bg-[#0A1F16]">
        <div className="text-xs uppercase tracking-[0.25em] font-bold text-[#D4A843] mb-4">
          Navigation Principale
        </div>

        {navItems.map((item) => {
          const isActive = activePath === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`flex items-center justify-between py-4 px-5 rounded-xl transition-all text-lg font-serif ${
                isActive
                  ? "bg-[#1B4332] text-[#D4A843] font-bold border-2 border-[#D4A843]/50 shadow-lg"
                  : "text-white font-medium hover:text-[#D4A843] hover:bg-white/10 border border-white/10"
              }`}
            >
              <span>{item.label}</span>
              <ChevronRight className={`w-5 h-5 ${isActive ? "text-[#D4A843]" : "text-gray-300"}`} />
            </Link>
          );
        })}
      </div>

      {/* Menu Footer CTA */}
      <div className="p-6 border-t border-[#D4A843]/25 bg-[#0A1F16] space-y-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 rounded-xl font-bold text-sm shadow-xl transition-all touch-active"
        >
          <MessageCircle className="w-5 h-5 fill-current shrink-0" />
          <span>Nous contacter sur WhatsApp</span>
        </a>

        <a
          href={`tel:${siteConfig.contact.phone}`}
          className="w-full flex items-center justify-center gap-2 bg-white/10 text-white hover:bg-white/20 py-3 rounded-xl font-medium text-xs border border-white/20 transition-all"
        >
          <Phone className="w-4 h-4 text-[#D4A843]" />
          <span>Appel Direct ({siteConfig.contact.phone})</span>
        </a>

        <p className="text-center text-[11px] text-gray-300 pt-2 italic">
          {siteConfig.tagline}
        </p>
      </div>
    </div>
  );
}
