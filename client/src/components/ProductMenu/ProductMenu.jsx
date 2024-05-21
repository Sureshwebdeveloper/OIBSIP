import React from "react";
import { all_product, assets } from "../../assets/assests.js";
const ProductMenu = () => {
  return (
    <div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-pizzaOrange py-6 px-4 mx-auto">
        {all_product.map((item, index) => (
          <div key={index} className="mx-auto bg-black shadow-lg rounded-md px-3 py-4">
            <div>
              <img src={item.category === "veg" ? assets.veg_icon : assets.nonveg_icon} className="h-6 relative top-8 left-3 bg-white rounded-md" alt="" />
              <img
                src={item.menu_img}
                alt=""
                className="w-[250px] h-[200px] rounded-lg"
              />
              <div className="flex items-center justify-between">
                <p className="text-white my-3">{item.menu_name}</p>
                <p className="font-semibold text-red-500">Price${item.menu_price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductMenu;
