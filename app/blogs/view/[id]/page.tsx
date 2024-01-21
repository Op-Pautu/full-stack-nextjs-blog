import { getBlogById } from "@/lib/helpers";
import React from "react";

const BlogViewsPage = async ({ params }: { params: { id: string } }) => {
  const blog = await getBlogById(params.id);
  return <div>BlogViewsPage {JSON.stringify(blog)}</div>;
};

export default BlogViewsPage;
