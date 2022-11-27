/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    fontSize: {
      h1: ["60px", "80px"],
      h2: ["48px", "64px"],
      h3: ["36px", "52px"],
      h4: ["24px", "32px"],
      base: ["12px", "18px"],
    },
    extend: {
      colors: {
        main: "#0693E3",
        pink: "#FF52A5",
        green: "#7CFF01",
        yellow: "#FFF205",
        bg0: "#181E2A",
        bg10: "#2F343F",
        bg20: "#464B55",
        bgMain: "#0693E34D",
        "gray-700": "#454545",
        "gray-600": "#5F5F5F",
        "gray-500": "#999999",
        "gray-400": "#AAAAAA",
        "gray-300": "#D0D0D0",
        "gray-200": "#E3E3E3",
      },
    },
  },
  plugins: [],
};
