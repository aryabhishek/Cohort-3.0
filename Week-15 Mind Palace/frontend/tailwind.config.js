/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myPurple: {
          50: "#f5f3ff",
          100: "#ebe6ff",
          200: "#d0bfff",
          300: "#b59fff",
          400: "#7f60ff",
          500: "#4920ff",
          600: "#4218e6",
          700: "#3614bf",
          800: "#2a1099",
          900: "#1f0d7d",
        },
      },
    },
  },
  plugins: [],
};
