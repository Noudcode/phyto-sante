import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function CTASection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-[#0A1F16]">
      {/* Background Foliage Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta_bg.jpg"
          alt="Bien-être naturel Phyto Santé"
          fill
          className="object-cover opacity-30 filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F16]/90 via-[#0A1F16]/75 to-[#0A1F16]/90" />
      </div>

      <Container className="relative z-10 text-center text-white">
        <AnimateOnScroll animation="fade-up">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold text-[#D4A843] block">
              Accompagnement Sur-Mesure
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Votre bien-être mérite une attention particulière.
            </h2>

            <p className="text-base sm:text-lg text-gray-200 font-light leading-relaxed max-w-2xl mx-auto">
              Vous souhaitez en savoir plus sur nos produits naturels, nos services ou notre accompagnement personnalisé ? Échangez directement avec notre équipe en toute discrétion.
            </p>

            <div className="pt-6">
              <WhatsAppButton
                variant="primary"
                size="lg"
                label="Échanger avec Phyto Santé sur WhatsApp"
                className="shadow-2xl hover:scale-105"
              />
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
