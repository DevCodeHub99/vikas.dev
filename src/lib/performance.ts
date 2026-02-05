// ============================================
// Performance Utilities
// ============================================

/**
 * Throttle function to limit how often a callback is executed
 * Used for scroll events in Navbar to improve performance
 * @param callback - Function to throttle
 * @param delay - Minimum delay between executions (ms)
 * @returns Throttled function
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
  callback: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastCall = 0;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return function (...args: Parameters<T>) {
    const now = Date.now();
    const timeSinceLastCall = now - lastCall;

    if (timeSinceLastCall >= delay) {
      lastCall = now;
      callback(...args);
    } else {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        lastCall = Date.now();
        callback(...args);
      }, delay - timeSinceLastCall);
    }
  };
}
