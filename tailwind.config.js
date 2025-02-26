module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-white": "#FFFFFF",
        "secondary-white": "#F5F7F9",
        "tertiary-white": "#E1E7ED",
        "primary-blue": "#1A3150",
        "secondary-blue": "#112948",
        "tertiary-blue": "#1E3554",
        "primary-accent": "#00B1FF",
        "secondary-accent": "#6F8CAA",
        "tertiary-accent": "#1A315066",
        "primary-gray": "#00000029",
      },
      fontFamily: {
        primary: ["Roboto", "sans-serif"],
        secondary: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
