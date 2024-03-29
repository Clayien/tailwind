/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        mono: ["Roboto Mono", "mono"],
      },
      colors: {
        clayien: {
          black: {
            DEFAULT: "#111111",
            light: "#252525",
          },
          gray: {
            DEFAULT: "#838383",
          },
          white: {
            DEFAULT: "#FFFFFF",
          },
          red: {
            DEFAULT: "#FF8888",
          },
          green: {
            DEFAULT: "#6FFF7D",
          },
          yellow: {
            DEFAULT: "#FFF96F",
          },
        },
      },
      gradientColorStops: {
        hover: ["#fff", "#C0C0C0"],
      },
      spacing: {
        18: "4.5rem",
        max: "max(calc((100vw - 1248px)/2),6.6%)",
      },
      data: {
        selected: "selected=true",
        "not-selected": "selected=false",
      },
    },
  },
};
