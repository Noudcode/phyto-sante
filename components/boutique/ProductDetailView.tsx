"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ProductCard from "@/components/boutique/ProductCard";
import { Product, ProductReview, productsData } from "@/data/products";
import { siteConfig } from "@/data/site-config";
import {
  Star,
  ShieldCheck,
  Award,
  TrendingUp,
  MessageCircle,
  Phone,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowLeft,
  Send,
  UserCheck,
  Leaf,
  Info,
  Maximize2,
  HeartHandshake,
} from "lucide-react";

interface ProductDetailViewProps {
  product: Product;
}

export default function ProductDetailView({ product }: ProductDetailViewProps) {
  // Active preview image state (posterImage or main image)
  const [selectedImage, setSelectedImage] = useState<string>(
    product.posterImage || product.image
  );
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Reviews state (initial reviews from product data + client submissions)
  const [reviews, setReviews] = useState<ProductReview[]>(product.reviews || []);

  // New review form state
  const [newAuthor, setNewAuthor] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [newComment, setNewComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const orderMessage = `Bonjour Phyto Santé, je souhaite commander le produit : ${product.name} (Offre promo : ${product.price.toLocaleString(
    "fr-FR"
  )} ${product.currency}). Merci de me donner toutes les instructions pour la prise en charge.`;

  const contactMessage = `Bonjour Phyto Santé, j'ai une question concernant l'utilisation du produit : ${product.name}.`;

  const whatsappOrderUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    orderMessage
  )}`;

  const whatsappContactUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    contactMessage
  )}`;

  // Handle Review Submission
  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newComment.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const createdReview: ProductReview = {
        id: `rev-custom-${Date.now()}`,
        author: newAuthor.trim(),
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

  // Other products for recommendations
  const relatedProducts = productsData.filter((p) => p.id !== product.id).slice(0, 4);

  // Calculate average rating
  const totalReviewsCount = reviews.length;
  const avgRating =
    totalReviewsCount > 0
      ? (
          reviews.reduce((acc, r) => acc + r.rating, 0) / totalReviewsCount
        ).toFixed(1)
      : product.rating.toFixed(1);

  return (
    <div className="pt-24 pb-20 bg-[#FAF8F5] min-h-screen text-[#2C3E35]">
      {/* Breadcrumb Navigation */}
      <Container className="mb-6">
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 py-2">
          <Link
            href="/boutique"
            className="hover:text-[#B8860B] transition-colors flex items-center gap-1 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Boutique</span>
          </Link>
          <span>/</span>
          <span className="text-gray-400">{product.category}</span>
          <span>/</span>
          <span className="text-[#1B4332] font-semibold truncate max-w-[200px] sm:max-w-xs">
            {product.name}
          </span>
        </nav>
      </Container>

      {/* Main Product Hero Grid */}
      <Container>
        <div className="bg-white rounded-3xl border border-[#D4A843]/25 shadow-xl p-6 sm:p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          {/* Left Column: Poster / Image Gallery (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Primary Main Image Frame */}
            <div className="relative aspect-[3/4] sm:aspect-square lg:aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-950/5 via-amber-900/5 to-emerald-900/10 border border-[#D4A843]/20 shadow-inner group">
              <Image
                src={selectedImage}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain p-2 group-hover:scale-105 transition-transform duration-500 ease-out"
              />

              {/* Promo Badge */}
              {product.originalPrice && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 animate-pulse">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>OFFRE PROMOTIONNELLE</span>
                </div>
              )}

              {/* Lightbox Zoom Trigger */}
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md hover:bg-white text-[#1B4332] p-2.5 rounded-full shadow-md transition-transform hover:scale-110"
                title="Agrandir l'image"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Thumbnail Switcher (Affiche vs Flacon/Boîte) */}
            <div className="flex items-center gap-3 pt-2">
              {product.posterImage && (
                <button
                  onClick={() => setSelectedImage(product.posterImage!)}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === product.posterImage
                      ? "border-[#B8860B] ring-2 ring-[#B8860B]/30 scale-105"
                      : "border-gray-200 opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={product.posterImage}
                    alt="Affiche Produit"
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-[9px] text-center font-medium py-0.5">
                    Affiche
                  </span>
                </button>
              )}

              {product.image && (
                <button
                  onClick={() => setSelectedImage(product.image)}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === product.image
                      ? "border-[#B8860B] ring-2 ring-[#B8860B]/30 scale-105"
                      : "border-gray-200 opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={product.image}
                    alt="Image Boutique"
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-[9px] text-center font-medium py-0.5">
                    Produit
                  </span>
                </button>
              )}
            </div>

            {/* Trust Badges */}
            <div className="mt-4 grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-50/60 border border-emerald-100 text-xs text-emerald-900">
                <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0" />
                <div>
                  <p className="font-bold">100% Naturel</p>
                  <p className="text-[11px] text-emerald-700">Sélection artisanale</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-amber-50/60 border border-amber-100 text-xs text-amber-900">
                <Award className="w-5 h-5 text-amber-700 shrink-0" />
                <div>
                  <p className="font-bold">Qualité & Confiance</p>
                  <p className="text-[11px] text-amber-700">Accompagnement réputé</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Information & Actions (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Category & Certification Header */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-[#1B4332] text-[#D4A843] text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border border-[#B8860B]/30">
                  {product.category}
                </span>
                <span className="bg-amber-100/70 text-amber-900 text-xs font-medium px-3 py-1 rounded-full border border-amber-200 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-700" />
                  <span>{product.certification}</span>
                </span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1B4332] leading-tight">
                {product.name}
              </h1>

              {/* Stats: Rating & Sales Count */}
              <div className="flex flex-wrap items-center gap-4 text-sm pt-1 border-b border-gray-100 pb-4">
                <div className="flex items-center gap-1.5 text-amber-500 font-bold bg-amber-50 px-3 py-1 rounded-lg border border-amber-200">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>{avgRating} / 5</span>
                  <span className="text-gray-500 font-normal text-xs">
                    ({totalReviewsCount} avis clients)
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-emerald-800 font-semibold bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200 text-xs">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  <span>{product.salesCount}+ personnes accompagnées</span>
                </div>
              </div>

              {/* Short Description */}
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                {product.shortDescription}
              </p>

              {/* PROMO PRICE BOX */}
              <div className="bg-gradient-to-r from-[#0A1F16] to-[#1B4332] text-white p-6 rounded-2xl shadow-lg border border-[#B8860B]/40 space-y-3 relative overflow-hidden">
                <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-[#D4A843]/10 rounded-full blur-2xl" />

                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-[#D4A843] font-semibold flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Offre Promotionnelle En Cours
                  </span>
                  {product.savings && (
                    <span className="bg-gradient-to-r from-red-500 to-amber-500 text-white font-bold text-xs px-3 py-1 rounded-full shadow-sm">
                      Économie réalisée : {product.savings.toLocaleString("fr-FR")} {product.currency}
                    </span>
                  )}
                </div>

                <div className="flex items-baseline gap-3">
                  {product.originalPrice && (
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-400 uppercase">Prix normal</span>
                      <span className="text-base text-gray-300 line-through font-medium">
                        {product.originalPrice.toLocaleString("fr-FR")} {product.currency}
                      </span>
                    </div>
                  )}

                  <div className="flex flex-col">
                    <span className="text-xs text-[#D4A843] uppercase font-semibold">
                      Prix Promotionnel
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-serif font-bold text-white">
                        {product.price.toLocaleString("fr-FR")}
                      </span>
                      <span className="text-lg font-bold text-[#D4A843]">
                        {product.currency}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-emerald-200/90 font-light border-t border-white/10 pt-2">
                  Profitez actuellement du tarif préférentiel. Stock disponible pour livraison immédiate.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappOrderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base shadow-xl hover:shadow-emerald-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <MessageCircle className="w-5 h-5 fill-white shrink-0" />
                  <span>🛒 Commander maintenant</span>
                </a>

                <a
                  href={whatsappContactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-[#F3EDE4] hover:bg-[#e8decb] text-[#1B4332] font-semibold text-sm border border-[#B8860B]/30 transition-all"
                >
                  <Phone className="w-4 h-4 text-[#B8860B] shrink-0" />
                  <span>Conseils (+226 05 85 50 17)</span>
                </a>
              </div>

              {/* Micro Reassurances */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Accompagnement par l'équipe Phyto Santé</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Expédition & Conseils d'utilisation personnalisés</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Detailed Product Content Section */}
      <Container className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Details (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* 🌿 À propos du produit */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                <div className="p-3 bg-emerald-50 text-emerald-800 rounded-2xl">
                  <Leaf className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1B4332]">
                    🌿 À propos du produit
                  </h2>
                  <p className="text-xs text-gray-500">Composition & formulation naturelle</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed text-sm sm:text-base font-light">
                {product.description}
              </p>

              {/* Active Ingredients Cards */}
              {product.ingredients && product.ingredients.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h3 className="text-sm font-bold text-[#1B4332] uppercase tracking-wider">
                    Plantes & Ingrédients Majeurs :
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {product.ingredients.map((ing, idx) => (
                      <div
                        key={idx}
                        className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#D4A843]/20 space-y-1.5"
                      >
                        <div className="text-2xl">{ing.icon || "🌿"}</div>
                        <h4 className="font-serif font-bold text-sm text-[#1B4332]">
                          {ing.name}
                        </h4>
                        {ing.desc && (
                          <p className="text-xs text-gray-600 leading-normal font-light">
                            {ing.desc}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 🔹 Utilisation traditionnelle & Posologie */}
            {product.posology && (
              <div className="bg-gradient-to-br from-emerald-900 to-[#0A1F16] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#B8860B]/30 space-y-6 relative overflow-hidden">
                <div className="flex items-center gap-3 border-b border-emerald-800/80 pb-4">
                  <div className="p-3 bg-[#D4A843]/20 text-[#D4A843] rounded-2xl border border-[#D4A843]/30">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
                      🔹 Utilisation traditionnelle & Posologie
                    </h2>
                    <p className="text-xs text-[#D4A843]">Conseils de préparation et d'administration</p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D4A843]">
                    Posologie Recommandée :
                  </span>
                  <p className="text-base sm:text-lg font-serif font-medium text-emerald-50 leading-relaxed">
                    « {product.posology.instruction} »
                  </p>
                </div>

                <div className="flex items-start gap-3 bg-amber-950/40 p-4 rounded-xl border border-amber-500/30 text-xs text-amber-200">
                  <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <p className="leading-relaxed font-light">
                    {product.posology.recommendation}
                  </p>
                </div>
              </div>
            )}

            {/* 🌱 Les points essentiels */}
            {product.keyPoints && product.keyPoints.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm space-y-6">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <div className="p-3 bg-amber-50 text-amber-800 rounded-2xl">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1B4332]">
                      🌱 Les points essentiels
                    </h2>
                    <p className="text-xs text-gray-500">Nos engagements d'excellence</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.keyPoints.map((kp, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-2xl bg-[#FAF8F5] border border-gray-100 hover:border-[#B8860B]/30 transition-colors"
                    >
                      <div className="p-2 bg-emerald-100 text-emerald-800 rounded-xl shrink-0">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-sm text-[#1B4332] mb-1">
                          {kp.title}
                        </h4>
                        <p className="text-xs text-gray-600 font-light leading-relaxed">
                          {kp.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar / Sidebar Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Contact Box */}
            <div className="bg-[#F3EDE4] border border-[#B8860B]/30 rounded-3xl p-6 space-y-5 sticky top-28 shadow-md">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-[#1B4332] text-[#D4A843] rounded-full flex items-center justify-center mx-auto shadow-md">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1B4332]">
                  Besoin d'un conseil personnalisé ?
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-light">
                  Vous avez des questions sur l'utilisation du produit ou souhaitez un suivi direct ?
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="p-3 bg-white rounded-xl border border-gray-200 text-center">
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest block">
                    Contact / WhatsApp Direct
                  </span>
                  <span className="text-lg font-serif font-bold text-[#1B4332]">
                    +226 05 85 50 17
                  </span>
                </div>

                <a
                  href={whatsappContactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Contacter PHYTO SANTÉ</span>
                </a>
              </div>

              <div className="pt-3 border-t border-[#B8860B]/20 text-[11px] text-center text-gray-500 italic">
                « PHYTO SANTÉ — La nature au service de votre santé. »
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Customer Reviews & Form Section */}
      <Container className="mb-16">
        <div className="bg-white rounded-3xl border border-gray-200/80 shadow-xl p-6 sm:p-10 space-y-10">
          {/* Header Stats */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-100 pb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B8860B]">
                Témoignages & Évaluations
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B4332] mt-1">
                Avis et commentaires des clients
              </h2>
              <p className="text-xs text-gray-500 font-light mt-1">
                Retours d'expérience vérifiés d'utilisateurs de PHYTO SANTÉ.
              </p>
            </div>

            {/* Average Rating Score Box */}
            <div className="flex items-center gap-4 bg-[#FAF8F5] p-4 rounded-2xl border border-[#D4A843]/20 shrink-0">
              <div className="text-center px-2">
                <span className="text-3xl font-serif font-bold text-[#1B4332] block">
                  {avgRating}
                </span>
                <span className="text-[10px] text-gray-400 uppercase">sur 5.0</span>
              </div>
              <div className="border-l border-gray-200 pl-4 space-y-1">
                <div className="flex items-center text-amber-400 gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-gray-600 font-medium">
                  {totalReviewsCount} avis déposés
                </p>
              </div>
            </div>
          </div>

          {/* Form to submit a new review */}
          <div className="bg-[#FAF8F5] p-6 sm:p-8 rounded-2xl border border-[#D4A843]/25 space-y-6">
            <h3 className="font-serif text-lg font-bold text-[#1B4332]">
              Laisser un commentaire sur ce produit
            </h3>

            {showSuccessToast && (
              <div className="p-4 rounded-xl bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs sm:text-sm font-medium flex items-center gap-2 animate-fadeIn">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                <span>
                  Merci pour votre avis ! Votre commentaire a été ajouté avec succès.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Author Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#1B4332]">
                    Votre Nom & Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    placeholder="Ex: Kouamé Marc"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#B8860B] focus:ring-2 focus:ring-[#B8860B]/20 outline-none text-xs sm:text-sm bg-white"
                  />
                </div>

                {/* Rating selection */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#1B4332]">
                    Votre Note *
                  </label>
                  <div className="flex items-center gap-1.5 py-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1 text-amber-400 hover:scale-125 transition-transform"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            (hoverRating || newRating) >= star
                              ? "fill-amber-400 text-amber-400"
                              : "text-gray-300"
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-semibold text-gray-600 ml-2">
                      {hoverRating || newRating} / 5
                    </span>
                  </div>
                </div>
              </div>

              {/* Comment text */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#1B4332]">
                  Votre Commentaire / Retour d'expérience *
                </label>
                <textarea
                  required
                  rows={3}
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Partagez votre expérience avec ce produit..."
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#B8860B] focus:ring-2 focus:ring-[#B8860B]/20 outline-none text-xs sm:text-sm bg-white"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1B4332] hover:bg-[#2D6A4F] text-white text-xs sm:text-sm font-semibold shadow-md transition-all"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? "Publication..." : "Publier mon avis"}</span>
              </button>
            </form>
          </div>

          {/* List of Reviews */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#1B4332] border-b border-gray-100 pb-3">
              Commentaires des utilisateurs ({reviews.length})
            </h3>

            {reviews.length === 0 ? (
              <p className="text-xs text-gray-500 italic py-4 text-center">
                Aucun commentaire pour le moment. Soyez le premier à donner votre avis !
              </p>
            ) : (
              <div className="space-y-4">
                {reviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-[#D4A843]/30 transition-colors space-y-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1B4332] to-[#2D6A4F] text-[#D4A843] font-bold text-xs flex items-center justify-center shadow-sm">
                          {rev.author.charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h4 className="font-semibold text-xs sm:text-sm text-[#1B4332]">
                              {rev.author}
                            </h4>
                            {rev.verified && (
                              <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-medium flex items-center gap-0.5">
                                <UserCheck className="w-3 h-3 text-emerald-700" />
                                <span>Achat vérifié</span>
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] text-gray-400">{rev.date}</span>
                        </div>
                      </div>

                      {/* Stars */}
                      <div className="flex items-center text-amber-400 gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-3.5 h-3.5 ${
                              star <= rev.rating ? "fill-amber-400" : "text-gray-200"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-light">
                      « {rev.comment} »
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* Lightbox Modal for Image Zoom */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <Image
              src={selectedImage}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* Related Products Section */}
      <Container>
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B8860B]">
              Gamme Phyto Santé
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B4332]">
              Découvrez nos autres solutions naturelles
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
