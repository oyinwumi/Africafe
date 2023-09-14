/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        font: ['Poppins', 'sans-serif'],
        fontb: ['DM Sans', 'sans-serif'],

      } ,
    }, 
   },
  plugins: [],
}