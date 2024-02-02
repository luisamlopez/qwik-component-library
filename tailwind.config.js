/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    minWidth: {
      '490': '490px',
      '368': '368px',
      '320': '320px',
      '340': '340px',
    },
    maxWidth: {
      '600': '600px',
      '368': '368px',
      '320': '320px',
      '340': '340px',
      '500': '500px',
      '700': '700px',
      '1024': '1024px'

    },
    minHeight: {
      '300': '300px',
    },
    extend: {
      fontFamily: {
        ppneuemontrealMedium: ['PPNeueMontreal-Thin'],
        ppneuemontrealRegular: ['PPNeueMontreal-Book'],
        ppneuemontrealBold: ['PPNeueMontreal-Medium'],
        montserrat: ['Montserrat', 'sans-serif'],
        robotoMediumItalic: ['Roboto-MediumItalic']
      },
      transitionProperty: {
        'width': 'width'
      },
      margin: {
        'headbanner': '718.5px',
        'fivepercent': '4%',
        'onepercent': '1%',
      },
      padding: {
        'fivepercent': '4%',
        'onepercent': '1%',
      },
      objectPosition: {
        customPos: '75%',
      },
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
      },
      width: {
        '50': '12.5rem',
        '164': '164px',
        '760': '760px',
        '358': '358px',
        '368': '368px',
        '320': '320px',
        '340': '320px',
        '620': '620px',
      },
      height: {
        'headbanner': '805px',
        '42': '42px',
      },
    },
    colors: {
      transparent: 'transparent',
      'CarouselBttnColor': '#ffd523',
      'Black': '#000000',
      'White': '#ffffff',
      'Gray': '#f2f2f2',
      'Gray-border': '#e1e1e1',
      'Gray-text': '#9a9a9a',
      'Gray-separator': '#d4d4d4',
      'Gray-checkoutbg': '#f4f4f4',
      'Gray-icons': '#474747',
      'Gray-footerFont': '#898888',
      'Gray-paymentBorder': '#eae9ec',
      'Gray-paymentBg': '#fafafa',
      'Gray-paymentBG': '#fafbfd',
      'Blue-link': '#1352b7',
      'Gray-superlight': '#cbc8c863',
      'Gray-dottedBG': '#f9f9f9'
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
};
