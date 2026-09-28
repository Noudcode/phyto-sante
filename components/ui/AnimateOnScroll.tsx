"use client";

import React, { useEffect, useRef, useState } from "react";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: "fade-up" | "fade-down" | "fade-in" | "slide-left" | "slide-right";
  delay?: number;
  duration?: number;
  className?: string;
}

export default function AnimateOnScroll({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 600,
  className = "",
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getAnimationStyles = () => {
    if (!isVisible) {
      switch (animation) {
        case "fade-up":
          return "opacity-0 translate-y-8";
        case "fade-down":
          return "opacity-0 -translate-y-8";
        case "slide-left":
          return "opacity-0 -translate-x-8";
        case "slide-right":
          return "opacity-0 translate-x-8";
        case "fade-in":
        default:
          return "opacity-0 scale-95";
      }
    }
    return "opacity-100 translate-y-0 translate-x-0 scale-100";
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all ease-out ${getAnimationStyles()} ${className}`}
    >
      {children}
    </div>
  );
}
