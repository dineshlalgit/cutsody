/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Nunito_Sans: ['Nunito Sans', 'sans-serif'],
        Roboto_Condensed: ['Roboto Condensed', 'sans-serif'],
      },
      screens: {
        hg : { max: '1080px' },
        // => @media (max-width: 1080px) { ... }

        mdm: { min: '769px' },
        // => @media (min-width: 767px) { ... }
        md: { max: '769px' },
        // => @media (max-width: 769px) { ... }

        sm: { max: '639px' },
        // => @media (max-width: 639px) { ... }

        xs: { max: '540px' },
        // => @media (max-width: 540px) { ... }

        lexs: { max: '440px' },
        // => @media (max-width: 440px) { ... }
      },
    },
  },
  plugins: [],
};
