import React from "react";
import { Route} from "react-router-dom";
import { AiFillLock } from "react-icons/ai";
import Explore from "./Explore";
import FriendsFollow from "../components/FriendsFollow";
const Friends = () => {
    const redirect=()=>{
       window.location.replace("https://paytm.me/6-FJJsF")

    }
  return (
    <>
    <div className="m-10">

      <h1 className="font-bold text-3xl">Expert Friends</h1>
      <div className="">Investment details</div>
      <div className="grid grid-cols-2 gap-7">
        <div className="salman bg-slate-100  p-8  rounded-lg box_3d mt-12 h-60 hover:bg-slate-200 hover:cursor-pointer" onClick={redirect}>
          <div className="grid grid-cols-3 m-10">
          <img
              src="https://bakejobs.com/wp-content/uploads/2020/05/dummy-man-png-2-1.png"
              alt=""
              className="h-10 w-10 rounded-full"
            />
         
            <div className="name">Salman Portfolio</div>
            
            <AiFillLock />
            
          </div>
          <div className="grid grid-cols-3">
            <div className="value">Invested Value</div>
            <div className="overallgain">Overall Gain</div>
            <div className="1day">1day gain</div>
            <div></div>
          </div>
          <div className="grid grid-cols-3">
            <div className="no1">500usdt</div>
            <div>60%</div>
            <div>3%</div>
          </div>
        </div>
        <div className="vishnu bg-slate-100  p-8  rounded-lg box_3d mt-12 hover:bg-slate-200 hover:cursor-pointer">
        <div className="grid grid-cols-3 m-10">
          <img
              src="https://bakejobs.com/wp-content/uploads/2020/05/dummy-man-png-2-1.png"
              alt=""
              className="h-10 w-10 rounded-full"
            />
         
            <div className="name">Salman Portfolio</div>
            
            <AiFillLock />
            
          </div>
          <div className="grid grid-cols-3">
            <div className="value">Invested Value</div>
            <div className="overallgain">Overall Gain</div>
            <div className="1day">1day gain</div>
            <div></div>
          </div>
          <div className="grid grid-cols-3">
            <div className="no1">500usdt</div>
            <div>60%</div>
            <div>3%</div>
          </div>
        </div>
        <div className="adam bg-slate-100  p-8  rounded-lg box_3d mt-12 hover:bg-slate-200 hover:cursor-pointer">
        <div className="grid grid-cols-3 m-10">
          <img
              src="https://bakejobs.com/wp-content/uploads/2020/05/dummy-man-png-2-1.png"
              alt=""
              className="h-10 w-10 rounded-full"
            />
         
            <div className="name">Salman Portfolio</div>
            
            <AiFillLock />
            
          </div>
          <div className="grid grid-cols-3">
            <div className="value">Invested Value</div>
            <div className="overallgain">Overall Gain</div>
            <div className="1day">1day gain</div>
            <div></div>
          </div>
          <div className="grid grid-cols-3">
            <div className="no1">500usdt</div>
            <div>60%</div>
            <div>3%</div>
          </div>
        </div>
        <div className="lisa bg-slate-100  p-8  rounded-lg box_3d mt-12 hover:bg-slate-200 hover:cursor-pointer">
        <div className="grid grid-cols-3 m-10">
          <img
              src="https://bakejobs.com/wp-content/uploads/2020/05/dummy-man-png-2-1.png"
              alt=""
              className="h-10 w-10 rounded-full"
            />
         
            <div className="name">Salman Portfolio</div>
            
            <AiFillLock />
            
          </div>
          <div className="grid grid-cols-3">
            <div className="value">Invested Value</div>
            <div className="overallgain">Overall Gain</div>
            <div className="1day">1day gain</div>
            <div></div>
          </div>
          <div className="grid grid-cols-3">
            <div className="no1">500usdt</div>
            <div>60%</div>
            <div>3%</div>
          </div>
        </div>
      </div>
    </div>
    <Explore>
    
        </Explore>
    <div className="following">
        <h1 className="font-bold text-3xl">Following</h1>

    </div>

    </>
  );
};

export default Friends;
