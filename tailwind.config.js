/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./content/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      colors: {
        'brand-dark': '#222222',
        'brand-gold': '#a88562',
        'brand-light': '#fdfdfd',
        'brand-gray': '#f5f5f5',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
