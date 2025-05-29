/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
        },
        blue: {
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
        },
        purple: {
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
        },
        green: {
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
        },
        gray: {
          300: '#D1D5DB',
          400: '#9CA3AF',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border)-(blue|purple|green|red)-(400|500|600|700)/,
    },
  ],
} 