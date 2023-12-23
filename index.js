const color = {
  white: "#FFFFFF",
  black: "#111111",
  lightBlack: "#252525",
  darkGray: "#838383",
  green: "#6FFF7D",
  red: "#FF8888",
  yellow: "#FFF96F",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        mono: ["Roboto Mono", "mono"],
      },
      colors: {
        text: {
          DEFAULT: color.white,
          dark: color.white,
          light: color.black,
          secondary: {
            DEFAULT: color.darkGray,
            dark: color.darkGray,
            light: color.lightBlack,
          },
        },

        background: {
          DEFAULT: color.black,
          dark: color.black,
          light: color.white,
          secondary: {
            DEFAULT: color.lightBlack,
            dark: color.lightBlack,
            light: color.darkGray,
          },
        },

        special: {
          red: color.red,
          green: color.green,
          yellow: color.yellow,
        },
      },
      padding: {
        max: "max(calc((100vw - 1248px)/2),6.6%)",
      },
      gradientColorStops: {
        hover: ["#fff", "#C0C0C0"],
      },
    },
  },
};
