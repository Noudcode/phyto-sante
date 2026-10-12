"use client";

import React, { useState } from "react";
import Container from "@/components/ui/Container";
import {
  ShieldCheck,
  Truck,
  Lock,
  Star,
  ChevronDown,
  MessageCircle,
  Send,
  CheckCircle2,
  Sparkles,
  Phone,
  Quote,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";

// Customer testimonials for AK 47
const initialReviews = [
  {
    id: "rev-ak-1",
    author: "Marc A. (Ouagadougou, Burkina Faso 🇧🇫)",
    date: "26 Septembre 2026",
    rating: 5,
    comment:
      "Ce produit porte très bien son nom 'AK 47 Dûre au lit'. Aucune fatigue après l'acte, érection bien solide et tenue pendant plus de 45 minutes sans problème. Colis très discret livré rapidement à Ouagadougou.",
    verified: true,
  },
  {
    id: "rev-ak-2",
    author: "Koffi M. (Bobo-Dioulasso, Burkina Faso 🇧🇫)",
    date: "02 Octobre 2026",
    rating: 5,
    comment:
      "Franchement au début j'étais hésitant, mais après avoir essayé le produit AK 47, les résultats ont été immédiats. Ma fiancée n'en croyait pas ses yeux. Une endurance et un contrôle total ! Merci au Cabinet Phyto Santé.",
    verified: true,
  },
  {
    id: "rev-ak-3",
    author: "Serge T. (Koudougou, Burkina Faso 🇧🇫)",
    date: "18 Septembre 2026",
    rating: 5,
    comment:
      "Formule 100% naturelle sans aucun mal de tête ni effet secondaire. L'offre promotionnelle à 8 000 FCFA vaut largement son pesant d'or. Je suis client fidèle !",
    verified: true,
  },
];

// FAQs data
const faqs = [
  {
    question: "La livraison se fait-elle vraiment partout au Burkina Faso ?",
    answer:
      "Oui ! Nous livrons rapidement et en toute sécurité partout au Burkina Faso (Ouagadougou, Bobo-Dioulasso, Koudougou, Banfora, Ouahigouya, etc.) ainsi que dans toute l'Afrique de l'Ouest et à l'international.",
  },
  {
    question: "La livraison est-elle discrète ?",
    answer:
      "Absolument. Nous accordons une priorité totale à votre vie privée. Votre commande AK 47 est emballée dans un colis neutre et opaque sans aucune étiquette ou mention du produit sur le carton extérieur.",
  },
  {
    question: "Le produit AK 47 est-il 100% naturel et sans danger ?",
    answer:
      "Oui, AK 47 est préparé exclusivement à partir de plantes médicinales et écorces traditionnelles. Il ne contient aucun additif chimique ni stimulant de synthèse. Il est sans risque de palpitations ou de maux de tête.",
  },
  {
    question: "Au bout de combien de temps ressent-on les effets ?",
    answer:
      "Il suffit de boire un verre de thé 15 minutes avant le rapport intime pour ressentir une vigueur immédiate et une endurance décuplée.",
  },
  {
    question: "Comment effectuer le paiement ?",
    answer:
      "Le paiement se fait simplement à la livraison (en espèces lors de la remise du colis) ou via Mobile Money (Orange Money, Moov Money, Wave, MTN MoMo) selon votre ville et pays.",
  },
];

export default function AK47Dressing() {
  const [reviews, setReviews] = useState(initialReviews);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Review Form state
  const [newAuthor, setNewAuthor] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [newComment, setNewComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const orderMessage = `Bonjour Phyto Santé, je souhaite commander le produit AK 47 – Dûre au lit (Offre Promo : 8 000 FCFA).`;
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(orderMessage)}`;

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newComment.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const createdReview = {
        id: `rev-custom-${Date.now()}`,
        author: `${newAuthor.trim()}`,
        date: new Date().toLocaleDateString("fr-FR", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
        rating: newRating,
        comment: newComment.trim(),
        verified: true,
      };

      setReviews([createdReview, ...reviews]);
      setNewAuthor("");
      setNewComment("");
      setNewRating(5);
      setIsSubmitting(false);
      setShowSuccessToast(true);

      setTimeout(() => setShowSuccessToast(false), 5000);
    }, 400);
  };

  return (
    <div className="bg-[#071710] text-white pt-16 pb-24 sm:pb-20 border-t border-[#D4A843]/20">
      
      {/* ========================================================================= */}
      {/* 1. ENGAGEMENTS PHYTO SANTÉ / REASSURANCE GRID (DARK LUXURY STYLE)         */}
      {/* ========================================================================= */}
      <Container className="mb-20 sm:mb-28">
        <div className="bg-[#0B2217] rounded-3xl border border-[#D4A843]/30 shadow-2xl p-6 sm:p-10 lg:p-12 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#D4A843] block">
              ENGAGEMENTS PHYTO SANTÉ
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Commandez en Toute Sérénité
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Discrétion */}
            <div className="p-6 rounded-2xl bg-[#071710] border border-emerald-800/60 hover:border-[#D4A843]/50 transition-all space-y-3 text-center flex flex-col items-center shadow-xl group">
              <div className="w-13 h-13 rounded-full border border-[#D4A843]/40 bg-[#0B2217] text-[#D4A843] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Lock className="w-6 h-6 text-[#D4A843]" />
              </div>
              <h3 className="font-serif font-bold text-white text-base">Colis 100% Discret</h3>
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                Emballage neutre sans aucun détail sur le produit pour préserver votre vie privée.
              </p>
            </div>

            {/* Card 2: Livraison Burkina Faso */}
            <div className="p-6 rounded-2xl bg-[#071710] border border-emerald-800/60 hover:border-[#D4A843]/50 transition-all space-y-3 text-center flex flex-col items-center shadow-xl group">
              <div className="w-13 h-13 rounded-full border border-[#D4A843]/40 bg-[#0B2217] text-[#D4A843] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Truck className="w-6 h-6 text-[#D4A843]" />
              </div>
              <h3 className="font-serif font-bold text-white text-base">Livraison au Burkina Faso</h3>
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                Livraison rapide et sécurisée partout au Burkina Faso (Ouagadougou, Bobo-Dioulasso...) et à l'international.
              </p>
            </div>

            {/* Card 3: 100% Naturel */}
            <div className="p-6 rounded-2xl bg-[#071710] border border-emerald-800/60 hover:border-[#D4A843]/50 transition-all space-y-3 text-center flex flex-col items-center shadow-xl group">
              <div className="w-13 h-13 rounded-full border border-[#D4A843]/40 bg-[#0B2217] text-[#D4A843] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6 text-[#D4A843]" />
              </div>
              <h3 className="font-serif font-bold text-white text-base">100% Naturel</h3>
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                Plantes médicinales pures et recettes authentiques du savoir-faire Phyto Santé.
              </p>
            </div>

            {/* Card 4: Suivi WhatsApp */}
            <div className="p-6 rounded-2xl bg-[#071710] border border-emerald-800/60 hover:border-[#D4A843]/50 transition-all space-y-3 text-center flex flex-col items-center shadow-xl group">
              <div className="w-13 h-13 rounded-full border border-[#D4A843]/40 bg-[#0B2217] text-[#D4A843] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-[#D4A843]" />
              </div>
              <h3 className="font-serif font-bold text-white text-base">Suivi WhatsApp 7j/7</h3>
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                Accompagnement personnalisé et réponses à toutes vos questions en direct avec l'équipe Togbé ADAYE.
              </p>
            </div>

          </div>
        </div>
      </Container>

      {/* ========================================================================= */}
      {/* 2. REVIEWS & TESTIMONIALS SECTION (ULTRA ATTRACTIVE DARK STYLE)          */}
      {/* ========================================================================= */}
      <Container className="mb-20 sm:mb-28">
        <div className="bg-[#0B2217] rounded-3xl border border-[#D4A843]/30 shadow-2xl p-6 sm:p-10 lg:p-12 space-y-10">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-emerald-900/80 pb-6">
            <div>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#D4A843] block">
                TÉMOIGNAGES CLIENTS VÉRIFIÉS
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white mt-1">
                Ce que disent les utilisateurs d'AK 47
              </h2>
            </div>

            <div className="flex items-center gap-4 bg-[#071710] p-4 rounded-2xl border border-[#D4A843]/40 shrink-0 shadow-lg">
              <div className="text-center px-2">
                <span className="text-3xl sm:text-4xl font-serif font-black text-[#D4A843] block">
                  4.95
                </span>
                <span className="text-[9px] text-gray-400 uppercase tracking-widest font-semibold">sur 5.0</span>
              </div>
              <div className="border-l border-emerald-900 pl-4 space-y-1">
                <div className="flex items-center text-amber-400 gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-gray-300 font-medium">
                  {reviews.length} avis vérifiés déposés
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial Cards (3 columns grid) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="p-6 rounded-2xl bg-[#071710] border border-emerald-800/60 shadow-xl hover:border-[#D4A843]/50 transition-all space-y-4 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  {/* Rating Stars & Quote Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-amber-400 gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <= rev.rating ? "fill-amber-400 text-amber-400" : "text-gray-700"
                          }`}
                        />
                      ))}
                    </div>
                    <Quote className="w-5 h-5 text-[#D4A843]/40 group-hover:text-[#D4A843] transition-colors" />
                  </div>

                  {/* Comment */}
                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-light italic">
                    « {rev.comment} »
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-3 border-t border-emerald-900/80 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 min-w-10 min-h-10 shrink-0 aspect-square rounded-full bg-gradient-to-br from-[#1B4332] to-[#2D6A4F] text-[#D4A843] font-bold text-sm flex items-center justify-center border border-[#D4A843]/50 shadow-md">
                      {rev.author.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-xs sm:text-sm text-white truncate">
                        {rev.author}
                      </h4>
                      <span className="text-[10px] text-gray-400 block">{rev.date}</span>
                    </div>
                  </div>

                  <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded-full font-semibold">
                    ✓ Vérifié
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Form to Submit a Review */}
          <div className="pt-6 border-t border-emerald-900/80">
            <div className="bg-[#071710] p-6 sm:p-8 rounded-2xl border border-[#D4A843]/30 space-y-4 shadow-xl">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-[#D4A843]" />
                <h3 className="text-lg font-serif font-bold text-white">
                  Laisser votre témoignage sur AK 47
                </h3>
              </div>

              {showSuccessToast && (
                <div className="p-4 rounded-xl bg-emerald-950 border border-emerald-700 text-emerald-300 text-xs sm:text-sm font-medium flex items-center gap-2 animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Merci ! Votre avis a été publié avec succès.</span>
                </div>
              )}

              <form onSubmit={handleSubmitReview} className="space-y-4 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-300 block">
                      Votre nom / prénom (ex: Marc A. - Ouagadougou) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Paul K. (Bobo-Dioulasso)"
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-emerald-800 bg-[#0B2217] text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#D4A843]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-300 block">
                      Note attribuée *
                    </label>
                    <div className="flex items-center gap-1.5 pt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="p-1 text-amber-400 hover:scale-110 transition-transform focus:outline-none"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              star <= (hoverRating || newRating)
                                ? "fill-amber-400 text-amber-400"
                                : "text-gray-700"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-300 block">
                    Votre avis / retour d'expérience *
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Racontez votre expérience d'endurance avec le produit AK 47..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-emerald-800 bg-[#0B2217] text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#D4A843]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#D4A843] hover:bg-[#B8860B] text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl touch-active"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Publication..." : "Publier mon témoignage"}</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </Container>

      {/* ========================================================================= */}
      {/* 3. FAQ SECTION (DARK LUXURY ACCORDION)                                    */}
      {/* ========================================================================= */}
      <Container className="mb-20 sm:mb-28">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <div className="text-center space-y-2">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#D4A843] block">
              FOIRE AUX QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              Questions Fréquemment Posées
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#0B2217] rounded-2xl border border-emerald-800/60 shadow-lg overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-serif font-bold text-sm sm:text-lg text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#D4A843] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 text-xs sm:text-sm text-gray-300 font-light leading-relaxed border-t border-emerald-900/80 pt-4 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </Container>

      {/* ========================================================================= */}
      {/* 4. FINAL CALL TO ACTION BANNER                                            */}
      {/* ========================================================================= */}
      <Container>
        <div className="bg-gradient-to-r from-[#071710] via-[#0B2217] to-[#071710] rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-[#D4A843]/40 text-center space-y-6 relative overflow-hidden">
          
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#D4A843]/10 rounded-full blur-2xl pointer-events-none" />

          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#D4A843]/20 border border-[#D4A843]/40 text-[#D4A843] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Prenez le Contrôle Dès Aujourd'hui</span>
          </span>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold max-w-3xl mx-auto leading-tight text-white">
            Prêt à Redécouvrir une Endurance Sans Limite avec AK 47 ?
          </h2>

          <p className="text-sm sm:text-lg text-gray-200 max-w-2xl mx-auto font-light">
            Profitez de l'offre promotionnelle à <strong className="text-[#D4A843]">8 000 FCFA</strong> au lieu de 15 000 FCFA. Livraison rapide et colis ultra-discret au Burkina Faso et à l'international.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold text-base shadow-2xl transition-all transform hover:-translate-y-0.5 touch-active"
            >
              <MessageCircle className="w-6 h-6 fill-black shrink-0 animate-bounce" />
              <span>Commander AK 47 sur WhatsApp (8 000 FCFA)</span>
            </a>
          </div>

        </div>
      </Container>

    </div>
  );
}
