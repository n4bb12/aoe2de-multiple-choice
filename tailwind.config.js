module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        fine: { raw: "(pointer: fine)" },
        coarse: { raw: "(pointer: coarse)" },
      },
    },
  },
  plugins: [],
}
