/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/bg5.svg')",
        'hero-pattern2': "url('/circlebg.svg')",
      },
      dropShadow: {
        '4xl': ['0px 4px 5px rgba(0, 0, 0, 0.10)'],

        '7xl': [
          ' -6px -6px 8px rgba(255, 255, 255, 0.6)',
          '6px 6px 8px rgba(117, 117, 117, 0.25)',
        ],
      },
    },
  },
  plugins: [],
};
