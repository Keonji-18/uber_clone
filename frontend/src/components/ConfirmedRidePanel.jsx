import React from "react";

const ConfirmedRidePanel = ({ setConfirmRidePanel, confirmRidePanelCloseRef, setWaitForRidePanel} ) => {

    return (
        <div>
            <h4 ref={confirmRidePanelCloseRef} onClick={() => setConfirmRidePanel(false)} className="p-1 text-center w-[93%] absolute top-0 ">
                <i className="text-3xl text-gray-200 ri-arrow-down-wide-line "></i>
            </h4>
            <h3 className="text-2xl mb-4 font-semibold mt-3">Confirm Your Ride</h3>
            <div className="flex flex-col justify-between items-center gap-3" >
                <div >
                    <img className="h-25 w-35" src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=956/height=538/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8yOWZiYjhiMC03NWIxLTRlMmEtODUzMy0zYTM2NGU3MDQyZmEucG5n" alt="" />

                </div>
                <div className="w-full mt-2">
                    <div className="flex items-center gap-2 p-2.5 border-b border-gray-400" >
                        <i className="text-2xl ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className="text-lg font-semibold">562/11-A</h3>
                            <p className="text-sm -mt-1 text-gray-600">Kankariya talab Ahemdabad</p>
                        </div>
                    </div>
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
                <button onClick={()=>{
                    setWaitForRidePanel(true)
                }} className="w-full mt-4 bg-green-600 text-white font-bold p-1 rounded-lg">Confirm</button>
            </div>

        </div>
    )
}

export default ConfirmedRidePanel;