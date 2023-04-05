/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textPrimary: "hsl(240, 38%, 20%)",
        textSecondary: "hsl(240, 18%, 77%)",
      },
      fontFamily: {
        body: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
