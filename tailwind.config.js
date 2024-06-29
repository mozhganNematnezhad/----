/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-green": "#066E48",   
        "screen-bg": "linear-gradient(180deg, #FDFFFC 0%, #EFF1F1 100%)",  
      },
    },
  },
  plugins: [],
};
