"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";

const BlogAdd = () => {
  const { data: session } = useSession();
  const [imageUrl, setImageUrl] = useState("");
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    const file = e.target.files[0];
    setImageUrl(URL.createObjectURL(file));
  };

  return (
    <section className="w-full">
      <div className="flex items-center justify-between p-4">
        <div className="w-1/4">
          <span className="mx-3 font-extrabold">Author: </span>
          <span className="font-semibold uppercase">{session?.user?.name}</span>
        </div>
        <button className="px-6 py-3 font-semibold text-white shadow-xl bg-violet-600 focus:ring-violet-950 rounded-xl hover:bg-violet-700">
          Publish
        </button>
      </div>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="NewPost"
          width={800}
          height={400}
          className="mx-auto my-20 rounded-lg shadow-xl border-[3px] border-slate-900"
        />
      )}
      <h1
        contentEditable={true}
        className="w-full p-4 mx-auto font-serif text-2xl font-semibold text-center border-none outline-none h-28 focus:border-none"
      >
        Enter Title
      </h1>
      <div className="flex w-full">
        <input
          type="file"
          onChange={handleImageChange}
          className="md:w-[500px] sm:w-[300px] m-auto text-slate-900 bg-gray-100 p-4 rounded-xl font-semibold"
        />
      </div>
    </section>
  );
};

export default BlogAdd;