/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        avenir: ["Avenir LT Std", "sans-serif"],
      },
      dropShadow: {
        custom: "0 0 0.75rem rgb(11, 150, 9)", // Custom drop-shadow
      },
      lineHeight: {
        "extra-loose": "2.5", // Custom line-height
        "super-tight": "1.1", // Custom line-height
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["false", "light", "cupcake"],
  },
};
