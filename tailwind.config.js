/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    colors: {
      'warm': {
        '100': '#ffddd2',
        '200': '#e29578',
      },
      'green': {
        "100": '#edf6f9',
        "200": '#83c5be',
        "300": '#006d77',
      },
      'grey': {
        "100": '#777777',
        "200": '#3c3c3c',
      },
      'sunshine': '#ffedcd',
      'danger': '#e73d4a',
      'success': '#78B862',
      'white': '#fff',
      'black': '#000'
    },
    extend: {},
  },
  plugins: [],
};
