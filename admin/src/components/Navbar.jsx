import React from "react";
import logo from "../assets/logo.png";
import admin from "../assets/profile_image.png";
const Navbar = () => {
  return (
    <div className="py-2 px-8 w-full bg-[#ff8945] shadow-lg fixed z-20">
      <div className="w-full flex  items-center">
        <div className="flex  flex-col justify-start">
          <img src={logo} alt="" className="w-56" />
          <h3 className="-mt-4 text-start ml-4 font-bold text-[#49494b]">Admin Panel</h3>
        </div>
        <div className="flex justify-end w-full">
          <img src={admin} alt="" className="rounded-full " />
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Navbar;
