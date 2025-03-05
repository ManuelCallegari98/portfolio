import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        racing: {
          light: '#A3D3F5',  // Celeste Racing
          primary: '#1C3463', // Azul oficial
          yellow: '#FFD100',  // Amarillo emblemático
          accent: '#FFFFFF',
          dark: '#0A1A36',     // Azul noche
          backgroundLight: '#F8FAFC',
          textLight: '#1E293B'
        }
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
}
export default config