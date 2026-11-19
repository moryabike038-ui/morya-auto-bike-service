/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "Noto Sans Devanagari", "sans-serif"],
        display: ["Barlow Condensed", "Noto Sans Devanagari", "sans-serif"]
      },
      colors: {
        theme: {
          black: '#000000',
          navy: '#14213D',
          navyLight: '#1f3159',
          navyDark: '#0b1324',
          accent: '#FCA311',
          accentHover: '#e59208',
          accentLight: '#ffc15e',
          silver: '#E5E5E5',
          silverMuted: '#9ca3af',
          white: '#FFFFFF'
        }
      }
    }
  },
  plugins: []
}
