/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  colors: {
    'text': '#f8fbfc',
    'background': '#000000',
    'primary': '#59CE8F',
    'secondary': '#E8F9FD',
    'accent': '#ffa094',
   },   
  theme: {
    extend: {
      animation: {
        scroll: 'scroll 40s linear infinite',
        scrollReverse: 'scrollReverse 40s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
