export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'coffee': '#8B4513',
        'coffee-light': '#D2B48C',
        'coffee-dark': '#5C4033',
        'coffee-bean': '#4B2E2E',
        'coffee-cream': '#F5F5DC'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}