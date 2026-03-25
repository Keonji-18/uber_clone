import React from "react";

const VehiclePanel = ({setVehiclePanel,vehicelPanelCloseRef, setConfirmRidePanel})=>{
    return <div>
        <h4 ref={vehicelPanelCloseRef} onClick={() => setVehiclePanel(false)} className="p-1 text-center w-[93%] absolute top-0 ">
                        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line "></i>
                    </h4>
                <h3 className="text-2xl mb-4 font-semibold">Choose a Vehicel</h3>
                <div onClick={()=>{
                    setConfirmRidePanel(true)
                }} className=" w-full   p-3 mb-2   flex items-center justify-between active:border-2  rounded-2xl">
                    <img  className="h-10 " src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=956/height=538/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8yOWZiYjhiMC03NWIxLTRlMmEtODUzMy0zYTM2NGU3MDQyZmEucG5n" alt="" />
                    <div className=" w-1/2">
                        <h4 className="font-medium text-lg">Uber Go  <span className=""><i className="ri-user-fill"></i>4</span></h4>
                        <h5 className="font-medium text-sm">5 mins away</h5>
                        <p className="font-medium text-xs text-gray-600">Afforadable, compact ride</p>
                    </div>
                    <h2 className="text-lg font-semibold">₹193.20</h2>
                </div>
                <div onClick={()=>{
                    setConfirmRidePanel(true)
                }}className=" w-full   px-3 py-3 pl-6 mb-2  flex items-center justify-between active:border-2  rounded-2xl">
                    <img  className="h-10 mr-2" src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=552/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85NTM4NTEyZC1mZGUxLTRmNzMtYmQ1MS05Y2VmZjRlMjU0ZjEucG5n" alt="" />
                    <div className=" w-1/2 ">
                        <h4 className="font-medium text-lg">Moto  <span className=""><i className="ri-user-fill"></i>1</span></h4>
                        <h5 className="font-medium text-sm">3 mins away</h5>
                        <p className="font-medium text-xs text-gray-600">Afforadable, Motorcycle ride</p>
                    </div>
                    <h2 className="text-lg font-semibold">₹85.10</h2>
                </div>
                <div onClick={()=>{
                    setConfirmRidePanel(true)
                }}className=" w-full   p-3 mb-2   flex items-center justify-between border-black active:border-2  rounded-2xl">
                    <img  className="h-10 mr-3" src="https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png" alt="" />
                    <div className=" w-1/2 ">
                        <h4 className="font-medium text-lg">UberAuto  <span className=""><i className="ri-user-fill"></i>3</span></h4>
                        <h5 className="font-medium text-sm">2 mins away</h5>
                        <p className="font-medium text-xs text-gray-600">Afforadable, Auto ride</p>
                    </div>
                    <h2 className="text-lg font-semibold">₹130.10</h2>
                </div>
    </div>
}

export default VehiclePanel;