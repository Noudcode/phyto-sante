import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Domain } from "@/data/domains";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

interface DomainCardProps {
  domain: Domain;
  index: number;
}

export default function DomainCard({ domain, index }: DomainCardProps) {
  const targetLinks: Record<string, string> = {
    "bien-etre-intime": "/boutique",
    "accompagnement-spirituel": "/contact",
    "harmonie-conjugale": "/contact",
  };

  const targetLink = targetLinks[domain.id] || "/boutique";

  return (
    <AnimateOnScroll animation="fade-up" delay={index * 150}>
      <div className="h-full flex flex-col bg-white rounded-2xl overflow-hidden border border-[#D4A843]/20 shadow-lg gold-hover-glow group">
        {/* Card Header Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={domain.image}
            alt={domain.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/80 via-[#1B4332]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs uppercase tracking-widest text-[#D4A843] font-medium bg-[#1B4332]/90 px-3 py-1 rounded-full border border-[#B8860B]/40 inline-block mb-2">
              Domaine {index + 1}
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
              {domain.title}
            </h3>
          </div>
        </div>

        {/* Card Body & Bullet Points */}
        <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
          <ul className="space-y-3.5 flex-1">
            {domain.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-[#2C2C2C]">
                <CheckCircle2 className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>

          {/* Action Link */}
          <div className="pt-4 border-t border-gray-100">
            <Link
              href={targetLink}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B4332] group-hover:text-[#B8860B] transition-colors"
            >
              <span>En savoir plus</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
}
