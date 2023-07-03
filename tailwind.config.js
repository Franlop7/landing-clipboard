/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'strong-cyan': 'hsl(171, 66%, 44%)',
        'light-conic': 'hsl(233, 100%, 69%)',
        'dark-grayish-blue': 'hsl(210, 11%, 33%)',
        'grayish-blue': 'hsl(201, 11%, 66%)',
        'background': '#F2F2F2',
        'background-darker': '#979797',
      },
    },
  },
  plugins: [],
}
