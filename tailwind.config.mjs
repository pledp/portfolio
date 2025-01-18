/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#000',
          100: '#151312',
          200: '#1a1716'
        },

        orange: {
          100: '#141111',
          200: '#F89078'
        }
      },
    },
  },
  plugins: [],
};
