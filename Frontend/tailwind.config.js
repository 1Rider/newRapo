///** @type {import('tailwindcss').Config} */
//export default {
//  content: [
//    "./index.html",
//    "./src/**/*.{js,ts,jsx,tsx}",
//  ],
//  theme: {
//    extend: {},
//  },
//  plugins: [],
//}


// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      keyframes: {
        'bounce-in': {
          '0%': {
            opacity: 0,
            transform: 'scale(0.5)',
          },
          '50%': {
            opacity: 1,
            transform: 'scale(1.2)',
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)',
          },
        },
        'fade-in': {
          '0%': {
            opacity: 0,
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'bounce-in': 'bounce-in 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};