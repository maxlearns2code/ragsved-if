import tailwindScrollbar from "tailwind-scrollbar";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        tertiary: "var(--tertiary-color)",
      },
      scrollbar: ["thin"],
      scrollbarColor: {
        thumb: "rgba(255, 255, 255, 0.3)",
        track: "transparent",
      },
    },
  },
  plugins: [tailwindScrollbar],
} satisfies Config;
