import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ethers } from "ethers";
import piggy from "../images/piggy.png"
// import { useState } from 'react';
function Navbar() {
    const [data, setdata] = useState({
        address: "",
        Balance: null,
    });

    const [hasAddress, setHasAddress] = useState(false)

    // Button handler button for handling a
    // request event for metamask
    const btnhandler = () => {

        // Asking if metamask is already present or not
        if (window.ethereum) {

            // res[0] for fetching a first wallet
            window.ethereum
                .request({ method: "eth_requestAccounts" })
                .then((res) => accountChangeHandler(res[0]));
        } else {
            alert("install metamask extension!!");
        }
    };

    // getbalance function for getting a balance in
    // a right format with help of ethers
    const getbalance = (address) => {

        // Requesting balance method
        window.ethereum
            .request({
                method: "eth_getBalance",
                params: [address, "latest"]
            })
            .then((balance) => {
                // Setting balance
                setdata({
                    Balance: ethers.utils.formatEther(balance),
                });
            });
    };

    // Function for getting handling all events
    const accountChangeHandler = (account) => {
        // Setting an address data
        setdata({
            address: account,
        });

        // Setting a balance
        getbalance(account);
    };
    useEffect(() => {
        if (data.address != "") {
            setHasAddress(true)
        }
    }, [data.address])

    return (
        <div className='navbar flex fixed justify-between bg-white h-13 blue_3d_nav mx-10 ml-12 w-11/12 mt-5 p-2'>
            <div className=" flex mx-12 items-center">
                <img className="piggy m-0 p-0" src={piggy}></img>
                <h5 className='mx-2 nav_btn text-white'><Link to="/">Home</Link></h5>
                <h5 className='mx-2 nav_btn text-white'><Link to="/home2">Discover</Link></h5>
                <h5 className='mx-2 nav_btn text-white'><Link to="/create">Create</Link></h5>
                <h5 className='mx-2 nav_btn text-white'><Link to="/mybasket">MyBaskets</Link></h5>
                <h5 className='mx-2 nav_btn text-white'><Link to="/friends">Friends</Link></h5>
            </div>
            <div className="flex mr-12">
                {hasAddress ? <>
                    {data.address.slice(0, 8)}...
                </> : <>
                    {/* <h5 className='mx-2 cursor-pointer border-[1px] border-black px-1' onClick={btnhandler}> Connect to wallet</h5> */}
                    <button className=' white_3d   text-black p-3 px-4 mx-4 text-xs cursor-not-allowed rounded-xl font-bold ' type="submit" disabled={true} onClick={btnhandler}>Connect wallet</button>
                </>}
                <Link to='/profile'><h5 className='white_3d   text-black p-3 px-4 mr-0 text-xs rounded-xl font-bold '>Investments</h5></Link>
            </div>
        </div>
    )
}

export default Navbar