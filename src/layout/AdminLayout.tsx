/* import AdminDashboard from "@/pages/Admin/AdminDashboardPage";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <AdminDashboard />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
 */

/* import { DashboardContent } from "@/components/Admin/AdminSideBar/dashboard-content";
 */ import { DashboardHeader } from "@/components/Admin/AdminSideBar/dashboard-header";
import { DashboardSidebar } from "@/components/Admin/AdminSideBar/dashboard-sidebar";
import UserHeader from "@/components/Admin/AdminSideBar/UserHeader";
import { Outlet } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div>
      <DashboardHeader />
      <UserHeader />
      <div className="flex min-h-screen">
        <DashboardSidebar />
        <main className="flex-1 mr-12 overflow-auto">
          {/* <DashboardContent /> */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}
