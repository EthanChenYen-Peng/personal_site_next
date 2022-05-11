module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#13292A',
        secondary: '#ECECEC',
        darkgrayblue: {
          200: '#576C6E',
        },
      },
      fontFamily: {
        worksans: 'Work Sans',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
