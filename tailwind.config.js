/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#0F2A4A', light: '#1B3A5B', dark: '#0A1F37' },
        gold: { DEFAULT: '#C8A35B', dark: '#A8843F', light: '#E2C890' },
        ink: '#1F2933',
        muted: '#6B7280',
        bg: '#F7F8FA',
        line: '#E5E7EB',
        paper: '#FAF8F3',
        'brand-soft': '#2C4063'
      },
      fontFamily: {
        sans: ['"PingFang SC"', '"Microsoft YaHei"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        serif: ['Georgia', '"Times New Roman"', 'serif']
      },
      boxShadow: {
        card: '0 1px 3px rgba(15,42,74,0.08), 0 8px 24px rgba(15,42,74,0.05)'
      },
      maxWidth: { container: '1200px' }
    }
  },
  plugins: []
}
