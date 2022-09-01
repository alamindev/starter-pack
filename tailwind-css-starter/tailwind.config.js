module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      palanquin: ["Palanquin", "sans-serif"],
    },
    extend: {
      colors: {
        "brand-dark": "#3f3f3f",
        "brand-brown": "#df4d39",
        "brand-brown-50": "#f7f3ed",
      },
      screens: { 
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
};
