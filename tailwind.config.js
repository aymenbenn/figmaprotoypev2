
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        soil: {
          DEFAULT: '#B5563B',
          dark: '#8B3A2A',
          light: '#D2765D',
        },
        green: {
          natural: '#4A6B3A',
          avocado: '#6B8E4E',
          forest: '#2D4A2B',
        },
        earth: {
          cream: '#F4EDE0',
          sand: '#E8DCC4',
          dark: '#3E2F23',
        },
        accent: {
          gold: '#D4A03C',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
      },
      backgroundImage: {
        'soil-pattern': "url('data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23b5563b\" fill-opacity=\"0.05\" fill-rule=\"evenodd\"%3E%3Ccircle cx=\"3\" cy=\"3\" r=\"3\"/%3E%3Ccircle cx=\"13\" cy=\"13\" r=\"3\"/%3E%3C/g%3E%3C/svg%3E')",
      }
    },
  },
  plugins: [],
}
