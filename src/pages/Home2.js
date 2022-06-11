import React, { useEffect, useState } from 'react'
import logo2 from '../images/logo2.png'
import vector from '../images/vector.png'
import './Home2.css'

const Home2 = () => {
    return (
        <div className='home'>
            {/* <img src={vector}></img> */}
            <p className='heading'>Invest and Grow</p>
            <p className='subhead'>Build your diversified portfolio with us</p><br></br>
            <button onClick={''} className='btn'>SignUp with Binance</button>
            <button onClick={''} className='btn2 btn'>Login with Binance</button>
            <img className='ill' src={logo2}></img>
        </div>
    )
}

export default Home2
