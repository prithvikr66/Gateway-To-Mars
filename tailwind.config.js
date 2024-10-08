/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  plugins:[
  ],
  theme: {
    extend: {
      display:['group-hover'],
      backgroundImage: {
        'gradient-card': 'linear-gradient(to right, #3D3D3D, #8F8270 , #3D3D3D, #8F8270 ,#3D3D3D)',
      },
      fontFamily: {
        'starcruiser': ['starcruiser', 'sans-serif'],
        'd-din-bold': ['d-din-bold', 'sans-serif'],
        'd-din-italic': ['d-din-italic', 'sans-serif'],
        'd-din-regular': ['d-din-regular', 'sans-serif'],
        'd-din-condensed': ['d-din-condensed', 'sans-serif'],
        'd-din-condensed-bold': ['d-din-condensed-bold', 'sans-serif'],
        'd-din-exp': ['d-din-exp', 'sans-serif'],
        'd-din-exp-bold': ['d-din-exp-bold', 'sans-serif'],
        'd-din-exp-italic': ['d-din-exp-italic', 'sans-serif'],
      },
      textShadow: {
        glow: '0 0 8px rgba(255, 255, 255, 0.8)',
      },
      
    },
  },
  plugins: [require('tailwindcss-textshadow')],
}