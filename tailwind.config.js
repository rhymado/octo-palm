/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      spacing: {
        30: "7.5rem",
        15: "3.75rem",
      },
      colors: {
        primary: "#1f274c",
        secondary: "#fc583b",
        accent: "#f3f5fc",
      },
    },
  },
  plugins: [require("daisyui")],
};
