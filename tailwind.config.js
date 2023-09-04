/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        iseazy: '#E50A4F',
        'iseasy-gray-100': '#F4F4F4',
        'iseasy-gray-200': '#E7E8E8',
        'iseasy-gray-300': '#00000033',
        'iseasy-gray-400': '#333333',
      },
      boxShadow: {
        iseasy: '0px 3px 6px #00000033',
      },
      gap: {
        cards: '30px',
      }
    },
  },
  plugins: [],
}

