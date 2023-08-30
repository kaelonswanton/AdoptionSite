/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#efeef1',
        secondary: '#6d11ae',
      }

    },
  },
  plugins: [require("daisyui")],
}