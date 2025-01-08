/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        primaryDarker: "var(--primaryDarker)",
        secondary: "var(--secondary)",
        mainBackground: "var(--background)"
      }
    },
  },
  plugins: [],
}

