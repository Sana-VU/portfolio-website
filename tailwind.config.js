/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { lg: "1024px", xl: "1200px", "2xl": "1440px" },
    },
    extend: {
      colors: {
        primary: "#1E3A8A",
        accent: "#D4AF37",
        secondary: "#6B7280",
        light: "#F3F4F6",
        dark: "#111827",
        success: "#059669",
        base: "#FFFFFF",
        alt: "#FAFAFA",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        sans: ["Inter", "Source Sans Pro", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
