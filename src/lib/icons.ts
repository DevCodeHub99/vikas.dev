import {
  Code2,
  Database,
  Layout,
  Terminal,
  Github,
  ExternalLink,
  Mail,
  ArrowRight,
  Send,
  X,
  CheckCircle2,
  Calendar,
  Clock,
  Heart,
  MessageCircle,
} from "lucide-react";
import {
  FaLinkedin,
  FaTwitter,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiPostgresql,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiGraphql,
} from "react-icons/si";
import type { ComponentType } from "react";

// ============================================
// Icon Registry
// ============================================

type IconProps = { className?: string };

export const iconMap: Record<string, ComponentType<IconProps>> = {
  // Lucide icons
  Code2,
  Database,
  Layout,
  Terminal,
  Github,
  ExternalLink,
  Mail,
  ArrowRight,
  Send,
  Calendar,
  Clock,
  Heart,
  MessageCircle,
  // React Icons - FA
  FaLinkedin,
  FaTwitter,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaPython,
  FaGitAlt,
  // React Icons - SI
  SiTypescript,
  SiPostgresql,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiGraphql,
};

export function getIcon(name: string | null): ComponentType<IconProps> {
  if (!name || !iconMap[name]) return Code2;
  return iconMap[name];
}

// Re-export commonly used icons
export {
  Code2,
  Database,
  Layout,
  Terminal,
  Github,
  ExternalLink,
  Mail,
  ArrowRight,
  Send,
  X,
  CheckCircle2,
  Calendar,
  Clock,
  Heart,
  MessageCircle,
  FaLinkedin,
  FaTwitter,
};
