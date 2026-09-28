"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { MessageCircle, Star, Sparkles, ArrowRight } from "lucide-react";
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

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-[#D4A843]/20 shadow-sm hover:shadow-xl hover:border-[#B8860B]/40 transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1">
      {/* Top Image Section (Clickable to detail page) */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-emerald-50 to-amber-50">
        <Link href={detailUrl} className="block w-full h-full relative cursor-pointer">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
          />
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>

        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-[#1B4332]/90 backdrop-blur-md text-[#D4A843] text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full border border-[#B8860B]/30 shadow-md">
          {product.category}
        </div>

        {/* Promo Discount Tag if originalPrice exists */}
        {product.originalPrice && product.originalPrice > product.price && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold text-xs px-2.5 py-1 rounded-full shadow-md flex items-center gap-1 animate-pulse">
            <Sparkles className="w-3 h-3" />
            <span>
              -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </span>
          </div>
        )}

        {/* Hover Quick Link hint */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <Link
            href={detailUrl}
            className="bg-white/90 backdrop-blur-md text-[#1B4332] text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 hover:bg-white"
          >
            <span>Voir détails</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#B8860B]" />
          </Link>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          {/* Rating & Sales Badge */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-1 text-amber-500 font-semibold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
              <span className="text-gray-400 font-normal">({product.reviewsCount})</span>
            </div>
            {product.salesCount && (
              <span className="text-[11px] bg-emerald-50 text-emerald-800 font-medium px-2 py-0.5 rounded-md border border-emerald-200">
                {product.salesCount}+ ventes
              </span>
            )}
          </div>

          {/* Product Title (Clickable to detail page) */}
          <h3 className="font-serif text-lg font-bold text-[#1B4332] leading-snug group-hover:text-[#B8860B] transition-colors">
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
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
          {/* Price Box */}
          <div className="flex flex-col">
            {product.originalPrice && (
              <span className="text-[11px] text-gray-400 line-through font-medium">
                {product.originalPrice.toLocaleString("fr-FR")} {product.currency}
              </span>
            )}
            <div className="flex items-baseline gap-1">
              <span className="font-serif font-bold text-lg text-[#1B4332]">
                {product.price.toLocaleString("fr-FR")}
              </span>
              <span className="text-xs font-semibold text-[#B8860B]">{product.currency}</span>
            </div>
          </div>

          {/* Direct WhatsApp Order Button */}
          <a
            href={whatsappOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Commander directement sur WhatsApp"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-xs font-semibold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white shrink-0" />
            <span>Commande</span>
          </a>
        </div>
      </div>
    </div>
  );
}
