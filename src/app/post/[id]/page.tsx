import type { Metadata, NextPage } from "next";
import React from "react";
import { PostDetail } from "src/post/components/PostDetail";

interface Iprops {
  params: { id: string };
}

export const metadata: Metadata = {
  title: "Post",
  description: "View a post data",
};

const page: NextPage<Iprops> = ({ params }) => {
  const { id } = params;
  return <PostDetail id={id} />;
};

export default page;
