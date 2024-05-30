import React from 'react'

const ResetPassword = () => {
    return (
    <div>
      <div
      >
        <form
          onSubmit={handleSubmit}
          className={
            "flex flex-col space-y-1  mx-auto bg-white shadow-xl px-6 rounded-md py-3 cursor-auto z-20"
          }
        >
          <div className="flex items-center justify-between ">
            <h1 className="text-center font-poetsen text-xl">
              Reset Password
            </h1>
            <IoClose
              onClick={() => setShowLogin(false)}
              size={24}
              className=" cursor-pointer"
            />
          </div>
          
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

          <div className={change && "pt-4"}>
            <button
              type="submit"
              className={"bg-blue-900 text-white px-5 py-2 rounded-md w-full"}
            >
              {change ? "Update Password" : "Reset Password"}
            </button>
          </div>
          <div className="flex flex-wrap flex-col">
            {change ? (
              <div className=" pt-2">
                <p className=" capitalize font-semibold  text-[#4070f4] hover:text-[#1453ff] cursor-pointer">
                  Upadate Password
                </p>
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
                  onClick={handleSignup }
                  className=" text-blue-500 "
                >
                  Reset Password
                </b>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};



export default ResetPassword