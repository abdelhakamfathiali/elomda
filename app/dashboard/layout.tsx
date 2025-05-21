import Dashboardlayout from "@/components/dashboardlayout";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div dir="rtl" className="flex w-full mt-[-10px] ">
      <Dashboardlayout />
      <div className="flex flex-col items-center  w-full h-full   ">
        {children}
      </div>
    </div>
  );
};

export default Layout;
