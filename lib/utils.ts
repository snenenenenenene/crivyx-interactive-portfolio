// /lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Class names utility
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Social Media Links
export const getSocialMediaLinks = () => ({
  twitter: process.env.NEXT_PUBLIC_TWITTER_URL,
  youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL,
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
  steam: process.env.NEXT_PUBLIC_STEAM_URL,
  discord: process.env.NEXT_PUBLIC_DISCORD_URL,
  reddit: process.env.NEXT_PUBLIC_REDDIT_URL,
});

// Format date utility
export const formatDate = (date: string | Date) => {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
};

// Slugify string utility
export const slugify = (str: string) => {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

// Random ID generator
export const generateId = (length: number = 8) => {
  return Math.random()
    .toString(36)
    .substring(2, length + 2);
};

// Check if client-side
export const isClient = typeof window !== "undefined";

// Check if in development
export const isDev = process.env.NODE_ENV === "development";

// Debounce utility
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
) => {
  let timeout: NodeJS.Timeout;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Validate email
export const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Format file size
export const formatFileSize = (bytes: number) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

// Local storage utilities with type safety
export const storage = {
  get: <T>(key: string, defaultValue?: T): T | null => {
    if (!isClient) return null;
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue || null;
    } catch {
      return defaultValue || null;
    }
  },
  set: <T>(key: string, value: T): void => {
    if (!isClient) return;
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  },
  remove: (key: string): void => {
    if (!isClient) return;
    localStorage.removeItem(key);
  },
};

// Scroll to element utility
export const scrollToElement = (elementId: string, offset: number = 0) => {
  if (!isClient) return;

  const element = document.getElementById(elementId);
  if (element) {
    const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

// Copy to clipboard utility
export const copyToClipboard = async (text: string): Promise<boolean> => {
  if (!isClient) return false;

  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error("Failed to copy:", error);
    return false;
  }
};

// Parse URL query params
export const parseQueryParams = (queryString: string) => {
  return Object.fromEntries(new URLSearchParams(queryString));
};

// Truncate text utility
export const truncateText = (text: string, length: number) => {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + "...";
};

// Random number between range
export const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Remove HTML tags from string
export const stripHtml = (html: string) => {
  return html.replace(/<[^>]*>/g, "");
};
