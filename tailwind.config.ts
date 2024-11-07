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
      fontFamily: {
        radlush: ["Radlush"]
      },
      colors: {
        primary: {
          black: '#000000',
          gray: '#8f8f8f',
          darkgray: '#161614',
          red: '#ff0000',
          white: '#ffffff',
        },
      },
      backgroundColor: {
        'black-transparent': 'rgba(0, 0, 0, 0)',
      },
    },
  },
  plugins: [],
};
export default config;