import { NextPage } from "next";
import React from "react";
import { AppSidebar } from "./AppSidebar";
import { SidebarTrigger } from "../ui/sidebar";

const MainLayout: NextPage<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </>
  );
};

export default MainLayout;
