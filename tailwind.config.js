/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/react-app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'float': 'float 20s infinite linear',
        'theme-expand': 'themeExpand 600ms ease-out forwards',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100vh) rotate(360deg)', opacity: '0' },
        },
        themeExpand: {
          '0%': { 
            width: '48px', 
            height: '48px',
            opacity: '0.8'
          },
          '20%': {
            opacity: '0.7'
          },
          '40%': {
            opacity: '0.5'
          },
          '60%': {
            opacity: '0.3'
          },
          '80%': {
            opacity: '0.1'
          },
          '100%': { 
            width: '300vw', 
            height: '300vw',
            opacity: '0'
          },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
};
