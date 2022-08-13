/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bggray: "#f4f4f4",
      },
      padding: {
        padding: "11px 320px 11px 11px",
      },
      width: {
        800: "900px",
        pw: "768px",
      },
      height: {
        10: "10%",
        90: "90%",
        ph: '432px',
      },
    },
  },
  plugins: [],
};
