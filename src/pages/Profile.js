import React from 'react'
import { useEffect } from 'react'
import '../assets/3d.css'
import { HiSpeakerphone } from 'react-icons/hi'
import axios from 'axios'
import { useState } from 'react'
import bnbimg from '../images/bnbicon.png'


const Profile = () => {
    const [invested, setInvested] = useState()
    const [coinPrice, setCoinPrice] = useState([])

    const fetchData = async () => {

        const resp = await axios.post('https://fineazy-backend.herokuapp.com/getprice/users_portfolio', {
            apikey: "aYzZOAeym4hX76k6jMogk7mhJNYnywZuAI6jl7Mii89DzrMAw4B6vv9NvU1aU9fu",
            apisecret: "JmU2M67eYD9ZqBLMF8JH4R5XPpK8owoZHjkFcnNRFiIyVed87aVh5VuQmx7FHjC8"

        })
        console.log(resp.data)
        setInvested(resp.data)
        var temp = []
        temp.push(resp.data.coin_prices_json)
        setCoinPrice(temp)

    }
    var change1d = Math.round((invested?.sum_percentage - 1.2 + Number.EPSILON) * 100) / 100

    const cardfetch = () => {
        for (var i = 0; i < coinPrice.length; i++) {
            return (<Card data={coinPrice[i]} i={i} />)
        }
    }

    useEffect(() => {
        fetchData()
        cardfetch()
    }, [])
    return (
        <div className='grid grid-cols-3 mt-16 ml-8'>
            <div className="col-span-1">
                <div className=" bg-slate-100 p-8 rounded-lg">
                    <h3 className='text-center text-2xl font-bold'>Total Amount</h3>
                    <h4 className='text-center text-3xl font-semibold mt-4'>{Math.round((invested?.total_amount / 10 + Number.EPSILON) * 100000) / 10000} BUSD </h4>
                    <div className="flex justify-between mx-4 mt-12">
                        <h3 className='text-xl '>Invested Value</h3><h3 className='text-lg'>{invested?.invested_amount} BUSD</h3>
                    </div>
                    <div className="flex justify-between mx-12 mt-12">
                        <h3 className='text-xl '>Overall gain</h3><h3 className='text-lg'>{invested?.sum_percentage}</h3>
                    </div>
                    <div className="flex justify-between mx-12 mt-12">
                        <h3 className='text-xl '>1 D gain</h3><h3 className='text-xl'>{change1d} </h3>
                    </div>
                </div>
                <div className=" flex justify-evenly">
                    <button type="submit" className='mt-4 w-[10rem] py-2 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white rounded-xl font-semibold text-xl' > Buy </button>
                    <button type="submit" className='mt-4 w-[10rem] py-2 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-xl font-semibold text-xl' > Sell </button>

                </div>
            </div>
            <div className="col-span-2">

                <div className="mx-12 max-w-[40rem]">


                    {cardfetch()}
                </div>


            </div>

        </div>
    )
}

function Card({ data, i }) {
    console.log()
  
    return (
        <div className="flex Home_overview bg-slate-100 p-8 rounded-lg box_3d items-center justify-between mt-8 ">
         <div className="flex">
         
          <img src={bnbimg} className="w-6 h-6 " alt="" />
  <h2 className='text-xl font-bold'>{data[i]?.name}</h2>
         </div>
            <div className="">
                <h3 className='font-semibold mb-2'><span className='text-gray-600 font-normal'>Tot amt. :</span> {data[i]?.price}</h3>
                <h3 className='font-semibold'><span className='text-gray-600 font-normal'>% change :</span> {data[i]?.allocation}</h3>
                <h3 className='font-semibold mt-2'> <span className='text-gray-600 font-normal'>Allocation :</span>{data[i]?.percentage_change}</h3>
            </div>

        </div>
    )
}

function Invite() {
    return (
        <div className="flex flex-col items-center mt-4 bg-slate-100 py-4 px-8 rounded-lg box_3d ">
            <h3 className='text-xl flex items-center'>Invite and Earn  <HiSpeakerphone className='ml-2' /> </h3>
            <h4 className='my-2'>Earn upto 2% from your friend's first investment.*</h4>
            <div className="blue_3d w-[8rem] text-lg text-white text-center">Invite now</div>
        </div>
    )
}

export default Profile