/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        inter: 'Inter',
        lato: 'Lato',
        montserrat: 'Montserrat',
        georgian: 'Noto Sans Georgian',
        poppins: 'Poppins',
        raleway: 'Raleway',
        roboto: 'Roboto',
        robotoMono: 'Roboto Mono',
        syncopate: 'Syncopate'
      }
    },
  },
  plugins: [],
}

