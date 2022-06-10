import React from "react";
import illa from '../images/illa.jpg'
const Create=()=>{
    return(
        <>
        <div className="heading text-3xl font-bold mx-10">
            Create Baskets
        </div>
        <div className="de text-gray-500 mx-10">
            Managed by you
        </div>
        <div className="flex">
        
<img src="https://img.freepik.com/free-vector/finance-illustration-concept_114360-769.jpg?w=2000" alt="" className="w-[30%] h-[40%] mx-10"/>
<div className="info my-10 mx-8">
    <div className="heading text-3xl font-bold m-3">
    Got a great investment idea?
    </div>
    <div className="desc text-gray-500 m-3">
    Create or customize a basket to save it here and track them
    </div>
    <div className="button text-2xl rounded-md m-3">
        <button className="bg-green-500 px-8 py-2 mt-4 rounded-sm text-white">
            Create Basket
        </button>
    </div>
   

</div>

        


        </div>
        
        </>

    )
}
export default Create