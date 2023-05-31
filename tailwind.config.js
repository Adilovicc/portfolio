/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation:{
        'bounce-slow':'bounce 3s infinite'
      },
      lineClamp:{
        8:'8',
        9:'9',
        10:'10',
      }
    },
  },
  plugins: [
  ],
}

