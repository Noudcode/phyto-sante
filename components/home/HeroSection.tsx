import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { Leaf, Star, ShieldCheck, Truck } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-28 pb-14 sm:pt-36 sm:pb-20 overflow-hidden bg-[#0A1F16]">
      {/* Background Image with Dark Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_bg.jpg"
          alt="Solutions Naturelles Phyto Santé"
          fill
          priority
          className="object-cover object-center scale-105 filter brightness-90 sm:brightness-75 opacity-70 sm:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F16]/90 via-[#0A1F16]/65 to-[#0A1F16]/30 sm:from-[#0A1F16] sm:via-[#0A1F16]/85 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F16] via-transparent to-[#0A1F16]/60 sm:to-[#0A1F16]/70" />
      </div>

      <Container className="relative z-10 text-white">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          {/* Badge Top Header */}
          <AnimateOnScroll animation="fade-down" delay={100}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#1B4332]/90 border border-[#B8860B]/50 backdrop-blur-md shadow-lg">
              <Leaf className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4A843] shrink-0" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] font-bold text-[#D4A843]">
                Cabinet Phyto Santé
              </span>
            </div>
          </AnimateOnScroll>

          {/* Main Hero Headline */}
          <AnimateOnScroll animation="fade-up" delay={250}>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight leading-tight">
              <span className="gold-gradient-text block">PHYTO SANTÉ</span>
              <span className="text-white text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-normal block mt-2 text-balance">
                {siteConfig.tagline}
              </span>
            </h1>
          </AnimateOnScroll>

          {/* Subtitle Description */}
          <AnimateOnScroll animation="fade-up" delay={400}>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed font-light max-w-2xl">
              {siteConfig.description}
            </p>
          </AnimateOnScroll>

          {/* Action Buttons */}
          <AnimateOnScroll animation="fade-up" delay={550}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <a
                href="#domaines"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-[#FF6B00] via-[#F4511E] to-[#D83600] hover:from-[#E65C00] hover:to-[#C02E00] text-white border border-[#FF6B00]/40 text-base font-bold transition-all duration-300 transform active:scale-95 shadow-xl shadow-[#FF6B00]/25 text-center"
              >
                Découvrir nos soins
              </a>
              <WhatsAppButton
                variant="primary"
                size="lg"
                label="Notre WhatsApp Direct"
                className="w-full sm:w-auto"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
