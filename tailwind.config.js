/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#2D268B",
          secondary: "FFFFFF",
        },
        dark: {
          primary: "#2D268B",
          secondary: "#0F0F0F",
        }
      }
    },
  },
  plugins: [],
}