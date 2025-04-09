import { DashboardContent } from "@/components/Admin/AdminSideBar/dashboard-content";
import ForgotPassword from "@/components/Home/ForgetPassword";
import { Home } from "@/components/Home/Home";
import Login from "@/components/Home/Login";

import Signup from "@/components/Home/Signup";
import AdminLayout from "@/layout/AdminLayout";
import Main from "@/layout/Main";
import UserLayout from "@/layout/UserLayout";
import AdminDashboard from "@/pages/Admin/AdminDashboardPage";
import AboutUsPage from "@/pages/Home/AboutUsPage";
import Dashboard from "@/pages/User/Dashboard";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUsPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
  /* User Layout */
  {
    path: "user",
    element: <UserLayout></UserLayout> /*  <PrivateRoute> </PrivateRoute> */,
    children: [
      {
        index: true,
        element: <DashboardContent></DashboardContent>,
      },
      {
        path: "userhome",
        element: <DashboardContent></DashboardContent>,
      },
    ],
  },
  /* Admin Layout */
  {
    path: "admin",
    element: <AdminLayout></AdminLayout> /*  <PrivateRoute> </PrivateRoute> */,
    children: [
      {
        index: true,
        element: <DashboardContent></DashboardContent>,
      },
      {
        path: "admindashboard",
        element: <DashboardContent></DashboardContent>,
      },
    ],
  },
]);
