import React, { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home/Home";
import Appdownload from "./components/Appdownload/Appdownload.jsx";
import "./App.css";
import LoginPopup from "./components/LoginPopup/LoginPopup.jsx";
import Exploremenu from "./components/Exploremenu/Exploremenu.jsx";
import { StoreContext } from "./context/StoreContext.jsx";
import Forgot from "./components/ManagePassword/Forgot.jsx";
import ResetPassword from "./components/ManagePassword/ResetPassword.jsx";
import CustomPizza from "./components/CustomPizza/CustomPizza.jsx";
import ProductMenu from "./components/ProductMenu/ProductMenu.jsx";

const App = () => {
  const { token, showLogin, setShowLogin } = useContext(StoreContext);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <> </>}
      <div className="scroll-smooth">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductMenu />} />
          <Route path="/custom-pizza" element={<CustomPizza />} />
          <Route path="/forgot-password" element={<Forgot />} />
          <Route path="/loginpopup" element={<LoginPopup />} />
          {/* <Route
            path="/reset-password/:id/:token"
            element={<ResetPassword />}
          /> */}
        </Routes>
        <Appdownload />
        <Footer />
      </div>
    </>
  );
};

export default App;
