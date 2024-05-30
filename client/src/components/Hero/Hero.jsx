import React, { useState } from "react";
import { assets } from "../../assets/assests";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { fadeIn } from "../Variant/Variant.js";
const Hero = () => {
  return (
    <div className="w-full h-screen bg-black text-white flex flex-wrap">
      <div className="flex justify-center w-full h-full font-outfit items-center flex-col space-y-7 pt-9">
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
          <img
            src={assets.threeD_pizza}
            alt=""
            className=" object-cover w-96 z-20"
          />
          <img
            src={assets.form_hero}
            alt=""
            className=" w-[250px]  -top-28  left-60 absolute hidden md:block"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          transition={{ duration: "3" }}
          className=" font-bold text-3xl pt-4 text-center capitalize "
        >
          order your favourite pizza
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 100, scale: 1.1 }}
          transition={{ duration: "2" }}
          className="text-center font-semibold capitalize overflow-ellipsis max-w-[400px] leading-relaxed"
        >
          Our Menu Has a Something for Everyone.By For Your Favourites Deliverd
          Right to your Door Step.
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          transition={{ duration: "3" }}
          className="px-4 py-2 m-3 rounded-lg bg-red-600 text-lg font-bold"
        >
          view menu
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
