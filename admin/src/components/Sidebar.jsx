import React from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { FaList } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className=" bg-gray-900 h-screen w-1/4 lg:w-1/6 text-white relative top-14 ">
      <div className="mx-auto pt-6 space-y-5 flex items-center justify-center flex-col">
        <div className="flex items-center justify-center w-full  space-x-3 p-2  rounded-md cursor-pointer md:hover:bg-[#575757]">
          <Link to="/">
            <h3 className="ml-3 hidden md:block">Add Product</h3>
          </Link>
          <div className=" border-2 rounded-full p-1 border-red-500">
            <div>
              <Link to="/">
                <FaCirclePlus size={24} />{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full space-x-4 p-2 rounded-md cursor-pointer  md:hover:bg-[#575757]">
          <Link to="/list">
            <h3 className="ml-3 hidden md:block">View Product</h3>
          </Link>
          <div className=" border-2 rounded-full p-1 border-red-500">
            <div>
              <Link to="/list">
                <FaList size={22} />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full space-x-4 p-2 rounded-md cursor-pointer  md:hover:bg-[#575757]">
          <Link to="/orders">
            <h3 className="ml-3 hidden md:block">View Orders</h3>
          </Link>
          <div className=" border-2 rounded-full p-1 border-red-500">
            <div>
              <Link to="/orders">
                <FaCartPlus size={22} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
