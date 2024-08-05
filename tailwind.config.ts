import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './content/**/*.mdx', './public/**/*.svg'],
  theme: {
    extend: {
      colors: {
        background: '#E0E0E0',
        'background-dark': '#0C0C0C',
        text: '#0C0C0C',
        'text-dark': '#E0E0E0',
        selection: '#D1D1D1',
        'selection-dark': '#333333',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
        code: ['var(--font-fira-code)'],
      },
      typography: {
        quoteless: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          },
        },
      },
      keyframes: {
        in: {
          '0%': { transform: 'translateY(18px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        },
        'in-reverse': {
          '0%': { transform: 'translateY(-18px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        },
      },
      animation: {
        in: 'in .5s both',
        'in-reverse': 'in-reverse .5s both',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
} satisfies Config;