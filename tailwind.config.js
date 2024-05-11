/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    backgroundImage: {
      img: "url('./bg.png')",
    },
  },
  plugins: [require("tailwind-scrollbar")],
  darkMode: "class",
};
