/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#081426",
          "light-1": "#0e1b33",
          "light-2": "#91b4e8",
        },
        secondary: "#60FFD9",
      },
    },
  },
  plugins: [],
};
