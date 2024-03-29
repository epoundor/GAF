/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary:"#E34429",
        'functional-grey':"#6D7580"
      },
    },
  },
  plugins: [],
}