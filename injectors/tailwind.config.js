module.exports = {
  purge: ['./src/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          lignt: '#ffe3fe',
          DEFAULT: '#93329e',
          dark: '#440a67'
        },
        secondary: {
          DEFAULT: '#b4aee8'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};
