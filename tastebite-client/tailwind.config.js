/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {

    extend: {
      colors: {
        "primary-color": "#FFEA74",
        "secondary-color": "#FF785B",
      },
      fontFamily: {
        sans: ['"Jost"', 'sans-serif']
      },

      width: {
        width: {
          400: '400px',
          760: '760px',
          780: '780px',
          800: '800px',
          900: '900px',
          1000: '1000px',
          1200: '1200px',
          1400: '1400px',
        },
      },
      minWidth: {
        155: "155px",
        190: "190px",
        215: "215px",
        240: "240px",
        256: "256px",
        327: "327px",
      },
      height: {
        300: "300px",
        557: "557px",
      },
    },
  },
};
