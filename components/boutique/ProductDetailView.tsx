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
    <div className="pt-24 pb-28 sm:pb-20 bg-[#FAF8F5] min-h-screen text-[#2C3E35]">
      {/* Breadcrumb Navigation */}
      <Container className="mb-4 sm:mb-6">
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 py-2 overflow-x-auto no-scrollbar whitespace-nowrap">
          <Link
            href="/boutique"
            className="hover:text-[#B8860B] transition-colors flex items-center gap-1 font-medium shrink-0"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Boutique</span>
          </Link>
          <span>/</span>
          <span className="text-gray-400 shrink-0">{product.category}</span>
          <span>/</span>
          <span className="text-[#1B4332] font-semibold truncate max-w-[160px] sm:max-w-xs">
            {product.name}
          </span>
        </nav>
      </Container>

      {/* Main Product Hero Grid */}
      <Container>
        <div className="bg-white rounded-3xl border border-[#D4A843]/25 shadow-xl p-5 sm:p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-12 sm:mb-16">
          {/* Left Column: Poster / Image Gallery (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Primary Main Image Frame - Enlarged for full poster & detail visibility */}
            <div 
              className="relative min-h-[460px] sm:min-h-[560px] lg:min-h-[620px] w-full rounded-2xl overflow-hidden bg-[#FAF8F5] border-2 border-[#D4A843]/30 shadow-lg group flex items-center justify-center p-1 sm:p-2 cursor-pointer"
              onClick={() => setIsLightboxOpen(true)}
            >
              <Image
                src={selectedImage}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain group-hover:scale-[1.02] transition-transform duration-500 ease-out"
              />

              {/* Promo Badge */}
              {product.originalPrice && (
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold text-[10px] sm:text-xs uppercase tracking-wider px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full shadow-lg flex items-center gap-1.5 animate-pulse z-10">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>OFFRE PROMOTIONNELLE</span>
                </div>
              )}

              {/* Lightbox Zoom Trigger */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLightboxOpen(true);
                }}
                className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-white/95 backdrop-blur-md hover:bg-white text-[#1B4332] p-2.5 rounded-full shadow-lg border border-[#D4A843]/40 transition-transform hover:scale-110 touch-active z-10"
                title="Agrandir pour lire les détails"
              >
                <Maximize2 className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Thumbnail Switcher (Affiche vs Flacon/Boîte) */}
            <div className="flex items-center gap-3 pt-1">
              {product.posterImage && (
                <button
                  onClick={() => setSelectedImage(product.posterImage!)}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all touch-active ${
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
                  className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all touch-active ${
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
            <div className="mt-2 grid grid-cols-2 gap-2.5 pt-3 border-t border-gray-100">
              <div className="flex items-center gap-2 p-2.5 sm:p-3 rounded-xl bg-emerald-50/60 border border-emerald-100 text-xs text-emerald-900">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-700 shrink-0" />
                <div>
                  <p className="font-bold text-[11px] sm:text-xs">100% Naturel</p>
                  <p className="text-[10px] text-emerald-700">Recette béninoise</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-2.5 sm:p-3 rounded-xl bg-amber-50/60 border border-amber-100 text-xs text-amber-900">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700 shrink-0" />
                <div>
                  <p className="font-bold text-[11px] sm:text-xs">Qualité Garanti</p>
                  <p className="text-[10px] text-amber-700">Accompagnement</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Information & Actions (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
            <div className="space-y-3.5">
              {/* Category & Certification Header */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-[#1B4332] text-[#D4A843] text-[10px] sm:text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border border-[#B8860B]/30">
                  {product.category}
                </span>
                <span className="bg-amber-100/70 text-amber-900 text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded-full border border-amber-200 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>{product.certification}</span>
                </span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1B4332] leading-tight">
                {product.name}
              </h1>

              {/* Stats: Rating & Sales Count */}
              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm pt-1 border-b border-gray-100 pb-3">
                <div className="flex items-center gap-1.5 text-amber-500 font-bold bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{avgRating} / 5</span>
                  <span className="text-gray-500 font-normal text-xs">
                    ({totalReviewsCount} avis)
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-emerald-800 font-semibold bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 text-xs">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{product.salesCount}+ accompagnés</span>
                </div>
              </div>

              {/* Short Description */}
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                {product.shortDescription}
              </p>

              {/* PROMO PRICE BOX */}
              <div className="bg-gradient-to-r from-[#0A1F16] to-[#1B4332] text-white p-5 sm:p-6 rounded-2xl shadow-lg border border-[#B8860B]/40 space-y-3 relative overflow-hidden">
                <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-[#D4A843]/10 rounded-full blur-2xl" />

                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#D4A843] font-semibold flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Offre Promotionnelle
                  </span>
                  {product.savings && (
                    <span className="bg-gradient-to-r from-red-500 to-amber-500 text-white font-bold text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full shadow-sm">
                      -{product.savings.toLocaleString("fr-FR")} {product.currency}
                    </span>
                  )}
                </div>

                <div className="flex items-baseline gap-3">
                  {product.originalPrice && (
                    <div className="flex flex-col">
                      <span className="text-[10px] text-gray-400 uppercase">Prix normal</span>
                      <span className="text-sm text-gray-300 line-through font-medium">
                        {product.originalPrice.toLocaleString("fr-FR")} {product.currency}
                      </span>
                    </div>
                  )}

                  <div className="flex flex-col">
                    <span className="text-[10px] sm:text-xs text-[#D4A843] uppercase font-semibold">
                      Prix Promotionnel
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl sm:text-4xl font-serif font-bold text-white">
                        {product.price.toLocaleString("fr-FR")}
                      </span>
                      <span className="text-base sm:text-lg font-bold text-[#D4A843]">
                        {product.currency}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] sm:text-xs text-emerald-200/90 font-light border-t border-white/10 pt-2">
                  Profitez actuellement du tarif préférentiel. Stock disponible pour livraison immédiate.
                </p>
              </div>

              {/* Desktop Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappOrderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-3.5 sm:py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base shadow-xl transition-all touch-active"
                >
                  <MessageCircle className="w-5 h-5 fill-white shrink-0" />
                  <span>Commander maintenant (WhatsApp)</span>
                </a>

                <a
                  href={whatsappContactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:py-4 rounded-xl bg-[#F3EDE4] hover:bg-[#e8decb] text-[#1B4332] font-semibold text-xs sm:text-sm border border-[#B8860B]/30 transition-all touch-active"
                >
                  <Phone className="w-4 h-4 text-[#B8860B] shrink-0" />
                  <span>Conseils (+226 05 85 50 17)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Detailed Product Content Section */}
      <Container className="mb-12 sm:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Details (8 cols) */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            {/* 🌿 À propos du produit */}
            <div className="bg-white rounded-3xl p-5 sm:p-8 border border-gray-200/80 shadow-sm space-y-5">
              <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                <div className="p-2.5 bg-emerald-50 text-emerald-800 rounded-2xl">
                  <Leaf className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-2xl font-serif font-bold text-[#1B4332]">
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
                  <h3 className="text-xs sm:text-sm font-bold text-[#1B4332] uppercase tracking-wider">
                    Plantes & Ingrédients Majeurs :
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    {product.ingredients.map((ing, idx) => (
                      <div
                        key={idx}
                        className="bg-[#FAF8F5] p-3.5 sm:p-4 rounded-2xl border border-[#D4A843]/20 space-y-1.5"
                      >
                        <div className="text-xl sm:text-2xl">{ing.icon || "🌿"}</div>
                        <h4 className="font-serif font-bold text-xs sm:text-sm text-[#1B4332]">
                          {ing.name}
                        </h4>
                        {ing.desc && (
                          <p className="text-[11px] sm:text-xs text-gray-600 leading-normal font-light">
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
              <div className="bg-gradient-to-br from-emerald-900 to-[#0A1F16] text-white rounded-3xl p-5 sm:p-8 shadow-xl border border-[#B8860B]/30 space-y-5 relative overflow-hidden">
                <div className="flex items-center gap-3 border-b border-emerald-800/80 pb-4">
                  <div className="p-2.5 bg-[#D4A843]/20 text-[#D4A843] rounded-2xl border border-[#D4A843]/30">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-2xl font-serif font-bold text-white">
                      🔹 Posologie & Conseils
                    </h2>
                    <p className="text-xs text-[#D4A843]">Modes d'administration</p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/10 space-y-2">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#D4A843]">
                    Posologie Recommandée :
                  </span>
                  <p className="text-sm sm:text-lg font-serif font-medium text-emerald-50 leading-relaxed">
                    « {product.posology.instruction} »
                  </p>
                </div>

                <div className="flex items-start gap-2.5 bg-amber-950/40 p-3.5 rounded-xl border border-amber-500/30 text-xs text-amber-200">
                  <Info className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0 mt-0.5" />
                  <p className="leading-relaxed font-light text-[11px] sm:text-xs">
                    {product.posology.recommendation}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar / Sidebar Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#F3EDE4] border border-[#B8860B]/30 rounded-3xl p-5 sm:p-6 space-y-4 sticky top-28 shadow-md">
              <div className="text-center space-y-1.5">
                <div className="w-10 h-10 bg-[#1B4332] text-[#D4A843] rounded-full flex items-center justify-center mx-auto shadow-md">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1B4332]">
                  Besoin d'un conseil ?
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-light">
                  Posez vos questions directement à notre équipe sur WhatsApp.
                </p>
              </div>

              <div className="space-y-2.5 pt-1">
                <a
                  href={whatsappContactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold shadow-md transition-all touch-active"
                >
                  <MessageCircle className="w-4 h-4 fill-white shrink-0" />
                  <span>Échanger avec Phyto Santé</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Customer Reviews Section */}
      <Container className="mb-12 sm:mb-16">
        <div className="bg-white rounded-3xl border border-gray-200/80 shadow-xl p-5 sm:p-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-6">
            <div>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#B8860B]">
                Témoignages Vérifiés
              </span>
              <h2 className="text-xl sm:text-3xl font-serif font-bold text-[#1B4332] mt-1">
                Avis des clients ({reviews.length})
              </h2>
            </div>

            <div className="flex items-center gap-3 bg-[#FAF8F5] p-3 rounded-2xl border border-[#D4A843]/20 shrink-0">
              <div className="text-center px-2">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#1B4332] block">
                  {avgRating}
                </span>
                <span className="text-[9px] text-gray-400 uppercase">sur 5.0</span>
              </div>
              <div className="border-l border-gray-200 pl-3 space-y-1">
                <div className="flex items-center text-amber-400 gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <p className="text-[11px] text-gray-600 font-medium">
                  {totalReviewsCount} avis déposés
                </p>
              </div>
            </div>
          </div>

          {/* Reviews List */}
          <div className="space-y-3.5">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="p-4 sm:p-5 rounded-2xl bg-white border border-gray-100 shadow-sm space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1B4332] to-[#2D6A4F] text-[#D4A843] font-bold text-xs flex items-center justify-center">
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-xs sm:text-sm text-[#1B4332]">
                        {rev.author}
                      </h4>
                      <span className="text-[10px] text-gray-400">{rev.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-amber-400 gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-3 h-3 ${
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
        </div>
      </Container>

      {/* Lightbox Modal */}
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
        <div className="space-y-6 sm:space-y-8">
          <div className="text-center space-y-1">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B8860B]">
              Gamme Phyto Santé
            </span>
            <h2 className="text-xl sm:text-3xl font-serif font-bold text-[#1B4332]">
              Découvrez nos autres solutions naturelles
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </Container>

      {/* MOBILE STICKY BOTTOM BAR FOR INSTANT ORDERING */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-lg border-t border-[#D4A843]/30 p-3 sm:hidden shadow-2xl flex items-center justify-between gap-3">
        <div className="flex flex-col pl-2 shrink-0">
          <span className="text-[10px] text-gray-400 uppercase font-semibold">Tarif Promo</span>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-serif font-bold text-[#1B4332]">
              {product.price.toLocaleString("fr-FR")}
            </span>
            <span className="text-xs font-bold text-[#B8860B]">{product.currency}</span>
          </div>
        </div>

        <a
          href={whatsappOrderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] active:bg-emerald-700 text-white font-bold text-xs shadow-md touch-active"
        >
          <MessageCircle className="w-4 h-4 fill-white shrink-0" />
          <span>Commander sur WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
