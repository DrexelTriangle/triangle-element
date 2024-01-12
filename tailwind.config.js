/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors:{
      primary: '#055C9D',
      secondary: {
        100: '#B4DFFC',
        200: '#73BBEE',
        300: '#2479DF',
        400: '#094886',
      },
    },
  },
  plugins: [],
}

