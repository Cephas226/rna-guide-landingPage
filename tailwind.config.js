/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'green-deep':    '#1B4332',
        'green-primary': '#2D6A4F',
        'green-light':   '#52B788',
        'green-pale':    '#D8F3DC',
        'gold':          '#D4A017',
        'terra':         '#E07B39',
        'sand':          '#F2EFE8',
        'sand-dark':     '#E8E2D6',
        'ink':           '#111A14',
        'muted':         '#6B7E72',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans:    ['"DM Sans"', 'sans-serif'],
        mono:    ['"DM Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
