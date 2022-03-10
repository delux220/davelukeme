module.exports = {
  purge: {
    enabled: false,
    content: ["./src/**/*.{js,jsx,ts,tsx}"]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["proxima-nova"],
      serif: ["Libre Baskerville", "georgia", "serif"],
      slab: ["Alfa Slab One"]
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
