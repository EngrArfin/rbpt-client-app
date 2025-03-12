import { Home } from "@/components/Home/Home";
import NavigationMenu from "@/components/Home/Shared/NavBar";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <NavigationMenu />
      <Home />
    </div>
  );
};

export default HomePage;
