/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    letterSpacing: {
      plus: '0.15em'
    },
    extend: {
      boxShadow: {
        sideBar:
          '0px 8px 24px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.1)'
      }
    }
  },
  plugins: []
}
