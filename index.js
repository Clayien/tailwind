const color = {
  white: "#FFFFFF",
  black: "#111111",
  lightBlack: "#1B1B1B",
  darkGray: "#838383",
};

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: "Poppins",
        mono: "Roboto Mono",
      },
      colors: {
        text: {
          dark: color.white,
          light: color.black,
        },
        "text-secondary": { dark: color.darkGray, light: color.lightBlack },

        background: {
          dark: color.black,
          light: color.white,
        },
        "background-secondary": {
          dark: color.lightBlack,
          light: color.darkGray,
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
