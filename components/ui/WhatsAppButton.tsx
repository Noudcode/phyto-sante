import React from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site-config";

interface WhatsAppButtonProps {
  label?: string;
  message?: string;
  variant?: "primary" | "secondary" | "outline" | "gold";
  size?: "sm" | "md" | "lg";
  className?: string;
  showIcon?: boolean;
}

export default function WhatsAppButton({
  label = "Nous contacter sur WhatsApp",
  message = siteConfig.contact.whatsappDefaultMessage,
  variant = "primary",
  size = "md",
  className = "",
  showIcon = true,
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  const sizeClasses = {
    sm: "px-4 py-2 text-xs sm:text-sm gap-2",
    md: "px-6 py-3 text-sm sm:text-base gap-2.5",
    lg: "px-8 py-4 text-base sm:text-lg gap-3 font-semibold",
  };

  const variantClasses = {
    primary:
      "bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg hover:shadow-xl hover:shadow-[#25D366]/20 border border-[#25D366]",
    secondary:
      "bg-[#1B4332] hover:bg-[#2D6A4F] text-white border border-[#D4A843]/30 shadow-md",
    outline:
      "bg-transparent hover:bg-[#25D366]/10 text-[#25D366] border-2 border-[#25D366]",
    gold:
      "bg-[#B8860B] hover:bg-[#D4A843] text-white shadow-lg hover:shadow-xl hover:shadow-[#B8860B]/20 border border-[#D4A843]",
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {showIcon && <MessageCircle className="w-5 h-5 shrink-0 fill-current" />}
      <span>{label}</span>
    </a>
  );
}
