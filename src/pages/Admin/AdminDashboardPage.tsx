import { DashboardContent } from "@/components/Admin/AdminSideBar/dashboard-content";
import { DashboardHeader } from "@/components/Admin/AdminSideBar/dashboard-header";
import { DashboardSidebar } from "@/components/Admin/AdminSideBar/dashboard-sidebar";
import UserHeader from "@/components/Admin/AdminSideBar/UserHeader";

export default function AdminDashboard() {
  return (
    <div>
      <DashboardHeader />
      <UserHeader />
      <div className="flex min-h-screen">
        <DashboardSidebar />
        <main className="flex-1 mr-12">
          <DashboardContent />
        </main>
      </div>
    </div>
  );
}
