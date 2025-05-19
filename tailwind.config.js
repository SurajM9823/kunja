/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#263B80', // Royal Blue
          light: '#3C559F',
          dark: '#1A2A60',
        },
        secondary: {
          DEFAULT: '#E31B23', // Vibrant Red
          light: '#F04046',
          dark: '#B81419',
        },
        accent: {
          DEFAULT: '#FFDD00', // Sunshine Yellow
          light: '#FFE74C',
          dark: '#FFCC00',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};