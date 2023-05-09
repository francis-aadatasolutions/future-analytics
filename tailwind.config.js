/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#0373FF',
      secondary: '#023E8A',
      white: '#ffffff',
      'light-blue': '#EFF6FF',
      red: '#FF1469',
      black: '#000000',
    },
    extend: {},
  },
  plugins: [],
};
