import { useCallback, useSyncExternalStore } from "react";
import type { Theme } from "@/types";

const STORAGE_KEY = "theme";

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "system";
  return (localStorage.getItem(STORAGE_KEY) as Theme) || "system";
}

function getResolvedTheme(): "light" | "dark" {
  const stored = getStoredTheme();
  return stored === "system" ? getSystemTheme() : stored;
}

// Apply theme to DOM
function applyTheme(theme: Theme) {
  const resolved = theme === "system" ? getSystemTheme() : theme;
  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(resolved);
  localStorage.setItem(STORAGE_KEY, theme);
}

// External store for theme
let listeners: Array<() => void> = [];

function subscribe(listener: () => void) {
  listeners.push(listener);
  
  // Listen for system theme changes
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const handler = () => {
    if (getStoredTheme() === "system") {
      applyTheme("system");
      listeners.forEach(l => l());
    }
  };
  mediaQuery.addEventListener("change", handler);
  
  return () => {
    listeners = listeners.filter(l => l !== listener);
    mediaQuery.removeEventListener("change", handler);
  };
}

function getSnapshot() {
  return getStoredTheme();
}

function getServerSnapshot() {
  return "system" as Theme;
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const resolvedTheme = getResolvedTheme();

  const setTheme = useCallback((newTheme: Theme) => {
    applyTheme(newTheme);
    listeners.forEach(l => l());
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = getResolvedTheme() === "dark" ? "light" : "dark";
    applyTheme(newTheme);
    listeners.forEach(l => l());
  }, []);

  return { theme, resolvedTheme, setTheme, toggleTheme };
}

// Initialize theme on load
if (typeof window !== "undefined") {
  applyTheme(getStoredTheme());
}
