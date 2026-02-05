# Vikas Kumar - Full Stack Developer Portfolio

A modern, high-performance developer portfolio built with React 19, TypeScript, and Tailwind CSS v4. Features smooth animations, dark/light theme, blog integration, PWA support, and comprehensive SEO optimization.

### 🌐 [Live Demo → devcodehub99.vercel.app](https://devcodehub99.vercel.app)

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-4.1-06B6D4?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000?logo=vercel)

---

## ✨ Features

### Core Functionality
- **🎨 Interactive Hero Section** — Animated code editor with terminal sequence and developer humor
- **🌓 Dark/Light Theme** — System-aware with animated toggle, persistent storage, no flash on load
- **📝 Blog Integration** — Auto-fetches articles from Dev.to API with error handling and loading states
- **📧 Contact Form** — Formspree integration with Zod validation, inline feedback, and smooth animations
- **💼 Project Showcase** — 6 real projects with live demos, GitHub links, and tech stack badges
- **🛠️ Skills Display** — 19 skills across 4 categories with animated cards and hover effects
- **💬 Testimonials** — Client testimonials with smooth animations
- **📱 PWA Support** — Installable as mobile app with manifest and service worker ready

### Technical Features
- **⚡ Performance Optimized** — Code splitting, lazy loading, optimized bundle (~105 KB gzipped)
- **🔍 SEO Optimized** — Structured data (JSON-LD), Open Graph, Twitter Cards, meta tags
- **📊 Analytics** — Vercel Analytics integrated for tracking
- **♿ Accessible** — WCAG 2.1 AA compliant, keyboard navigation, screen reader support
- **🎭 Smooth Animations** — Framer Motion throughout with staggered entrances
- **🎯 Centralized Config** — All content managed from single `site.ts` file
- **🔒 Security Headers** — CSP, HSTS, XSS protection via Vercel config

---

## 🛠 Tech Stack

### Core
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.0 | UI library with latest features |
| TypeScript | 5.9.3 | Type safety and better DX |
| Vite | 7.2.4 | Fast build tool and dev server |
| Tailwind CSS | 4.1.18 | Utility-first styling |

### Libraries
| Library | Purpose |
|---------|---------|
| Framer Motion | Smooth animations and transitions |
| TanStack Query | Data fetching and caching |
| React Icons | Centralized icon system |
| Zod | Form validation schemas |
| clsx + tailwind-merge | Conditional class names |

### Integrations
| Service | Purpose |
|---------|---------|
| Formspree | Contact form backend |
| Dev.to API | Blog article fetching |
| Vercel Analytics | Page view tracking |

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg              # Site icon
│   ├── manifest.json            # PWA configuration
│   ├── og-image.webp            # Social media preview (1200x630)
│   └── robots.txt               # Search engine instructions
│
├── src/
│   ├── components/
│   │   ├── features/            # Page sections
│   │   │   ├── Hero.tsx         # Landing section with code animation
│   │   │   ├── About.tsx        # About section with stats
│   │   │   ├── Skills.tsx       # Skills grid with categories
│   │   │   ├── Projects.tsx     # Project cards with filters
│   │   │   ├── Blog.tsx         # Dev.to integration
│   │   │   ├── Testimonials.tsx # Client testimonials
│   │   │   ├── Contact.tsx      # Contact form with validation
│   │   │   └── index.ts         # Barrel exports
│   │   │
│   │   ├── layout/              # Layout components
│   │   │   ├── Navbar.tsx       # Navigation with mobile menu
│   │   │   ├── Footer.tsx       # Footer with links
│   │   │   ├── Section.tsx      # Reusable section wrapper
│   │   │   └── index.ts         # Barrel exports
│   │   │
│   │   ├── ui/                  # Reusable UI components
│   │   │   ├── button.tsx       # Button component
│   │   │   ├── input.tsx        # Input field
│   │   │   ├── textarea.tsx     # Textarea field
│   │   │   ├── form-error.tsx   # Form error display
│   │   │   ├── social-links.tsx # Social media links
│   │   │   ├── skeleton.tsx     # Loading skeletons
│   │   │   └── theme-toggle.tsx # Dark/light mode toggle
│   │   │
│   │   └── ErrorBoundary.tsx    # Error boundary wrapper
│   │
│   ├── config/
│   │   └── site.ts              # ⭐ Centralized content configuration
│   │
│   ├── hooks/
│   │   ├── use-theme.ts         # Theme management hook
│   │   └── use-portfolio.ts     # Data fetching hooks
│   │
│   ├── lib/
│   │   ├── icons.ts             # Centralized icon registry
│   │   ├── validation.ts        # Zod validation schemas
│   │   ├── api.ts               # API client with retry logic
│   │   ├── utils.ts             # Utility functions (cn)
│   │   ├── constants.ts         # App constants
│   │   ├── performance.ts       # Performance utilities (throttle)
│   │   └── queryClient.ts       # TanStack Query config
│   │
│   ├── pages/
│   │   └── Home.tsx             # Main page with lazy loading
│   │
│   ├── types/
│   │   └── index.ts             # TypeScript type definitions
│   │
│   ├── App.tsx                  # Root component
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles + Tailwind
│
├── index.html                   # HTML template with SEO meta tags
├── vite.config.ts               # Vite configuration with code splitting
├── vercel.json                  # Deployment config + security headers
├── tsconfig.json                # TypeScript configuration
├── eslint.config.js             # ESLint configuration
├── package.json                 # Dependencies and scripts
└── README.md                    # This file
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/DevCodeHub99/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see your portfolio.

### Available Scripts

```bash
npm run dev      # Start dev server with hot reload
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

---

## ⚙️ Configuration

### Update Your Information

All content is centralized in `src/config/site.ts`:

```typescript
export const siteConfig = {
  name: "Your Name",
  title: "Your Title",
  email: "your@email.com",
  url: "https://yoursite.com",
  formspreeUrl: "https://formspree.io/f/YOUR_FORM_ID",
  devToUsername: "yourusername",
  // ... more config
};
```

### Add Projects

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description",
    imageUrl: "https://...",
    githubUrl: "https://github.com/...",
    demoUrl: "https://...",
    techStack: ["React", "Node.js", "MongoDB"],
  },
];
```

### Add Skills

```typescript
export const skills: Skill[] = [
  {
    id: 1,
    name: "React",
    category: "frontend",
    icon: "FaReact",
    color: "#61DAFB"
  },
];
```

### Customize Theme Colors

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

---

## 📧 Contact Form Setup

The portfolio uses Formspree for contact form handling:

1. Create account at [formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Update `formspreeUrl` in `src/config/site.ts`:

```typescript
formspreeUrl: "https://formspree.io/f/YOUR_FORM_ID"
```

The form includes:
- ✅ Client-side validation with Zod
- ✅ Field-level error messages
- ✅ Success/error feedback
- ✅ Loading states
- ✅ Smooth animations

---

## 📝 Blog Integration

The portfolio fetches articles from Dev.to:

1. Create account at [dev.to](https://dev.to)
2. Publish some articles
3. Update `devToUsername` in `src/config/site.ts`:

```typescript
devToUsername: "yourusername"
```

Features:
- ✅ Auto-fetches latest articles
- ✅ Shows reading time and reactions
- ✅ Loading skeletons
- ✅ Error handling
- ✅ Responsive cards

---

## 📱 PWA Configuration

Your portfolio is installable as a Progressive Web App:

### What's Included
- ✅ `manifest.json` configured
- ✅ Uses your existing `favicon.svg`
- ✅ App shortcuts (Projects, Contact)
- ✅ Standalone display mode

### Testing PWA
1. Open portfolio on mobile Chrome
2. Tap menu (⋮) → "Install app"
3. App icon appears on home screen
4. Opens in full-screen mode

### Optional: Add Custom Icons
Create PNG icons for better quality:
- `icon-192.png` (192x192px)
- `icon-512.png` (512x512px)

Use [favicon.io](https://favicon.io/favicon-generator/) to generate.

---

## 🔍 SEO Optimization

### Included Features
- ✅ **Structured Data** - JSON-LD for Person, WebSite, ProfessionalService
- ✅ **Open Graph** - Facebook/LinkedIn previews
- ✅ **Twitter Cards** - Twitter previews
- ✅ **Meta Tags** - Title, description, keywords
- ✅ **Canonical URL** - Prevents duplicate content
- ✅ **Robots.txt** - Search engine instructions
- ✅ **Sitemap Ready** - Easy to add sitemap.xml

### Update SEO Meta Tags

Edit `index.html`:

```html
<title>Your Name | Full Stack Developer</title>
<meta name="description" content="Your description" />
<meta property="og:title" content="Your Name" />
<meta property="og:image" content="https://yoursite.com/og-image.png" />
```

### Create OG Image
- Size: 1200x630px
- Format: PNG or WebP
- Place in `/public/og-image.png`
- Update URL in `index.html`

---

## 📊 Performance

### Current Metrics
- **Bundle Size:** 105.50 KB (gzipped)
- **Build Time:** ~10s
- **Lighthouse Score:** 90+ (all categories)

### Optimizations Applied
- ✅ Code splitting (React vendor, animations, app code)
- ✅ Lazy loading (below-the-fold sections)
- ✅ Image optimization (WebP format)
- ✅ Font preloading
- ✅ DNS prefetching
- ✅ Tree shaking
- ✅ Minification

### Bundle Breakdown
```
index.js (main)      105.50 KB  # Your app code
animation.js          39.22 KB  # Framer Motion
react-vendor.js        4.07 KB  # React core
index.css              8.58 KB  # Styles
```

---

## 🔒 Security

### Security Headers (via vercel.json)
- ✅ Content Security Policy (CSP)
- ✅ X-Content-Type-Options
- ✅ X-Frame-Options (DENY)
- ✅ X-XSS-Protection
- ✅ Referrer-Policy
- ✅ Permissions-Policy
- ✅ Strict-Transport-Security (HSTS)

### Input Validation
- ✅ Zod schemas for all forms
- ✅ Client-side validation
- ✅ Server-side validation (Formspree)
- ✅ XSS protection (React escaping)

---

## ♿ Accessibility

### WCAG 2.1 AA Compliant
- ✅ Semantic HTML
- ✅ ARIA labels on all interactive elements
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ Skip to main content link
- ✅ Color contrast ratios
- ✅ Screen reader compatible
- ✅ Alt text on images

### Testing
- Lighthouse accessibility audit: 95+
- Keyboard navigation: Full support
- Screen readers: Tested with NVDA/JAWS

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

#### Method 1: GitHub Integration (Automatic)
1. Push code to GitHub
2. Import project in Vercel dashboard
3. Vercel auto-deploys on every push

#### Method 2: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Deploy to Other Platforms

#### Netlify
```bash
npm run build
# Drag dist/ folder to Netlify dashboard
```

#### GitHub Pages
```bash
npm run build
# Deploy dist/ folder to gh-pages branch
```

### Environment Variables
No environment variables needed! Everything is configured in `src/config/site.ts`.

---

## 🧪 Testing

### Manual Testing Checklist
- [ ] All navigation links work
- [ ] Theme toggle persists
- [ ] Contact form submits successfully
- [ ] Blog articles load
- [ ] All project links work
- [ ] Mobile responsive
- [ ] PWA installable
- [ ] No console errors

### Performance Testing
- Run Lighthouse audit in Chrome DevTools
- Test on [PageSpeed Insights](https://pagespeed.web.dev/)
- Check bundle size with `npm run build`

### SEO Testing
- [Open Graph Debugger](https://www.opengraph.xyz/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [Rich Results Test](https://search.google.com/test/rich-results)

---

## 🎨 Customization Tips

### Change Fonts
Update in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet" />
```

Then in `src/index.css`:
```css
body {
  font-family: 'Your Font', sans-serif;
}
```

### Add New Section
1. Create component in `src/components/features/`
2. Add to `src/pages/Home.tsx`
3. Add navigation link in `src/config/site.ts`

### Change Animations
Edit animation variants in components using Framer Motion:
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
```

---

## 📚 Key Files to Edit

| File | Purpose |
|------|---------|
| `src/config/site.ts` | All content (projects, skills, text) |
| `src/index.css` | Theme colors and global styles |
| `index.html` | SEO meta tags and title |
| `public/manifest.json` | PWA configuration |
| `vercel.json` | Deployment and security settings |

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules dist
npm install
npm run build
```

### Theme Not Persisting
- Check browser localStorage
- Clear browser cache
- Verify theme script in `index.html`

### Contact Form Not Working
- Verify Formspree URL in config
- Check Formspree dashboard for submissions
- Test with valid email format

### Blog Not Loading
- Verify Dev.to username
- Check Dev.to API status
- Ensure you have published articles

---

## 📄 License

MIT License - feel free to use this for your own portfolio!

---

## 🙏 Acknowledgments

- [React](https://react.dev) - UI library
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [React Icons](https://react-icons.github.io/) - Icon library
- [Formspree](https://formspree.io) - Form backend
- [Vercel](https://vercel.com) - Hosting platform

---

## 📞 Contact

**Vikas Kumar**
- Email: DevCodeHub99@gmail.com
- GitHub: [@DevCodeHub99](https://github.com/DevCodeHub99)
- LinkedIn: [DevCodeHub99](https://linkedin.com/in/DevCodeHub99)
- Twitter: [@DevCodeHub99](https://x.com/DevCodeHub99)
- Portfolio: [devcodehub99.vercel.app](https://devcodehub99.vercel.app)

---

**Built with ❤️ and an unreasonable amount of console.log**
