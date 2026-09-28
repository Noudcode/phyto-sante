import React from "react";
import Link from "next/link";
import { Phone, MapPin, Clock, MessageCircle, Leaf, Facebook, Instagram, Youtube } from "lucide-react";
import Container from "@/components/ui/Container";
import { footerNavItems } from "@/data/navigation";
import { siteConfig } from "@/data/site-config";

import PhytoSanteLogo from "@/components/ui/PhytoSanteLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  return (
    <footer className="bg-[#1A1A1A] text-gray-300 border-t border-[#B8860B]/20 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          {/* Column 1: Logo & Vision */}
          <div className="space-y-4">
            <PhytoSanteLogo subtitle="Cabinet de tous" variant="light" />
            <p className="text-sm font-serif italic text-[#D4A843]">
              {siteConfig.tagline}
            </p>
            <p className="text-xs text-gray-400 leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-white tracking-wide border-b border-[#B8860B]/30 pb-2 inline-block">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#D4A843] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B] group-hover:scale-125 transition-transform" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-white tracking-wide border-b border-[#B8860B]/30 pb-2 inline-block">
              Contact
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D4A843] shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-[#D4A843] transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors"
                >
                  WhatsApp Phyto Santé
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4A843] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#D4A843] shrink-0" />
                <span>{siteConfig.contact.hours}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Socials & CTA */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-white tracking-wide border-b border-[#B8860B]/30 pb-2 inline-block">
              Suivez-nous
            </h3>
            <p className="text-xs text-gray-400">
              Restez informé de nos actualités et conseils naturels.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socials.facebook}
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#1B4332] border border-[#B8860B]/40 flex items-center justify-center text-white hover:bg-[#D4A843] hover:text-[#1A1A1A] transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.instagram}
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#1B4332] border border-[#B8860B]/40 flex items-center justify-center text-white hover:bg-[#D4A843] hover:text-[#1A1A1A] transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.youtube}
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-[#1B4332] border border-[#B8860B]/40 flex items-center justify-center text-white hover:bg-[#D4A843] hover:text-[#1A1A1A] transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 transition-transform"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {currentYear} Cabinet Phyto Santé. Tous droits réservés.</p>
          <div className="flex items-center space-x-6">
            <Link href="#" className="hover:text-[#D4A843] transition-colors">
              Mentions légales
            </Link>
            <Link href="#" className="hover:text-[#D4A843] transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="#" className="hover:text-[#D4A843] transition-colors">
              Conditions de vente
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
