/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#111827",
        
        secondary: "#4A90E2", 
        tertiary:"#F0EADC", 
       
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        dancing: ['Dancing Script', 'cursive'],
      },
      fontSize: {
        clamp: "clamp(1rem, 5vw, 3rem)",
      },
    },
  },
  plugins: [],
}