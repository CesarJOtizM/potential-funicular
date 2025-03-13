import { NextPage } from "next";
import React from "react";
import { AppSidebar } from "./AppSidebar";
import { SidebarTrigger } from "../ui/sidebar";

const MainLayout: NextPage<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <AppSidebar />
      <main className="w-full">
        <SidebarTrigger />
        {children}
      </main>
    </>
  );
};

export default MainLayout;
