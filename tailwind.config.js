/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        textColor: "#E3B577"
      },
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

