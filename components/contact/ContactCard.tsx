import React from "react";
import { LucideIcon } from "lucide-react";

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  subtext?: string;
  actionButton?: React.ReactNode;
}

export default function ContactCard({
  icon: Icon,
  title,
  value,
  subtext,
  actionButton,
}: ContactCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-[#D4A843]/20 shadow-lg flex flex-col items-center text-center space-y-4 gold-hover-glow">
      <div className="w-14 h-14 rounded-full bg-[#1B4332]/10 border border-[#B8860B]/30 flex items-center justify-center text-[#1B4332]">
        <Icon className="w-7 h-7" />
      </div>

      <h3 className="text-lg font-serif font-bold text-[#1B4332] uppercase tracking-wider">
        {title}
      </h3>

      <p className="text-base sm:text-lg font-semibold text-[#2C2C2C]">
        {value}
      </p>

      {subtext && (
        <p className="text-xs text-[#6B6B6B] leading-relaxed">
          {subtext}
        </p>
      )}

      {actionButton && <div className="pt-2 w-full">{actionButton}</div>}
    </div>
  );
}
