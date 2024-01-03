/* eslint-disable import/no-extraneous-dependencies */
const defaultTheme = require('tailwindcss/defaultTheme');

const screens = require('./src/lib/breakpoints.json');
const colors = require('./src/lib/palette.json');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.svelte'],
  theme: {
    screens,
    colors,
    extend: {
      fontFamily: {
        sans: ['Barlow', ...defaultTheme.fontFamily.sans],
        serif: ['Averia Serif Libre', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
