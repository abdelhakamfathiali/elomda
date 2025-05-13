import { AppSidebar } from "@/components/app-sidebar";

import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Page() {
  return (
    <div className="w-full bg-yellow-400 flex items-center justify-center">
      <h1 className="text-3xl"> Welcome to Admin Dashboard</h1>
    </div>
  );
}
