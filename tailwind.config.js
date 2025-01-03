/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "leaf1": "url('/public/assets/leaf1.png')",
        "leaf2": "url('/public/assets/leaf2.png')",
        "leaf3": "url('/public/assets/leaf3.png')",
        "leafr1": "url('/public/assets/leafr1.png')",
        "leafr2": "url('/public/assets/leafr2.png')",
        "leafr3": "url('/public/assets/leafr3.png')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};

