import { Outlet } from "react-router-dom";
import NavBar from "../Home/Shared/NavBar";
import Footer from "../Home/Shared/Footer";

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
