"use client";

import React from "react";
import Image from "next/image";
import { WhatsAppScreenshotTestimonial } from "@/data/testimonials";
import { ZoomIn, MessageSquare, ShieldCheck, MapPin, Calendar } from "lucide-react";

interface CardProps {
  testimonial: WhatsAppScreenshotTestimonial;
  onOpenModal: (t: WhatsAppScreenshotTestimonial) => void;
}

export default function WhatsAppScreenshotCard({ testimonial, onOpenModal }: CardProps) {
  return (
    <div 
      className="group glass-panel-dark rounded-3xl overflow-hidden border border-[#D4A843]/20 hover:border-[#D4A843]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4A843]/10 flex flex-col justify-between"
    >
      {/* Top Preview Image Container */}
      <div 
        className="relative h-64 sm:h-72 w-full bg-black/40 cursor-pointer overflow-hidden"
        onClick={() => onOpenModal(testimonial)}
      >
        <Image
          src={testimonial.imagePath}
          alt={`Capture WhatsApp de ${testimonial.name}`}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Overlay hover effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#112219] via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <span className="px-3 py-1 rounded-full bg-[#25D366] text-black text-xs font-bold shadow-md flex items-center gap-1">
            <MessageSquare className="w-3.5 h-3.5" />
            WhatsApp
          </span>

          <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-gold-light text-xs font-medium border border-gold-light/30">
            {testimonial.category}
          </span>
        </div>

        {/* Hover Zoom Icon overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
          <div className="px-4 py-2.5 rounded-full bg-[#D4A843] text-[#112219] font-bold text-xs flex items-center gap-2 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <ZoomIn className="w-4 h-4" />
            <span>Agrandir la capture</span>
          </div>
        </div>
      </div>

      {/* Content Info */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold font-serif text-white group-hover:text-gold-light transition-colors">
              {testimonial.name}
            </h3>
            {testimonial.verified && (
              <span className="text-emerald-400" title="Vérifié">
                <ShieldCheck className="w-5 h-5" />
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-gold-light" />
              {testimonial.location}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-gold-light" />
              {testimonial.date}
            </span>
          </div>

          <p className="text-sm text-gray-300 italic line-clamp-3 mb-4 bg-white/5 p-3 rounded-xl border border-white/5">
            &ldquo;{testimonial.fullMessage}&rdquo;
          </p>
        </div>

        <button
          onClick={() => onOpenModal(testimonial)}
          className="w-full mt-2 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-[#D4A843]/20 border border-[#D4A843]/30 text-gold-light hover:text-white font-medium text-xs transition-all duration-300 flex items-center justify-center gap-2"
        >
          <ZoomIn className="w-4 h-4" />
          <span>Examiner la preuve en grand</span>
        </button>
      </div>
    </div>
  );
}
