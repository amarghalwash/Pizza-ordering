/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { pizza: "#123456" },
      height: { screen: "100dvh" },
    },
    fontFamily: { sans: ["Roboto Mono", "monospace"] },
  },
  plugins: [],
};
