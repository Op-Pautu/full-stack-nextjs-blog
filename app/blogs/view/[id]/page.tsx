import { getBlogById } from "@/lib/helpers";
import { BlogItemType } from "@/lib/types";
import Image from "next/image";
import React from "react";

const BlogViewsPage = async ({ params }: { params: { id: string } }) => {
  const blog: BlogItemType = await getBlogById(params.id);

  return (
    <section className="flex flex-col w-full h-full">
      <Image
        src={blog.imageUrl ?? ""}
        alt={blog.title}
        width={1000}
        height={1000}
        className="mx-auto my-8 rounded-lg md:w-2/4 xs:w-3/4 drop-shadow-xl"
      />
      <div className="mx-auto my-8 md:w-2/4 xs:w-3/4">
        <h1 className="text-5xl text-center">{blog.title}</h1>
      </div>
      <section
        className="mx-auto my-8 md:w-2/4 xs:w-3/4"
        dangerouslySetInnerHTML={{ __html: blog.description }}
      ></section>
    </section>
  );
};

export default BlogViewsPage;
