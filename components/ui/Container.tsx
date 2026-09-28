import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "narrow" | "normal" | "wide";
}

export default function Container({
  children,
  className = "",
  size = "normal",
}: ContainerProps) {
  const maxWidths = {
    narrow: "max-w-4xl",
    normal: "max-w-7xl",
    wide: "max-w-7xl px-4 sm:px-6 lg:px-8",
  };

  return (
    <div
      className={`mx-auto px-4 sm:px-6 lg:px-12 w-full ${maxWidths[size]} ${className}`}
    >
      {children}
    </div>
  );
}
