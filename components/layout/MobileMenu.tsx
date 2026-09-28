"use client";

import React from "react";
import Link from "next/link";
import { X, MessageCircle } from "lucide-react";
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
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#0A1F16]/95 backdrop-blur-xl transition-all duration-300">
      {/* Menu Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-[#D4A843]/20">
        <PhytoSanteLogo subtitle="Cabinet de tous" variant="light" onClick={onClose} />
        <button
          onClick={onClose}
          aria-label="Fermer le menu"
          className="p-2 text-[#D4A843] hover:text-white rounded-lg transition-colors"
        >
          <X className="w-7 h-7" />
        </button>
      </div>

      {/* Nav Links */}
      <div className="flex-1 flex flex-col justify-center px-8 space-y-6">
        {navItems.map((item) => {
          const isActive = activePath === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`text-2xl font-serif tracking-wide transition-all ${
                isActive
                  ? "text-[#D4A843] font-bold translate-x-2"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      {/* Menu Footer CTA */}
      <div className="p-8 border-t border-[#D4A843]/20 space-y-4">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 rounded-full font-medium shadow-lg transition-all"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span>Nous contacter sur WhatsApp</span>
        </a>
        <p className="text-center text-xs text-gray-400">
          {siteConfig.tagline}
        </p>
      </div>
    </div>
  );
}
