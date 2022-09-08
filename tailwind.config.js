/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/*/*.js'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: 'hsl(0, 0%, 100%)',
      'bright-red': 'hsl(12, 88%, 59%)',
      'dark-blue': 'hsl(228, 39%, 23%)',
      'grayish-blue': 'hsl(227, 12%, 61%)',
      'lighter-red': 'hsl(12, 88%, 70%)',
      'very-dark-brown': '#1e1e26',
      'very-pale-red': 'hsl(13, 100%, 96%)',
    },
    extend: {},
  },
  plugins: [],
};
