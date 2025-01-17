import type { Config } from "tailwindcss";
// import "@fontsource/playfair-display";
// import "@fontsource/fira-sans-condensed";
// import "@fontsource/overpass";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'display' : ['Playfair Display', 'serif'],
        'heading' : ['Fira Sans Condensed', 'sans-serif'],
        'sans' : ['Overpass', 'sans-serif']
      }
    },
  },
  plugins: [],
} satisfies Config;
