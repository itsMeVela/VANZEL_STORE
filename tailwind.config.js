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
        textKu: '#C26582',
        dark: '#1e293b',
        semibold: '#334155',
        dasar: '#64748b',
        pink: '#FFEFF5',
        biru: '#3E9EF7',
        semiPink: '#f9ccdd',
        birumuda: '#DEEFFF',
      },
      screens: {
        '2xl': '1520px'
      }
    },
  },
  plugins: [],
}

