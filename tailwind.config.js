/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#228B22',
        },
        secondary: {
          100: '#F7BF39',
        },
        tertiary: {
          600: '#141B34',
        },
        cream: {
          100: '#FFFDD0',
          200: '#F7BF39',
        },
      },
      fontFamily: {
        REM: '"REM", "sans-serif"',
      },
      screens: {
        xs: '420px',
        xxs: "350px"
      },
    },
  },
  plugins: [],
};
