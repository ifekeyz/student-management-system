/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito-Regular"],
        "nunito-bold": ["Nunito-Bold"],
        "nunito-light": ["Nunito-Light"],
        "nunito-semibold": ["Nunito-SemiBold"],
        "nunito-extrabold": ["Nunito-ExtraBold"],
        "nunito-black": ["Nunito-Black"],
        "nunito-extralight": ["Nunito-ExtraLight"],
      },
    },
  },
  plugins: [],
};
