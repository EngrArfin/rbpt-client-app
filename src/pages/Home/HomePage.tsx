import { Carosel } from "@/components/Home/Header/Carosel";
import { Home } from "@/components/Home/Home";
import Service from "@/components/Home/Service";

const HomePage = () => {
  return (
    <div>
      <Home />
      <Service />
      <Carosel />
    </div>
  );
};

export default HomePage;
