import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const categories = [
  {
    "id": "65a4105c86b8de011a6e9c08",
    "name": "Education"
  },
  {
    "id": "65a64fcd2980391287441ede",
    "name": "Technology"
  },
  {
    "id": "65a64fd22980391287441ee0",
    "name": "Food"
  },
  {
    "id": "65a64fe32980391287441ee2",
    "name": "Technology"
  },
  {
    "id": "65a64fed2980391287441ee4",
    "name": "Politics"
  }
]