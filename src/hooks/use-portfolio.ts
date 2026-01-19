import { useQuery } from "@tanstack/react-query";
import { projects, skills } from "@/config/site";
import { fetchDevToArticles } from "@/lib/api";
import type { DevToArticle } from "@/types";

// ============================================
// Static Data Hooks (No Query Needed)
// ============================================

export function useProjects() {
  return { data: projects, isLoading: false, error: null };
}

export function useSkills() {
  return { data: skills, isLoading: false, error: null };
}

// ============================================
// Blog Hook (Dev.to API)
// ============================================

export function useBlogPosts(limit = 6) {
  return useQuery<DevToArticle[]>({
    queryKey: ["blog-posts", limit],
    queryFn: () => fetchDevToArticles(limit),
    retry: 3,
    retryDelay: (attemptIndex) => Math.pow(2, attemptIndex) * 1000,
    staleTime: 1000 * 60 * 60, // 1 hour
  });
}
