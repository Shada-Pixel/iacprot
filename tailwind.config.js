/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        space: ['Space Grotesk', 'sans-serif'],
        ibm: ['IBM Plex Sans', 'sans-serif'],
      },
      lineHeight: {
        'extra-tight': '75% !important'
      }
    },
  },
  plugins: [],
}