import { redirect } from "next/navigation";

import { NextPage } from "next";

const Page: NextPage = () => {
  return redirect("/users");
};

export default Page;
