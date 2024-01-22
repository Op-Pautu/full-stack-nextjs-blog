"use client";

import { Editor } from "react-draft-wysiwyg";
import {
  ContentState,
  EditorState,
  convertFromHTML,
  convertToRaw,
} from "draft-js";
import draftToHtml from "draftjs-to-html";
import { useSession } from "next-auth/react";
import { useState, useRef, useEffect } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import toast, { Toaster } from "react-hot-toast";
import { BlogItemType } from "@/lib/types";

const getBlogById = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
    cache: "no-store",
  });

  const data = await res.json();
  return data.blog;
};

const EditBlog = ({ params }: { params: { id: string } }) => {
  const { data: session } = useSession();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    getBlogById(params.id)
      .then((data: BlogItemType) => {
        const contentBlocks = convertFromHTML(data.description);
        const contentState = ContentState.createFromBlockArray(
          contentBlocks.contentBlocks
        );

        const initialState = EditorState.createWithContent(contentState);
        setEditorState(initialState);

        if (headingRef && headingRef.current)
          headingRef.current.innerText = data.title;
      })
      .catch((err) => console.log(err));
  }, []);

  const handlePost = async (data: any) => {
    try {
      toast.loading("Sending your post to the world 🌏", { id: "postData" });

      await fetch("http://localhost:3000/api/blogs", {
        method: "POST",
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
          onClick={handlePost}
          className="px-6 py-3 font-semibold text-white shadow-xl bg-violet-600 focus:ring-violet-950 rounded-xl hover:bg-violet-700"
        >
          Publish
        </button>
      </div>

      <h1
        ref={headingRef}
        contentEditable={true}
        suppressContentEditableWarning={true}
        className="w-full p-4 mx-auto font-serif text-2xl font-semibold text-center border-none outline-none h-28 focus:border-none"
      >
        Enter Title
      </h1>

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

export default EditBlog;
