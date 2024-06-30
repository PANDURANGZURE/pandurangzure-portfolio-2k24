/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      boxShadow: {
        glow: [
          "0 0px 20px rgba(255, 255, 255, 0.35)",
          "0 0px 65px rgba(255, 255, 255, 0.2)",
        ],
      },
    },
  },
  plugins: [],
}

