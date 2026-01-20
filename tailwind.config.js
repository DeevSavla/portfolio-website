/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        desktop: ['"Lucida Console"', '"Courier New"', 'monospace'],
        mobile: ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}