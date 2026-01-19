import { siteConfig } from "@/config/site";
import { API_CONFIG } from "@/lib/constants";
import type { DevToArticle } from "@/types";

// Fetch blog posts from Dev.to with error handling
export async function fetchDevToArticles(limit = 6): Promise<DevToArticle[]> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.devTo.timeout);
    
    const response = await fetch(
      `${API_CONFIG.devTo.baseUrl}/articles?username=${siteConfig.devToUsername}&per_page=${limit}`,
      { signal: controller.signal }
    );
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`Dev.to API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Validate response is an array
    if (!Array.isArray(data)) {
      throw new Error("Invalid Dev.to API response format");
    }
    
    return data;
  } catch (error) {
    console.error("Failed to fetch Dev.to articles:", error);
    // Return empty array instead of throwing to allow graceful degradation
    return [];
  }
}
