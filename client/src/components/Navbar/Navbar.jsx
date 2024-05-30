import React, { useContext, useState } from "react";
import { assets } from "../../assets/assests";
import { FaRegUserCircle } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Exploremenu from "../Exploremenu/Exploremenu";
import { FaShoppingBag } from "react-icons/fa";
import { StoreContext } from "../../context/StoreContext";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [underline, setUnderline] = useState("home");
  const { change, setChange, token, setToken,setShowLogin} = useContext(StoreContext);

  const navigate = () => {
    useNavigate("/loginpopup");
  };

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className=" bg-nav drop-shadow-lg py-4 fixed w-full z-30">
      <div className="flex items-center justify-around w-full px-3 ">
        <Link to="/">
          <img src={assets.logo_1} alt="" className=" object-cover h-8 px-3" />
        </Link>

        <ul
          className={
            "lg:flex font-semibold lg:p-0 lg:bg-none lg:cursor-pointer lg:space-x-4 capitalize lg:items-center lg:flex-row " +
            (menu
              ? "lg:flex lg:text-base lg:cursor-pointer lg:absolute lg:top-2 lg:text-center  lg:bg-transparent lg:space-x-4 lg:items-center lg:flex-row p-4 w-full flex items-center justify-center flex-col bg-pizzaYellow cursor-pointer space-x-2  absolute left-0 top-[62px] space-y-3 text-black text-lg font-semibold"
              : "hidden")
          }
        >
          <Link
            className={
              underline === "home"
                ? " underline  text-red-600  font-bold"
                : "" + (menu ? "pt-[10px]" : "")
            }
            to="/"
            onClick={() => setUnderline("home")}
          >
            home
          </Link>
          <Link
            onClick={() => setUnderline("menu")}
            className={
              underline === "menu" ? " underline  text-red-600  font-bold" : ""
            }
            to={"/product"}
          >
            menu
          </Link>
          <Link to="custom-pizza">
          <li
            onClick={() => setUnderline("custom-pizza")}
            className={
              underline === "custom-pizza"
              ? " underline  text-red-600  font-bold"
              : ""
            }
            >
            Custom Pizza
          </li>
            </Link>
        </ul>

        <div className="flex items-center justify-center">
          <div className="flex space-x-3">
            <button onClick={() => setShowLogin(true)}>Sign in</button>
          </div>
        </div>

        {/* <div className="flex items-center justify-center">
          <Link to="/auth">
            <div className="flex space-x-3">
              {!token ? (
                <button onClick={() => change === true && setChange(false)}>
                  Signup
                </button>
              ) : (
                <button onClick={() => setChange(!change)}>Login</button>
              )}
            </div>
          </Link>
          {token ? <FaShoppingBag className="ml-2" size={20} /> : ""}
        </div> */}
        <div
          onClick={handleMenu}
          className="cursor-pointer transition-all lg:hidden"
        >
          {menu ? (
            <MdOutlineRestaurantMenu size={33} fill="" />
          ) : (
            <CgMenuGridO size={35} fill="" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
