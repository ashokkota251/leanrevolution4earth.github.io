import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      colors: {
        "green-dark": "var(--green-dark)",
        "green-light": "var(--green-light)",
        blue: "var(--blue)",
        "blue-light": "var(--blue-light)",
      },
    },
  },
  plugins: [],
}

export default config
