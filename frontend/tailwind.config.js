/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Nunito: "Nunito",
        Pacifico: "Pacifico",
        Merriweather: "Merriweather",
      },
      animation: {
        marquee1: "marquee1 35s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee1: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
