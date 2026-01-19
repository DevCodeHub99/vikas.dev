# Dev Portfolio

A modern, performant developer portfolio built with React 19, TypeScript, and Tailwind CSS v4. Features smooth animations, dark/light theme, blog integration, input validation, and an interactive contact form with toast notifications.

### 🌐 [Live Demo → devcodehub99.vercel.app](https://devcodehub99.vercel.app)

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-4.1-06B6D4?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000?logo=vercel)

## ✨ Features

- **Interactive Hero** — Code editor with terminal animation and dev humor
- **Dark/Light Theme** — System-aware with manual toggle, no flash on load
- **Blog Integration** — Auto-fetches articles from Dev.to with error handling
- **Contact Form** — Interactive form with validation, toast notifications, and smooth animations
- **Input Validation** — Zod schemas for client-side validation with field-level errors
- **Toast Notifications** — Success/error feedback with auto-dismiss
- **Smooth Animations** — Framer Motion with staggered field entrance and state transitions
- **Skeleton Loaders** — Loading states for all async sections
- **SEO Ready** — Open Graph, Twitter cards, meta tags
- **Analytics** — Vercel Analytics built-in
- **Accessible** — ARIA labels, keyboard navigation, focus states, WCAG 2.1 AA

## 🛠 Tech Stack

| Layer | Tech |
|-------|------|
| Framework | React 19 + TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Data Fetching | TanStack Query |
| Forms | Formspree (static) + Zod validation |
| UI Components | Radix UI (toast, tooltip) |
| Icons | Lucide React |

## 📁 Project Structure

```
├── public/
│   ├── favicon.svg
│   ├── og-image.png        # Social share image (1200x630)
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── features/       # Page sections (Hero, About, Skills, etc.)
│   │   ├── layout/         # Navbar, Footer, Section wrapper
│   │   ├── ui/             # Reusable UI components + skeletons
│   │   └── ErrorBoundary.tsx
│   ├── config/
│   │   └── site.ts         # ⭐ All site content in one file
│   ├── hooks/              # Custom React hooks (theme, portfolio, toast)
│   ├── lib/
│   │   ├── icons.ts        # Icon registry (Lucide only)
│   │   ├── validation.ts   # Zod schemas for forms
│   │   ├── api.ts          # API client with retry logic
│   │   ├── utils.ts        # Utility functions
│   │   ├── constants.ts    # App constants
│   │   └── performance.ts  # Performance utilities (throttle, debounce)
│   ├── types/              # TypeScript types
│   └── pages/
│       └── Home.tsx
├── index.html              # SEO meta tags
├── vite.config.ts          # Build config with code splitting
└── vercel.json             # Deployment config + security headers
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

# Lint code
npm run lint
```

## ⚙️ Configuration

All site content lives in `src/config/site.ts`:

```typescript
export const siteConfig = {
  name: "Your Name",
  email: "you@example.com",
  devToUsername: "yourdevto",
  formspreeUrl: "https://formspree.io/f/YOUR_FORM_ID",
  // ... skills, projects, testimonials, social links
};
```

## 📧 Contact Form

The contact form features:

- **Input Validation** — Zod schemas validate name, email, message
- **Field-Level Errors** — Real-time error messages with icons
- **Toast Notifications** — Success/error feedback with auto-dismiss
- **Smooth Animations** — Staggered field entrance, error animations
- **Loading State** — Pulsing button during submission
- **Error Recovery** — Users can retry after failures
- **Accessibility** — ARIA labels, keyboard navigation, screen reader support

Setup:

1. Create account at [formspree.io](https://formspree.io)
2. Create form and get ID
3. Update `formspreeUrl` in `src/config/site.ts`

## 🎨 Customization

### Theme Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --color-primary: #7c3aed;
  --color-secondary: #14b8a6;
  --color-accent: #06b6d4;
}

.dark {
  --color-primary: #f59e0b;
  --color-secondary: #14b8a6;
  --color-accent: #34d399;
}
```

### Adding Skills/Projects

Update arrays in `src/config/site.ts`. Icons use [Lucide React](https://lucide.dev).

## 📊 Performance

### Bundle Size
- **Initial**: ~195 KB (gzipped)
- **Code splitting**: React vendor, animations, app code
- **Optimizations**: Icon consolidation, React Query optimization, simplified theme system

### Metrics
- **FCP**: ~0.8s
- **LCP**: ~1.4s
- **TTI**: ~2.1s
- **Lighthouse**: 95+

## 🔒 Security

- **CSP Headers** — Strict Content Security Policy
- **Input Validation** — Zod schemas for all forms
- **HTTPS** — Enforced via HSTS header
- **XSS Protection** — React escaping + CSP
- **CSRF Protection** — Formspree handles CSRF tokens

## ♿ Accessibility

- **WCAG 2.1 AA** — Compliant
- **ARIA Labels** — All interactive elements
- **Keyboard Navigation** — Full keyboard support
- **Focus Management** — Visible focus indicators
- **Screen Readers** — Semantic HTML + ARIA

## 📚 Key Files

| File | Purpose |
|------|---------|
| `src/config/site.ts` | All site content (edit this!) |
| `src/lib/validation.ts` | Form validation schemas |
| `src/components/features/Contact.tsx` | Interactive contact form |
| `src/hooks/use-theme.ts` | Theme management |
| `vercel.json` | Security headers + routing |

## 🚀 Deployment

Deploy to Vercel with one click:

```bash
npm run build
# Push to GitHub, connect to Vercel
```

Or deploy manually:

```bash
npm run build
# Upload dist/ folder to your host
```

## 📄 License

MIT — use it for your own portfolio!
