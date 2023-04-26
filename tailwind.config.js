/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "netflixRed": "#e50914",
        "netflixGrey": "#2d2d2d",
        "lightgrey": "#bebebe",
        "netflixBlue": "#142044",
        "netflixBlue2": "#223362",
      }
    },
  },
  plugins: [],
};
