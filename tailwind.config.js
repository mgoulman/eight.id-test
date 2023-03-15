/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: ["responsive"],
      colors: {
        darkGray: "#111111",
        lightGray: "#1E1E1E",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".non": {
          display: "none",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
