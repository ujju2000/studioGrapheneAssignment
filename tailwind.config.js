/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        backgroundImage : {
          'footerBack' : "url(/public/assets/footerBack.png)"
        },
        colors : {
          'paragraphColor' : 'rgba(255, 255, 255, 0.50)'
        }
    },
    fontFamily: {
      'Poppins' : ['Poppins'],
      'WorkSans' : ["Work Sans",'sans-serif'], 
      'Syne'     : ['Syne', 'sans-serif'],
  },
  plugins: [],
}
}