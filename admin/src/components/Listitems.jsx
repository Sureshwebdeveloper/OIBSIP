import React from "react";
import image from "../assets/profile_image.png";
const Listitems = () => {
  return (
    <div className="absolute left-32 md:left-72 top-28 ">
      <h1 className=" text-base">All Pizza List</h1>
  
        <div className="grid grid-flow-col gap-5 border bg-slate-200 border-[#888] px-5 font-poetsen ">
          <div className="image">image</div>
          <div className="Name">Name</div>
          <div className="Category">Category</div>
          <div className="  hidden md:block">price</div>
          <div className="Action">Action</div>
        </div>
        <div className=" grid grid-flow-col grid-cols-1 gap-5 border  px-8 py-2 font-outfit">
          <div className="image">
            <img src={image} alt="" className="w-8" />
          </div>
          <div className="Name"> Greek Salad</div>
          <div className="Category">Veg</div>
          <div className="  hidden md:block">240Rs</div>
          <div className="Action">x</div>
        </div>

      <hr />
    </div>
  );
};

export default Listitems;
