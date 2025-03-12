import { Home } from "@/components/Home/Home";
import Main from "@/components/layout/Main";
import AboutUsPage from "@/pages/Home/AboutUsPage";
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
    ],
  },
]);
