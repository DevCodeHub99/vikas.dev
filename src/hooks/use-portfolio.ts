import { useQuery, useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { projects, skills } from "@/config/site";
import { fetchDevToArticles, sendContactEmail } from "@/lib/api";
import type { Project, Skill, DevToArticle } from "@/types";

// ============================================
// Portfolio Hooks
// ============================================

const SIMULATED_DELAY = 300;

async function fetchWithDelay<T>(data: T): Promise<T> {
  await new Promise((r) => setTimeout(r, SIMULATED_DELAY));
  return data;
}

export function useProjects() {
  return useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: () => fetchWithDelay(projects),
  });
}

export function useSkills() {
  return useQuery<Skill[]>({
    queryKey: ["skills"],
    queryFn: () => fetchWithDelay(skills),
  });
}

// ============================================
// Blog Hook (Dev.to)
// ============================================

export function useBlogPosts(limit = 6) {
  return useQuery<DevToArticle[]>({
    queryKey: ["blog-posts", limit],
    queryFn: () => fetchDevToArticles(limit),
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
    retry: 2,
  });
}

// ============================================
// Contact Form Hook
// ============================================

export function useSendMessage() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: sendContactEmail,
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });
}
