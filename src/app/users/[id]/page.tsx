import type { Metadata, NextPage } from "next";
import React from "react";

interface Iprops {
  params: { id: string };
}

export const metadata: Metadata = {
  title: "Users",
  description: "View a users data",
};

const page: NextPage<Iprops> = ({ params }) => {
  const { id } = params;
  return <div>user: {id}</div>;
};

export default page;
