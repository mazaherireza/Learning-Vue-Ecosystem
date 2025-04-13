/** @type {import('tailwindcss').Config} */
/** the special DEFAULT key can be used when you want to define a value with no suffix */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      primary: {
        50: '#e8eefd',
        100: '#ccdafa',
        200: '#abc2f7',
        300: '#89aaf3',
        400: '#6f97f1',
        500: '#5685ee',
        600: '#4f7dec',
        700: '#4572e9',
        800: '#3c68e7',
        900: '#2b55e2'
      },
      crimson: {
        50: '#f0e4e4',
        100: '#d9bbbb',
        200: '#8f8e8e',
        300: '#a56161',
        400: '#923f3f',
        500: '#7f1d1d',
        600: '#771a1a',
        700: '#6c1515',
        800: '#621111',
        900: '#4f0a0a'
      },
      red: {
        50: '#fd3939',
        100: '#fac7c7',
        200: '#f7a2a2',
        300: '#f47c7c',
        400: '#f16060',
        500: '#ef4444',
        600: '#ed3e3e',
        700: '#eb3535',
        800: '#e82d2d',
        900: '#e41f1f'
      },
      gray: {
        50: '#f6f7f9',
        100: '#e8eaee',
        200: '#caced8',
        300: '#b4bac8',
        400: '#a4acbc',
        500: '#949db0',
        600: '#8c95a9',
        700: '#818ba0',
        800: '#778197',
        900: '#656f87'
      }
    }
  },
  plugins: []
}
