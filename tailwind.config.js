/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Set 'Work Sans' as the default font family
        sans: ["Work Sans", "sans-serif"],
        // Add 'Playfair Display' as a custom font family
        serif: ["Playfair Display", "serif"],
      },
      colors: {
        primary: "#23BE0A",
        secondary: "#131313",
        third: "#59C6D2",
      },
    },
  },
  daisyui: {
    styled: true,
    theme: [],
    rtl: false,
    
  },
  plugins: [require("daisyui")],
};
