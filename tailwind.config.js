/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,ts,js,tsx,jsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        22: 'repeat(22, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};
