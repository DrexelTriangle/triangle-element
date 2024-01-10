/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: '#055C9D',
        secondary: {
          100: '#B4DFFC',
          200: '#73BBEE',
          300: '#2479DF',
          400: '#094886',
        },
      },
      fontFamily: {
        heading: ['Roboto Slab', 'Helvetica', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: [],
}

