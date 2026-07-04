/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black:   '#070503',
          section: '#111111',
          gold:    '#D5A32F',
          'gold-hover': '#F1D062',
          'gold-warm':  '#D5B156',
          'gold-antique': '#966C1B',
          heading: '#F0E19B',
          border:  '#966C1B',
        },
      },
      fontFamily: {
        heading: ['"Cinzel"', 'serif'],
        body:    ['"Inter"', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          '0%':   { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease forwards',
      },
    },
  },
  plugins: [],
};
