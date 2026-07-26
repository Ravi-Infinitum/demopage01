const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'DM Sans', 'sans-serif'],
        mono: ['monospace']
      },
      colors: {
        brand: {
          black: '#000000',
          white: '#ffffff',
          dark: '#111111',
          accent: '#5a31f4', // Shop Pay purple
          gray: '#757575',
          lightGray: '#f6f6f6',
          border: '#e5e5e5',
        }
      }
    }
  },
  plugins: [],
}

