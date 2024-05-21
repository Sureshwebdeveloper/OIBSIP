import React from "react";
import Hero from "../../components/Hero/Hero.jsx";
import Exploremenu from "../../components/Exploremenu/Exploremenu.jsx";
const Home = () => {
  const [items, setItems] = "All";
  return (
    <div>
      <Hero />
      <Exploremenu items={items} setItems={setItems} />
    </div>
  );
};

export default Home;
