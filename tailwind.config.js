/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  safelist: [
    "hidden",
    "flex",
    "w-1/3",
    "w-2/3",
    "w-full",
    "translate-y-full",
    "translate-y-0",
    "sm:translate-y-0",
    "sm:scale-95",
    "sm:scale-100",
    "opacity-0",
    "opacity-100",
    "ring-2",
    "ring-indigo-500",
    "ring-offset-2",
    "active:scale-[0.98]",
    "active:scale-[0.99]",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      colors: {
        brand: {
          purple: "#E5DEFF",
          yellow: "#FFF4C3",
          orange: "#FFDCC2",
          cyan: "#C6F6F6",
          dark: "#0f172a",
        },
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
        card: "0 0 0 1px rgba(0,0,0,0.03), 0 2px 8px rgba(0,0,0,0.04)",
        glow: "0 0 20px rgba(99, 102, 241, 0.5)",
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-out forwards",
        "slide-up": "slideUp 0.4s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
};
