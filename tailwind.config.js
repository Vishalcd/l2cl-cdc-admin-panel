/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateColumns: {
        // user table grid
        userTable: "0.4fr 1.6fr 1.6fr 1.4fr 1.2fr 1fr 32px",
        shiningStarsTable: "0.6fr 1.4fr 1.5fr 1.3fr 1.2fr 1fr 32px",
        l2clTeamTable: "0.5fr 1.2fr 1.5fr 1fr 32px",
      },
      colors: {
        "black-rgba": "rgba(0, 0, 0, 0.54)",
      },
    },
  },
  plugins: [],
};
