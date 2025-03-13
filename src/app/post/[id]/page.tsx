import type { Metadata, NextPage } from "next";
import React from "react";

interface Iprops {
  params: { id: string };
}

export const metadata: Metadata = {
  title: "Post",
  description: "View a post data",
};

const page: NextPage<Iprops> = ({ params }) => {
  const { id } = params;
  return <div>Post: {id}</div>;
};

export default page;
