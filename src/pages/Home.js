import React, { useEffect, useState } from 'react'
import Investment from '../components/Investment'
import '../assets/investment.css'
import { GoVerified } from 'react-icons/go'
import { ImBookmarks } from 'react-icons/im'
import { BsFillBriefcaseFill } from 'react-icons/bs'
import { GiCoffeeMug } from 'react-icons/gi'
import axios from 'axios'

function Home({setBasket,basket}) {
    const [disabled,setDisabled] = useState(false)
    const data = [
        {
            name: 'Bluechips',
            desc: 'This basket consists of 50% BTC AND 50% ETH, These are higher marketcap coins',
            desc2: 'This scheme has crossed over 50k users.',
            title: 'Popular'
        },
        {
            name: 'Flaming hot',
            desc: 'This contains GLMR,IMX,JOE',
            desc2: 'This scheme has crossed over 20k users',
            title: 'Premium'
        },
        {
            name: 'Metaverse',
            desc: 'This scheme consists of web3 metaverse project',
            desc2: 'Take premium sub to access this bucket',
            title: 'Premium'
        }
    ]
    const [ar, setar] = useState({})
    useEffect(() => {
        let priceIntervel = setInterval(() => {
            axios.get('https://fineazy.herokuapp.com/getprice/5').then(res => { setar(res.data) }).catch(err => { console.log(err) })

        }, 3000)
        return () => {
            clearInterval(priceIntervel)
        }


    }, [])

    return (
        <div>
            <div className="Home_overview flex justify-between bg-slate-100 mx-auto p-8 text-left mb-12 rounded-lg" >
                <div className="">
                    <h3 className='text-2xl font-bold'>Overview</h3>
                    <h5 className='text-md  text-gray-600'>Markets&your investments</h5>
                </div>
                <div className="">
                    <h4 className='font-bold'>BTC</h4>
                    {
                        ar?.BTCUSDT?.BTCUSDT ?
                            <h3 className='text-2xl font-medium'>{parseFloat(ar.BTCUSDT.BTCUSDT).toFixed(2)}</h3>
                            :
                            <h3 className='text-2xl font-medium'>Loading...</h3>
                    }
                </div>
                <div className="">
                    <h4>Current Value</h4>
                    <h3>$24.5</h3>
                </div>
                <div className="">
                    <h4>Current Returns</h4>
                    <h3 className='text-green-600'>+5%</h3>
                </div>
                <div className="">
                    <button className='bg-green-500 text-white px-6 py-2 rounded hover:px-7 hover:py-3 my-2' type="submit">Explore Baskets</button>
                </div>
            </div>
            <h3 className='text-2xl mb-8 font-bold text-center'>Investment Baskets</h3>
            <div className="flex lg:ml-60">
                <div className="">

                {data.map((datas)=>(
                    <>
{datas.name==='Bluechips'? ()=>{setDisabled(false)}: ()=>setDisabled(true)}
                    <Investment disabled={disabled} setBasket={setBasket} basket={basket} title={datas.name} des={datas.desc} tag={datas.title} tagdes={datas.desc2} />
                    </>
                ))}
                    
                </div>
                <div className="Home_container2 p-4 ml-8 text-left rounded">
                    <h3 className='font-bold mb-4'>How to start investing in Basket</h3>
                    <h5 className='mb-4 flex items-center'><GoVerified className='text mt-1 text-green-400' /> &nbsp; Viewed Home</h5>
                    <h5 className='mb-4 flex items-center'><ImBookmarks className='text mt-1 ' /> &nbsp; Watchlist a Basket</h5>
                    <h5 className='mb-4 flex items-center'><BsFillBriefcaseFill className='text mt-1 ' /> &nbsp; Invest in Basket</h5>
                    <h5 className='mb-4 flex items-center'><GiCoffeeMug className='text mt-1 ' /> &nbsp; Start SIP</h5>
                </div>
            </div>
        </div>
    )
}

export default Home