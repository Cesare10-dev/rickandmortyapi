module.exports = {
  jit: true,
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "orange-custom": "#EA8430",
        "light-blue": "#03C1D8",
        "custom-yellow": "#FCFA77",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
