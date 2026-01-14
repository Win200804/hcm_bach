/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Patriotic Vietnam Theme
        'vn-red': '#DA251D',
        'vn-red-dark': '#8B0000',
        'vn-red-light': '#FF4444',
        'vn-yellow': '#FFCD00',
        'vn-gold': '#FFD700',
        'vn-cream': '#FFF8DC',
        'vn-dark': '#1A1A2E',
        'vn-dark-light': '#16213E',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Be Vietnam Pro', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-left': 'slideLeft 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'star-shine': 'starShine 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        starShine: {
          '0%, 100%': { filter: 'brightness(1)' },
          '50%': { filter: 'brightness(1.3)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(135deg, #DA251D 0%, #8B0000 50%, #1A1A2E 100%)',
      }
    },
  },
  plugins: [],
}

