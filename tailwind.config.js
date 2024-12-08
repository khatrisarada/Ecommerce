/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors:{
        primary: "4763eb",
        secondary: "63e3be"
      },
      container:{
        center: true,
        padding:{
          DEFAULT: '1rem',
          sm: "3rem"
        }
      },

    },
  },
  plugins: [],
}

