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
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

