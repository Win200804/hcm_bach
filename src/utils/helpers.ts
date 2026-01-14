// ============================================
// Utility helper functions
// ============================================

// Format date thành chuỗi tiếng Việt
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('vi-VN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Format thời gian
export const formatTime = (date: Date): string => {
  return date.toLocaleTimeString('vi-VN', {
    hour: '2-digit',
    minute: '2-digit'
  });
};

// Generate unique ID
export const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

// Clamp số trong khoảng
export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

// Delay promise
export const delay = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// Truncate text
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + '...';
};

// Scroll to element
export const scrollToElement = (elementId: string, offset: number = 80): void => {
  const element = document.getElementById(elementId);
  if (element) {
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

// Debounce function
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Class name helper (like classnames/clsx)
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

// Check if running on mobile
export const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
};

// Get random item from array
export const getRandomItem = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

// Shuffle array (Fisher-Yates)
export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Format percentage
export const formatPercentage = (value: number, decimals: number = 0): string => {
  return `${value.toFixed(decimals)}%`;
};

// Calculate reading time (words per minute)
export const calculateReadingTime = (text: string, wpm: number = 200): number => {
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wpm);
};

