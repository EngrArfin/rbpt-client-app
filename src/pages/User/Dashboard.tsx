import { DashboardContent } from "@/components/User/UserSideBar/dashboard-content";
import { DashboardHeader } from "@/components/User/UserSideBar/dashboard-header";
import { DashboardSidebar } from "@/components/User/UserSideBar/dashboard-sidebar";
import UserHeader from "@/components/User/UserSideBar/UserHeader";

export default function Dashboard() {
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
