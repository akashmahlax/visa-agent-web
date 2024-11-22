/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#008080', // A soothing teal
        secondary: '#ffe4e1', // Soft pink for contrast
        accent: '#ffd700', // Golden highlights
      },
    },
  },
  plugins: [],
}

