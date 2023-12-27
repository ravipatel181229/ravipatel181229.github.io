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
      "primary": "#397367",
      "secondary": "#AFD0D6",
      "dark": "#001021",
      "light": "#E0FBFC"
    }
  },
  plugins: [],
}
