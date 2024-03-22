/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "'node_modules/flowbite-react/lib/esm/**/*.js'"
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ["Nunito Sans", "sans-serif"],
        raleway: ["Raleway", "sans-serif"]
      },
      colors: {
        'lightorange': '#F2994A',
        'orange': '#F57A00',
        'darkaccent': '#474249',
        'strongorange': '#F56700',
        'dark': '#2A272B'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

