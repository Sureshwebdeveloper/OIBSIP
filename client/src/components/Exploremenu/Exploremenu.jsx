import React, { useState } from "react";
import ProductMenu from "../ProductMenu/ProductMenu.jsx";
import { assets, explore_menu } from "../../assets/assests.js";
import { FaFilter } from "react-icons/fa";
import CustomPizza from "../CustomPizza/CustomPizza.jsx";
import { Link, useNavigate } from "react-router-dom";

const Exploremenu = ({ items, setItems }) => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("All");
  const handleNavigate = () => {
    navigate("/custom-pizza");
  };
  return (
    <div>
      <div className="w-full flex justify-center pt-16">
        {explore_menu.map((item, index) => (
          <div key={index} className=" flex px-3 py-4 ">
            <div className="">
              <div className="flex items-center justify-center pb-3">
                <p className="text-center text-white text-xl font-poetsen font-bold">
                  {item.category}
                </p>
              </div>
              <div
                onClick={() =>
                  setCategory((prev) =>
                    prev === item.category ? "All" : item.category
                  )
                }
              >
                <img
                  src={item.menu_img}
                  alt=""
                  className={
                    "h-16 w-[75px] cursor-pointer rounded-full bg-center border-4" +
                    (category === item.category
                      ? " border-orange-500 "
                      : "")
                  }
                />
              </div>
            </div>
          </div>
        ))}
        <div className="mt-4 ml-4">
          <div className={("flex flex-col pb-3" ) + category === "custom-pizza" ? "border" : ""} onClick={() => setCategory("custom-p")}>
            <p className="text-center text-xl mb-3 text-white font-poetsen  font-bold ">
              Custom Pizza
            </p>
            <Link to="/custom-pizza">
              <img
                src={assets.heder_pizza_3}
                alt=""
                className="h-16 w-[80px]  cursor-pointer rounded-full border-4 bg-center"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex gap-x-6 items-center justify-center">
        <div className="flex items-center">
          <img src={assets.veg_icon} alt="" className="h-8" />
          <p className="text-white">For Veg</p>
        </div>
        <div className="flex items-center">
          <img src={assets.nonveg_icon} alt="" className="h-8" />
          <p className="text-white">For Non Veg</p>
        </div>
      </div>
    </div>
  );
};

export default Exploremenu;
