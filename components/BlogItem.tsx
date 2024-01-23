"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BlogItemType } from "@/lib/types";
import error from "next/error";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

type BlogProps = BlogItemType;

function getTextFromHtml(html: string) {
  const elm = document.createElement("span");
  elm.innerHTML = html;
  return elm.innerText.slice(0, 300);
}

const deleteBlog = async (id: string) => {
  await fetch(`http://localhost:3000/api/blogs/${id}`, {
    cache: "no-store",
    method: "DELETE",
  });
};
const BlogItem = (props: BlogProps) => {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  const router = useRouter();
  const handleDelete = async () => {
    try {
      toast.loading("Deleting Blog ❌", { id: "delete" });
      await deleteBlog(props.id);
      toast.success("Deleled Blog ✔️", { id: "delete" });
      router.push("/");
    } catch (error) {
      toast.error("Failed to delete", { id: "delete" });
      console.log(error);
    }
  };

  return (
    <>
      {hydrated && (
        <Card className="hover:border-slate-950 duration-500 flex flex-col w-[400px] h-[550px] mx-4 my-2 rounded-lg">
          <CardHeader>
            <Image
              src={
                props.imageUrl ??
                "https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8fDA%3D"
              }
              alt={props.title}
              width={400}
              height={100}
              className="h-48 rounded-sm"
            />
          </CardHeader>
          <CardTitle className="p-3">{props.title}</CardTitle>
          <CardContent className="w-full text-slate-900">
            <p className="w-full px-2 py-1 tracking-wide text-left">
              {getTextFromHtml(props.description)}
            </p>
          </CardContent>
          <CardFooter className="flex items-center justify-between w-full h-full p-3">
            <Link
              href={`/blogs/view/${props.id}`}
              className="mt-auto border-[1px] p-3 rounded-lg hover:bg-violet-600 font-semibold hover:text-violet-100 duration-500"
            >
              View More
            </Link>
            {props.isProfile && (
              <Link
                href={`/blogs/edit/${props.id}`}
                className="mt-auto border-[1px] p-3 rounded-lg hover:bg-violet-600 font-semibold hover:text-violet-100 duration-500"
              >
                Edit Blog
              </Link>
            )}
            {props.isProfile && (
              <button
                onClick={handleDelete}
                className="mt-auto border-[1px] p-3 rounded-lg hover:bg-violet-600 font-semibold hover:text-violet-100 duration-500"
              >
                Delete Blog
              </button>
            )}
          </CardFooter>
        </Card>
      )}
    </>
  );
};

export default BlogItem;
