/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-red': '#FF5A5F',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}