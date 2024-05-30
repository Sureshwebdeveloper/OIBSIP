import React, { useState } from "react";
import email from "../../assets/email.svg";
import axios from "axios";
import { IoClose } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import {Link} from "react-router-dom"
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const Forgot = () => {
  const {setShowLogin,url} = useContext(StoreContext);
 
  const [data, setData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((data) => ({ ...data, [name]: value }));
  };

  const handlePassword = (e) => {
    e.preventDefault();
    let newUrl = url;
    newUrl+="/forgot-password"
    axios.post(newUrl,data).then((res)=> {
      if (res.data.status===200) {
        
      }
    })
  }

  return (
    <div>
      <div
        className={
          " absolute  bg-[#000000b3] w-full flex items-center justify-center mx-auto h-screen z-20"
        }
      >
        <form onSubmit={handlePassword}
          className={
            "flex flex-col space-y-1  mx-auto bg-white shadow-xl px-6 rounded-md py-3 cursor-auto z-20"
          }
        >
          <div className="flex items-center justify-between w-full">
          
          <Link to="/loginpopup">
              <IoArrowBack size={24} className={("cursor-pointer" ) + setShowLogin === true && "opacity-0"} />
          </Link>
          
            <h1 className="font-poetsen text-xl ">
              Forgot Password
            </h1>
         
          </div>

          <label htmlFor="email" className="relative top-9 left-4 text-xl z-10">
            <img src={email} alt="" className="h-5" />
          </label>
          <input
            type="email"
            placeholder="email"
            id="email"
            className="border-2 border-[#C7BEBE] drop-shadow-sm outline-none  px-5 lg:px-16 py-2 rounded-md placeholder:pl-2 pl-14 focus:border-3 focus:border-[#4070f4]"
            name="email"
            onChange={handleChange}
            value={data.email}
            required
          />

          <div className={"pt-4"}>
            <button
              type="submit"
              className={"bg-blue-900 text-white px-5 py-2 rounded-md w-full"}
            >
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forgot;
