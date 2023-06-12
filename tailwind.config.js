/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Georgia', 'serif'],
    },
      /* realized some colors in the stylesheet are only used once or twice in the design,so I didn't add them here*/
      colors: {
      'blue-light': '#d7e6f4',
      'hover-button': '#efefef',
      'hover-subscribe': '#808080',
      'hover-text': '#595959',
      'text-main': '#222222',
      'text-secondary': '#595959',
    },
    borderRadius: {
        'sm': '0.5rem',
        'md': '1rem',
        'lg': '2rem',
        'full': '9999px',
    },
      },
    extend: {
      spacing:{
          0: '0',
          1: '0.25rem',
          2: '0.5rem',
          3: '0.75rem',
          4: '1rem',
          5: '1.5rem',
          6: '2.25rem',
          7: '3rem',
          8: '4.5rem',
    },
  },
  plugins: [],
}