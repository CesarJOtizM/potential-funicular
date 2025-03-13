import type { Metadata, NextPage } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Post",
  description: "View all post",
};

const page: NextPage = () => {
  return <div>Post Page</div>;
};

export default page;
