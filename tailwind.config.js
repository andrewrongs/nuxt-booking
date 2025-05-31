/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./src/app.vue",
  ],
  darkMode: 'class',
  fontFamily: {
    sans: ['Noto Serif TC', 'sans-serif'],
    serif: ['Noto Serif TC', 'serif'],
  },
  theme: {
    extend: {
      screens: {
        'ph': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
}