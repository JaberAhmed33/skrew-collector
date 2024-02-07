/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        pup: 'pup 1s ease-in-out infinite',
      },
      colors: {
       winner: {
        70: "#00cc99"
       },
       skrew: {
        70: "#00802b"
       },
       main: {
        30: "#c2c2f0",
        50: "#9898e6",
        70: "#5b5bd7"
       },
      },
    },
  },
  plugins: [],
}