import React from "react";
import { assets } from "../../assets/assests";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <div className=" bg-[#8879] shadow-xl w-full h-auto py-5 space-y-4 grid items-center justify-evenly grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      <div className="mt-4">
        <Link to="/">
          <img src={assets.logo_1} alt="" className=" object-cover h-8 px-3" />
        </Link>
        <h3 className="px-3">Conect to the our social media family</h3>
        <div className="text-white flex items-center space-x-3 mx-2">
          <FaFacebook size={22} className=" rounded-lg   " />
          <FaXTwitter size={22} className=" rounded-lg  " />
          <BsLinkedin size={22} className=" rounded-lg  " />
        </div>
      </div>

      <div className="px-3 capitalize space-y-2">
        <h1 className="capitalize font-extrabold">Company</h1>
        <Link to="/">home</Link>
        <p>About Us</p>
        <p>Delivery</p>
        <p>Privacy Policy</p>
      </div>
      
      <div className="px-3">
        <h1 className=" capitalize font-extrabold">Get in touch</h1>
        <p>contact@toppick.com</p>
        <p>help@toppick.com</p>
      </div>
    </div>
  );
};

export default Footer;
