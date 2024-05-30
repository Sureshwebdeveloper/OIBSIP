import React, { useContext, useEffect, useState } from "react";
import { FcBusinessman } from "react-icons/fc";
import { FcUnlock } from "react-icons/fc";
import email from "../../assets/email.svg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { IoClose } from "react-icons/io5";

const LoginPopup = () => {
  const { url, token, setToken, change, setChange, setShowLogin } =
    useContext(StoreContext);
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [hidden, setHidden] = useState(true);

  const handleSignup = () => {
    setChange(!change);
    setHidden(!hidden);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((data) => ({ ...data, [name]: value }));
  };

  // For User Login
  const handleSubmit = async (e) => {
    e.preventDefault();
    let newUrl = url;
    if (change === true) {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      alert("Account Created Successfully");
      {
        (data.name = ""), (data.email = ""), (data.password = "");
      }
      token && setChange(true);
    }
  };

  const handleRedirect = () => {
    navigate("/");
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div
      className={
        " absolute  bg-[#000000b3] w-full flex items-center justify-center mx-auto h-screen z-20"
      }
    >
      <form
        onSubmit={handleSubmit}
        className={
          "flex flex-col space-y-1  mx-auto bg-white shadow-xl px-6 rounded-md py-3  z-20"
        }
      >
        <div className="flex items-center justify-between ">
          <h1 className="text-center font-poetsen text-xl">
            {change ? "Login" : "Signup"}
          </h1>
          <Link to="/">
            <IoClose
              onClick={() => setShowLogin(false)}
              size={24}
              className=" cursor-pointer"
            />
          </Link>
        </div>
        <div className={change ? "hidden" : "block"}>
          <label
            htmlFor="name"
            className="relative top-8 left-4 text-xl w-full z-10"
          >
            <FcBusinessman />
          </label>
          <input
            type="text"
            placeholder="user name"
            id="name"
            name="name"
            onChange={handleChange}
            value={data.name}
            className="border-2 border-[#C7BEBE] outline-none px-5 lg:px-16 py-2 rounded-md placeholder:pl-2 pl-14 drop-shadow-sm focus:border-3 focus:border-[#4070f4] cursor-pointer"
            required
          />
        </div>

        <label htmlFor="email" className="relative top-9 left-4 text-xl z-10">
          <img src={email} alt="" className="h-5" />
        </label>
        <input
          type="email"
          placeholder="email"
          id="email"
          className="border-2 border-[#C7BEBE] drop-shadow-sm outline-none  px-5 lg:px-16 py-2 rounded-md placeholder:pl-2 pl-14 focus:border-3 focus:border-[#4070f4] cursor-pointer"
          name="email"
          onChange={handleChange}
          value={data.email}
          required
        />

        <label
          htmlFor="password"
          className="relative top-9 left-4 text-xl z-10"
        >
          <FcUnlock />
        </label>
        <input
          type="password"
          placeholder="password"
          id="password"
          name="password"
          onChange={handleChange}
          value={data.password}
          className={
            "border-2 border-[#C7BEBE] outline-none px-5 lg:px-16 py-2 rounded-md placeholder:pl-2 pl-14 cursor-pointer focus:border-3 focus:border-[#4070f4] drop-shadow-sm"
          }
          required
        />

        {change ? (
          " "
        ) : (
          <div className="flex justify-start">
            <input
              type="checkbox"
              id="checkbox"
              required
              className=" accent-blue-700 cursor-pointer"
            />
            <label htmlFor="checkbox" className="ml-2 my-2">
              i accept all terms & conditions
            </label>
          </div>
        )}

        <div className={change && "pt-4"}>
          <button
            type="submit"
            className={"bg-blue-900 text-white px-5 py-2 rounded-md w-full"}
          >
            {change ? "Login" : "Signup"}
          </button>
        </div>
        <div className="flex flex-wrap flex-col">
          {change ? (
            <div className=" pt-2">
              <Link to="/forgot-password">
                <p className=" capitalize font-semibold  text-[#4070f4] hover:text-[#1453ff] cursor-pointer">
                  forgot password
                </p>
              </Link>
              <p className="font-medium text-black cursor-pointer text-center pt-2">
                Don't Have Account ? {"  "}
                <b onClick={handleSignup} className=" text-blue-500">
                  Create
                </b>
              </p>
            </div>
          ) : (
            <p className="font-medium text-black my-2 cursor-pointer text-center">
              Have on Account ?{" "}
              <b
                onClick={!token ? handleSignup : handleRedirect}
                className=" text-blue-500 "
              >
                Login now
              </b>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPopup;
