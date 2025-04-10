import { Outlet } from "react-router-dom";
import NavBar from "../components/Home/Shared/NavBar";
import Footer from "../components/Home/Shared/Footer";
import HomePage from "@/pages/Home/HomePage";

const Main = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
