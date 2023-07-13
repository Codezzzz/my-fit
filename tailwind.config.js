/** @type {import('tailwindcss').Config} */

const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };
const px0_1000 = { ...Array.from(Array(1001)).map((_, i) => `${i}px`) };

module.exports = {
  darkMode: "class",
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {},
      fontSize: px0_100,
      borderWidth: px0_100,
      lineHeight: px0_100,
      spacing: px0_200,
      width: px0_1000,
      height: px0_1000,
      minWidth: px0_1000,
      minHeight: px0_1000,
      maxWidth: px0_1000,
      maxHeight: px0_1000,
      fontFamily: {
        // pretendard
        Pretendard: ["Pretendard", "sans-serif"],
      },
    },
  },
  plugins: [],
};
