import React from 'react'
import Profilecomp from '../components/Profilecomp'
import Profile from './Profile'
import { useSelector, useDispatch } from 'react-redux'
import { storeview } from "../features/viewprofile/view";
const ViewProfile = ({ data }) => {
    const friend = useSelector(state => state.friends)
    console.log(friend, 'herer')
    var invested = {
        sum_percentage: friend.percentage,
        invested_amount: friend.total_balance

    }

    // var link = "https://fineazy-backend.herokuapp.com/auth/specific_user"
    return (

        <div className='mt-12 ml-4'>

            <div className="grid grid-cols-3">
                <div className="col-span-1">
                    <Profilecomp invested={invested} />

                </div>
            </div>
        </div>
    )
}

export default ViewProfile

function Card({ data, i }) {

    const icon = data[i]?.name.slice(0, 3).toLowerCase()
    const imgLink = `https://cryptoicons.org/api/icon/${icon}/200`
    console.log(imgLink)

    return (
        <div className="flex Home_overview bg-slate-50 p-8 rounded-lg box_3d items-center justify-between mt-8 ">
            <div className="flex items-center">

                {/* <img src={imgLink} className="w-12 h-12 flex items-center mr-2" alt="" /> */}
                <h2 className='text-xl font-bold'>{data[i]?.name}</h2>
            </div>
            <div className="">
                <h3 className='font-semibold mb-2'><span className='text-gray-600 font-normal'>Tot amt. : </span> {data[i]?.price}</h3>
                <h3 className='font-semibold'><span className='text-gray-600 font-normal'>% change : </span>{data[i]?.percentage_change}</h3>
                <h3 className='font-semibold mt-2'> <span className='text-gray-600 font-normal'>Allocation : </span>{data[i]?.allocation}</h3>
            </div>

        </div>
    )
}