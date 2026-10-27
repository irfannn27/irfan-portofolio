/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Inter', 'Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

