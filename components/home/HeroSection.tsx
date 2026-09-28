import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { Leaf } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0A1F16]">
      {/* Background Image with Dark Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_bg.jpg"
          alt="Solutions Naturelles Phyto Santé"
          fill
          priority
          className="object-cover object-center scale-105 filter brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F16] via-[#0A1F16]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F16] via-transparent to-[#0A1F16]/60" />
      </div>

      <Container className="relative z-10 text-white">
        <div className="max-w-3xl space-y-8">
          <AnimateOnScroll animation="fade-down" delay={100}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B4332]/80 border border-[#B8860B]/40 backdrop-blur-md">
              <Leaf className="w-4 h-4 text-[#D4A843]" />
              <span className="text-xs sm:text-sm uppercase tracking-[0.2em] font-medium text-[#D4A843]">
                Cabinet Phyto Santé
              </span>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={250}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight leading-[1.1]">
              <span className="gold-gradient-text block">PHYTO SANTÉ</span>
              <span className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal block mt-2">
                {siteConfig.tagline}
              </span>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={400}>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed font-light max-w-2xl">
              {siteConfig.description}
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={550}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href="#domaines"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-[#FF6B00] via-[#F4511E] to-[#D83600] hover:from-[#E65C00] hover:to-[#C02E00] text-white border border-[#FF6B00]/40 text-base font-semibold transition-all duration-300 transform hover:-translate-y-0.5 shadow-xl shadow-[#FF6B00]/25 hover:shadow-[#FF6B00]/40"
              >
                Découvrir Phyto Santé
              </a>
              <WhatsAppButton
                variant="primary"
                size="lg"
                label="Notre WhatsApp"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
