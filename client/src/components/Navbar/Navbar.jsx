import React, { useState } from "react";
import { assets } from "../../assets/assests";
import { FaRegUserCircle } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Exploremenu from "../Exploremenu/Exploremenu";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [underline, setUnderline] = useState("home");

  const navigate = () => {
    useNavigate("/loginpopup");
  };

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className=" bg-nav drop-shadow-lg py-3 fixed w-full z-10">
      <div className="flex items-center justify-around w-full px-3 ">
        <Link to="/">
          <img src={assets.logo_1} alt="" className=" object-cover h-8 px-3" />
        </Link>

        <ul
          className={
            "lg:flex font-semibold lg:p-0 lg:bg-none lg:cursor-pointer lg:space-x-4 capitalize lg:items-center lg:flex-row " +
            (menu
              ? "lg:flex lg:text-base lg:cursor-pointer lg:absolute lg:top-2 lg:text-center  lg:bg-transparent lg:space-x-4 lg:items-center lg:flex-row p-4 w-full flex items-center justify-center flex-col bg-pizzaYellow cursor-pointer space-x-2  absolute left-0 top-[72px] space-y-3 text-black text-lg font-semibold"
              : "hidden")
          }
        >
          <Link
            className={
              underline === "home" ? " underline  text-red-600  font-bold" : "" +
              (menu ? "pt-[10px]" : "")
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
          <li
            onClick={() => setUnderline("contact-us")}
            className={
              underline === "contact-us"
                ? " underline  text-red-600  font-bold"
                : ""
            }
          >
            contact-us
          </li>
        </ul>

        <div className="">
          <div className="flex items-center space-x-2">
            <FaRegUserCircle className="ml-1" size={25} />
            <p className="">Guest User</p>
          </div>
          <Link to="/auth">
            <div className="flex space-x-3">
              <button>Login</button>
              <p className="mx-1">|</p>
              <button>Signup</button>
            </div>
          </Link>
        </div>
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
