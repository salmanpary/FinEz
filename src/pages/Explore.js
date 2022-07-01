import React from 'react'
import Friends from '../components/FriendsFollow'

const Explore = () => {
  return (
    <div>
      <h2 className='text-xl font-semibold ml-14 mt-12'>Friends</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 grid-flow-row gap-3 m-10">
        <div><Friends /></div>
        <div><Friends /></div>
        <div><Friends /></div>
        <div><Friends /></div>
        <div><Friends /></div>
        <div><Friends /></div>
        <div><Friends /></div>
        <div><Friends /></div>
      </div>

    </div>

  )
}

export default Explore