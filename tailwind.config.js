/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',           // ← add this (all files in src/ and subfolders)
    './src/**/**/*.{js,jsx,ts,tsx}',        // extra safe for deeper nesting
    // add any other folders if you have e.g. components/, screens/, app/ etc.
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
}