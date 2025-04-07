import { Home } from "@/components/Home/Home";
import NavigationMenu from "@/components/Home/Shared/NavBar";

const HomePage = () => {
  return (
    <div>
      <NavigationMenu />
      <Home />
    </div>
  );
};

export default HomePage;
