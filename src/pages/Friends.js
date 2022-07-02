import React from "react";
import { Route } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import '../assets/glassmorphism.css';
import Explore from "../components/Explore";
import FriendsFollow from "../components/FriendsFollow";
const Friends = () => {
  const redirect = () => {
    window.location.replace("https://paytm.me/6-FJJsF")

  }
  return (
    <>
      <div className="m-10">

        <h1 className="font-bold text-3xl text-blue-800 mt-16 ml-6">Expert Friends</h1>
        <div className="ml-6">Investment details</div>
        <div className="grid grid-cols-2 gap-4">
          <div className="salman white-glassmorphism hover:bg-slate-100  p-8  rounded-lg box_3d mt-12 h-60  hover:cursor-pointer m-5" onClick={redirect}>
            <div className="grid grid-cols-3 m-5">
              <img
                src="https://www.pngitem.com/pimgs/m/419-4196791_transparent-confused-man-png-default-profile-png-download.png"
                alt=""
                className="h-16 w-16 rounded-full"
              />

              <div className="name font-medium text-lg">Adam's Portfolio</div>

              <FaLock className="ml-32 fill-red-600" />

            </div>
            <div className="grid grid-cols-3 mt-10">
              <div className="value text-gray-500 text-sm">Invested Value</div>
              <div className="overallgain text-gray-500 text-sm">Overall Gain</div>
              <div className="1day text-gray-500 text-sm">1 day gain</div>
              <div></div>
            </div>
            <div className="grid grid-cols-3">
              <div className="no1 font-medium">500usdt</div>
              <div className="text-green-400 font-semibold">60%</div>
              <div className="text-blue-500 font-semibold">3%</div>
            </div>
          </div>

          <div className="vishnu white-glassmorphism  p-8  rounded-lg box_3d mt-12 h-60 hover:bg-slate-100 hover:cursor-pointer m-5" onClick={redirect}>
            <div className="grid grid-cols-3 m-5">
              <img
                src="https://www.pngitem.com/pimgs/m/419-4196791_transparent-confused-man-png-default-profile-png-download.png"
                alt=""
                className="h-16 w-16 rounded-full"
              />

              <div className="name font-medium text-lg flex">Salman's Portfolio</div>

              <FaLock className="ml-32 fill-red-600" />

            </div>
            <div className="grid grid-cols-3 mt-10">
              <div className="value text-gray-500 text-sm">Invested Value</div>
              <div className="overallgain text-gray-500 text-sm">Overall Gain</div>
              <div className="1day text-gray-500 text-sm">1 day gain</div>
              <div></div>
            </div>
            <div className="grid grid-cols-3">
              <div className="no1 font-medium">500usdt</div>
              <div className="text-green-400 font-semibold">60%</div>
              <div className="text-blue-500 font-semibold">3%</div>
            </div>
          </div>

          <div className="adam white-glassmorphism  p-8  rounded-lg box_3d mt-12 h-60 hover:bg-slate-100 hover:cursor-pointer m-5" onClick={redirect}>
            <div className="grid grid-cols-3 m-5">
              <img
                src="https://www.pngitem.com/pimgs/m/419-4196791_transparent-confused-man-png-default-profile-png-download.png"
                alt=""
                className="h-16 w-16 rounded-full"
              />

              <div className="name font-medium text-lg flex">Salman's Portfolio</div>

              <FaLock className="ml-32 fill-red-600" />

            </div>
            <div className="grid grid-cols-3 mt-10">
              <div className="value text-gray-500 text-sm">Invested Value</div>
              <div className="overallgain text-gray-500 text-sm">Overall Gain</div>
              <div className="1day text-gray-500 text-sm">1 day gain</div>
              <div></div>
            </div>
            <div className="grid grid-cols-3">
              <div className="no1 font-medium">500usdt</div>
              <div className="text-green-400 font-semibold">60%</div>
              <div className="text-blue-500 font-semibold">3%</div>
            </div>
          </div>

          <div className="lisa white-glassmorphism  p-8  rounded-lg box_3d mt-12 h-60 hover:bg-slate-100 hover:cursor-pointer m-5" onClick={redirect}>
            <div className="grid grid-cols-3 m-5">
              <img
                src="https://www.pngitem.com/pimgs/m/419-4196791_transparent-confused-man-png-default-profile-png-download.png"
                alt=""
                className="h-16 w-16 rounded-full"
              />

              <div className="name font-medium text-lg flex">Salman's Portfolio</div>

              <FaLock className="ml-32 fill-red-600" />

            </div>
            <div className="grid grid-cols-3 mt-10">
              <div className="value text-gray-500 text-sm">Invested Value</div>
              <div className="overallgain text-gray-500 text-sm">Overall Gain</div>
              <div className="1day text-gray-500 text-sm">1 day gain</div>
              <div></div>
            </div>
            <div className="grid grid-cols-3">
              <div className="no1 font-medium">500usdt</div>
              <div className="text-green-400 font-semibold">60%</div>
              <div className="text-blue-500 font-semibold">3%</div>
            </div>
          </div>
        </div>
      </div>

 
    <Explore>
        <FriendsFollow/>
    
        </Explore>
    <div className="following">
        <h1 className="font-bold text-3xl">Following</h1>

    </div>

     


    </>
  );
};

export default Friends;
