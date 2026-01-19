import type { SocialLink, Stat, Testimonial, Project, Skill } from "@/types";

// ╔══════════════════════════════════════════════════════════════════════════════╗
// ║                           SITE CONFIGURATION                                  ║
// ║  All site content in one place for easy maintenance                          ║
// ║  Update this file to customize your portfolio                                ║
// ╚══════════════════════════════════════════════════════════════════════════════╝

// ============================================
// 1. BASIC INFO
// ============================================
export const siteConfig = {
  // Personal
  name: "Dev Portfolio",
  title: "Full Stack Developer",
  email: "DevCodeHub99@gmail.com",

  // URLs
  url: "https://DevCodeHub99.vercel.app",
  resumeUrl: "/resume.pdf",           // Place file in /public folder
  ogImage: "/og-image.png",           // 1200x630px recommended

  // Contact Form (Formspree)
  formspreeUrl: "https://formspree.io/f/xreeeyvl",  // Update with your Formspree form ID

  // Blog Integration (Dev.to)
  devToUsername: "devcodehub99",      // Your Dev.to username

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
// 2. HERO SECTION
// ============================================
export const heroContent = {
  badge: "Available for new projects",
  headline: "Building digital",
  headlineHighlight: "experiences",
  headlineSuffix: "that matter.",
  subheadline: "I'm a Full Stack Developer crafting polished, high-performance web applications with a focus on user experience and clean architecture.",
} as const;

// ============================================
// 3. ABOUT SECTION
// ============================================
export const aboutContent = {
  title: "Designer by eye, Developer by code.",
  subtitle: "About Me",
  paragraphs: [
    "I believe that great software is a blend of robust engineering and intuitive design. With over 5 years of experience in full-stack development, I bridge the gap between creative vision and technical execution.",
    "When I'm not coding, I'm exploring new UI trends, contributing to open source, or optimizing application performance. I thrive in collaborative environments where innovation is encouraged.",
  ],
} as const;

// ============================================
// 4. STATS (About Section)
// ============================================
export const stats: Stat[] = [
  { value: "5+", label: "Years Experience", colorClass: "text-primary" },
  { value: "50+", label: "Projects Completed", colorClass: "text-secondary" },
  { value: "20+", label: "Happy Clients", colorClass: "text-foreground" },
  { value: "100%", label: "Commitment", colorClass: "text-primary/80" },
];

// ============================================
// 5. SKILLS
// ============================================
// Icon names from: lucide-react
// Colors: Use brand colors for authenticity
export const skills: Skill[] = [
  // Frontend
  { id: 1, name: "React", category: "frontend", icon: "Code2", color: "#61DAFB" },
  { id: 2, name: "TypeScript", category: "frontend", icon: "Code2", color: "#3178C6" },
  { id: 3, name: "Next.js", category: "frontend", icon: "Code2", color: "#000000" },
  { id: 4, name: "Tailwind CSS", category: "frontend", icon: "Palette", color: "#06B6D4" },
  // Backend
  { id: 5, name: "Node.js", category: "backend", icon: "Server", color: "#339933" },
  { id: 6, name: "PostgreSQL", category: "backend", icon: "Database", color: "#4169E1" },
  { id: 7, name: "MongoDB", category: "backend", icon: "Database", color: "#47A248" },
  { id: 8, name: "GraphQL", category: "backend", icon: "Network", color: "#E10098" },
  { id: 9, name: "Python", category: "backend", icon: "Code2", color: "#3776AB" },
  // Tools
  { id: 10, name: "Docker", category: "tools", icon: "Cloud", color: "#2496ED" },
  { id: 11, name: "AWS", category: "tools", icon: "Cloud", color: "#FF9900" },
  { id: 12, name: "Git", category: "tools", icon: "GitBranch", color: "#F05032" },
];

export const skillCategories = {
  frontend: "Frontend Development",
  backend: "Backend Architecture",
  tools: "Tools & DevOps",
} as const;

// ============================================
// 6. TECH STACK CONFIGURATION
// ============================================
// Tech stack with brand colors and icons for project display
export const techConfig: Record<string, { color: string; icon: string }> = {
  "React": { color: "#61DAFB", icon: "Code2" },
  "Node.js": { color: "#339933", icon: "Server" },
  "PostgreSQL": { color: "#4169E1", icon: "Database" },
  "Next.js": { color: "#000000", icon: "Code2" },
  "TypeScript": { color: "#3178C6", icon: "Code2" },
  "Prisma": { color: "#2D3748", icon: "Database" },
  "WebSocket": { color: "#F7DF1E", icon: "Network" },
  "Python": { color: "#3776AB", icon: "Code2" },
  "FastAPI": { color: "#009688", icon: "Server" },
  "OpenAI": { color: "#412991", icon: "Code2" },
  "Stripe": { color: "#635BFF", icon: "Code2" },
  "MongoDB": { color: "#47A248", icon: "Database" },
  "GraphQL": { color: "#E10098", icon: "Network" },
  "Docker": { color: "#2496ED", icon: "Cloud" },
  "AWS": { color: "#FF9900", icon: "Cloud" },
  "Tailwind CSS": { color: "#06B6D4", icon: "Palette" },
} as const;

// ============================================
// 7. PROJECTS
// ============================================
// Images: Use Unsplash or your own screenshots
// Tech: Must match keys in techConfig for icons
export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe"],
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, drag-and-drop interface, and team analytics.",
    imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    techStack: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "AI-powered content creation platform with multiple templates, SEO optimization, and export capabilities.",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com",
    demoUrl: null,
    techStack: ["Python", "FastAPI", "OpenAI", "React"],
  },
];

// ============================================
// 8. TESTIMONIALS
// ============================================
// Images: Use professional headshots (Unsplash or real photos)
// Note: Replace with real testimonials when you have them
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
// 9. CONTACT SECTION
// ============================================
export const contactContent = {
  title: "Let's build something amazing.",
  subtitle: "Get in Touch",
  heading: "Have an idea?",
  description: "I'm currently available for freelance work or full-time opportunities. If you have a project that needs some creative injection, let's chat.",
} as const;

// ============================================
// 10. BLOG SECTION
// ============================================
export const blogContent = {
  title: "Latest Articles",
  subtitle: "Blog",
  description: "Thoughts on development, design, and technology.",
} as const;

// ============================================
// 11. FOOTER SECTION
// ============================================
export const footerContent = {
  copyright: "Designed & built with precision & an unreasonable amount of console.log.",
  tagline: "No AI was harmed in the making of this portfolio.",
  formspreeCredit: "Forms powered by Formspree (because reinventing email infrastructure is a bad life choice.).",
  devHumor: "If something breaks, it's not a bug-it's a feature waiting to be discovered.",
} as const;

// ============================================
// 12. SOCIAL LINKS
// ============================================
// Icons: Lucide React icons
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/DevCodeHub99",
    icon: "Github",
    ariaLabel: "Visit my GitHub profile",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourprofile",
    icon: "Linkedin",
    ariaLabel: "Visit my LinkedIn profile",
  },
  {
    name: "X",
    url: "https://x.com/DevCodeHub99",
    icon: "X",
    ariaLabel: "Visit my X profile",
  },
];

// ============================================
// 13. NAVIGATION
// ============================================
export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#blog", label: "Blog" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
] as const;
