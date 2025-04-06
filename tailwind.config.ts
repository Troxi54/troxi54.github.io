import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'lol': 'red', // Define your custom color here
      },
    },
  },
  plugins: [],
}
export default config