import React, { useState, useRef } from "react";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {

    const [pickup, setPickup] = useState('')
    const [destination, setDestination] = useState('')
    const [showPanel, setShowpanel] = useState(false)
    const [vehicelPanel, setVehiclePanel] = useState(false)

    const panelRef = useRef(null)
    const panelCloseRef = useRef(null)
    const vehicelPanelRef = useRef(null)
    const vehicelPanelCloseRef = useRef(null)

    const submitHandler = (e) => {
        e.preventDefault()
    }
    useGSAP(function () {
        if (showPanel) {
            gsap.to(panelRef.current, {
                height: '70%',
                padding: 24
            })
            gsap.to(panelCloseRef.current, {
                opacity: 1
            })
        } else {
            gsap.to(panelRef.current, {
                height: '0%',
                padding: 0
            })
            gsap.to(panelCloseRef.current, {
                opacity: 0
            })
        }
    }, [showPanel])

    useGSAP(function() {
       if (vehicelPanel){
         gsap.to(vehicelPanelRef.current, {
            transform: 'translateY(0)'
        })
        gsap.to(vehicelPanelCloseRef.current, {
                opacity: 1
            })
        
       }
       else{
         gsap.to(vehicelPanelRef.current, {
            transform: 'translateY(100%)'
        })
        gsap.to(vehicelPanelCloseRef.current, {
                opacity: 0
            })
       }
    },[vehicelPanel])


    return (
        <div className="h-screen relative overflow-hidden">
            <img className="mb-8 m-3 w-16 absolute" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="logo" />

            <div className="h-screen w-screen ">
                <img className="h-full w-full" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="map" />
            </div>
            <div className=" absolute bottom-0 w-full h-screen flex flex-col justify-end">
                <div className="h-[30%] bg-white p-6 relative">
                    <h4 ref={panelCloseRef} onClick={() => setShowpanel(false)} className="absolute top-0.5 right-0.5 text-3xl">
                        <i className="ri-arrow-down-s-line "></i>
                    </h4>
                    <h4 className="text-3xl font-semibold">Find a trip</h4>
                    <form onSubmit={(e) => { submitHandler(e) }}>
                        <div className="line absolute h-14 left-10 w-1 top-[46%] bg-gray-600 rounded-full"></div>
                        <input
                            onClick={() => setShowpanel(true)}
                            type="text"
                            value={pickup}
                            onChange={(e) => {
                                setPickup(e.target.value)
                            }}
                            placeholder="Enter pickup location"
                            className=" bg-[#eee] w-full rounded-lg px-11 py-2 text-base  mt-5" />
                        <input
                            onClick={() => setShowpanel(true)}
                            type="text"
                            value={destination}
                            onChange={(e) => {
                                setDestination(e.target.value)
                            }}
                            placeholder="Enter destination"
                            className="bg-[#eee] w-full rounded-lg px-11 py-2 text-base mt-3" />
                    </form>
                </div>
                <div ref={panelRef} className=" h-[70%] bg-white ">
                    <LocationSearchPanel setShowpanel={setShowpanel} setVehiclePanel={setVehiclePanel}/>
                </div>
            </div>
            <div ref={vehicelPanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6">
               <h4 ref={vehicelPanelCloseRef} onClick={() => setVehiclePanel(false)} className="p-1 text-center w-[93%] absolute top-0 ">
                        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line "></i>
                    </h4>
                <h3 className="text-2xl mb-4 font-semibold">Choose a Vehicel</h3>
                <div className=" w-full   p-3 mb-2   flex items-center justify-between active:border-2  rounded-2xl">
                    <img  className="h-10 " src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=956/height=538/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8yOWZiYjhiMC03NWIxLTRlMmEtODUzMy0zYTM2NGU3MDQyZmEucG5n" alt="" />
                    <div className=" w-1/2">
                        <h4 className="font-medium text-lg">Uber Go  <span className=""><i className="ri-user-fill"></i>4</span></h4>
                        <h5 className="font-medium text-sm">5 mins away</h5>
                        <p className="font-medium text-xs text-gray-600">Afforadable, compact ride</p>
                    </div>
                    <h2 className="text-lg font-semibold">₹193.20</h2>
                </div>
                <div className=" w-full   px-3 py-3 pl-6 mb-2  flex items-center justify-between active:border-2  rounded-2xl">
                    <img  className="h-10 mr-2" src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=552/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85NTM4NTEyZC1mZGUxLTRmNzMtYmQ1MS05Y2VmZjRlMjU0ZjEucG5n" alt="" />
                    <div className=" w-1/2 ">
                        <h4 className="font-medium text-lg">Moto  <span className=""><i className="ri-user-fill"></i>1</span></h4>
                        <h5 className="font-medium text-sm">3 mins away</h5>
                        <p className="font-medium text-xs text-gray-600">Afforadable, Motorcycle ride</p>
                    </div>
                    <h2 className="text-lg font-semibold">₹85.10</h2>
                </div>
                <div className=" w-full   p-3 mb-2   flex items-center justify-between border-black active:border-2  rounded-2xl">
                    <img  className="h-10 mr-3" src="https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png" alt="" />
                    <div className=" w-1/2 ">
                        <h4 className="font-medium text-lg">UberAuto  <span className=""><i className="ri-user-fill"></i>3</span></h4>
                        <h5 className="font-medium text-sm">2 mins away</h5>
                        <p className="font-medium text-xs text-gray-600">Afforadable, Auto ride</p>
                    </div>
                    <h2 className="text-lg font-semibold">₹130.10</h2>
                </div>
            </div>

        </div>

    )
}

export default Home