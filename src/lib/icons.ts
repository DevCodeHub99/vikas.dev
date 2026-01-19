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
  Calendar,
  Clock,
  Heart,
  MessageCircle,
  Linkedin,
  X,
  Server,
  Cloud,
  GitBranch,
  Palette,
  Network,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import type { ComponentType } from "react";

// ============================================
// Icon Registry (Lucide React Only)
// ============================================

type IconProps = { className?: string };

export const iconMap: Record<string, ComponentType<IconProps>> = {
  // UI Icons
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
  CheckCircle,
  AlertCircle,
  // Social Icons
  Linkedin,
  X,
  // Tech Stack Icons
  Server,
  Cloud,
  GitBranch,
  Palette,
  Network,
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
  Calendar,
  Clock,
  Heart,
  MessageCircle,
  Linkedin,
  X,
  CheckCircle,
  AlertCircle,
};
