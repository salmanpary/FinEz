import React from 'react'
import Profilecomp from '../components/Profilecomp'
import Profile from './Profile'
import { useSelector, useDispatch } from 'react-redux'
import { storeview } from "../features/viewprofile/view";
const ViewProfile = ({ data }) => {
    const friend = useSelector(state => state.friends)
    const view = useSelector(state => state.view)
//    console.log(view,'kle')
    

    // var link = "https://fineazy-backend.herokuapp.com/auth/specific_user"
    return (

        <div className='mt-12 ml-4'>

            <div className="bg-white mx-12 rounded-xl py-12 mb-8 px-12 grid grid-cols-2">
               <div className="flex items-center col-span-1 border-r-2	">
               <img
                    src="https://www.pngitem.com/pimgs/m/419-4196791_transparent-confused-man-png-default-profile-png-download.png"
                    alt=""
                    className="h-32 w-32 rounded-full"
                />
                <div className="text-5xl font-bold ml-20">
                    {view.name}
                    <div className="text-2xl mt-8">Following.</div>
                </div>
               </div>
               <div className="col-span-1 text-2xl font-semibold ml-20 flex flex-col justify-evenly  ">
               <h3 className='mb-4'> Followers : {view.followers}</h3>
               <h3> Following : {view.following} </h3>
               </div>
            </div>

            <div className="grid grid-cols-3">
                <div className="col-span-1">
                    <Profilecomp invested={view} />

                </div>
                <div className="col-span-2 mx-12">
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default ViewProfile

function Card({ data, i }) {

    // const icon = data[i]?.name.slice(0, 3).toLowerCase()
    const imgLink = `https://cryptoicons.org/api/icon/bnb/200`
    // console.log(imgLink)

    return (
        <div className="flex Home_overview bg-slate-50 p-8 rounded-lg box_3d items-center justify-between mt-8 ">
            <div className="flex items-center">

                <img src={imgLink} className="w-12 h-12 flex items-center mr-2" alt="" />
                <h2 className='text-xl font-bold'>BNBUSD</h2>
            </div>
            <div className="">
                <h3 className='font-semibold mb-2'><span className='text-gray-600 font-normal'>Tot amt. : </span> 12 USD</h3>
                <h3 className='font-semibold'><span className='text-gray-600 font-normal'>% change : </span>8.342</h3>
                <h3 className='font-semibold mt-2'> <span className='text-gray-600 font-normal'>Allocation : </span>100</h3>
            </div>

        </div>
    )
}