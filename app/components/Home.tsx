import { getAllBlogs } from "@/lib/helpers";
import Image from "next/image";
import React from "react";
import BlogItem from "./BlogItem";

const blogs = [
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

const Home = async () => {
  // const blogs = await getAllBlogs(6);
  return (
    <section className="w-full my-4">
      <div className="w-full flex xs:flex-col md:flex-row justify-center items-center">
        <div className="p-8 w-3/4 flex flex-col gap-3">
          <p className="tracking-wide lg:text-6xl md:text-3xl xs:text-2xl font-semibold md:w-2/4 xs:w-full text-start text-gray-700">
            Learn from the best, and become the best.
          </p>
          <p className="tracking-widest my-2 md:text-2xl xs:text-md font-semibold md:w-3/4 xs:w-full text-start text-gray-900">
            Learn it by doing it for FREE with practical step by step Series and
            Articles
          </p>
        </div>
        <div className="md:w-2/4 xs:w-3/4 md:mx-2 xs:my-2">
          <Image
            src={"https://images.unsplash.com/photo-1522202176988-66273c2fd55f"}
            className="w-full rounded-2xl drop-shadow-2xl"
            alt="CarouselImage"
            width={300}
            height={200}
          />
        </div>
      </div>
      <hr className="p-3 my-4" />
      <div className="flex flex-col justify-center items-center">
        <div className="p-4">
          <h2 className="text-2xl font-semibold">Recent Articles</h2>
        </div>
        <div className="flex w-full flex-wrap justify-center">
          {blogs.slice(0, 6).map((blog) => (
            <BlogItem {...blog} key={blog.id} />
          ))}
        </div>
        <div className="w-full p-4 text-center">
          <button className="mx-auto mt-auto border-[1px] p-3 rounded-lg hover:bg-violet-600 font-semibold hover:text-violet-100 duration-500">
            Explore More Articles
          </button>
        </div>
        <hr className="p-3 my-4" />
      </div>
    </section>
  );
};

export default Home;
