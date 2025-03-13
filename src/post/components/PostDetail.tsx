"use client";

import React, { useEffect, useState } from "react";
import { usePost } from "../services/getAllPost";
import { useComments } from "../services/getPostById";
import { CommentContainer } from "src/comments/CommentContainer";
import Link from "next/link";

interface Iprops {
  id: string;
}

export const PostDetail: React.FC<Iprops> = ({ id }) => {
  const { data, isLoading } = usePost();
  const { data: postComments, isLoading: commentLoading } = useComments(id);

  const [post, setPost] = useState<Post | undefined>();

  useEffect(() => {
    if (data && postComments) {
      const currentPost = data.find((el) => el.id === Number(id));
      if (currentPost) {
        setPost({
          ...currentPost,
          comments: postComments || [],
        });
      }
    }
  }, [data, postComments, id]);

  const addComment = (commentBody: string) => {
    const newComment: Commentary = {
      postId: post?.id || 0,
      id: Date.now(),
      name: "John doe",
      email: "JohnDoe@gmail.com",
      body: commentBody,
    };

    setPost((prev) => {
      if (prev)
        return {
          ...prev,
          comments: [newComment, ...prev?.comments],
        };
    });
  };

  if (isLoading || commentLoading) return <div>Loading...</div>;

  return (
    <section className="p-4 w-full">
      <Link
        href="/users"
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Back to Users
      </Link>

      <h1 className="text-2xl font-extrabold text-gray-900 mb-4">
        {post?.title}
      </h1>

      <h2 className="text-lg font-semibold text-gray-800 mb-2">Content:</h2>
      <p className="text-gray-700 text-base mb-4">{post?.body}</p>

      <CommentContainer
        comments={post?.comments || []}
        addComment={addComment}
      />
    </section>
  );
};
