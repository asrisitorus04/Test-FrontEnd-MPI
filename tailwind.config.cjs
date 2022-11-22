/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage:{
        'bglogin-lg':"url('/assets/bglogin.jpg')"
      }
    },
  },
  plugins: [require("daisyui")],
}
