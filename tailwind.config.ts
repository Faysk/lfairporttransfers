import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],

  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm:  '640px',
        md:  '768px',
        lg:  '1024px',
        xl:  '1200px',
        '2xl': '1440px',
        '3xl': '1600px', // Ultra-wide support (opcional)
      },
    },

    extend: {
      // 🎨 Cores personalizadas (luxo, metálicos e neutros)
      colors: {
        // Luxo escuro
        onyx:     '#353935',
        jet:      '#2e2e2e',
        obsidian: '#0c0c0c',
        graphite: '#1f1f1f',

        // Tons sofisticados
        champagne: '#f7e7ce',
        gold:      '#d4af37',
        platinum:  '#e5e4e2',

        // Feedback e status
        success: '#34d399',
        warning: '#fbbf24',
        error:   '#f87171',
        info:    '#60a5fa',

        // Texto e suporte visual
        foreground: '#f3f4f6',
        muted:      '#9ca3af',
      },

      // 🖋️ Fontes
      fontFamily: {
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
      },

      // 🟦 Bordas e raio
      borderRadius: {
        sm:     '0.375rem',
        DEFAULT:'0.5rem',
        md:     '0.75rem',
        lg:     '1rem',
        xl:     '1.5rem',
        full:   '9999px',
      },

      // 🌟 Sombras
      boxShadow: {
        luxury: '0 10px 25px rgba(0, 0, 0, 0.25)',
        soft:   '0 6px 14px rgba(0, 0, 0, 0.1)',
        inset:  'inset 0 2px 4px rgba(255, 255, 255, 0.05)',
        glow:   '0 0 20px rgba(212, 175, 55, 0.5)',
      },

      // 🎞️ Animações
      keyframes: {
        'fade-in': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-border': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212, 175, 55, 0.4)' },
          '50%':      { boxShadow: '0 0 0 10px rgba(212, 175, 55, 0)' },
        },
        'float-up': {
          '0%':   { transform: 'translateY(0px)' },
          '50%':  { transform: 'translateY(-6px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
      animation: {
        'fade-in':      'fade-in 1.2s ease-out both',
        'pulse-border': 'pulse-border 2s infinite',
        'float-up':     'float-up 4s ease-in-out infinite',
      },

      // 🖼️ Gradientes de fundo
      backgroundImage: {
        'luxury-gradient': `linear-gradient(
          135deg,
          rgba(12, 12, 12, 0.95) 0%,
          rgba(31, 31, 31, 0.92) 50%,
          rgba(12, 12, 12, 0.89) 100%
        )`,
      },
    },
  },

  plugins: [
    // 📦 Plugins adicionais (opcionais, instalar se necessário)
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/aspect-ratio'),
  ],
};

export default config;
