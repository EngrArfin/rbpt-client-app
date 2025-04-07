import Dashboard from "@/pages/User/Dashboard";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div>
      <Dashboard />
      <Outlet />
    </div>
  );
};

export default UserLayout;
