/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
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
        //////////////////////////// shadcn
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        rotate: {
          "0%, 100%": { transform: "translateY(-12%)" },
          "50%": { transform: "translateY(0%)" },
        },
        ia: {
          "0%, 100%": { transform: "translateX(-12%)" },
          "50%": { transform: "translateX(0%)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        ia: "ia 1s ease-in-out infinite",
        rotate: "rotate 1s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
