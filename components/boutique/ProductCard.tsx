"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { MessageCircle, Star, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/data/site-config";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const detailUrl = `/boutique/${product.id}`;
  
  const orderMessage = `Bonjour Phyto Santé, je souhaite commander le produit : ${product.name} (Prix promo : ${product.price.toLocaleString(
    "fr-FR"
  )} ${product.currency}). Merci de me renseigner pour la livraison.`;

  const whatsappOrderUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    orderMessage
  )}`;

  const discountPercent =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : null;

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-[#D4A843]/20 shadow-sm hover:shadow-xl hover:border-[#B8860B]/40 transition-all duration-300 flex flex-col justify-between group touch-active">
      {/* Top Image Frame */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-emerald-950/5 via-amber-900/5 to-emerald-900/10">
        <Link href={detailUrl} className="block w-full h-full relative cursor-pointer">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          {/* Mobile dark vignette gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>

        {/* Category Badge */}
        <div className="absolute top-2.5 left-2.5 bg-[#1B4332]/90 backdrop-blur-md text-[#D4A843] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-[#B8860B]/30 shadow-md">
          {product.category}
        </div>

        {/* Discount Badge */}
        {discountPercent && (
          <div className="absolute top-2.5 right-2.5 bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold text-[10px] sm:text-xs px-2.5 py-1 rounded-full shadow-md flex items-center gap-1 animate-pulse">
            <Sparkles className="w-3 h-3" />
            <span>-{discountPercent}%</span>
          </div>
        )}

        {/* Mobile Quick Action Link */}
        <div className="absolute bottom-2.5 right-2.5 sm:opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Link
            href={detailUrl}
            className="bg-white/90 backdrop-blur-md text-[#1B4332] text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1 hover:bg-white"
          >
            <span>Détails</span>
            <ArrowRight className="w-3 h-3 text-[#B8860B]" />
          </Link>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3.5">
        <div className="space-y-2">
          {/* Rating & Sales Badge */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-1 text-amber-500 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
              <span className="text-gray-400 font-normal">({product.reviewsCount})</span>
            </div>
            {product.salesCount && (
              <span className="text-[10px] sm:text-[11px] bg-emerald-50 text-emerald-800 font-semibold px-2 py-0.5 rounded-md border border-emerald-200">
                {product.salesCount}+ ventes
              </span>
            )}
          </div>

          {/* Product Title */}
          <h3 className="font-serif text-base sm:text-lg font-bold text-[#1B4332] leading-snug group-hover:text-[#B8860B] transition-colors line-clamp-2">
            <Link href={detailUrl} className="hover:underline">
              {product.name}
            </Link>
          </h3>

          {/* Short Description */}
          <p className="text-xs text-[#6B6B6B] leading-relaxed line-clamp-2 font-light">
            {product.shortDescription || product.description}
          </p>
        </div>

        {/* Pricing & WhatsApp Order Action */}
        <div className="pt-3 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Price Box */}
          <div className="flex items-baseline justify-between sm:justify-start gap-2">
            <div className="flex flex-col">
              {product.originalPrice && (
                <span className="text-[10px] sm:text-[11px] text-gray-400 line-through font-medium">
                  {product.originalPrice.toLocaleString("fr-FR")} {product.currency}
                </span>
              )}
              <div className="flex items-baseline gap-1">
                <span className="font-serif font-bold text-lg sm:text-xl text-[#1B4332]">
                  {product.price.toLocaleString("fr-FR")}
                </span>
                <span className="text-xs font-bold text-[#B8860B]">{product.currency}</span>
              </div>
            </div>

            {product.savings && (
              <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium sm:hidden">
                Économie: {product.savings.toLocaleString("fr-FR")} F
              </span>
            )}
          </div>

          {/* WhatsApp Order Button */}
          <a
            href={whatsappOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Commander directement sur WhatsApp"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] active:bg-emerald-700 text-white text-xs font-bold shadow-md hover:shadow-lg transition-all touch-active"
          >
            <MessageCircle className="w-4 h-4 fill-white shrink-0" />
            <span>Commander (WhatsApp)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
