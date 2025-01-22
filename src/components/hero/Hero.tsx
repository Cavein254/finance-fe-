import React from "react";
import { FaFire } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="bg-hero-bg bg-cover bg-center p-4 md:flex md:h-[600px]">
      <div className="flex justify-center h-[300px] items-center md:w-1/2 md:h-full">
        <h1 className="font-bold text-3xl text-center bg-black/90 p-4">
          Your all-in-one crypto platform to buy, sell, trade, hold and earn
          cryptocurrencies1
        </h1>
      </div>
      <div className="hidden md:flex justify-center items-center w-1/2 md:h-full ">
        <div className="rounded-md flex flex-col w-[400px] gap-4 bg-black p-8">
          <div className="flex justify-center flex-col items-center gap-2">
            <FaFire size={64} className="bg-orange-400 p-2 rounded-full" />
            <span className="text-3xl font-bold ">Unlimit</span>
          </div>
          <div className="mt-4  text-xl capitalize">
            Check historical Prices
          </div>
          <div className="flex flex-col">
            <input
              placeholder="Enter ticker"
              className="text-3xl py-2 px-4 rounded-lg text-gray-500"
            />
            <button className="mt-4 rounded-full px-4 py-2 text-2xl bg-green-400">
              Get Historical Price
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
