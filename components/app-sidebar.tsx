"use client";

import * as React from "react";
import { BookOpen, Bot, Frame, Map, PieChart } from "lucide-react";

import { NavMain } from "@/components/nav-main";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar";
// This is sample data.
const data = {
  navMain: [
    {
      title: "Cars",
      url: "/Cars",

      items: [
        {
          title: "Sell",
          url: "/Cars/sellCar",
        },
        {
          title: "Buy",
          url: "/Cars/carsDetails",
        },
      ],
    },
    {
      title: "Reale State",
      url: "/Real-Estate",
      icon: Bot,
      items: [
        {
          title: "Sell",
          url: "/Real-Estate",
        },
        {
          title: "Buy",
          url: "#",
        },
        {
          title: "Rent",
          url: "#",
        },
      ],
    },

    {
      title: "Electronic",
      url: "/electronic",
      icon: BookOpen,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className="mt-[108px] bg-blue-500  ">
      <SidebarContent className="bg-blue-800">
        <NavMain items={data.navMain} />

        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>{/* <NavUser user={data.user} /> */}</SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
