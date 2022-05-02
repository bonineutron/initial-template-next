const { join } = require('path');

module.exports = {
   purge: [join(__dirname, './src/**/*.{js,ts,jsx,tsx}')],
   darkMode: false, // or 'media' or 'class'
   content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   theme: {
      screens: {
         sm: '640px',
         md: '900px',
         lg: '1024px'
      },
      extend: {}
   },
   plugins: [],
   mode: 'jit'
};
