/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}" , "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  theme: {
    extend: {
      animation: {
        'loop-scroll': 'loop-scroll 50s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }                    
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar'),
]
}