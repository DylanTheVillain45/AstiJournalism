/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // Replace 'Roboto' with your preferred font
        title: ["titleFont", "sans-serif"],
      },
      colors: {
        brown: "#210706",
        red: "#891D1A",
        blue: "#5E657B",
        beige: "#F1E6D2",
      },
    },
  },
  plugins: [],
};