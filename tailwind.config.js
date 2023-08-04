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
        },
        secondary: {
          bg: 'var(--secondary-bg-color)',
          text: 'var(--secondary-text-color)',
          hoverBg: 'var(--secondary-hover-bg-color)',
          hoverText: 'var(--secondary-hover-text-color)',
        },
        accent: {
          bg: 'var(--accent-bg-color)',
          text: 'var(--accent-text-color)',
          hoverBg: 'var(--accent-hover-bg-color)',
          hoverText: 'var(--accent-hover-text-color)',
        },
      }
    },
  },
  plugins: [],
}

