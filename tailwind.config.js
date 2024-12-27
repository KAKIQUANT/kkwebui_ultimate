/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff9800',
          hover: '#f57c00',
        },
        secondary: {
          dark: '#1a1a1a',
          600: '#404040',
          700: '#2d2d2d',
          800: '#262626',
          900: '#171717',
        },
        accent: '#7c3aed',
      },
    },
  },
  plugins: [],
}

