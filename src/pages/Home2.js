import React, { useEffect, useState } from 'react'
import logo2 from '../images/logo2.png'
import vector from '../images/vector.png'
import './Home2.css'
import { Link } from 'react-router-dom'
import Coins from '../components/Coins'
const Home2 = () => {
    return (
        <>
        <div className='home'>
            <div className=''>
                {/* <img src={vector}></img> */}
                <p className='mt-36 text-gradient text-3xl md:text-6xl text-white'>Invest and Grow</p>
                <p className='text-gradient text-lg md:text-2xl text-white mt-4 mb-4'>Build your diversified portfolio with us</p><br></br>
                <Link to="/signin">

                    <button onClick={''} className='btn'>SignUp with Binance</button>
                </Link>
                <Link to="/login">
                    <button onClick={''} className='btn2 btn mb-48 white-glassmorphism'>Login with Binance</button>
                </Link>
                {/* <img className='ill' src={logo2}></img> */}
            </div >
            <div className='text-white'>

<Coins />
            </div>
        </div>
        
        
        </>
    )
}

export default Home2
