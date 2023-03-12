/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      josefinsans: ['Josefin Sans'],
      lato: ['Lato'],
    },
    extend: {
      colors: {
        'body-color': 'black',
        primary: '#151875',
        secondary: '#FB2E86',
        text: '#0D0E43',
        lightblue: '#F6F5FF',
        viola: '#7E33E0',
        gray: '#F5F6F8',
        subtext: '#8A8FB9',
        productbg: '#F6F7FB',
        sectionheading: '#1A0B5B',
        checkbox: '#FFDBF1',
        filterTxt: '#7E81A2',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // add custom variant for expanding sidebar
  ],
};
