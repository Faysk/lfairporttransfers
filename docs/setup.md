# 🚀 LF Airport Transfers – Projeto Next.js + Tailwind CSS 4.1

Documentação completa para instalar, configurar e rodar o projeto em qualquer máquina nova usando Tailwind CSS v4.1, Next.js v15.3.2 e Node.js v22.15.0.

---

## 📦 Requisitos

| Ferramenta      | Versão mínima |
|-----------------|----------------|
| Node.js         | 18.x ou superior |
| npm             | 9.x ou superior |
| Git (opcional)  | 2.3+ (para clonar via repositório) |

---

## 📥 Instalação dos Pacotes

```bash
npm install -D tailwindcss@latest @tailwindcss/postcss postcss@latest autoprefixer@latest
```

❗ **Não instale `tailwindcss-cli`** — ele instala uma versão antiga que quebra o build.

---

## 📁 Estrutura Esperada

```
lfairporttransfers/
├─ public/
│  └─ noise.svg (opcional)
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  └─ styles/
│     └─ globals.css
├─ tailwind.config.ts
├─ postcss.config.mjs
├─ tsconfig.json
├─ package.json
└─ .gitignore
```

---

## 🔧 Arquivos de Configuração

### `tailwind.config.ts`

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        onyx: '#353935',
        jet: '#2e2e2e',
        champagne: '#f7e7ce',
        gold: '#d4af37',
        platinum: '#e5e4e2',
        obsidian: '#0c0c0c',
        graphite: '#1f1f1f',
        success: '#34d399',
        warning: '#fbbf24',
        error: '#f87171',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['"Playfair Display"', 'serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        full: '9999px',
      },
      boxShadow: {
        luxury: '0 10px 25px rgba(0,0,0,0.25)',
        soft: '0 6px 14px rgba(0,0,0,0.1)',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1.2s cubic-bezier(0.4, 0, 0.2, 1) both',
      },
    },
  },
  plugins: [],
}

export default config
```

### `postcss.config.mjs`

```js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

### `src/styles/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 1.2s cubic-bezier(0.4, 0, 0.2, 1) both;
  animation-delay: 0.3s;
}

@supports (backdrop-filter: blur(10px)) {
  .backdrop-blur {
    backdrop-filter: blur(10px);
  }
}

@layer utilities {
  .luxury-gradient {
    background: linear-gradient(
      135deg,
      rgba(12, 12, 12, 0.95) 0%,
      rgba(31, 31, 31, 0.92) 50%,
      rgba(12, 12, 12, 0.89) 100%
    );
    backdrop-filter: blur(12px);
  }

  .text-3d {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3),
                 0 0 8px rgba(212, 175, 55, 0.15);
  }

  .hover-lift {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .hover-lift:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.3);
  }
}
```

---

## 🧪 Scripts

```bash
# Desenvolvimento
npm run dev

# Produção
npm run build
npm start
```

---

## 🧼 Limpeza manual no Windows

```powershell
Remove-Item -Recurse -Force .next
```

---

## 📍 SEO/OG Configuração no `layout.tsx`

```tsx
metadata: {
  metadataBase: new URL("https://lfairporttransfers.co.uk"),
  title: "LF Airport Transfers | Executive Chauffeur Service in London",
  description: "Premium airport transfers and chauffeur service in London. Ride in luxury Mercedes V-Class, arrive in style. 24/7 service.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://lfairporttransfers.co.uk/",
    title: "LF Airport Transfers | Executive Chauffeur Service in London",
    description: "Premium airport transfers and chauffeur service in London",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LF Airport Transfers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@lf_transfers",
  },
}
```

