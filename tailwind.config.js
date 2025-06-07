/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ⬅️ WAJIB

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  colors: {
    text: "#f8fbfc",
    background: "#000000",
    primary: "#59CE8F",
    secondary: "#E8F9FD",
    accent: "#ffa094",
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
