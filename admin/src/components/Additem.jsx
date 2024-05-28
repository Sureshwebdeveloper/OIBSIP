import React from "react";
import upload from "../assets/upload_area.png";
const Additem = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="  absolute left-32 md:left-72 top-28">
      <form onSubmit={handleSubmit} className=" space-y-5">
        <div className=" space-y-2">
          <label htmlFor="upload" className="py-1">
            Upload Image
          </label>
          <input
            type="file"
            name=""
            id="upload"
            className=" z-10 absolute w-20  top-3 hidden"
          />
          <img
            src={upload}
            alt=""
            id="upload"
            className="cursor-pointer  z-30"
          />
        </div>

        <div className="flex flex-col cursor-pointer">
          <label htmlFor="name" className="py-1">
            Product Name
          </label>
          <input
            type="text"
            name=""
            id="name"
            placeholder="Type here"
            className="border border-[#888] px-2 py-2 outline-none"
          />
        </div>

        <div className="flex flex-col cursor-pointer outline-none">
          <label htmlFor="desc" className="py-1">
            Product Description
          </label>
          <textarea
            name=""
            id="desc"
            className="border border-[#888] outline-none pt-2 pl-2"
            placeholder="Write Content here"
          ></textarea>
        </div>

        <div className="flex gap-x-7">
          <div>
            <label htmlFor="category">Product Category</label>
            <select
              name="category"
              id="category"
              className="flex border px-6 py-2 border-[#888] font-semibold outline-none"
            >
              <option value="veg" className=" px-3">
                veg
              </option>
              <option value="nonveg" className=" px-3">
                nonveg
              </option>
            </select>
          </div>
          <div className="flex  flex-col">
            <label htmlFor="price">Product Price</label>
            <input type="number" name="price" id="price" placeholder="Rs 200" className=" w-24 py-2 pl-4 border border-[#888] outline-none"/>
          </div>
        </div>
        <button className=" bg-black text-white px-9 py-2 rounded-md">ADD</button>
      </form>
    </div>
  );
};

export default Additem;
