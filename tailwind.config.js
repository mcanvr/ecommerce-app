/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#1A1A1A',
          800: '#333',
          700: '#4D4D4D',
          600: '#666666',
          500: '#808080',
          400: '#999999',
          300: '#B3B3B3',
          200: '#CCCCCC',
          100: '#E6E6E6',
          0: '#FFFFFF',
        },
        success: '#0C9409',
        error: '#ED1010',
      },
      fontFamily: {
        'general-sans': ['GeneralSans-Regular'],
        'general-sans-light': ['GeneralSans-Light'],
        'general-sans-medium': ['GeneralSans-Medium'],
        'general-sans-semibold': ['GeneralSans-Semibold'],
        'general-sans-bold': ['GeneralSans-Bold'],
        'general-sans-extralight': ['GeneralSans-Extralight'],
        'general-sans-italic': ['GeneralSans-Italic'],
        'general-sans-light-italic': ['GeneralSans-LightItalic'],
        'general-sans-medium-italic': ['GeneralSans-MediumItalic'],
        'general-sans-semibold-italic': ['GeneralSans-SemiboldItalic'],
        'general-sans-bold-italic': ['GeneralSans-BoldItalic'],
        'general-sans-extralight-italic': ['GeneralSans-ExtralightItalic'],
      },
      fontSize: {
        h1: ['4rem', { lineHeight: '4.5rem', letterSpacing: '-0.2rem' }],
        h2: ['2rem', { lineHeight: '2.5rem', letterSpacing: '-0.1rem' }],
        h3: ['1.5rem', { lineHeight: '1.8rem' }],
        h4: ['1.25rem', { lineHeight: '1.5rem' }],
        b1: ['1rem', { lineHeight: '1.4rem' }],
        b2: ['0.875rem', { lineHeight: '1.225rem' }],
        b3: ['0.75rem', { lineHeight: '1.05rem' }],
      },
      borderRadius: {
        10: '0.625rem',
      },
      height: {
        button: '3.375rem',
        input: '3.25rem', // 52px
      },
    },
  },
  plugins: [],
};
