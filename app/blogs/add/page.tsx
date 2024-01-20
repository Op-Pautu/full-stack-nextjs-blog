"use client";

import React, { useState, useRef, useEffect } from "react";
import { categories } from "@/lib/utils";
import { useSession } from "next-auth/react";
import Image from "next/image";

import { useForm } from "react-hook-form";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

import { Editor } from "react-draft-wysiwyg";
import toast, { Toaster } from "react-hot-toast";

const BlogAdd = () => {
  const { data: session } = useSession();
  const [imageUrl, setImageUrl] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const isMountedRef = useRef<boolean>(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    return () => {
      // Component will unmount
      isMountedRef.current = false;
    };
  }, []);

  const handlePost = async (data: any) => {
    const formData = new FormData();
    const postData = JSON.stringify({
      title: headingRef.current?.innerText,
      description: convertEditorDataToHTML(),
      location: data.location,
      userId: session?.user.id,
      categoryId: data.category,
    });
    formData.append("postData", postData);
    formData.append("image", data.image[0]);

    try {
      toast.loading("Sending your post to the world 🌏", { id: "postData" });

      await fetch("http://localhost:3000/api/blogs", {
        method: "POST",
        body: formData,
        cache: "no-store",
      });

      toast.success("Successfully Sent 🌏", { id: "postData" });
    } catch (error) {
      toast.error("Sending Failed", { id: "postData" });
      console.log(error);
    }
  };

  const convertEditorDataToHTML = () => {
    return draftToHtml(convertToRaw(editorState.getCurrentContent()));
  };

  const handleEditorStateChange = (e: any) => {
    setEditorState(e);
  };

  return (
    <section className="w-full">
      <Toaster position="top-right" />
      <div className="flex items-center justify-between p-4">
        <div className="w-1/4">
          <span className="mx-3 font-extrabold">Author: </span>
          <span className="font-semibold uppercase">{session?.user?.name}</span>
        </div>
        <button
          onClick={handleSubmit(handlePost)}
          className="px-6 py-3 font-semibold text-white shadow-xl bg-violet-600 focus:ring-violet-950 rounded-xl hover:bg-violet-700"
        >
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
        ref={headingRef}
        contentEditable={true}
        suppressContentEditableWarning={true}
        className="w-full p-4 mx-auto font-serif text-2xl font-semibold text-center border-none outline-none h-28 focus:border-none"
      >
        Enter Title
      </h1>
      <div className="flex w-full my-5">
        <input
          type="file"
          className="md:w-[500px] sm:w-[300px] m-auto text-slate-900 bg-gray-100 p-4 rounded-xl font-semibold"
          {...register("image", {
            required: true,
            onChange(event) {
              setImageUrl(URL.createObjectURL(event.target.files[0]));
            },
          })}
        />
      </div>
      <div className="flex w-full my-5">
        <input
          type="text"
          placeholder="Location Eg: Delhi, India"
          className="md:w-[500px] sm:w-[300px] m-auto text-slate-900 bg-gray-100 p-4 rounded-xl font-semibold"
          {...register("location", { required: true })}
        />
      </div>
      <div className="flex w-full my-5">
        <select
          className="md:w-[500px] sm:w-[300px] m-auto text-slate-900 bg-gray-100 p-4 rounded-xl font-semibold"
          {...register("category", { required: true })}
        >
          {categories.map((item) => (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorStateChange}
        editorStyle={{
          width: "100%",
          minHeight: "50vh",
          border: "1px solid #000",
          padding: 10,
        }}
      />
    </section>
  );
};

export default BlogAdd;
