
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const AVATAR_COLORS = [
  "#C73D63", // primary pink
  "#D4AF37", // accent gold
  "#E57373", // light red
  "#BA68C8", // light purple
  "#7986CB", // indigo
  "#4FC3F7", // light blue
  "#4DB6AC", // teal
  "#AED581", // light green
  "#FFB74D", // orange
  "#A1887F", // brown
];

export function getAvatarColor(name: string): string {
  if (!name) return AVATAR_COLORS[0];
  const charCodeSum = name.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const index = charCodeSum % AVATAR_COLORS.length;
  return AVATAR_COLORS[index];
}
