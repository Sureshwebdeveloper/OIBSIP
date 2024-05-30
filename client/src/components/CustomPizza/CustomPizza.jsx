import React from "react";
import { assets } from "../../assets/assests";

const CustomPizza = () => {
  return (
    <div className="flex items-center justify-around py-14 w-ful bg-[#ff9595e2] ">
      <form className="flex flex-col w-full md:justify-center md:items-center">
        <h1 className="text-center text-2xl font-bold py-3">
          Order Your Custom Pizza
        </h1>
        <div className="grid place-content-center place-items-center grid-flow-col w-full">
          <div>
            <img
              src={assets.custompizza_hero}
              alt=""
              className=" hidden md:block  md:w-[300px] md:h-[420px] md:rounded-3xl"
            />
          </div>
          <div className="grid place-content-center grid-cols-1 md:grid-cols-2  gap-3  border-2 border-black py-3 px-2  rounded-md">
            <div>
              <label htmlFor="size" className="text-lg font-medium">
                Size :{" "}
              </label>
              <select
                name="size"
                id="size"
                className="px-14 py-2 outline-none border-2 border-pizzaRed  font-semibold rounded-lg"
              >
                <option value="small" className="">
                  Small
                </option>
                <option value="medium" className=" ">
                  Medium
                </option>
                <option value="large" className="">
                  Large
                </option>
              </select>
            </div>

            <div>
              <label htmlFor="cheese" className="text-lg font-medium">
                Cheese :{" "}
              </label>
              <select
                name="cheese"
                id="cheese"
                className="px-14 py-2  outline-none border-2 border-pizzaRed  font-semibold rounded-lg "
              >
                <option value=" Mozezeralla "> Mozezeralla </option>
                <option value=" Cheddar "> Cheddar </option>
                <option value=" Parmesan "> Parmesan </option>
                <option value=" Ricotta "> Ricotta </option>
                <option value=" Gouda "> Gouda </option>
              </select>
            </div>

            <div>
              <label htmlFor="pizzatype" className="text-lg font-medium">
                Pizza :{" "}
              </label>
              <select
                name="pizzatype"
                id="pizzatype"
                className="px-14 py-2 outline-none border-2 border-pizzaRed  font-semibold rounded-lg"
              >
                <option value="">Type</option>
                <option value="">Veg</option>
                <option value="">Non veg</option>
              </select>
            </div>

            <div>
              <label htmlFor="sauce" className="text-lg font-medium">
                Sauce :{" "}
              </label>
              <select
                name="sauce"
                id="sauce"
                className="px-14 py-2 outline-none border-2 border-pizzaRed  font-semibold rounded-lg"
              >
                <option value="TandooriSauce">Tandoori Sauce</option>
                <option value="ChipotleSauce">chipotle Sauce</option>
                <option value="PeriPeriSauce">Peri Peri Sauce</option>
                <option value="CheeseSauce">Cheese Sauce</option>
                <option value="BarbequeSauce">Barbeque Sauce</option>
              </select>
            </div>
            <div className="mx-auto md:translate-x-[100%] ">
              <button className="bg-blue-500 rounded-md px-3 py-2 ml-2">
                Order Pizza
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CustomPizza;
