import { DashboardContent } from "@/components/Admin/AdminSideBar/DashboardContent";
import ForgotPassword from "@/components/Home/ForgetPassword";
import Login from "@/components/Home/Login";
import Signup from "@/components/Home/Signup";
import AdminLayout from "@/layout/AdminLayout";
import Main from "@/layout/Main";
import UserLayout from "@/layout/UserLayout";
import ContactPage from "@/pages/Home/ContactPage";
import HomePage from "@/pages/Home/HomePage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      /*  {
        path: "/about",
        element: <AboutUsPage />,
      }, */
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
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
