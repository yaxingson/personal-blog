/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.md",
    "./blog/**/*.{vue,js,ts,jsx,tsx,md}",
    "./projects/**/*.{vue,js,ts,jsx,tsx,md}",
    "./.vitepress/**/*.{vue,js,ts,jsx,tsx,md}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

