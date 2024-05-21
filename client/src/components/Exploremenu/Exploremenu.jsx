import React from "react";
import ProductMenu from "../ProductMenu/ProductMenu.jsx";
import { all_product } from "../../assets/assests.js";

const Exploremenu = ({ items, setItems }) => {
  return (
    <div>
      <div className="w-full flex items-center justify-center  mx-auto bg">
        {all_product.map((item, index) => (
          <div key={index} className="mx-auto px-3 py-4 ">
            <div className="">
              <img
                src={item.menu_img}
                alt=""
                className="w-[80px] md:w-[100px] h-[70px] md:h-[90px] lg:w-[130px] lg:h-[120px]  cursor-pointer rounded-full border-4 border-orange-500 bg-center"
              />
              <div className="flex items-center">
                <p className="text-center mx-auto">Veg</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ProductMenu />
    </div>
  );
};

export default Exploremenu;
