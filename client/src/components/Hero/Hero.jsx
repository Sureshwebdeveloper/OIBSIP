import React from "react";
import { assets } from "../../assets/assests";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="w-full h-screen bg-black text-white flex flex-wrap">
      <div className="flex justify-center w-full h-full items-center flex-col space-y-7 pt-9">
      

        {/* For Pizza */}
        <motion.div
          animate={{ rotate: [null, 4], scale: "1.1" }}
          transition={{
            duration: 3,
            repeatType: Infinity,
          }}
          className="mt-6"
        >
          {/* <img
            src={assets.heder_pizza_1}
            alt=""
            className="h-[300px] mx-auto pt-10"
          /> */}
          <img src={assets.heder_pizza_3} alt="" className=" object-cover  w-96" />
        </motion.div>
         
        <h1 className=" font-bold text-3xl mt-11 lg:4xl">
          Order Your Favourite food
        </h1>
        <p className="text-center font-semibold capitalize overflow-ellipsis">
          Our Menu Has a Something for Everyone.By For Your Favourites Deliverd
          Right to your Door Step.
        </p>
        <button className="px-4 py-2 m-3 rounded-lg bg-red-600 text-lg font-bold">
          view menu
        </button>
      </div>
      
    </div>
  );
};

export default Hero;
