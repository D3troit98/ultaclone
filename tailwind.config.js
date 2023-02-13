/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'circular-std-medium': ['"CircularStd-Medium"', 'sans-serif'],
        'circular-std-Light': ['"CircularStd-Light"', 'sans-serif'],
        'circular-std-Black': ['"CircularStd-Black"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}