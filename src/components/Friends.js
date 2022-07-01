import React, { useState } from "react";

const Friends = () => {
    const [btntext, setbtntext] = useState("FOLLOW")
    const [btnbgcolor, setbtnbgcolor] = useState("bg-blue-700")
    const [btnhover, setbtnhover] = useState("bg-blue-500")
    const [border, setborder] = useState("border-hidden")
    const [fontcolor, setfontcolor] = useState("text-white")
    const change = () => {
        if (btntext === "FOLLOW") {
            setbtntext("FOLLOWING")
            setbtnbgcolor("bg-white")
            setbtnhover("bg-gray-400")
            setborder("border-solid border-2 border-blue-700")
            setfontcolor("text-blue-700")
        }
        else {
            setbtntext("FOLLOW")
            setbtnbgcolor("bg-blue-700")
            setbtnhover("bg-blue-500")
            setborder("border-hidden")
            setfontcolor("text-white")
        }

    }
    return (
        <div className="rounded-lg box_3d w-50 h-56 m-4">
            <p className="m-4 mb-0 p-2 text-base text-center">Sallu</p>
            <div className="flex items-center justify-center">
                <img src="http://www.alfaboilers.com/wp-content/uploads/2018/02/t2-458x450.jpg" className="rounded-full w-20 h-20"></img>
            </div>
            <p className="m-4 text-xs text-gray-500 text-center">1.5k followers</p>
            <div className="flex items-center justify-center ">
                <button className={`${btnbgcolor} hover:${btnhover} ${border} ${fontcolor} font-bold py-2 px-8 rounded-3xl text-xs flex items-center justify-center`} onClick={change}>{btntext}</button>

            </div>
        </div>
    )
}

export default Friends