import React, { useRef, useState } from 'react'
import ChartPie from '@garvae/react-pie-chart'
import { FaDotCircle } from 'react-icons/fa'
import axios from 'axios'
import Modal from '../components/Modal'

function Details() {
    const [disabled, setDisabled] = useState(false)
    const [modal, setShowModal] = useState(false)
    const data = [{
        color: '#e74949',
        order: 1,
        segmentId: '001',
        value: 10,
    },
    {
        color: '#49bae7',
        order: 2,
        segmentId: '002',
        value: 10,
    }]

    const [amount, setAmount] = useState(0)

    const investHandler = () => {

        console.log('hello');
        axios.post(`http://ec2-3-86-219-228.compute-1.amazonaws.com/getprice/buy`).then(res => { console.log(res.data) }).catch(err => { console.log(err) })
    }
    const sell = () => {

        axios.post('http://ec2-3-86-219-228.compute-1.amazonaws.com/getprice/sell').then(res => { console.log(res.data) }).catch(err => { console.log(err) })
    }
    const ref = useRef(null)
    return (
        <div>

            <div className='box-1 flex justify-center'>
                <div className="box_3d  flex justify-between m-20 bg-gray-100 p-7 rounded-lg items-center w-1/2 ml-10">
                    <div className="flex ">

                        <div className="">
                            <h3 className='text-2xl font-bold mb-1 text-blue-800'>Bluechips</h3>
                            <h6 className='text-xs mb-2 text-gray-700'>Managed by Altcoin Gordan</h6>

                            <h5 className='max-w-[40ch] text-sm font-bold m-2 ml-0 mt-4'>BTC</h5>

                            <div class="w-full bg-white-100 rounded-xl blue_3d">
                                <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-l-full"> 50%</div>
                            </div>
                            <h5 className='max-w-[40ch] text-sm font-bold m-2 ml-0 mt-4'>ETH</h5>

                            <div class="w-full bg-white-100 rounded-xl blue_3d">
                                <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-l-full"> 50%</div>
                            </div>



                        </div>
                    </div>
                    <div className='m-4'>
                        <h4 className='text-l'>24h Change</h4>
                        <h4 className='text-xl text-green-500 font-bold'>14.4%</h4>
                    </div>
                </div>
                <fieldset className='border-4 w-10 my-auto  p-4  border-blue-800 rounded-2xl'>
                    <legend className='ml-4 p-2 font-bold'><h3>Popular</h3></legend>
                    <h4 className='mb-2'>We have over 50k investors for this basket</h4>
                </fieldset>
            </div>
            <div className="flex ml-[15rem] mt-12">
                <div className="">
                    <h3 className='text-2xl font-semibold '>Overview</h3>

                    <h4 className='text-xl mt-4'>About the Basket</h4>
                    <p className=' mt-1 ml-0 p-1'>The scheme invests in the higher market cap coins Bitcoin and Ethereum</p>
                </div>
                <div className="ml-12 box_3d p-5 mb-10">
                    <h5 className='text-xs'>Minimum Investment amount</h5>
                    <h3 className='text-xl mt-4 font-bold'> 20 USDT</h3>
                    <h6 className='mt-4 text-sm'>Get free access forever</h6>
                    <h5 className='text-sm font-bold'>See more benefits</h5>
                    <button type="submit" disabled={disabled} className='mt-4 w-[10rem] py-2 blue_3d text-l text-white' onClick={() => setShowModal(!modal)}> Invest Now</button> <br />
                    {/* <button type="submit" className='mt-4 w-[10rem] py-2 border-2'>Add to Watchlist</button> <br /> */}
                    <button type="submit" disabled={disabled} className='mt-4 w-[10rem] py-2 red_3d text-l text-white' onClick={sell}>Sell</button>
                </div>
                {modal ? <Modal setShowModal={setShowModal} /> : <></>}
            </div>
            {/* <div className="ml-[15rem] mt-8">
                <h3 className='text-2xl font-semibold'>Weights</h3>
                <div
                    ref={ref}
                    // here we use parent container size to resize chart depends on it 
                    style={{
                        display: 'flex',
                        width: '200px',
                        height: '200px',

                    }}
                    className="mt-12"
                // donutHoleRadius=
                >
                    <ChartPie data={data} parentRef={ref} />
                </div>
                <h4 className='text-[#e74949] flex items-center text-xl mt-4'><FaDotCircle /> &nbsp; BTC : 50%</h4>
                <h4 className='text-[#49bae7] flex items-center text-xl my-2'><FaDotCircle />&nbsp; ETH : 50%</h4>
            </div> */}

        </div >
    )
}

export default Details