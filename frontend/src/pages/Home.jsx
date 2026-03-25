import React, { useState, useRef } from "react";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel"
import ConfirmedRidePanel from "../components/ConfirmedRidePanel"
import WaitForDriver from "../components/WaitForDriver";
import DriverAssigned from "../components/DriverAssigned";


const Home = () => {

    const [pickup, setPickup] = useState('')
    const [destination, setDestination] = useState('')
    const [showPanel, setShowpanel] = useState(false)
    const [vehicelPanel, setVehiclePanel] = useState(false)
    const [confirmRidePanel, setConfirmRidePanel] = useState(false)
    const [waitForRidePanel, setWaitForRidePanel] = useState(false)
    const [driverAssigned, setDriverAssigned] = useState(false)



    const panelRef = useRef(null)
    const panelCloseRef = useRef(null)
    const vehicelPanelRef = useRef(null)
    const vehicelPanelCloseRef = useRef(null)
    const confirmRidePanelRef = useRef(null)
    const confirmRidePanelCloseRef = useRef(null)
    const waitForRidePanelRef = useRef(null)
    const waitForRidePanelCloseRef = useRef(null)
    const driverAssignedRef = useRef(null)
    const driverAssignedCloseRef = useRef(null)


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

    useGSAP(function() {
       if (confirmRidePanel){
         gsap.to(confirmRidePanelRef.current, {
            transform: 'translateY(0)'
        })
        gsap.to(confirmRidePanelCloseRef.current, {
                opacity: 1
            })
        
       }
       else{
         gsap.to(confirmRidePanelRef.current, {
            transform: 'translateY(100%)'
        })
        gsap.to(confirmRidePanelCloseRef.current, {
                opacity: 0
            })
       }
    },[confirmRidePanel])

    useGSAP(function() {
       if (waitForRidePanel){
         gsap.to(waitForRidePanelRef.current, {
            transform: 'translateY(0)'
        })
        gsap.to(waitForRidePanelCloseRef.current, {
                opacity: 1
            })
        
       }
       else{
         gsap.to(waitForRidePanelRef.current, {
            transform: 'translateY(100%)'
        })
        gsap.to(waitForRidePanelCloseRef.current, {
                opacity: 0
            })
       }
    },[waitForRidePanel])

    useGSAP(function() {
       if (driverAssigned){
         gsap.to(driverAssignedRef.current, {
            transform: 'translateY(0)'
        })
        gsap.to(driverAssignedCloseRef.current, {
                opacity: 1
            })
        
       }
       else{
         gsap.to(driverAssignedRef.current, {
            transform: 'translateY(100%)'
        })
        gsap.to(driverAssignedCloseRef.current, {
                opacity: 0
            })
       }
    },[driverAssigned])



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
               <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} vehicelPanelCloseRef={vehicelPanelCloseRef}/>
            </div>
            <div ref={confirmRidePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6">
               <ConfirmedRidePanel setConfirmRidePanel={setConfirmRidePanel} confirmRidePanelCloseRef={confirmRidePanelCloseRef} setWaitForRidePanel={setWaitForRidePanel} />
            </div>
             <div ref={waitForRidePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6">
               <WaitForDriver setWaitForRidePanel={setWaitForRidePanel} waitForRidePanelCloseRef={waitForRidePanelCloseRef}/>
            </div>
            <div  ref={waitForRidePanelRef} className="fixed w-full z-10 bottom-0  bg-white px-3 py-6">
               <DriverAssigned setDriverAssigned={setDriverAssigned} waitForRidePanelCloseRef={waitForRidePanelCloseRef}/>
            </div>

        </div>

    )
}

export default Home