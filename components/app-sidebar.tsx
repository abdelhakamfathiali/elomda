"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Cars",
      url: "/Cars",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Sell",
          url: "#",
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
      title: "Reale State",
      url: "/Real-Estate",
      icon: Bot,
      items: [
        {
          title: "Sell",
          url: "#",
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
      items: [
        {
          title: "Daily",
          url: "#",
        },
        {
          title: "Weekly",
          url: "#",
        },
        {
          title: "Monthly",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },

    {
      title: "Settings",
      url: "/Settings",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
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
    <Sidebar collapsible="icon" {...props} className="mt-[140px] ">
      <SidebarHeader>{/* <TeamSwitcher teams={data.teams} /> */}</SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />

        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>{/* <NavUser user={data.user} /> */}</SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
