"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BlogItemType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type BlogProps = BlogItemType;

function getTextFromHtml(html: string) {
  const elm = document.createElement("span");
  elm.innerHTML = html;
  return elm.innerText.slice(0, 300);
}

const BlogItem = (props: BlogProps) => {
  return (
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
      <CardFooter className="w-full h-full p-3">
        <Link
          href={`/blogs/view/${props.id}`}
          className="mr-auto mt-auto border-[1px] p-3 rounded-lg hover:bg-violet-600 font-semibold hover:text-violet-100 duration-500"
        >
          View More
        </Link>
        {props.isProfile && (
          <Link
            href={`/blogs/edit/${props.id}`}
            className="ml-auto mt-auto border-[1px] p-3 rounded-lg hover:bg-violet-600 font-semibold hover:text-violet-100 duration-500"
          >
            Edit Blog
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};

export default BlogItem;
