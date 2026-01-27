import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
}
// this class name function merges tailwind classes using both clsx and tailwind-merge