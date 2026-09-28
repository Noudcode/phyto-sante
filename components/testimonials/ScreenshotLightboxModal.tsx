"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { WhatsAppScreenshotTestimonial } from "@/data/testimonials";
import { X, ZoomIn, ShieldCheck, Calendar, MapPin, CheckCheck, Share2 } from "lucide-react";

interface LightboxProps {
  screenshot: WhatsAppScreenshotTestimonial | null;
  onClose: () => void;
}

export default function ScreenshotLightboxModal({ screenshot, onClose }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (screenshot) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [screenshot, onClose]);

  if (!screenshot) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-[#112219] rounded-3xl border border-[#D4A843]/40 shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-gold-antique hover:text-[#112219] flex items-center justify-center transition-colors shadow-lg focus:outline-none"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Image Container */}
        <div className="md:w-1/2 bg-black/40 p-4 sm:p-6 flex items-center justify-center relative min-h-[350px] md:min-h-[500px]">
          <div className="relative w-full h-full max-h-[480px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
            <Image
              src={screenshot.imagePath}
              alt={`Capture WhatsApp de ${screenshot.name}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* Right Side: Message Details & Context */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            {/* Header Badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs font-semibold">
                <CheckCheck className="w-4 h-4" />
                Capture WhatsApp Certifiée
              </span>
              <span className="text-xs text-gold-light bg-gold-antique/10 px-3 py-1 rounded-full border border-gold-antique/30 font-medium">
                {screenshot.category}
              </span>
            </div>

            <h3 className="text-2xl font-bold font-serif text-white mb-2">
              {screenshot.name}
            </h3>

            <div className="flex items-center gap-4 text-xs text-gray-300 mb-6">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-gold-light" />
                {screenshot.location}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-gold-light" />
                {screenshot.date} à {screenshot.timestamp}
              </span>
            </div>

            <div className="bg-[#1B4332]/60 rounded-2xl p-5 border border-white/10 mb-6 relative">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Retranscription du message WhatsApp :
              </div>
              <p className="text-gray-100 text-sm sm:text-base leading-relaxed font-sans italic">
                &ldquo;{screenshot.fullMessage}&rdquo;
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs text-gray-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Garantie de non-altération du message original</span>
            </div>

            <a
              href={`https://wa.me/22900000000?text=${encodeURIComponent(`Bonjour Prince Adayé, j'ai vu le témoignage de ${screenshot.name} et je voudrais des conseils pour la même situation.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-sm transition-all shadow-lg shadow-[#25D366]/20"
            >
              <Share2 className="w-4 h-4" />
              <span>Demander conseil pour le même traitement</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
