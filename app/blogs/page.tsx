import { blogs, categories } from "@/lib/utils";
import React from "react";
import { FaSearch } from "react-icons/fa";
import BlogItem from "../components/BlogItem";

const BlogsPage = () => {
  return (
    <section className="w-full h-full">
      <div className="flex flex-col gap-3 p-8 my-10">
        <h4 className="text-3xl font-semibold">
          Explore Articles on Various Categories
        </h4>
        <p className="text-xl font-semibold">
          Practical Articles For Learning Anything
        </p>
      </div>

      <nav className="sticky top-0 flex items-center justify-between w-full h-20 gap-4 p-2 my-4 bg-gray-100 bg-center border md:p-8">
        <div className="flex items-center w-2/4 gap-6 mr-auto md:w-1/4">
          <p className="text-2xl font-semibold">Filter</p>
          <select
            name="category"
            id="select"
            className="w-3/4 px-2 py-3 mx-2 rounded-lg md:px-5"
          >
            {categories.map((item) => (
              <option
                className="bg-gray-100 rounded-md"
                key={item.id}
                value={item.id}
              >
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center w-2/4 gap-2 ml-auto md:gap-6">
          <p className="text-2xl font-semibold">Search</p>
          <input type="text" className="w-3/4 px-4 py-2 rounded-lg" />
          <FaSearch className="cursor-pointer" />
        </div>
      </nav>
      <div className="flex flex-wrap justify-center gap-4 my-1">
        {blogs.map((blog) => (
          <BlogItem {...blog} key={blog.id} />
        ))}
      </div>
    </section>
  );
};

export default BlogsPage;
