import React, { createContext, useState } from "react";
import { all_product } from "../assets/assests.js";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [product, setProduct] = useState();
  const [change, setChange] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:7000";
  const [token, setToken] = useState("");

  const contextValue = {
    all_product,
    change,
    setChange,
    product,
    setProduct,
    cartItems,
    setCartItems,
    url,
    token,
    setToken,
    showLogin,
    setShowLogin,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
