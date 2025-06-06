# ✈️ LF Airport Transfers

A premium executive transport service in London, focused on luxury, punctuality, and smooth booking experiences for international and corporate clients.

Live at: [https://lfairporttransfers.co.uk](https://lfairporttransfers.co.uk)

---

## 🖥️ Project Overview

This is a modern, responsive website for **LF Airport Transfers**, a high-end private chauffeur and airport transfer service based in London. Built with **Next.js 15**, **Tailwind CSS 4.1**, and deployed via **Vercel**, the site features elegant animations, luxury branding, and seamless user experience across devices.

---

## 🚀 Tech Stack

| Layer          | Technology                             |
|----------------|-----------------------------------------|
| Framework      | [Next.js 15](https://nextjs.org)        |
| Styling        | [Tailwind CSS v4.1](https://tailwindcss.com) |
| Language       | TypeScript                              |
| Animations     | Framer Motion                           |
| Hosting        | [Vercel](https://vercel.com)            |
| SEO            | Next.js Metadata API + Structured Data  |

---

## 📁 Project Structure

```
lfairporttransfers/
├── public/                  # Static assets (images, icons, etc.)
├── src/
│   ├── app/                 # Next.js app directory (routing/pages)
│   │   ├── layout.tsx       # Global layout (font, theme, metadata)
│   │   └── page.tsx         # Homepage (landing sections)
│   ├── components/         # Reusable UI components (Navbar, Hero, Fleet, etc.)
│   ├── styles/             # Tailwind and global CSS
│   └── utils/              # Helper functions
├── tailwind.config.ts      # Tailwind configuration
├── postcss.config.mjs      # PostCSS config with Tailwind plugin
├── tsconfig.json           # TypeScript config
└── README.md               # Project documentation
```

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/seu-usuario/lfairporttransfers.git
cd lfairporttransfers
```

### 2. Install Dependencies

```bash
npm install
```

> Requires Node.js 18+ and npm 9+  
> Optional: `pnpm` or `yarn` supported

---

## 🔧 Development Scripts

| Command               | Description                      |
|-----------------------|----------------------------------|
| `npm run dev`         | Launch dev server (`localhost:3000`) |
| `npm run build`       | Create production build          |
| `npm run start`       | Start production server          |
| `npm run lint`        | Run ESLint for code quality      |

---

## 🌍 SEO & Optimization

- Open Graph Meta Tags for social media sharing
- Optimized `next/image` usage for performance
- Lazy loading and smooth scroll interactions
- Schema.org structured data for business and services
- Local SEO for London-based keywords

---

## 💼 Business Features

- ✨ Hero with animated luxury branding
- 🚘 Fleet showcase with specs and images
- 📱 WhatsApp-integrated booking form
- 🌐 Multilingual-ready (future-proof)
- 🌟 Google reviews integration
- 🧭 Sticky navigation + scrollspy
- 🌑 Dark mode ready

---

## 🔒 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=447541494500
NEXT_PUBLIC_SITE_URL=https://lfairporttransfers.co.uk
```

> No server-side secrets are required. All data is handled client-side or via third-party integrations (e.g., WhatsApp).

---

## 🖼️ Image Optimization

Use [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app) for compressing visuals before placing them into `/public`.

---

## 📡 Deployment

Deployed via **Vercel**. Push to `main` and it auto-deploys:

```bash
git add .
git commit -m "🚀 Launch: LF Airport Transfers website"
git push origin main
```

---

## 👨‍🎨 Credits

Design & Development by [Faysk](https://faysk.top)

---

## 📜 License

This project is licensed under the [MIT License](./LICENSE).