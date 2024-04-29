/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        mono: ["Roboto Mono", "mono"],
      },
      colors: {
        black: "#111111",
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
