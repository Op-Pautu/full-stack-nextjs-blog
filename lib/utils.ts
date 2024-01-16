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

export const blogs = [
  {
    id: "65a4feddce871105c3714d6d1",
    title: "NextJS is good",
    description:
      "<p>Hello World, you should learn NextJS</p>, <p>Hello World, you should learn NextJS</p>, <p>Hello World, you should learn NextJS</p>, <p>Hello World, you should learn NextJS</p>, <p>Hello World, you should learn NextJS</p>, <p>Hello World, you should learn NextJS</p>, <p>Hello World, you should learn NextJS</p>, <p>Hello World, you should learn NextJS</p>, <p>Hello World, you should learn NextJS</p>, <p>Hello World, you should learn NextJS</p>, <p>Hello World, you should learn NextJS</p>, <p>Hello World, you should learn NextJS</p>, <p>Hello World, you should learn NextJS</p>, <p>Hello World, you should learn NextJS</p>, <p>Hello World, you should learn NextJS</p>, <p>Hello World, you should learn NextJS</p>",
    imageUrl:
      "http://res.cloudinary.com/dvc3gau3j/image/upload/v1705311963/nextjs-fullstack-blog/yemiwf2mmyaugeraww0b.jpg",
    userId: "65a3985b86b8de011a6e9bfa",
    createdAt: "2024-01-15T09:46:05.335Z",
    updatedAt: "2024-01-15T16:36:11.425Z",
    categoryId: "65a4105c86b8de011a6e9c08",
    location: "India",
  },
  {
    id: "65a55e31b8ce8e506e402bee2",
    title: "NextJS is good",
    description:
      "<p>Hello World, you should learn NextJS</p>, <p>Hello World, you should learn NextJS</p>, <p>Hello World, you should learn NextJS</p>, <p>Hello World, you should learn NextJS</p>, <p>Hello World, you should learn NextJS</p>, <p>Hello World, you should learn NextJS</p>, <p>Hello World, you should learn NextJS</p>, <p>Hello World, you should learn NextJS</p>, <p>Hello World, you should learn NextJS</p>, <p>Hello World, you should learn NextJS</p>, <p>Hello World, you should learn NextJS</p>, <p>Hello World, you should learn NextJS</p>, <p>Hello World, you should learn NextJS</p>, <p>Hello World, you should learn NextJS</p>, <p>Hello World, you should learn NextJS</p>, <p>Hello World, you should learn NextJS</p>",
    imageUrl:
      "http://res.cloudinary.com/dvc3gau3j/image/upload/v1705336367/nextjs-fullstack-blog/p2ia9hurvgzhuwcsg3fb.jpg",
    userId: "65a3985b86b8de011a6e9bfa",
    createdAt: "2024-01-15T16:32:49.607Z",
    updatedAt: "2024-01-15T16:32:49.607Z",
    categoryId: "65a4105c86b8de011a6e9c08",
    location: "India",
  },
  {
    id: "65a4feddce871105c3714d6d3",
    title: "NextJS is good",
    description:
      "<p>Hello World, you should learn NextJS</p>, <p>Hello World, you should learn NextJS</p>, <p>Hello World, you should learn NextJS</p>, <p>Hello World, you should learn NextJS</p>",
    imageUrl:
      "http://res.cloudinary.com/dvc3gau3j/image/upload/v1705311963/nextjs-fullstack-blog/yemiwf2mmyaugeraww0b.jpg",
    userId: "65a3985b86b8de011a6e9bfa",
    createdAt: "2024-01-15T09:46:05.335Z",
    updatedAt: "2024-01-15T16:36:11.425Z",
    categoryId: "65a4105c86b8de011a6e9c08",
    location: "India",
  },
  {
    id: "65a55e31b8ce8e506e402bee4",
    title: "NextJS is good",
    description:
      "<p>Hello World, you should learn NextJS</p>, <p>Hello World, you should learn NextJS</p>, <p>Hello World, you should learn NextJS</p>, <p>Hello World, you should learn NextJS</p>",
    imageUrl:
      "http://res.cloudinary.com/dvc3gau3j/image/upload/v1705336367/nextjs-fullstack-blog/p2ia9hurvgzhuwcsg3fb.jpg",
    userId: "65a3985b86b8de011a6e9bfa",
    createdAt: "2024-01-15T16:32:49.607Z",
    updatedAt: "2024-01-15T16:32:49.607Z",
    categoryId: "65a4105c86b8de011a6e9c08",
    location: "India",
  },
  {
    id: "65a4feddce871105c3714d6d5",
    title: "NextJS is good",
    description:
      "<p>Hello World, you should learn NextJS</p>, <p>Hello World, you should learn NextJS</p>, <p>Hello World, you should learn NextJS</p>, <p>Hello World, you should learn NextJS</p>",
    imageUrl:
      "http://res.cloudinary.com/dvc3gau3j/image/upload/v1705311963/nextjs-fullstack-blog/yemiwf2mmyaugeraww0b.jpg",
    userId: "65a3985b86b8de011a6e9bfa",
    createdAt: "2024-01-15T09:46:05.335Z",
    updatedAt: "2024-01-15T16:36:11.425Z",
    categoryId: "65a4105c86b8de011a6e9c08",
    location: "India",
  },
  {
    id: "65a55e31b8ce8e506e402bee6",
    title: "NextJS is good",
    description:
      "<p>Hello World, you should learn NextJS</p>, <p>Hello World, you should learn NextJS</p>, <p>Hello World, you should learn NextJS</p>, <p>Hello World, you should learn NextJS</p>",
    imageUrl:
      "http://res.cloudinary.com/dvc3gau3j/image/upload/v1705336367/nextjs-fullstack-blog/p2ia9hurvgzhuwcsg3fb.jpg",
    userId: "65a3985b86b8de011a6e9bfa",
    createdAt: "2024-01-15T16:32:49.607Z",
    updatedAt: "2024-01-15T16:32:49.607Z",
    categoryId: "65a4105c86b8de011a6e9c08",
    location: "India",
  },
];
