import type { Metadata, NextPage } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Users",
  description: "View all users",
};

const page: NextPage = () => {
  return <div>Users Page</div>;
};

export default page;
