import React from 'react'

const Explore = ({children}) => {
  return (
    <div>
      <h2 className='text-xl font-semibold ml-14 mt-12'>Friends</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 grid-flow-row gap-3 m-10">
        {children}
      </div>

    </div>

  )
}

export default Explore