import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import DomainCard from "./DomainCard";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { domainsData, commitmentStatement } from "@/data/domains";
import { Quote } from "lucide-react";

export default function DomainsSection() {
  return (
    <section id="domaines" className="py-20 lg:py-28 bg-[#F3EDE4] relative">
      <Container>
        {/* Section Header */}
        <SectionTitle
          subtitle="Expertise & Accompagnement"
          title="Nos domaines d'intervention"
          description="Phyto Santé vous accompagne avec des solutions naturelles et une approche personnalisée, dans le respect de vos besoins, de votre intimité et de vos convictions."
          centered
          className="mb-16"
        />

        {/* 3 Domain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {domainsData.map((domain, index) => (
            <DomainCard key={domain.id} domain={domain} index={index} />
          ))}
        </div>

        {/* Official Commitment Banner (Full width dark green with mortar background) */}
        <AnimateOnScroll animation="fade-up">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#B8860B]/40 bg-[#0A1F16]">
            {/* Background Image with Dark Overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/hero_bg.jpg"
                alt="Engagement Phyto Santé"
                fill
                className="object-cover opacity-25 filter brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F16] via-[#0A1F16]/90 to-[#0A1F16]" />
            </div>

            {/* Banner Content */}
            <div className="relative z-10 p-8 sm:p-12 md:p-16 text-center max-w-4xl mx-auto space-y-6">
              <div className="w-14 h-14 rounded-full bg-[#1B4332] border border-[#B8860B] flex items-center justify-center mx-auto text-[#D4A843] shadow-lg">
                <Quote className="w-7 h-7" />
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white leading-tight">
                {commitmentStatement.quote}
              </h3>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto font-light">
                {commitmentStatement.description}
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
