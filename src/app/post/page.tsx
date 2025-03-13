import type { Metadata, NextPage } from "next";
import React from "react";
import { PostContainer } from "src/post/PostContainer";

export const metadata: Metadata = {
  title: "Post",
  description: "View all post",
};

const page: NextPage = () => {
  return <PostContainer />;
};

export default page;
