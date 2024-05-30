/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        nav: "#F2F2F2",
        primary_black: "#0D0D0D",
        primary_red: "#8c1c03",
        primary_yellow: "#F2B680",
        primary_darkbrown: "#59341E",
        primary_litebrown: "#8c593B",
        pizzaRed: "#D92B04",
        pizzaGreen: "#93A603",
        pizzaOrange: "#F27405",
        pizzaYellow: "#F2994B",
        pizzaNavy: "#222940",
      },
    },
    backgroundImage: {
      hero_img: "('./public/header-banner.png')",
    },
    fontFamily: {
      outfit: ["Outfit" , "sans-serif"],
      poetsen: ["Poetsen One", "sans-serif"],
    },
  },
  plugins: [],
};
