/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      como: ["Cormorant Garamond", "system-ui"],
      rale: ["Raleway", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
    },
    extend: {
      colors: {
        pry: "#2e3a1a",
      },
    },
  },
  plugins: [],
};
