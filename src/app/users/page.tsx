import type { Metadata, NextPage } from "next";
import React from "react";
import { UsersContainer } from "src/user/UsersContainer";

export const metadata: Metadata = {
  title: "Users",
  description: "View all users",
};

const page: NextPage = () => {
  return <UsersContainer />;
};

export default page;
