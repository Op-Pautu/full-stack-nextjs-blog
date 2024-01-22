"use client";

import BlogItem from "@/components/BlogItem";
import { BlogItemType } from "@/lib/types";
import { SearchIcon } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const SearchPage = () => {
  const [blogs, setBlogs] = useState<BlogItemType[]>([]);
  const { register, handleSubmit } = useForm();

  const handleSearch = async ({ search }: { search: string }) => {
    let str = search;
    if (search.includes(" ")) {
      str = search.split(" ").join("%20");
    }

    toast.loading("Searching", { id: "SEARCH" });

    try {
      const res = await fetch(
        `http://localhost:3000/api/blogs/search?title=${str}`,
        { cache: "no-store" }
      );

      const data = await res.json();
      setBlogs(data.blogs);
      toast.success("Fetched Successfully", { id: "SEARCH" });
    } catch (error) {
      toast.error("Fetching Failed", { id: "SEARCH" });
    }
  };
  return (
    <section className="w-full h-full">
      <h2 className="font-serif text-3xl font-bold text-center">
        Search From The Amazing Blogs
      </h2>
      <div className="flex items-center justify-between px-6 py-4 mx-auto my-4 font-semibold text-gray-900 bg-slate-100 md:w-2/4 xs:w-3/4 rounded-xl">
        <input
          type="text"
          className="w-full p-1 bg-transparent border-none outline-none"
          {...register("search", { required: true })}
        />
        <SearchIcon
          //@ts-ignore
          onClick={handleSubmit(handleSearch)}
          size={40}
          className="p-2 rounded-full cursor-pointer hover:bg-slate-300"
        />
      </div>
      <div className="flex flex-wrap">
        {blogs?.map((blog) => (
          <BlogItem key={blog.id} {...blog} />
        ))}
      </div>
    </section>
  );
};

export default SearchPage;
