import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { storeinfo } from "../features/friends/friends";
const FriendsFollow = ({ data }) => {
    const friend = useSelector(state => state.friends)
    const dispatch = useDispatch()
    const [follow, setFollow] = useState(true)
    useEffect(() => {
        console.log(friend)
    }, [friend])
    console.log(data)
    return (
        <div className="rounded-lg box_3d w-50 h-auto m-4">
            <p className="m-4 mb-0 p-2 text-base text-center">{data.name}</p>
            <div className="flex items-center justify-center">
                <img src="http://www.alfaboilers.com/wp-content/uploads/2018/02/t2-458x450.jpg" className="rounded-full w-20 h-20"></img>
            </div>
            <p className="m-4 text-xs text-gray-500 text-center ">{data.followers} followers</p>
            <div className="flex items-center justify-center ">
                {/* <button className={`${btnbgcolor} hover:${btnhover} ${border} ${fontcolor} font-bold py-2 px-8 rounded-3xl text-xs flex items-center justify-center`} onClick={change}>{btntext}</button> */}
                {follow ? <button onClick={() => setFollow(false)} className="font-bold mb-2 py-2 px-8 rounded-3xl bg-blue-700 hover:bg-blue-500 text-xs text-white flex items-center justify-center">Follow</button> :
                    <div className="flex flex-col">
                        <button onClick={() => setFollow(true)} className="font-bold py-2 px-8 border-solid border-2 text-blue-700 border-blue-700 rounded-3xl bg-white hover:bg-gray-100 text-xs text-white flex items-center justify-center">Following</button>
                        <button onClick={() => dispatch(storeinfo(data))} className="font-bold py-2 px-8 border-solid border-2 text-blue-700 border-blue-700 my-2 rounded-3xl bg-white hover:bg-gray-100 text-xs text-white flex items-center justify-center">View Profile</button>
                    </div>}
            </div>
        </div>
    )
}

export default FriendsFollow