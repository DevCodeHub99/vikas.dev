import { siteConfig } from "@/config/site";
import type { DevToArticle, ContactFormData } from "@/types";

const DEV_TO_API = "https://dev.to/api";

// Fetch blog posts from Dev.to
export async function fetchDevToArticles(limit = 6): Promise<DevToArticle[]> {
  const response = await fetch(
    `${DEV_TO_API}/articles?username=${siteConfig.devToUsername}&per_page=${limit}`
  );
  
  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }
  
  return response.json();
}

// Send contact form via serverless function
export async function sendContactEmail(data: ContactFormData): Promise<{ success: boolean }> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: "Failed to send message" }));
    throw new Error(error.message || "Failed to send message");
  }
  
  return response.json();
}
