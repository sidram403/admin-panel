/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        verifiedGreen: '#00C853', // Replace with exact green color if needed
        buttonBlue: '#007BFF',
        tabGray: '#E8E8E8',
      },
      boxShadow: {
        custom: '0px 4px 4px 0px #000000', // Your custom shadow
      },
    },
  },
  plugins: [],
};