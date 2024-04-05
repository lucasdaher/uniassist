/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-50": "#eef3fe",
        "blue-100": "#c9dafb",
        "blue-200": "#afc8f9",
        "blue-300": "#8baff6",
        "blue-400": "#75a0f5",
        // ---------------- //
        //      DEFAULT     //
        "blue-500": "#5288f2",
        // ---------------- //
        "blue-600": "#4b7cdc",
        "blue-700": "#3a61ac",
        "blue-800": "#2d4b85",
        "blue-900": "#223966",

        "dark-50": "#e7e6e6",
        "dark-100": "#b4b0b0",
        "dark-200": "#908a8a",
        "dark-300": "#5d5454",
        "dark-400": "#3d3333",
        // ---------------- //
        //      DEFAULT     //
        "dark-500": "#0d0000",
        // ---------------- //
        "dark-600": "#0c0000",
        "dark-700": "#090000",
        "dark-800": "#070000",
        "dark-900": "#050000",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
      keyframes: {
        rotate: {
          "0%, 100%": { transform: "translateY(-12%)" },
          "50%": { transform: "translateY(0%)" },
        },
      },
      animation: {
        rotate: "rotate 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
