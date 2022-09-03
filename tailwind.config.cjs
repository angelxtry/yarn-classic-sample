module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  plugins: [require('daisyui'), require('@tailwindcss/line-clamp')],
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
    themes: ['light', 'pastel'],
  },
};
