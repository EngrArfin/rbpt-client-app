import DashboardHeader from "@/components/Admin/AdminSideBar/DashboardHeader";
import { AppSidebar } from "@/components/Admin/AdminSideBar/DashboardSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div>
      {/* Header will be full width */}
      <DashboardHeader />
      <div className="flex min-h-screen">
        <SidebarProvider>
          <div className="mt-16">
            <AppSidebar />
          </div>
          <main className="flex-1 mr-12 overflow-auto w-full min-h-screen">
            <SidebarTrigger />
            {/* The Outlet renders nested routes here */}
            <Outlet />
          </main>
        </SidebarProvider>
      </div>
    </div>
  );
}
