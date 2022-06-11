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



    const data2 = [{
        name: 'Bluechips',
        managed: 'Managed by Altcoin Gordan',
        percent: '50% BTC and 50% ETH',
        change: '14.4',
        title: 'Popular',
        weight1: 1,
        weight2: 2,
        coin1: 'BTC',
        coin2: 'ETH',
        image: ''

    }]

    const investHandler = () => {

        console.log('hello');
        axios.post(`https://fineazy.herokuapp.com/getprice/buy`).then(res => { console.log(res.data) }).catch(err => { console.log(err) })
    }
    const sell = () => {

        axios.post('https://fineazy.herokuapp.com/getprice/sell').then(res => { console.log(res.data) }).catch(err => { console.log(err) })
    }
    const ref = useRef(null)
    return (
        <div>

            <div className="box_3d m-10 flex justify-between lg:mx-52 bg-gray-100 p-6 rounded-lg items-center">
                <div className="flex ">

                    <div className="">
                        <h3 className='text-2xl font-bold mb-2 text-blue-800'>Bluechips</h3>
                        <h6 className='text-xs mb-2 text-gray-700'>Managed by Altcoin Gordan</h6>
                        <div class="w-full bg-white-100 rounded-xl blue_3d">
                            <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-l-full"> 50%</div>
                        </div>
                        <h5 className='max-w-[40ch] text-sm font-bold m-2 ml-0'>50% BTC AND 50% ETH</h5>



                    </div>
                </div>
                <div className="">
                    <h4 className='text-xl'>24h Change</h4>
                    <h4 className='text-xl text-green-500'>14.4%</h4>
                </div>
            </div>
            <fieldset className='border-4 w-[30rem] ml-[15rem] mt-12 p-4'>
                <legend className='ml-4'><h3>Popular</h3></legend>
                <h4>We have over 50k investors for this basket</h4>
            </fieldset>
            <div className="flex ml-[15rem] mt-12">
                <div className="">
                    <h3 className='text-2xl font-semibold '>Overview</h3>

                    <h4 className='text-xl mt-4'>About the Basket</h4>
                    <p className='max-w-[75ch] mt-8'>The scheme invests in the higher marketcap coins Bitcoin and Ethereum</p>
                </div>
                <div className="ml-32">
                    <h5 className='text-xs'>Minimum Investment amount</h5>
                    <h3 className='text-2xl mt-4 font-bold'> 20 USDT</h3>
                    <h6 className='mt-4 text-sm'>Get free access forever</h6>
                    <h5 className='text-sm font-bold'>See more benifits</h5>
                    <button type="submit" disabled={disabled} className='mt-4 w-[10rem] py-2 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white rounded font-semibold text-xl' onClick={() => setShowModal(!modal)}> Invest Now</button> <br />
                    {/* <button type="submit" className='mt-4 w-[10rem] py-2 border-2'>Add to Watchlist</button> <br /> */}
                    <button type="submit" disabled={disabled} className='mt-4 w-[10rem] py-2 border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white font-semibold rounded text-xl' onClick={sell}>sell</button>
                </div>
                {modal ? <Modal setShowModal={setShowModal} /> : <></>}
            </div>
            <div className="ml-[15rem] mt-8">
                <h3 className='text-xl'>Weights</h3>
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
            </div>

        </div >
    )
}

export default Details