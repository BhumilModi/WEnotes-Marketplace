module.exports = {
  content: [
    "./pages/**/*.{js}",
    "./components/**/*.{js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        font: ["Source-sans"]
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}
