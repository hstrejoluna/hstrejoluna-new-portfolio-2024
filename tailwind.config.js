/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'picton-blue': {
          '50': '#eff7ff',
          '100': '#dfeeff',
          '200': '#b8dfff',
          '300': '#78c5ff',
          '400': '#31a8ff',
          '500': '#068df1',
          '600': '#006ece',
          '700': '#0058a7',
          '800': '#024a8a',
          '900': '#083f72',
          '950': '#06274b',
        },
        // Add other custom colors or extend existing ones here
      },
    },
  },
  plugins: [],
}

