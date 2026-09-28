import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  subtitle?: string;
  variant?: "light" | "dark";
  onClick?: () => void;
}

export default function PhytoSanteLogo({
  className = "",
  subtitle = "Cabinet de tous",
  variant = "light",
  onClick,
}: LogoProps) {
  const textColorSecondary = variant === "light" ? "text-white" : "text-[#1B4332]";
  const taglineColor = "text-[#FF6B00]";

  return (
    <Link 
      href="/" 
      onClick={onClick}
      className={`inline-flex items-center gap-1 sm:gap-1.5 group transition-transform duration-300 transform hover:scale-[1.02] ${className}`}
      aria-label="Retour à l'accueil Phyto Santé"
    >
      {/* 1. EMBLEM IMAGE OFFICIELLE (Fond transparent, rapproché du texte) */}
      <div className="relative w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 shrink-0 flex items-center justify-center">
        <Image
          src="/images/logo_emblem.png"
          alt="Emblème Phyto Santé"
          width={52}
          height={52}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </div>

      {/* 2. TYPOGRAPHIE PHYTO SANTÉ AVEC LA FEUILLE SUR LE "É" */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5 font-serif text-xl sm:text-2xl font-bold tracking-wider leading-none">
          {/* PHYTO (Vert Émeraude Vibrant) */}
          <span className="text-[#25D366] font-extrabold tracking-wider group-hover:text-[#20bd5a] transition-colors duration-300">
            PHYTO
          </span>

          {/* SANTÉ (Blanc en mode sombre / Vert Forêt en mode clair, Orange-Rouge du logo au survol) */}
          <span className={`flex items-center ${textColorSecondary} font-extrabold tracking-wider group-hover:text-[#FF6B00] transition-colors duration-300`}>
            SANT
            {/* Lettre E avec la feuille positionnée au-dessus en guise d'accent */}
            <span className="relative inline-block ml-[0.5px]">
              E
              {/* Feuille verte debout comme un accent aigu (É), aux couleurs de SANTÉ même au survol */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -top-3.5 right-0.5 sm:-top-4 sm:right-0.5 w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current transform -rotate-12 transition-colors duration-300 filter drop-shadow-sm"
              >
                <path
                  d="M 3 21 C 1 13 7 3 21 3 C 21 15 13 21 3 21 Z"
                  fill="currentColor"
                />
                <path
                  d="M 3 21 Q 11 11 21 3"
                  stroke={variant === "light" ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.35)"}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </span>
        </div>

        {/* 3. SOUS-TITRE — CABINET DE TOUS — */}
        {subtitle && (
          <div className="flex items-center gap-1.5 mt-1.5">
            <span className="h-[1px] w-3 bg-gradient-to-r from-[#FF6B00] to-[#F4511E] opacity-80" />
            <span className={`text-[10px] sm:text-[11px] tracking-[0.22em] uppercase font-bold ${taglineColor}`}>
              {subtitle}
            </span>
            <span className="h-[1px] w-3 bg-gradient-to-r from-[#F4511E] to-[#FF6B00] opacity-80" />
          </div>
        )}
      </div>
    </Link>
  );
}
