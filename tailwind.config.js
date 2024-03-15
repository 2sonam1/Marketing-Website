/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['customFont', 'sans-serif'],
        'Nunito': ['Nunito','sans-serif'],
        
      },
      colors: {
        blue: '#2430A0',
        white: '#ffffff',
        gray: '#ABADB6',
        lightBlue: '#E9EFFF',
        lightGray: '#A7A7A7',
        superLightBlue: '#D3DEEC',
        purple: '#51557D',
        golden: '#FFB051',
        footer: '#F4F7FA',
        orange:'#FB7356',
        pro:'#789CCA'

      }
    },

  },
  plugins: [],
}

