import { useState } from "react";
import { all_product, assets } from "../../assets/assests.js";
import CustomPizza from "../CustomPizza/CustomPizza.jsx";
import Exploremenu from "../Exploremenu/Exploremenu.jsx";

const ProductMenu = () => {

  return (
    <div className=" bg-primary_black ">
        <Exploremenu/>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-primary_black py-6 px-4 mx-auto">
        {all_product.map((item, index) => (
          <div
            key={index}
            className="mx-auto bg-black shadow-lg rounded-md px-3 py-4"
          >
            <div>
              <p className="text-white text-center font-extrabold max-w-[230px] text-2xl uppercase font-outfit">
                {item.menu_name}
              </p>
              <img
                src={
                  item.category === "veg" ? assets.veg_icon : assets.nonveg_icon
                }
                className="h-6 relative top-8 left-3  bg-white rounded-md"
                alt=""
              />
              <img
                src={item.menu_img}
                alt=""
                className="w-[250px] max-h-52 max-w-60 mx-auto h-[200px] rounded-lg"
              />
              <div className="py-4 flex items-center justify-between">
                <label htmlFor="size" className="text-white">
                  Size
                </label>
                <select name="size" id="size" className=" outline-none">
                  <option value="" selected>
                    Small
                  </option>
                  <option value="">Medium</option>
                  <option value="">Large</option>
                </select>

                <label htmlFor="quantity" className="text-white">
                  Quantity
                </label>
                <select
                  name="quantity"
                  id="quantity"
                  className="px-3 outline-none "
                >
                  <option value="1" selected className="">
                    1
                  </option>
                  <option value="2" className="">
                    2
                  </option>
                  <option value="3" className="">
                    3
                  </option>
                  <option value="3" className="">
                    3
                  </option>
                  <option value="4" className="">
                    4
                  </option>
                  <option value="5" className="">
                    5
                  </option>
                  <option value="6" className="">
                    6
                  </option>
                  <option value="7" className="">
                    7
                  </option>
                  <option value="8" className="">
                    8
                  </option>
                  <option value="9" className="">
                    9
                  </option>
                  <option value="1" className="">
                    10
                  </option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-lg text-red-500  font-poetsen">
                  Price <span className="text-white"> {item.menu_price}</span>
                </h2>
                <button
                  type="submit"
                  className="uppercase rounded-md text-white px-3 py-1 font-semibold bg-red-600"
                  onClick={() => handleorder(index)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductMenu;
