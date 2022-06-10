import React, { useState } from "react";
const Createbasket = () => {
  const [toadam, settoadam] = useState({
    crypto1: "",
crypto2: "",
    crypto3: "",
  });
  const [allocation,setAllocation] = useState({
    
  })
  const handleChange = (e)=>{
      const {value} = e.target
      setAllocation({...allocation,value})

    }
   const handleSubmit = (e)=>{
       e.preventDefault()
console.log(allocation);
    }
  return (
    <>
      <form action="post">
        <div className="heading text-center text-3xl font-bold mb-6">
          Create your basket
        </div>
        <div className="bg-gray-100 rounded-xl  px-16 py-10  mx-7 ">
          <div className="flex justify-center items-center mb-7">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                Crypto name
              </label>
              <div class="relative">
                <select
                value={toadam.crypto1}
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option >BTC</option>
                  <option>ETH</option>
                  <option>DOGECOIN</option>
                  <option>SOLANA</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-zip"
              >
                Allocation(%)
              </label>
              <input
              name="crypto1"
              value={allocation.crypto1}
              onChange={handleChange}
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="text"
                placeholder="in percentage"
              />
            </div>
          </div>
          <div className="flex  justify-center items-center mb-7">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                Crypto name
              </label>
              <div class="relative">
                <select
                value={toadam.crypto2}
                onChange={handleChange}
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option>BTC</option>
                  <option>ETH</option>
                  <option>DOGECOIN</option>
                  <option>SOLANA</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-zip"
              >
                Allocation(%)
              </label>
              <input
              name="crypto2"
              value={allocation.crypto2}
              onChange={handleChange}
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="text"
                placeholder="in percentage"
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                Crypto name
              </label>
              <div class="relative">
                <select
                value={toadam.crypto2}
                onChange={handleChange}
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option value="BTC">BTC</option>
                  <option value="ETH">ETH</option>
                  <option value="DOGECOIN">DOGECOIN</option>
                  <option value="SOLANA">SOLANA</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-zip"
              >
                Allocation(%)
              </label>
              <input
              name="crypto3"
              value={allocation.crypto3}
              onChange={handleChange}
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="text"
                placeholder="in percentage"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 whitespace-nowrap"
                for="grid-first-name"
              >
                Minimum investment amount(in USD)
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3  mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Eg:20"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 whitespace-nowrap"
                for="grid-first-name"
              >
                Your commision fee in percentage
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="0-8%"
              />
            </div>
          </div>
          <div className=" flex justify-center">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default Createbasket;
