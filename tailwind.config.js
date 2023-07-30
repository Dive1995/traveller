/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: 'var(--primary-bg-color)',
          text: 'var(--primary-text-color)',
          hoverBg: 'var(--primary-hover-bg-color)',
          hoverText: 'var(--primary-hover-text-color)',
        }
      }
    },
  },
  plugins: [],
}

