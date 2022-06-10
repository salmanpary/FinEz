import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
    return (
        <div className='flex fixed w-full drop-shadow-lg justify-between bg-white h-12 p-2'>
            <div className=" flex mx-12 items-center">
            <h3 className='text-3xl font-bold font-mono mr-8 text-green-500'>FE</h3>
                <h5 className='mx-2'><Link to="/">Home</Link></h5>
                <h5 className='mx-2'>Discover</h5>
                <h5 className='mx-2'><Link to="/create">Create</Link></h5>
            </div>
            <div className="flex mr-12">
                <h5 className='mx-2'> Watchlist</h5>
                <h5 className='mx-2'>Investments</h5>
            </div>
        </div>
    )
}

export default Navbar