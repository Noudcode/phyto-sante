"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, Leaf } from "lucide-react";
import { navItems } from "@/data/navigation";
import { siteConfig } from "@/data/site-config";
import MobileMenu from "./MobileMenu";

import PhytoSanteLogo from "@/components/ui/PhytoSanteLogo";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "glass-header shadow-2xl py-3"
            : "bg-gradient-to-b from-[#0A1F16]/90 via-[#0A1F16]/60 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo officiel Phyto Santé avec redirection vers l'accueil */}
            <PhytoSanteLogo subtitle="Cabinet de tous" variant="light" />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative text-sm font-medium tracking-wide transition-colors py-1 ${
                      isActive
                        ? "text-[#D4A843] font-semibold"
                        : "text-gray-200 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B8860B] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* WhatsApp CTA Pill Button */}
            <div className="hidden lg:block">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-[#25D366]/30 border border-[#25D366]"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Nous contacter</span>
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Ouvrir le menu"
              className="lg:hidden p-2 rounded-lg text-white hover:text-[#D4A843] transition-colors"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activePath={pathname}
      />
    </>
  );
}
