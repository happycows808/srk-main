import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['var(--font-bebas)', 'sans-serif'],
        serif: ['var(--font-source-serif)', 'Georgia', 'serif'],
      },
      colors: {
        red: {
          600: '#DC2626',
        },
      },
    },
  },
  plugins: [],
}

export default config
