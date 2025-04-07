import AdminDashboard from "@/pages/Admin/AdminDashboardPage";
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
