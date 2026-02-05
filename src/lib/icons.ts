// ============================================
// Icon Registry (React Icons)
// ============================================
// Centralized icon management for the entire application
// https://react-icons.github.io/react-icons/

import type { IconType } from "react-icons";

// Font Awesome Icons
import { 
  FaCode, 
  FaDatabase, 
  FaServer, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter,
  FaExternalLinkAlt,
  FaEnvelope,
  FaArrowRight,
  FaPaperPlane,
  FaCalendar,
  FaClock,
  FaHeart,
  FaComment,
  FaCheckCircle,
  FaExclamationCircle,
  FaGitAlt,
  FaTerminal,
  FaLayerGroup,
  FaReact,
  FaNodeJs,
  FaUserLock,
  FaCogs,
  FaProjectDiagram,
  FaBug,
  FaTachometerAlt,
  FaLightbulb,
  FaSitemap,
  FaDownload,
  FaQuoteLeft,
} from "react-icons/fa";

// Simple Icons (Brand Logos)
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiPython,
  SiDocker,
  SiAmazon,
  SiGit,
  SiPrisma,
  SiFastapi,
  SiOpenai,
  SiStripe,
  SiJavascript,
  SiExpress,
} from "react-icons/si";

// Ionicons
import {
  IoMoon,
  IoSunny,
  IoClose,
} from "react-icons/io5";

// Hero Icons
import { HiMenu } from "react-icons/hi";

// Material Design Icons
import { MdOutlineWeb } from "react-icons/md";

// ============================================
// Icon Map - Single source of truth
// ============================================
export const iconMap: Record<string, IconType> = {
  // General UI Icons
  Code: FaCode,
  Database: FaDatabase,
  Server: FaServer,
  Terminal: FaTerminal,
  Mail: FaEnvelope,
  Send: FaPaperPlane,
  Calendar: FaCalendar,
  Clock: FaClock,
  Heart: FaHeart,
  MessageCircle: FaComment,
  CheckCircle: FaCheckCircle,
  AlertCircle: FaExclamationCircle,
  ArrowRight: FaArrowRight,
  ExternalLink: FaExternalLinkAlt,
  Download: FaDownload,
  Quote: FaQuoteLeft,
  Menu: HiMenu,
  Close: IoClose,
  
  // Social Icons
  Github: FaGithub,
  Linkedin: FaLinkedin,
  Twitter: FaTwitter,
  
  // Theme Icons
  Moon: IoMoon,
  Sun: IoSunny,
  
  // Tech Stack Icons (Brand Logos)
  React: SiReact,
  TypeScript: SiTypescript,
  NextJS: SiNextdotjs,
  TailwindCSS: SiTailwindcss,
  NodeJS: SiNodedotjs,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  GraphQL: SiGraphql,
  Python: SiPython,
  Docker: SiDocker,
  AWS: SiAmazon,
  Git: SiGit,
  Prisma: SiPrisma,
  FastAPI: SiFastapi,
  OpenAI: SiOpenai,
  Stripe: SiStripe,
  
  // Skills Icons (Used in site.ts config)
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  FaReact,
  FaNodeJs,
  FaLayerGroup,
  FaUserLock,
  FaGitAlt,
  FaTerminal,
  FaServer,
  FaCogs,
  FaProjectDiagram,
  FaBug,
  FaTachometerAlt,
  FaSitemap,
  
  // Category Icons
  Layout: MdOutlineWeb,
  Lightbulb: FaLightbulb,
};

// ============================================
// Helper Function
// ============================================
export function getIcon(name: string | null): IconType {
  if (!name || !iconMap[name]) return FaCode;
  return iconMap[name];
}

// ============================================
// Named Exports (Only commonly used icons)
// ============================================
export {
  FaCode as Code,
  FaDatabase as Database,
  FaServer as Server,
  FaTerminal as Terminal,
  FaGithub as Github,
  FaExternalLinkAlt as ExternalLink,
  FaEnvelope as Mail,
  FaArrowRight as ArrowRight,
  FaPaperPlane as Send,
  FaCalendar as Calendar,
  FaClock as Clock,
  FaHeart as Heart,
  FaComment as MessageCircle,
  FaCheckCircle as CheckCircle,
  FaExclamationCircle as AlertCircle,
  FaLinkedin as Linkedin,
  FaTwitter as Twitter,
  IoMoon as Moon,
  IoSunny as Sun,
};

export type { IconType };
