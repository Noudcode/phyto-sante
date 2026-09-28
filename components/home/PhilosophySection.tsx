import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { ArrowRight, Sparkles, Compass } from "lucide-react";

export default function PhilosophySection() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Subtle Gold Border Frame */}
          <div className="lg:col-span-5 relative">
            <AnimateOnScroll animation="slide-left">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group border-2 border-[#B8860B]/20">
                <div className="aspect-[4/5] relative">
                  <Image
                    src="/images/philosophy_img.jpg"
                    alt="Le monde invisible et le monde visible - Phyto Santé"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/50 via-transparent to-transparent" />
                </div>
              </div>
              {/* Decorative Accent Badge */}
              <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 bg-[#1B4332] text-white p-4 rounded-xl shadow-xl border border-[#B8860B]">
                <Sparkles className="w-6 h-6 text-[#D4A843]" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#D4A843]">Sagesse Ancestrale</p>
                  <p className="text-sm font-serif font-bold">L'Invisible & Le Visible</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right Column: Editorial Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <AnimateOnScroll animation="fade-up" delay={150}>
              <span className="text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold text-[#B8860B] block">
                Philosophie Phyto Santé
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1B4332] leading-tight">
                Le monde invisible et le monde visible
              </h2>
              <div className="h-0.5 w-16 bg-[#B8860B] my-4 rounded-full" />
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={300}>
              <p className="text-base sm:text-lg text-[#2C2C2C] leading-relaxed">
                La nature qui nous entoure est régie par des lois que nous appelons les lois de la nature. Ces lois établissent une frontière entre deux réalités : le monde visible et le monde invisible. Pourtant, ces deux mondes sont étroitement liés : ce qui se construit dans l’invisible finit toujours par trouver son expression dans le visible.
              </p>
            </AnimateOnScroll>

            {/* Highlighted Quote Box */}
            <AnimateOnScroll animation="fade-up" delay={450}>
              <div className="p-6 rounded-xl bg-[#F3EDE4] border-l-4 border-[#B8860B] shadow-sm my-6 space-y-2">
                <p className="font-serif italic text-base sm:text-lg text-[#1B4332] leading-relaxed">
                  « Il n’y a pas d’effet sans cause, tout comme il n’y a pas de cause sans effet. »
                </p>
                <p className="text-xs uppercase tracking-widest text-[#B8860B] font-semibold">
                  Enseignement & Sagesse Traditionnelle
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={600}>
              <p className="text-base text-[#6B6B6B] leading-relaxed">
                La pensée est invisible, mais sa réalisation devient visible. Si vous souhaitez réussir dans la vie, commencez par construire cette réussite dans votre monde intérieur.
              </p>
              <div className="mt-4 p-4 rounded-lg bg-[#1B4332]/5 border border-[#B8860B]/30 flex items-center gap-3">
                <Compass className="w-5 h-5 text-[#B8860B] shrink-0" />
                <p className="font-serif font-bold text-base sm:text-lg text-[#B8860B]">
                  Prenez soin de votre monde invisible. Personne n’est né pour souffrir.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={750}>
              <div className="pt-4">
                <Link
                  href="/philosophie"
                  className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#1B4332] hover:bg-[#B8860B] text-white text-base font-semibold shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 group"
                >
                  <span>En savoir plus</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </Container>
    </section>
  );
}

