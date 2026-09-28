"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { sliderTestimonials } from "@/data/testimonials";
import { 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  Star, 
  CheckCircle2, 
  MessageCircle, 
  ArrowRight,
  ShieldCheck,
  Sparkles
} from "lucide-react";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderTestimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? sliderTestimonials.length - 1 : prevIndex - 1
    );
  }, []);

  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoplay, nextSlide]);

  const currentTestimonial = sliderTestimonials[currentIndex];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#112219] via-[#1B4332] to-[#112219] text-white overflow-hidden">
      {/* Decorative background glow & shapes */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4A843]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2D6A4F]/20 rounded-full blur-3xl pointer-events-none" />
      
      {/* Delicate background pattern */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#D4A843 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <Container className="relative z-10">
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-antique/10 border border-gold-antique/30 text-gold-light text-xs sm:text-sm font-medium mb-4 tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-gold-light" />
            Témoignages & Récits de Guérison
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            Ce que nos patients <span className="gold-gradient-text font-serif italic">disent de nous</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Découvrez comment la phytothérapie traditionnelle et les secrets ancestraux de Prince Adayé ont transformé la santé et la sérénité de nos consultants.
          </p>
        </div>

        {/* Main Testimonial Slider Card */}
        <div 
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoplay(false)}
          onMouseLeave={() => setIsAutoplay(true)}
        >
          <div className="relative glass-panel-dark rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl border border-[#D4A843]/30 transition-all duration-500">
            {/* Top quote icon - parfaitement ronde */}
            <div className="absolute -top-6 right-8 sm:right-12 w-14 h-14 rounded-full bg-gradient-to-br from-[#D4A843] to-[#B8860B] flex items-center justify-center shadow-xl border-2 border-[#D4A843]">
              <Quote className="w-7 h-7 text-[#112219] fill-current" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Client Profile / Avatar Column */}
              <div className="md:col-span-4 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-8">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1.5 bg-gradient-to-tr from-[#D4A843] via-[#2D6A4F] to-[#B8860B] shadow-xl mb-4">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image 
                      src={currentTestimonial.avatar} 
                      alt={currentTestimonial.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 128px, 128px"
                    />
                  </div>
                  {currentTestimonial.verified && (
                    <div className="absolute bottom-1 right-1 bg-[#1B4332] text-[#25D366] rounded-full p-1 shadow-md border border-[#D4A843]/50" title="Consultant Vérifié">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold font-serif text-white mb-1">
                  {currentTestimonial.name}
                </h3>
                <p className="text-xs text-gold-light font-medium mb-1">
                  {currentTestimonial.location}
                </p>
                <p className="text-xs text-gray-400 mb-3">
                  {currentTestimonial.role}
                </p>

                {/* Category Pill */}
                <span className="inline-block px-3 py-1 rounded-full bg-[#2D6A4F]/40 border border-[#2D6A4F] text-emerald-300 text-xs font-semibold">
                  {currentTestimonial.category}
                </span>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < currentTestimonial.rating ? "text-amber-400 fill-amber-400" : "text-gray-600"}`} 
                    />
                  ))}
                </div>
              </div>

              {/* Testimonial Text & Details Column */}
              <div className="md:col-span-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-gold-light/80 font-mono">
                      Soin : <strong className="text-white font-sans">{currentTestimonial.treatment}</strong>
                    </span>
                    <span className="text-xs text-gray-400">{currentTestimonial.date}</span>
                  </div>

                  <blockquote className="text-lg sm:text-xl md:text-2xl font-serif italic text-amber-100/90 leading-relaxed mb-6">
                    &ldquo;{currentTestimonial.quote}&rdquo;
                  </blockquote>

                  <p className="text-sm text-gray-300 leading-relaxed font-light mb-6">
                    {currentTestimonial.fullReview}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Avis authentique et certifié par l&apos;équipe Phyto Santé</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slider Navigation & Pagination */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 px-2">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {sliderTestimonials.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex 
                      ? "w-8 bg-[#D4A843]" 
                      : "w-2.5 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Aller au témoignage ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev/Next buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full glass-panel-dark flex items-center justify-center text-white hover:text-gold-light hover:border-[#D4A843] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4A843]"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <span className="text-xs text-gray-400 font-mono px-2">
                {currentIndex + 1} / {sliderTestimonials.length}
              </span>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full glass-panel-dark flex items-center justify-center text-white hover:text-gold-light hover:border-[#D4A843] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4A843]"
                aria-label="Témoignage suivant"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Link to Dedicated Page with WhatsApp Screenshots & Audio */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#1B4332]/80 via-[#2D6A4F]/60 to-[#1B4332]/80 border border-[#D4A843]/30 shadow-xl max-w-xl mx-auto backdrop-blur-md">
            <div className="w-12 h-12 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] shrink-0 aspect-square shadow-inner">
              <MessageCircle className="w-6 h-6" />
            </div>

            <Link
              href="/temoignages"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4A843] to-[#B8860B] hover:from-[#E6C875] hover:to-[#D4A843] text-[#112219] font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-gold-antique/20 hover:scale-[1.02] whitespace-nowrap"
            >
              <span>Voir tous les témoignages WhatsApp & Vocaux</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
