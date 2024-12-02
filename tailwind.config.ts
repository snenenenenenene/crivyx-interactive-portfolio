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
        brutal: {
          black: "#000000",
          white: "#FFFFFF",
          red: "#EF4444", // Changed to the modern red
          secondary: {
            red: "#DC2626", // A darker shade for hover states
            light: "#FCA5A5", // A lighter shade for accents
          },
          gray: {
            100: "#F3F4F6",
            200: "#E5E7EB",
            300: "#D1D5DB",
            400: "#9CA3AF",
            500: "#6B7280",
            600: "#4B5563",
            700: "#374151",
            800: "#1F2937",
            900: "#111827",
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
    },
  },
  plugins: [],
};

export default config;
