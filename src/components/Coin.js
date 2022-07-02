import React from 'react'

const Coin = ({image,name,lastprice,hrchange,volume,ticker}) => {
  return (
    <div className="grid grid-cols-4">
        <div className='flex'>
        <img src={image} alt="" />
        <div className="name">{name}</div>
        <div className="ticker text-gray-200">{ticker}</div>
            
        </div>
        
        <div>{lastprice}</div>
        <div>{hrchange}</div>
        <div>{volume}</div>

    </div>
  )
}

export default Coin