import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home/Home";
import Appdownload from "./components/Appdownload/Appdownload.jsx";
import "./App.css";
import LoginPopup from "./components/LoginPopup/LoginPopup.jsx";
import Exploremenu from "./components/Exploremenu/Exploremenu.jsx";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<LoginPopup />} />
        <Route path="/product" element={<Exploremenu />} />
      </Routes>
      <Appdownload />
      <Footer />
    </div>
  );
};

export default App;
