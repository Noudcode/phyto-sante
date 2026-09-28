import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          forest: "#1B4332",
          sage: "#2D6A4F",
          dark: "#0A1F16",
        },
        gold: {
          antique: "#B8860B",
          light: "#D4A843",
          muted: "#E6C875",
        },
        cream: {
          lin: "#F3EDE4",
          bg: "#FAF8F5",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
