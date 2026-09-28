import React from "react";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionTitle({
  subtitle,
  title,
  description,
  centered = true,
  theme = "light",
  className = "",
}: SectionTitleProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={`space-y-3 ${centered ? "text-center mx-auto max-w-3xl" : "max-w-2xl"} ${className}`}
    >
      {subtitle && (
        <span
          className={`text-xs sm:text-sm uppercase tracking-[0.25em] font-medium block ${
            isDark ? "text-[#D4A843]" : "text-[#B8860B]"
          }`}
        >
          {subtitle}
        </span>
      )}

      <h2
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight ${
          isDark ? "text-white" : "text-[#1B4332]"
        }`}
      >
        {title}
      </h2>

      {/* Elegant Gold Accent Divider */}
      <div
        className={`h-0.5 w-16 bg-[#B8860B] opacity-80 ${
          centered ? "mx-auto" : ""
        } my-4 rounded-full`}
      />

      {description && (
        <p
          className={`text-sm sm:text-base md:text-lg leading-relaxed ${
            isDark ? "text-gray-300" : "text-[#6B6B6B]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
