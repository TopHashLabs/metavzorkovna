module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        neus: ['Neue Machina', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        work: ['Work Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        lato: ['Lato', 'sans-serif']
      },
      screens: {
        mobile: { max: '820px' },
      }
    }
  },
  plugins: []
}
