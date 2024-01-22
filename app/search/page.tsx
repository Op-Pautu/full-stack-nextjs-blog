"use client";

import { SearchIcon } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";

const SearchPage = () => {
  const { register, handleSubmit } = useForm();

  const handleSearch = ({ search }: { search: string }) => {
    console.log(search);
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
          onClick={handleSubmit(handleSearch)}
          size={40}
          className="p-2 rounded-full cursor-pointer hover:bg-slate-300"
        />
      </div>
    </section>
  );
};

export default SearchPage;
