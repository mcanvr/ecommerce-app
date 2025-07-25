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
    },
  },
  plugins: [],
};
