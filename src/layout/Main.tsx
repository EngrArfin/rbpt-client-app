import { Outlet } from "react-router-dom";
import NavBar from "../components/Home/Shared/NavBar";
import Footer from "../components/Home/Shared/Footer";
import HomePage from "@/pages/Home/HomePage";
import Wrapper from "@/components/Home/Shared/Wraper";

const Main = () => {
  return (
    <Wrapper>
      <NavBar />
      <Outlet />
      <Footer />
    </Wrapper>
  );
};

export default Main;
