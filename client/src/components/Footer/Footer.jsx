import React from "react";
import { assets } from "../../assets/assests";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className=" bg-pink-300 shadow-xl w-full h-auto py-5">
     <Link to="/">
          <img src={assets.logo_1} alt="" className=" object-cover h-8 px-3" />
        </Link>
      <ul className="px-3 capitalize space-y-3">
        <Link to="/">home</Link>
        <li>menu</li>
        <li>contact-us</li>
        <li>Branchlets</li>
      </ul>
    </div>
  );
};

export default Footer;
