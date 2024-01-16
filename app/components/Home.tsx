import { getAllBlogs } from "@/lib/helpers";
import Image from "next/image";
import React from "react";
import BlogItem from "./BlogItem";
import { blogs } from "@/lib/utils";

const Home = async () => {
  // const blogs = await getAllBlogs(6);
  return (
    <section className="w-full my-4">
      <div className="flex items-center justify-center w-full xs:flex-col md:flex-row">
        <div className="flex flex-col w-3/4 gap-3 p-8">
          <p className="font-semibold tracking-wide text-gray-700 lg:text-6xl md:text-3xl xs:text-2xl md:w-2/4 xs:w-full text-start">
            Learn from the best, and become the best.
          </p>
          <p className="my-2 font-semibold tracking-widest text-gray-900 md:text-2xl xs:text-md md:w-3/4 xs:w-full text-start">
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
      <div className="flex flex-col items-center justify-center">
        <div className="p-4">
          <h2 className="text-2xl font-semibold">Recent Articles</h2>
        </div>
        <div className="flex flex-wrap justify-center w-full">
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
