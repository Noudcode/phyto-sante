import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { siteConfig } from "@/data/site-config";
import { Award, ShieldCheck, HeartHandshake } from "lucide-react";

export default function FounderSection() {
  const { founder } = siteConfig;

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait of Prince ADAYE */}
          <div className="lg:col-span-5">
            <AnimateOnScroll animation="slide-right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#B8860B]/30 group">
                <div className="aspect-[3/4] relative">
                  <Image
                    src="/images/prince_adaye.png"
                    alt={founder.name}
                    fill
                    priority
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F16]/90 via-transparent to-transparent opacity-60" />
                </div>

                {/* Badge Overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#0A1F16]/85 backdrop-blur-md p-4 rounded-xl border border-[#B8860B]/40 text-center">
                  <p className="font-serif text-xl font-bold text-white tracking-wide">
                    {founder.name}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-[#D4A843]">
                    {founder.title}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right Column: Bio & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <AnimateOnScroll animation="fade-up">
              <span className="text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold text-[#B8860B] block">
                Qui est celui derrière Phyto Santé ?
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1B4332] tracking-tight">
                {founder.name}
              </h2>
              <p className="text-base font-serif italic text-[#B8860B]">
                {founder.title}
              </p>
              <div className="h-0.5 w-16 bg-[#B8860B] my-3 rounded-full" />
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={200}>
              <p className="text-base sm:text-lg text-[#2C2C2C] leading-relaxed">
                {founder.bio}
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={350}>
              <p className="text-base text-[#6B6B6B] leading-relaxed">
                {founder.lineage}
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={500}>
              <p className="text-base text-[#6B6B6B] leading-relaxed">
                {founder.expertise}
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={650}>
              <p className="text-base text-[#6B6B6B] leading-relaxed">
                {founder.approach}
              </p>
            </AnimateOnScroll>

            {/* Official Founder Quote Box */}
            <AnimateOnScroll animation="fade-up" delay={800}>
              <div className="mt-8 p-6 rounded-2xl bg-[#F3EDE4] border-l-4 border-[#B8860B] shadow-md space-y-2">
                <p className="font-serif italic text-lg sm:text-xl text-[#1B4332] font-semibold">
                  « {founder.quote} »
                </p>
                <p className="text-xs uppercase tracking-widest text-[#B8860B] font-bold">
                  — {founder.name}
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </Container>
    </section>
  );
}
