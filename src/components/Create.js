import React from "react";
import illa from '../images/illa.jpg'
import create from '../images/create.jpg'

const Create = () => {
    return (
        <>

            <div className="flex">


                <img src={create} className="img_create "></img>
                <div className="info ml-20  my-10 mx-8 ">
                    <div className="heading1 text-5xl font-bold m-3 ">
                        Got a <span className="text-blue-800 font-bold text-6xl"> GREAT</span>
                    </div>
                    <div className="heading1 text-5xl font-bold m-3">
                        investment idea ?
                    </div>
                    <div className="desc text-gray-500 m-3">
                        Create or customize a basket to save it here
                    </div>
                    <div className="desc text-gray-500 m-3">
                        and track them
                    </div>
                    <div className="button text-2xl rounded-md m-3">
                        <button className="bg-blue-800 px-8 py-2 mt-4 rounded-xl text-white box_3d">
                            Create Basket
                        </button>
                    </div>


                </div>




            </div>

        </>

    )
}
export default Create