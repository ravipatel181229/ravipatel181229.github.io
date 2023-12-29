/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {},
    fontFamily: {
      'body': ['"Titillium Web", sans-serif']
    },
    colors: {
      "primary": "#002349",
      "secondary": "#AFD0D6",
      "dark": "#957C3D",
      "light": "#E0FBFC"
    }
  },
  plugins: [],
}
