"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { 
  whatsappScreenshots, 
  audioTestimonials, 
  WhatsAppScreenshotTestimonial 
} from "@/data/testimonials";
import WhatsAppScreenshotCard from "@/components/testimonials/WhatsAppScreenshotCard";
import AudioPlayerCard from "@/components/testimonials/AudioPlayerCard";
import ScreenshotLightboxModal from "@/components/testimonials/ScreenshotLightboxModal";
import { 
  MessageSquare, 
  Mic, 
  ShieldCheck, 
  Sparkles, 
  Filter, 
  CheckCircle2, 
  Send,
  Star,
  Award
} from "lucide-react";

export default function TemoignagesPage() {
  const [activeTab, setActiveTab] = useState<"all" | "whatsapp" | "audio">("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalScreenshot, setActiveModalScreenshot] = useState<WhatsAppScreenshotTestimonial | null>(null);

  // Extract unique categories
  const categories = ["all", "Santé Naturelle", "Protection Spirituelle", "Santé Féminine", "Rhumatisme & Articulations", "Purification & Énergie"];

  // Filter WhatsApp screenshots
  const filteredScreenshots = whatsappScreenshots.filter((item) => {
    if (activeTab === "audio") return false;
    if (selectedCategory !== "all" && item.category !== selectedCategory) return false;
    return true;
  });

  // Filter Audios
  const filteredAudios = audioTestimonials.filter((item) => {
    if (activeTab === "whatsapp") return false;
    if (selectedCategory !== "all" && item.category !== selectedCategory) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-gray-900 pt-24 pb-20">
      {/* Hero Header */}
      <section className="relative py-20 bg-gradient-to-b from-[#112219] via-[#1B4332] to-[#112219] text-white overflow-hidden mb-16">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#D4A843]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#25D366]/10 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-xs sm:text-sm font-medium mb-6 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              Preuves Authentiques & Récits de Guérison
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Témoignages & <span className="gold-gradient-text font-serif italic">Preuves de Résultats</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-10">
              Découvrez en toute transparence les captures d&apos;écran WhatsApp réelles et les messages vocaux enregistrés par nos consultants au Burkina Faso et à l&apos;international.
            </p>

            {/* Stats Counter Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl glass-panel-dark border border-[#D4A843]/30 max-w-4xl mx-auto shadow-2xl">
              <div className="text-center border-r border-white/10 last:border-r-0 p-2">
                <div className="text-2xl sm:text-3xl font-bold font-serif text-gold-light">98%</div>
                <div className="text-xs text-gray-300">Satisfaction Patients</div>
              </div>
              <div className="text-center border-r border-white/10 last:border-r-0 p-2">
                <div className="text-2xl sm:text-3xl font-bold font-serif text-[#25D366]">500+</div>
                <div className="text-xs text-gray-300">Cas Résolus en Afrique</div>
              </div>
              <div className="text-center border-r border-white/10 last:border-r-0 p-2">
                <div className="text-2xl sm:text-3xl font-bold font-serif text-gold-light">5/5</div>
                <div className="text-xs text-gray-300">Captures WhatsApp certifiées</div>
              </div>
              <div className="text-center p-2">
                <div className="text-2xl sm:text-3xl font-bold font-serif text-emerald-400">100%</div>
                <div className="text-xs text-gray-300">Secrets Naturels Adayé</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Area */}
      <Container>
        {/* Navigation Tabs & Filters */}
        <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          {/* Main Type Tabs */}
          <div className="flex items-center gap-2 p-1.5 bg-[#FAF8F5] rounded-2xl border border-gray-200/80 w-full md:w-auto overflow-x-auto">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                activeTab === "all"
                  ? "bg-[#1B4332] text-white shadow-md"
                  : "text-gray-600 hover:text-[#1B4332]"
              }`}
            >
              Tous les témoignages ({whatsappScreenshots.length + audioTestimonials.length})
            </button>

            <button
              onClick={() => setActiveTab("whatsapp")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                activeTab === "whatsapp"
                  ? "bg-[#25D366] text-black shadow-md"
                  : "text-gray-600 hover:text-[#25D366]"
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              Captures WhatsApp ({whatsappScreenshots.length})
            </button>

            <button
              onClick={() => setActiveTab("audio")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                activeTab === "audio"
                  ? "bg-[#B8860B] text-white shadow-md"
                  : "text-gray-600 hover:text-[#B8860B]"
              }`}
            >
              <Mic className="w-4 h-4" />
              Témoignages Vocaux ({audioTestimonials.length})
            </button>
          </div>

          {/* Category Dropdown/Selector */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Filter className="w-4 h-4 text-gray-500" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full md:w-auto px-4 py-2.5 rounded-xl border border-gray-200 bg-[#FAF8F5] text-xs sm:text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
            >
              <option value="all">Toutes les catégories de soin</option>
              {categories.filter(c => c !== "all").map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Section 1: Captures WhatsApp Screenshots */}
        {(activeTab === "all" || activeTab === "whatsapp") && (
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B4332]">
                    Captures d&apos;Écran WhatsApp ({whatsappScreenshots.length} Preuves)
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Messages authentiques reçus sur le WhatsApp officiel d&apos;Adayé Phyto Santé
                  </p>
                </div>
              </div>
            </div>

            {filteredScreenshots.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredScreenshots.map((item) => (
                  <WhatsAppScreenshotCard
                    key={item.id}
                    testimonial={item}
                    onOpenModal={(t) => setActiveModalScreenshot(t)}
                  />
                ))}
              </div>
            ) : (
              <div className="p-8 text-center bg-gray-50 rounded-2xl border border-gray-200 text-gray-500 text-sm">
                Aucune capture d&apos;écran trouvée pour cette catégorie.
              </div>
            )}
          </div>
        )}

        {/* Section 2: Audio Voice Testimonials */}
        {(activeTab === "all" || activeTab === "audio") && (
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#B8860B]/10 flex items-center justify-center text-gold-antique">
                  <Mic className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B4332]">
                    Témoignages Vocaux Audio ({audioTestimonials.length} Enregistrements)
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Écoutez directement les vocaux audio envoyés par nos consultants reconnaissants
                  </p>
                </div>
              </div>
            </div>

            {filteredAudios.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredAudios.map((item) => (
                  <AudioPlayerCard key={item.id} testimonial={item} />
                ))}
              </div>
            ) : (
              <div className="p-8 text-center bg-gray-50 rounded-2xl border border-gray-200 text-gray-500 text-sm">
                Aucun témoignage vocal trouvé pour cette catégorie.
              </div>
            )}
          </div>
        )}

        {/* Call to Action Section: Submit Your Own Testimonial */}
        <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#1B4332] via-[#2D6A4F] to-[#112219] text-white shadow-2xl overflow-hidden border border-[#D4A843]/30">
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-[#D4A843]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs font-semibold mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Votre avis compte pour nous
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-4">
                Vous avez suivi un traitement Phyto Santé ?
              </h3>

              <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl font-light">
                Partagez votre histoire ou votre message vocal directement avec Prince Adayé sur WhatsApp. Votre témoignage aide d&apos;autres personnes à retrouver la santé et l&apos;espoir.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  Anonymat garanti sur demande
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  Conseils de suivi offerts
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-stretch sm:items-center lg:items-end">
              <a
                href="https://wa.me/22900000000?text=Bonjour%20Prince%20Aday%C3%A9%2C%20je%20souhaite%20vous%20envoyer%20mon%20t%C3%A9moignage%20suite%20%C3%A0%20mon%20traitement."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-base transition-all duration-300 shadow-xl shadow-[#25D366]/20 hover:scale-[1.03]"
              >
                <Send className="w-5 h-5" />
                <span>Envoyer mon témoignage sur WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </Container>

      {/* Lightbox Modal for Full Screenshot View */}
      <ScreenshotLightboxModal
        screenshot={activeModalScreenshot}
        onClose={() => setActiveModalScreenshot(null)}
      />
    </div>
  );
}
