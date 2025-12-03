/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          900: "#343a55",
          800: "#3d4654",
          600: "#5c616d",
        },
        blue: {
          700: "#5c81b7",
          600: "#607af1",
          400: "#7794e5",
          300: "#bdd1f9",
          200: "#a4b3dd",
          100: "#d7e4f9",
          50: "#dfe9f7",
        },
        red: {
          700: "#985545",
        },
        orange: {
          400: "#ef9275",
        },
        amber: {
          200: "#f4d0b8",
          50: "#f7e9e2",
        },
      },
      screens: {
        xxs: "375px",
        xs: "410px",
      },
      borderWidth: {
        1: "1px",
        3: "3px",
      },
      fontFamily: {
        sans: ['"Noto Sans TC"', '"Microsoft JhengHei"'],
        "genjyuu-bold": ['"GenJyuuGothic-Bold"', '"sans-serif"'],
        Huninn: ['"Huninn"', '"sans-serif"'],
      },
    },
  },
  plugins: [],
};
