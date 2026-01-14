# Dev Portfolio

A modern, performant developer portfolio built with React 19, TypeScript, and Tailwind CSS v4. Features smooth animations, dark/light theme, blog integration, and a serverless contact form.

### 🌐 [Live Demo → devcodehub99.vercel.app](https://devcodehub99.vercel.app)

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-4.1-06B6D4?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000?logo=vercel)

## ✨ Features

- **Interactive Hero** — Code editor with terminal animation and dev humor
- **Dark/Light Theme** — System-aware with manual toggle, no flash on load
- **Blog Integration** — Auto-fetches articles from Dev.to
- **Contact Form** — Serverless email via Resend (Edge Runtime)
- **Smooth Animations** — Framer Motion with code-split bundle
- **SEO Ready** — Open Graph, Twitter cards, meta tags
- **Analytics** — Vercel Analytics built-in
- **Accessible** — ARIA labels, keyboard navigation, focus states

## 🛠 Tech Stack

| Layer | Tech |
|-------|------|
| Framework | React 19 + TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Forms | React Hook Form + Zod |
| Data Fetching | TanStack Query |
| Backend | Vercel Edge Functions |
| Email | Resend API |

## 📁 Project Structure

```
├── api/
│   └── contact.ts          # Serverless contact form (Edge Runtime)
├── public/
│   ├── favicon.svg
│   ├── og-image.png        # Social share image (1200x630)
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── features/       # Page sections (Hero, About, Skills, etc.)
│   │   ├── layout/         # Navbar, Footer, Section wrapper
│   │   └── ui/             # Reusable UI components
│   ├── config/
│   │   └── site.ts         # ⭐ All site content in one file
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utilities, API client, icons
│   ├── types/              # TypeScript types + Zod schemas
│   └── pages/
│       └── Home.tsx
├── index.html              # SEO meta tags
├── vite.config.ts          # Build config with code splitting
└── vercel.json             # Deployment config
```

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## ⚙️ Configuration

All site content lives in `src/config/site.ts`:

```typescript
// Basic info, hero text, about, skills, projects,
// testimonials, social links, navigation — all in one place
export const siteConfig = {
  name: "Your Name",
  email: "you@example.com",
  devToUsername: "yourdevto",  // Blog integration
  // ...
};
```

## 🔐 Environment Variables

Create `.env.local` for local development:

```env
# Resend API Key (https://resend.com)
RESEND_API_KEY=re_xxxxxxxxxxxx

# Email to receive contact form submissions
CONTACT_EMAIL=your-email@example.com
```

For Vercel deployment, add these in Project Settings → Environment Variables.

## 📦 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy

The `vercel.json` handles routing and the Edge Function automatically.

### Manual Build

```bash
npm run build
# Output in dist/ — deploy to any static host
# Note: Contact form requires Vercel for serverless function
```

## 🎨 Customization

### Theme Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --color-primary: #7c3aed;    /* Purple */
  --color-secondary: #14b8a6;  /* Teal */
  --color-accent: #06b6d4;     /* Cyan */
}

.dark {
  --color-primary: #f59e0b;    /* Golden */
  --color-secondary: #14b8a6;  /* Teal */
  --color-accent: #34d399;     /* Mint */
}
```

### Adding Skills/Projects

Update arrays in `src/config/site.ts`. Icons use [Lucide](https://lucide.dev) and [React Icons](https://react-icons.github.io/react-icons/).

## 📊 Bundle Analysis

Code splitting keeps initial load fast:

| Chunk | Size (gzip) | Contents |
|-------|-------------|----------|
| react-vendor | ~4 KB | React core (cached) |
| animation | ~39 KB | Framer Motion (cached) |
| index | ~116 KB | App code |

## 📄 License

MIT — use it for your own portfolio!
