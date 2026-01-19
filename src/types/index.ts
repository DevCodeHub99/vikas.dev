// ============================================
// Types
// ============================================

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string | null;
  githubUrl: string | null;
  demoUrl: string | null;
  techStack: string[];
}

export interface Skill {
  id: number;
  name: string;
  category: SkillCategory;
  icon: string | null;
  color?: string;
}

export type SkillCategory = "frontend" | "backend" | "tools";

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

export interface Stat {
  value: string;
  label: string;
  colorClass?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
}

export interface DevToArticle {
  id: number;
  title: string;
  description: string;
  url: string;
  cover_image: string | null;
  social_image: string | null;
  published_at: string;
  tag_list: string[];
  reading_time_minutes: number;
  positive_reactions_count: number;
  comments_count: number;
}

export type Theme = "light" | "dark" | "system";
