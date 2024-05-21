import React from "react";
import { assets } from "../../assets/assests";

const Appdownload = () => {
  return (
    <div className="flex items-center justify-center flex-col py-6 bg-stone-100 space-y-3">
      <h1 className="text-2xl text-center max-w-[300px] lg:max-w-full font-bold">
        For Better Experience Download TOPPICK App
      </h1>
      <div className="flex flex-1 items-center justify-center gap-6 w-full cursor-pointer flex-row">
        <img src={assets.andriod} alt="playstore_icon" className="h-12" />
        <img src={assets.ios} alt="applestore_icon" className="h-12" />
      </div>
    </div>
  );
};

export default Appdownload;
