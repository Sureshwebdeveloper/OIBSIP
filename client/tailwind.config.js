/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        nav: "#F2F2F2",
        pizzaRed: "#D92B04",
        pizzaGreen: "#93A603",
        pizzaOrange: "#F27405",
        pizzaYellow: "#F2994B",
        pizzaNavy: "#222940",
      },
      backgroundImage: {
        hero_img: "('./public/header-banner.png')",
      },
    },
  },
  plugins: [],
};
