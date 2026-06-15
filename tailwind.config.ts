import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0A',
        'bg-section': '#111111',
        'bg-card': '#161616',
        cyan: '#00B4CC',
        'cyan-light': '#00D4EE',
        'cyan-muted': '#007A8A',
        'text-muted': '#AAAAAA',
        'border-dark': '#1E1E1E',
        accent: '#0F3A45',
      },
      fontFamily: {
        heading: ['var(--font-montserrat)'],
        body: ['var(--font-inter)'],
      },
      borderRadius: {
        pill: '50px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.4)', opacity: '0' },
          '100%': { transform: 'scale(0.9)', opacity: '0' },
        },
        glow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
        glow: 'glow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
