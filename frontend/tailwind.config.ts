import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'var(--font-poppins)',
        inter: 'var(--font-inter)',
      },
      gridTemplateColumns: {
        galery: 'repeat(auto-fit, minmax(0, 320px))',
      },
    },

    colors: {
      white: '#ffffff',
      black: '#000000',
      gray: {
        50: '#ebeaec',
        100: '#bfbfc4',
        200: '#a19fa8',
        300: '#808191 ',
        400: '#5b5967',
        500: '#322f41',
        600: '#2e2b3b',
        700: '#24212e',
        800: '#191820',
        900: '#1A1922 ',
      },
      red: {
        50: '#fcecef',
        100: '#f6c4cd',
        200: '#f2a7b4',
        300: '#ec7f92',
        400: '#e9667d',
        500: '#e3405d',
        600: '#cf3a55',
        700: '#a12d42',
        800: '#7d2333',
        900: '#5f1b27',
      },
      orange: {
        50: '#fff1ee',
        100: '#ffd4c9',
        200: '#ffc0af',
        300: '#ffa38a',
        400: '#ff9174',
        500: '#ff7551',
        600: '#e86a4a',
        700: '#b5533a',
        800: '#8c402d',
        900: '#6b3122',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('@shrutibalasa/tailwind-grid-auto-fit'),
  ],
}
export default config
