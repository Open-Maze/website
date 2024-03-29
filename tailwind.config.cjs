/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        dark: '#505050',
        light: '#cacaca',
        violet: {
          DEFAULT: '#8c1cec',
          lighter: '#dcbaf9',
          darker: '#841be0',
        },
        midnight: '#5c0f9e',
        skyline: {
          DEFAULT: '#32cbe4',
          darker: '#2fbed4',
        },
        bleach: '#f4f4f4',
        'super-light-gray': '#fbfbfb',
        'light-gray': '#f8f8f8',
      },
      fontFamily: {
        manrope: ['Manrope', 'Helvetica', 'Arial', 'sans-serif'],
        silka: ['Silka', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/logo/header-l-background.svg')",
        'cta-pattern': "url('/src/assets/images/logo/cta-pattern.svg')",
      },
      backgroundSize: {
        40: '40%',
      },
    },
  },
  plugins: ['@tailwindcss/typography', '@tailwindcss/forms', '@tailwindcss/line-clamp', '@tailwindcss/aspect-ratio'],
};
