import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function truncateToFourWords(str: string): string {
  const words = str.split(" ");
  if (words.length <= 4) return str;
  return words.slice(0, 4).join(" ") + "...";
}
