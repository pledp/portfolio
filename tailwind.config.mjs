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
          100: '#e6552c',
          200: '#de6543'
        },

        blue: {
          100: '#6036e0'
        }
      },
    },
  },
  plugins: [],
};
