import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ethers } from "ethers";
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
        <div className='flex fixed w-full drop-shadow-lg justify-between bg-white h-12 p-2'>
            <div className=" flex mx-12 items-center">
                <h3 className='text-3xl font-bold font-mono mr-8 text-green-500'>FE</h3>
                <h5 className='mx-2'><Link to="/">Home</Link></h5>
                <h5 className='mx-2'>Discover</h5>
                <h5 className='mx-2'><Link to="/create">Create</Link></h5>
            </div>
            <div className="flex mr-12">
                {hasAddress ? <>
                    {data.address.slice(0, 8)}...
                </> : <> <h5 className='mx-2 cursor-pointer border-[1px] border-black px-1' onClick={btnhandler}> Connect to wallet</h5></>}
                <h5 className='mx-2'>Investments</h5>
            </div>
        </div>
    )
}

export default Navbar