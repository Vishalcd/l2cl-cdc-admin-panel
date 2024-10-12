/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateColumns: {
        userTable: "0.4fr 1.3fr 1.2fr 1.2fr 0.8fr 150px 32px",
        employeeTable: "120px 2.2fr 1.4fr 1.2fr 150px 32px",
        shiningStarsTable: "0.6fr 1.4fr 1.5fr 1.3fr 1.2fr 150px 32px",
        l2clTeamTable: "0.5fr 1.2fr 1.5fr 1fr 32px",
        facultyTable: "100px 1fr 1.2fr 1fr 1fr 150px 32px",
        certificateTable: "120px 1.6fr 1.2fr 1.2fr 1fr 0.8fr 32px",
      },
      colors: {
        "black-rgba": "rgba(0, 0, 0, 0.54)",
      },
    },
  },
  plugins: [],
};
