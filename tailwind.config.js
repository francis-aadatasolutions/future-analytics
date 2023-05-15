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
    extend: {
      animation: {
        blob: 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'tranlate(0px, 0px) scale(1)',
          },
        },
      },
      dropShadow: {
        '4xl': [
          '-4px -4px 4px #ffffff',
          '4px 4px 8px rgba(120, 120, 120, 0.15)',
        ],
        '5xl': [
          '-6px -6px 8px #FFFFFF',
          '6px 6px 8px rgba(216, 224, 233, 0.6)',
        ],
        '6xl': ['0px 4px 20px rgba(90, 176, 224, 0.1)'],
        '7xl': ['0 5px 10px rgba(0, 0, 0, 0.1)'],
      },
      backgroundImage: {
        'hero-pattern': "url('/aboutus.svg')",
        'hero-circle': "url('/circlebg.svg')",
      },
    },
  },
  plugins: [],
};
