/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
'green-dark': '#64863f',
'green-light': '#bfdf96',
'rectangle' : '#383c40',
'white': '#ffffff',
'blue': '#03c1de'
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '2000px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      width: {
        'rectangle': '120vw',
      }
    },
  },
  plugins: [],
}
