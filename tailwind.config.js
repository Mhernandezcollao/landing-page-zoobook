const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4169E1',
        secondary: '#E1F5FE',
        colorNavbar: 'rgba(65, 105, 225, .7)',
      },
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'],
        titanOne: ['TitanOne', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}

