/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#055C9D',
        'secondary-1': '#F4F6FC',
        'secondary-2': '#73BBEE',
        'secondary-3': '#FEF5AC',
        'secondary-4': '#0D203B',
        'neutral-primary': {
          100: "#F8FBF8",
          200: "#E3EBF2",
          300: "#B0BDC1",
          400: "#68869A",
          500: "#2B4257",
          600: "#0D203B",
          700: "#04011B",
        },
        'neutral-secondary': {
          100: "#B4DFFC",
          200: "#094886",
          300: "#0C4160",
        },
        'accent-red': "#DE0F3F",
        'accent-orange': "#FF9045 ",
        'accent-yellow': "#FFE867",
        'accent-green': "#0000FF", // lmao this one is incorrect on the pdf someone can use like a color picker to get it from the graphic
        'accent-blue': "#2479DF",
        'accent-purple': "#B1A1ED",
        'accent-pink': "#FFACEC",
      },
      fontFamily: {
        heading: ['Roboto Slab', 'Helvetica', 'Arial', 'sans-serif'],
        title: ['Playfair Display', 'serif'],
        content: ['Crimson Text', 'serif']
      }
    }
  },
  plugins: [],
}

