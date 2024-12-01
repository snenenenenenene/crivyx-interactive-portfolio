// tailwind.config.ts
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
        // Neo-brutalist palette
        brutal: {
          black: "#000000",
          white: "#FFFFFF",
          red: "#FF2E00", // Primary accent
          yellow: "#FFE800", // Secondary accent
          blue: "#0019FF", // Tertiary accent
          gray: {
            100: "#F2F2F2",
            200: "#E5E5E5",
            300: "#D4D4D4",
            400: "#A3A3A3",
            500: "#737373",
            600: "#525252",
            700: "#404040",
            800: "#262626",
            900: "#171717",
          },
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
        display: ["Monument Extended", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        brutal: "4px 4px 0 0 #000000",
        "brutal-lg": "8px 8px 0 0 #000000",
        "brutal-xl": "12px 12px 0 0 #000000",
        "brutal-2xl": "16px 16px 0 0 #000000",
      },
      animation: {
        glitch: "glitch 1s infinite",
        "slide-up": "slide-up 0.5s ease-out",
        "slide-down": "slide-down 0.5s ease-out",
      },
      keyframes: {
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "33%": { transform: "translate(-5px, 3px)" },
          "66%": { transform: "translate(5px, -3px)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
