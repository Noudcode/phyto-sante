"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { usePathname } from "next/navigation";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  // On product detail page, position floating button higher to avoid overlapping sticky mobile bar
  const isProductPage = pathname?.startsWith("/boutique/");

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Échanger avec Phyto Santé sur WhatsApp"
      className={`fixed right-4 sm:right-6 z-40 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3 sm:px-5 sm:py-3.5 rounded-full shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-300 transform hover:scale-105 active:scale-95 group ${
        isProductPage ? "bottom-20 sm:bottom-6" : "bottom-6"
      }`}
    >
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-current animate-bounce shrink-0" />
      <span className="hidden sm:inline font-bold text-xs sm:text-sm pr-1">
        WhatsApp Phyto Santé
      </span>
      <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300"></span>
      </span>
    </a>
  );
}
