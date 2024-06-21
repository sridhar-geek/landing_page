/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'HeaderMobile': "url('/HeaderImages/mobile.png')"
      },
      colors: {
        primary: {
          light: "#17ABFF",
          dark: "#00357B",
        },
        btnColor: "#17ABFF",
        footer: "#091d41",
        headerPara: "#182b42",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
        ysabeau: ["Ysabeau", "sans-serif"],
      },
    },
  },
  plugins: [],
};
