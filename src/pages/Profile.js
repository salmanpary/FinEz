import React from 'react'
import { useEffect } from 'react'
import '../assets/3d.css'
// import {card} from './Profile'


const Profile = () => {
    
  return (
    <div className='grid grid-cols-3 mt-16 ml-8'>
    <div className="col-span-1">
       <div className=" bg-slate-100 p-8 rounded-lg">
       <h3 className='text-center text-2xl font-bold'>Total Amount</h3>
        <h4 className='text-center text-3xl font-semibold mt-4'>$123</h4>
        <div className="flex justify-between mx-12 mt-12">
        <h3 className='text-xl '>Invested Value</h3><h3 className='text-xl'>$123</h3>
        </div>
        <div className="flex justify-between mx-12 mt-12">
        <h3 className='text-xl '>Overall gain</h3><h3 className='text-xl'>$123</h3>
        </div>
        <div className="flex justify-between mx-12 mt-12">
        <h3 className='text-xl '>1 D gain</h3><h3 className='text-xl'>$123</h3>
        </div>
       </div>
        <div className=" flex justify-evenly">
        <button type="submit" className='mt-4 w-[10rem] py-2 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white rounded-xl font-semibold text-xl' > Buy </button>
        <button type="submit" className='mt-4 w-[10rem] py-2 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-xl font-semibold text-xl' > Sell </button>
        
        </div>
    </div>
    <div className="col-span-2">

<div className="mx-12 max-w-[40rem]">

   <Card />
</div>


    </div>
       
    </div>
  )
}

export default Profile


export function Card() {
    return(
        <div className="flex Home_overview bg-slate-100 p-8 rounded-lg box_3d items-center justify-between mt-8 ">
        <h2 className='text-xl font-bold'>Some name</h2>
        <div className="">
            <h3 className='font-semibold mb-2'><span className='text-gray-600 font-normal'>Tot amt. :</span> 123</h3>
            <h3 className='font-semibold'><span className='text-gray-600 font-normal'>% change :</span> 12</h3>
            <h3 className='font-semibold mt-2'> <span className='text-gray-600 font-normal'>Allocation :</span> 33%</h3>
        </div>
        
            </div>
    )
}