/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        black: "var(--text-color)",
      },
    },
    fontFamily: {
      serif: ["Inter"],
      sans: ["Inter"],
      mono: ["Inter"],
    },
  },
  plugins: [],
};
