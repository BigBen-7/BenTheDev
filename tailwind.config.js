/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        dancingScript:["Dancing Script", 'cursive'],
        inter:["Inter", "serif"],
        oleo:["Oleo Script Swash Caps", 'system-ui']
      },
      
      },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
    darkTheme: 'light'
  },
}