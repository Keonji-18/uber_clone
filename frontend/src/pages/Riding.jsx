import React from "react";
import {Link} from "react-router-dom";

const Riding = () => {

    return (
        <div className="h-screen w-screen">
            <Link to={'/home'} className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full">
                <i className=" text-lg font-semi-bold ri-home-4-line"></i>
            </Link>
            <div className="h-1/2">
                <img src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />

            </div>
            <div className="h-1/2 p-4">


                <div className="flex justify-between items-center p-2 mt-4">
                    <img className="h-15 w-25" src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=956/height=538/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8yOWZiYjhiMC03NWIxLTRlMmEtODUzMy0zYTM2NGU3MDQyZmEucG5n" alt="" />
                    <div className="text-right">
                        <h2 className="text-lg font-medium">Suyash</h2>
                        <h4 className="text-xl font-semibold -mt-1 -mb-1">MP09-XD-1234</h4>
                        <p className="text-sm text-gray-600">Rang Rover</p>
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center gap-3" >

                    <div className="w-full mt-2">

                        <div className="w-full">
                            <div className="flex items-center gap-2 p-2.5 border-b border-gray-400" >
                                <i className="text-2xl ri-map-pin-user-fill"></i>
                                <div>
                                    <h3 className="text-lg font-semibold">562/11-A</h3>
                                    <p className="text-sm -mt-1 text-gray-600">Kankariya talab Ahemdabad</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2  p-2.5 " >
                            <i className=" text-2xl ri-bill-line"></i>
                            <div>
                                <h3>₹193.20</h3>
                                <p>Cash cash</p>
                            </div>
                        </div>
                    </div>
                    <button className="w-full m-3 bg-green-600 text-white font-bold p-1 rounded-lg">Pay Now ... </button>
                </div>




            </div>


        </div>
    )
}

export default Riding;