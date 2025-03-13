import type { Metadata, NextPage } from "next";
import React from "react";
import { UserByIdContainer } from "src/user/UserByIdContainer";

interface Iprops {
  params: { id: string };
}

export const metadata: Metadata = {
  title: "Users",
  description: "View a users data",
};

const page: NextPage<Iprops> = async ({ params }) => {
  const { id } = params;
  return <UserByIdContainer id={id} />;
};

export default page;
