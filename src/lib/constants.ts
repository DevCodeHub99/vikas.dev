// ============================================
// Animation Timing Constants
// ============================================
export const ANIMATION_TIMINGS = {
  // Durations (ms)
  fast: 200,
  normal: 300,
  slow: 500,
  verySlow: 800,
  
  // Delays (s)
  delay: {
    none: 0,
    xs: 0.1,
    sm: 0.2,
    md: 0.3,
    lg: 0.5,
    xl: 0.8,
    xxl: 1.2,
  },
  
  // Intervals (ms)
  cursor: 530,
  dots: 400,
  typewriter: 50,
} as const;

// ============================================
// Performance Thresholds
// ============================================
export const PERFORMANCE = {
  // Scroll throttle (ms)
  scrollThrottle: 100,
  
  // Lazy load threshold (px)
  lazyLoadThreshold: 300,
  
  // Max concurrent requests
  maxConcurrentRequests: 3,
  
  // Cache durations (ms)
  cache: {
    blog: 5 * 60 * 1000, // 5 minutes
    projects: 10 * 60 * 1000, // 10 minutes
  },
} as const;

// ============================================
// Accessibility
// ============================================
export const A11Y = {
  // Minimum touch target size (px)
  minTouchTarget: 44,
  
  // Focus outline width (px)
  focusOutlineWidth: 2,
} as const;

// ============================================
// API Configuration
// ============================================
export const API_CONFIG = {
  devTo: {
    baseUrl: "https://dev.to/api",
    timeout: 10000,
  },
  formspree: {
    baseUrl: "https://formspree.io/f",
  },
} as const;
