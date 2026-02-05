import type { SocialLink, Stat, Testimonial, Project, Skill, TerminalLine, CodeLine } from "@/types";

// ╔══════════════════════════════════════════════════════════════════════════════╗
// ║                           SITE CONFIGURATION                                  ║
// ║  All content organized in the order it appears on the website                ║
// ║  Update this file to customize your portfolio                                ║
// ╚══════════════════════════════════════════════════════════════════════════════╝

// ============================================
// 1. SITE METADATA & BASIC INFO
// ============================================
export const siteConfig = {
  // Personal Info
  name: "Dev Portfolio",
  title: "Full Stack Developer",
  email: "DevCodeHub99@gmail.com",

  // URLs
  url: "https://DevCodeHub99.vercel.app",
  resumeUrl: "/resume.pdf",           // Place file in /public folder
  ogImage: "/og-image.png",           // 1200x630px recommended

  // Integrations
  formspreeUrl: "https://formspree.io/f/xreeeyvl",  // Contact form endpoint
  devToUsername: "devcodehub99",                     // Dev.to blog integration

  // SEO
  description: "Crafting polished, high-performance web applications with a focus on user experience and clean architecture.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "TypeScript",
    "Web Development",
    "Frontend Developer",
    "Backend Developer",
  ],
} as const;

// ============================================
// 2. NAVIGATION (Top of Page)
// ============================================
export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#blog", label: "Blog" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
] as const;

// ============================================
// 3. HERO SECTION (First Section)
// ============================================
export const heroContent = {
  // Main Content
  badge: "Available for new projects",
  headline: "Building digital",
  headlineHighlight: "experiences",
  headlineSuffix: "that matter.",
  subheadline: "I'm a Full Stack Developer crafting polished, high-performance web applications with a focus on user experience and clean architecture.",

  // Code Block Content
  codeLines: [
    { text: "const me = {", color: "text-primary" },
    { text: "  name: Vikas Kumar", color: "text-accent" },
    { text: '  role: "full-stack-dev",', color: "text-muted-foreground" },
    { text: '  expectations: "world-class product",', color: "text-muted-foreground" },
    { text: '  reality: "console.log driven dev",', color: "text-secondary" },
    { text: '  bugs: "rebranded as edge cases",', color: "text-muted-foreground" },
    { text: "  stackoverflow: true,", color: "text-muted-foreground" },
    { text: '  confidence: "depends if build passes"', color: "text-accent" },
    { text: "};", color: "text-primary" },
  ] as CodeLine[],

  // Terminal Sequence
  terminalSequence: [
    { type: "command" as const, text: 'git commit -m "final fix (for real)"' },
    { type: "output" as const, text: "narrator: it was not the final fix", delay: 800 },
    { type: "command" as const, text: "npm run prod" },
    { type: "loading" as const, text: "compiling", delay: 1500 },
    { type: "success" as const, text: "works on my machine ¯\\_(ツ)_/¯" },
  ] as TerminalLine[],

  // Code Block Header
  codeBlockHeader: {
    title: "~/root/terminal",
    colors: {
      red: "#ff5f57",
      yellow: "#ffbd2e",
      green: "#28ca41",
    },
  },
} as const;

// ============================================
// 4. ABOUT SECTION (Second Section)
// ============================================
export const aboutContent = {
  title: "Designer by eye, Developer by code.",
  subtitle: "About Me",
  paragraphs: [
    "I build software the practical way by shipping real products, breaking things, and fixing them better. I care about clean design, solid architecture, and apps that actually work in production, not just in demos.",

    "As a full-stack developer, I handle everything end-to-end: crafting responsive UIs with React and Next.js, designing APIs, structuring backends, managing databases, and deploying to live servers. If something fails, I debug it, optimize it, and make it reliable.",

    "Most of my learning comes from doing, not watching. Give me an idea and a terminal, and I'll turn it into a working product. I enjoy solving messy problems, improving performance, and building systems that are simple, scalable, and built to last."
  ],
} as const;

// Stats (Part of About Section)
export const stats: Stat[] = [
  { value: "1.5+", label: "Years", colorClass: "text-primary" },
  { value: "15+", label: "Projects", colorClass: "text-secondary" },
  { value: "30+", label: "APIs Built", colorClass: "text-foreground" },
  { value: "35+", label: "Deployments", colorClass: "text-primary/80" }
];

// ============================================
// 5. SKILLS SECTION (Third Section)
// ============================================
export const skillCategories = {
  frontend: "Frontend Development",
  backend: "Backend Architecture",
  tools: "Tools & DevOps",
  engineering: "Professional Strengths",
} as const;

export const skills: Skill[] = [
  // Frontend
  { id: 1, name: "JavaScript (ES6+)", category: "frontend", icon: "SiJavascript", color: "#F7DF1E" },
  { id: 2, name: "React", category: "frontend", icon: "FaReact", color: "#61DAFB" },
  { id: 3, name: "Next.js", category: "frontend", icon: "SiNextdotjs", color: "#000000" },
  { id: 4, name: "TypeScript", category: "frontend", icon: "SiTypescript", color: "#3178C6" },
  { id: 5, name: "Tailwind CSS", category: "frontend", icon: "SiTailwindcss", color: "#06B6D4" },
  { id: 6, name: "Responsive UI & Reusable Component", category: "frontend", icon: "FaLayerGroup", color: "#8B5CF6" },

  // Backend
  { id: 7, name: "Node.js", category: "backend", icon: "FaNodeJs", color: "#339933" },
  { id: 8, name: "Express & REST APIs", category: "backend", icon: "SiExpress", color: "#000000" },
  { id: 9, name: "MongoDB", category: "backend", icon: "SiMongodb", color: "#47A248" },
  { id: 10, name: "PostgreSQL", category: "backend", icon: "SiPostgresql", color: "#4169E1" },
  { id: 11, name: "Authentication (JWT / Sessions)", category: "backend", icon: "FaUserLock", color: "#EF4444" },

  // Tools
  { id: 12, name: "Git & GitHub", category: "tools", icon: "FaGitAlt", color: "#F05032" },
  { id: 13, name: "Linux / CLI / Terminal", category: "tools", icon: "FaTerminal", color: "#4B5563" },
  { id: 14, name: "Deployment (VPS / Node hosting)", category: "tools", icon: "FaServer", color: "#10B981" },
  { id: 15, name: "Environment Variables & Config", category: "tools", icon: "FaCogs", color: "#F59E0B" },

  // Professional Strengths
  { id: 16, name: "API Design & Project Structure", category: "engineering", icon: "FaProjectDiagram", color: "#6366F1" },
  { id: 17, name: "Debugging & Production Fixes", category: "engineering", icon: "FaBug", color: "#DC2626" },
  { id: 18, name: "Performance Optimization", category: "engineering", icon: "FaTachometerAlt", color: "#059669" },
  { id: 19, name: "Scalable Solution & Code Architecture", category: "engineering", icon: "FaSitemap", color: "#7C3AED" },
];

// ============================================
// 6. PROJECTS SECTION (Fourth Section)
// ============================================
// Tech Stack Configuration (used by projects)
export const techConfig: Record<string, { color: string; icon: string }> = {
  "React": { color: "#61DAFB", icon: "React" },
  "Node.js": { color: "#339933", icon: "NodeJS" },
  "PostgreSQL": { color: "#4169E1", icon: "PostgreSQL" },
  "Next.js": { color: "#000000", icon: "NextJS" },
  "TypeScript": { color: "#3178C6", icon: "TypeScript" },
  "Prisma": { color: "#2D3748", icon: "Prisma" },
  "WebSocket": { color: "#F7DF1E", icon: "Network" },
  "Python": { color: "#3776AB", icon: "Python" },
  "FastAPI": { color: "#009688", icon: "FastAPI" },
  "OpenAI": { color: "#412991", icon: "OpenAI" },
  "Stripe": { color: "#635BFF", icon: "Stripe" },
  "MongoDB": { color: "#47A248", icon: "MongoDB" },
  "GraphQL": { color: "#E10098", icon: "GraphQL" },
  "Docker": { color: "#2496ED", icon: "Docker" },
  "AWS": { color: "#FF9900", icon: "AWS" },
  "Tailwind CSS": { color: "#06B6D4", icon: "TailwindCSS" },
  "Zustand": { color: "#443E38", icon: "Database" },
  "html2canvas + jsPDF": { color: "#E34F26", icon: "Code" },
  "Cloudinary": { color: "#3448C5", icon: "Server" },
  "Google Gemini AI": { color: "#4285F4", icon: "Lightbulb" },
  "Vite": { color: "#646CFF", icon: "Code" },
  "HTML": { color: "#E34F26", icon: "Code" },
  "CSS": { color: "#1572B6", icon: "Code" },
  "JavaScript": { color: "#F7DF1E", icon: "Code" },
  "OpenWeatherMap API": { color: "#EB6E4B", icon: "Server" },
  "Local Storage": { color: "#FFA500", icon: "Database" },
  "Redux Toolkit": { color: "#764ABC", icon: "Database" },
  "React Router": { color: "#CA4245", icon: "Network" },
} as const;

// Projects Data
export const projects: Project[] = [
  {
    id: 1,
    title: "InvoiceDesk — GST-Compliant Invoicing System",
    description: "A professional invoice management application built with Next.js and MongoDB, featuring automatic GST calculations, responsive design, PDF invoice generation, multi-state tax handling, and secure multi-user workflows tailored for Indian businesses’ billing needs.",
    imageUrl: "https://image.thum.io/get/https://shrinavdurgatrade.vercel.app/_vercel/insights/og.png",
    githubUrl: "https://github.com/DevCodeHub99/sndt-invoice-desk",
    demoUrl: "https://shrinavdurgatrade.vercel.app",
    techStack: ["Next.js", "React", "TypeScript", "MongoDB", "Zustand", "Tailwind CSS", "html2canvas + jsPDF"],
  },
  {
    id: 2,
    title: "ShopEase E-commerce Platform",
    description: "A production-ready e-commerce platform built with Next.js and MongoDB, featuring a complete shopping experience with product browsing, cart, wishlist, orders, and a robust admin dashboard. Includes secure user authentication, Cloudinary-powered image management, and scalable API routes for customer and admin workflows.",
    imageUrl: "https://image.thum.io/get/https://shopease-ecommerce-mu.vercel.app/_vercel/insights/og.png",
    githubUrl: "https://github.com/DevCodeHub99/shopease-ecommerce/",
    demoUrl: "https://shopease-ecommerce-mu.vercel.app",
    techStack: ["Next.js", "React", "MongoDB", "Cloudinary", "Tailwind CSS", "TypeScript"],
  },
  {
    id: 3,
    title: "VisionVoice — Multilingual AI Visual Aid",
    description: "A modern accessibility tool that uses AI to convert real-time images into spoken descriptions and translated text for visually impaired users. It supports multiple languages and provides both descriptive and OCR functionalities using Google’s Gemini AI.",
    imageUrl: "https://image.thum.io/get/https://visionvoice-1073180550844.us-west1.run.app/",
    githubUrl: "https://github.com/DevCodeHub99/VisionVoice---Multilingual-Visual-Aid-for-the-Visually-Impaired",
    demoUrl: "https://visionvoice-1073180550844.us-west1.run.app",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Google Gemini AI", "Vite"],
  },
  {
    id: 4,
    title: "Weather Forecast Application (CloudCompass)",
    description: "A responsive weather app that provides accurate real-time weather information for any city using the OpenWeatherMap API. Users can search by city name or use their location to view current conditions, forecasts, temperature, humidity, wind speed, and more.",
    imageUrl: "https://image.thum.io/get/https://weather947-app.netlify.app",
    githubUrl: "https://github.com/DevCodeHub99/Weather-Forecast-Application",
    demoUrl: "https://weather947-app.netlify.app",
    techStack: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "OpenWeatherMap API"],
  },
  {
    id: 5,
    title: "Student Registration System",
  description: "A simple CRUD web application that lets users register students, display registered entries, and edit or delete records. The app stores student data in local storage and ensures form validation for reliable data entry.",
  imageUrl: "https://image.thum.io/get/https://student-registration-system947.netlify.app",
  githubUrl: "https://github.com/DevCodeHub99/Student-Registration-System",
  demoUrl: "https://student-registration-system947.netlify.app",
  techStack: ["HTML", "CSS", "JavaScript", "Local Storage"],
  },

  {
    id: 6,
    title: "Online Library System",
    description: "A responsive web application that lets users browse, search, and add books across different categories. It features category-based browsing, detailed book pages, and a clean UI built with modern frontend tooling for fast user experiences.",
    imageUrl: "https://image.thum.io/get/https://online-library-system-947.netlify.app",
    githubUrl: "https://github.com/DevCodeHub99/Online-Library-System",
    demoUrl: "https://online-library-system-947.netlify.app",
    techStack: ["React", "Redux Toolkit", "React Router", "Tailwind CSS", "Vite"],
  },
];

// ============================================
// 7. BLOG SECTION (Fifth Section)
// ============================================
export const blogContent = {
  title: "Latest Articles",
  subtitle: "Blog",
  description: "Thoughts on development, design, and technology.",
} as const;

// ============================================
// 8. TESTIMONIALS SECTION (Sixth Section)
// ============================================
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Arjun Mehta",
    role: "Tech Lead",
    company: "Fintech Startup",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
    content: "Collaborated on a payment dashboard project. Clean code, met deadlines, and actually understood the requirements without 10 follow-up calls. Would work with again.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Founder",
    company: "E-commerce Platform",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=150&q=80",
    content: "Built our entire e-commerce platform from scratch. Handled everything from frontend to deployment. Responsive, reliable, and doesn't disappear after delivery.",
  },
  {
    id: 3,
    name: "Vikram Desai",
    role: "Product Manager",
    company: "SaaS Company",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    content: "Solid developer who gets things done. No unnecessary meetings, just regular updates and working code. Fixed bugs faster than we could report them.",
  },
];

// ============================================
// 9. CONTACT SECTION (Seventh Section)
// ============================================
export const contactContent = {
  title: "Let's build something amazing.",
  subtitle: "Get in Touch",
  heading: "Have an idea?",
  description: "I'm currently available for freelance work or full-time opportunities. If you have a project that needs some creative injection, let's chat.",
} as const;

// ============================================
// 10. FOOTER SECTION (Bottom of Page)
// ============================================
export const footerContent = {
  copyright: "Designed & built with precision & an unreasonable amount of console.log.",
  tagline: "No AI was harmed in the making of this portfolio. 😅",
  formspreeCredit: "Forms powered by Formspree (because reinventing email infrastructure is a bad life choice.).",
  devHumor: "If something breaks, it's not a bug-it's a feature waiting to be discovered.",
} as const;

// ============================================
// 11. SOCIAL LINKS (Used in Hero & Contact)
// ============================================
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/DevCodeHub99",
    icon: "Github",
    ariaLabel: "Visit my GitHub profile",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/DevCodeHub99",
    icon: "Linkedin",
    ariaLabel: "Visit my LinkedIn profile",
  },
  {
    name: "X",
    url: "https://x.com/DevCodeHub99",
    icon: "Twitter",
    ariaLabel: "Visit my X profile",
  },
];
