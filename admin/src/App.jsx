import React from "react";
import Admin from "./components/Admin";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Additem from "./components/Additem";
import Listitems from "./components/Listitems";
import Orders from "./components/Orders.jsx";
const App = () => {
  return (
    <div>
      <Navbar />
      <Admin />
      <Routes>
        <Route path="/" element={<Additem />} />
        <Route path="/list" element={<Listitems />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
};

export default App;
