/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },

    extend: {
      colors: {
        unggu: '#9F70FD',
        basic: '#64748b',
        reguler: '#475569',
        bold: '#1e293b',
      },
      screens: {
        '2xl': '1820px'
      }
    },
  },
  plugins: [],
}

