module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#003D7A",
        brand: "#003D7A",
        secondary: "#FE9D0B",
        accent: "#FE9D0B",
        tint: "#EBEFF4",
        para: "#2D1115",
        dark: "#111111",
        yellow: "#F8CE01",
      },
    },
    screens: {
      md: "820px",
      sm: "420px",
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
