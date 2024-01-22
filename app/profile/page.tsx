import BlogItem from "@/components/BlogItem";
import { blogs } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { MdAttachEmail } from "react-icons/md";

const ProfilePage = () => {
  return (
    <section className="flex flex-col w-full h-full">
      <div className="mx-auto">
        <Image
          src={"/user_icon.png"}
          alt="UserProfile"
          width={200}
          height={200}
          className="w-20"
        />
      </div>
      <div className="w-auto mx-auto my-2">
        <h1 className="px-4 py-2 text-4xl font-semibold bg-slate-100">
          Op Pautu
        </h1>
      </div>
      <div className="flex items-center w-auto gap-3 mx-auto my-2">
        <span>
          <MdAttachEmail />
        </span>
        <p className="p-3 text-xl font-semibold bg-slate-100">
          pautuop@gmail.com
        </p>
      </div>
      <hr className="p-2" />
      <div className="flex flex-col w-full h-full">
        <div className="mx-auto">
          <p className="p-3 text-center rounded-md bg-slate-100">
            Blog Count 10
          </p>
        </div>
        <div className="flex flex-wrap justify-center p-4 my-3">
          {blogs.map((blog) => (
            <BlogItem {...blog} key={blog.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
