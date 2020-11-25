module.exports = {
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
