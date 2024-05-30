import { useState } from "react";
import Hero from "../../components/Hero/Hero.jsx";
import Exploremenu from "../../components/Exploremenu/Exploremenu.jsx";
import LoginPopup from "../../components/LoginPopup/LoginPopup.jsx";
import ProductMenu from "../../components/ProductMenu/ProductMenu.jsx";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Hero />
    </div>
  );
};

export default Home;
