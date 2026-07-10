import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges and conditionally applies Tailwind CSS class names.
 *
 * This utility combines multiple class values into a single string using `clsx`,
 * then resolves conflicting Tailwind classes (such as duplicate or conflicting
 * spacing, color, or sizing utilities) using `tailwind-merge`.
 *
 * @param inputs - A variadic list of class values (strings, arrays, objects, or falsy values).
 * @returns A single optimized class name string with Tailwind conflicts resolved.
 *
 * @example
 * // Resolves to "p-4 text-blue-500"
 * cn("p-2", "p-4", "text-blue-500");
 *
 * @example
 * // Resolves to "text-red-500"
 * cn(["text-blue-500", "text-red-500"]);
 */
export function cn(...inputs: ClassValue[]) {
  // Combine conditional class names into a single string.
  const classNames = clsx(inputs);

  // Merge Tailwind classes, ensuring the last conflicting class wins.
  return twMerge(classNames);
}