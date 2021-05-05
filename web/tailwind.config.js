module.exports = {
  important: true,
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: [
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
      ],
      display: ['Signika'],
      body: ['Lato'],
    },
    extend: {
      width: {
        dashboard: '200px',
        content: 'calc(100% - 200px)',
      },
      height: {
        'full-minusNav': 'calc(100% - 4rem)',
        'sub-full': 'calc(100% - 3rem)',
        'full-padded': 'calc(100% - 1rem)',
      },
      colors: {
        green: {
          DEFAULT: '#34D399',
        },
        red: {
          DEFAULT: '#EF4444',
        },
      },
    },
  },
  variants: {
    extend: {
      ringWidth: ['hover'],
    },
  },
  plugins: [],
}
