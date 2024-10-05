/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        primary : "#8ABA51",
        secondary : "#758888",

      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}



  //routes , pages, layout ,component>shared,ui


  // routes => indexjsx =>routes management

  // layoutes => main, dashboard,auth  