/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '350px',
        // sm: '450px',
        // md: '768px',
        // lg: '1200px',
      },
      colors: {
        primary: {
          400: '#228B22',
        },
        secondary: {
          100: '#F7BF39',
          200: '#6B6B6B',
        },
        tertiary: {
          400: '#1C2834',
          600: '#141B34',
        },
        cream: {
          100: '#FFFDD0',
          200: '#F7BF39',
        },
      },
      fontFamily: {
        REM: '"REM", "sans-serif"',
        Lato: '"Lato", sans-serif',
        Montserrat: '"Montserrat", "sans-serif"',
      },
      screens: {
        xs: '420px',
        xxs: '350px',
      },
    },
  },
  plugins: [],
};
