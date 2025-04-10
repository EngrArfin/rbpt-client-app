import { Outlet } from "react-router-dom";
import NavBar from "../components/Home/Shared/NavBar";
import Footer from "../components/Home/Shared/Footer";

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
