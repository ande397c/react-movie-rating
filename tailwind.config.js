module.exports = {
  content: ['./dist/**/*.html', './src/**/*.{js,jsx,ts,tsx}', './*.html'],
  theme: {
    colors: {
      main: '#232549',
      complementary: '#191A38',
      text: '#f8f2ed',
      secondary: '#ffb65e',
      button: '#6a3a67',
      hover: '#572753',
      logoBg: '#ecc748',
      logoColor: '#000000',
      danger: '#b63d37'
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
