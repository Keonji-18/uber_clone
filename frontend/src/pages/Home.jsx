import React, { useState, useRef } from "react";
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {

    const [pickup, setPickup] = useState('')
    const [destination, setDestination] = useState('')
    const [showPanel, setShowpanel] = useState(false)
    
    const panelRef = useRef(null)
    const panelCloseRef = useRef(null)
    const submitHandler= (e) =>{
        e.preventDefault()
    }
    useGSAP(function(){
        if(showPanel){
            gsap.to(panelRef.current,{
            height:'70%',
            padding:24
            })
            gsap.to(panelCloseRef.current,{
                opacity: 1
            })
        }else{
            gsap.to(panelRef.current,{
            height:'0%',
            padding: 0
            })
            gsap.to(panelCloseRef.current,{
                opacity: 0
            })
        }
    },[showPanel])


    return (
        <div className="h-screen">
            <img className="mb-8 m-3 w-16 absolute" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="logo" />

            <div className="h-screen w-screen ">
                <img className="h-full w-full" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="map" />
            </div>
            <div className=" absolute bottom-0 w-full h-screen flex flex-col justify-end">
                <div className="h-[30%] bg-white p-6 relative">
                    <h4 ref={panelCloseRef} onClick={()=> setShowpanel(false)} className="absolute top-0.5 right-0.5 text-3xl">
                    <i  className="ri-arrow-down-s-line "></i>
                    </h4>
                    <h4 className="text-3xl font-semibold">Find a trip</h4>
                    <form onSubmit={(e)=>{submitHandler(e)}}>
                        <div className="line absolute h-14 left-10 w-1 top-[43%] bg-gray-600 rounded-full"></div>
                        <input
                            onClick={()=>setShowpanel(true)}
                            type="text"
                            value={pickup}
                            onChange={(e)=>{
                                setPickup(e.target.value)
                            }}
                            placeholder="Enter pickup location"
                            className=" bg-[#eee] w-full rounded-lg px-11 py-2 text-base  mt-5" />
                        <input
                            onClick={()=>setShowpanel(true)}
                            type="text"
                            value={destination}
                            onChange={(e)=>{
                                setDestination(e.target.value)
                            }}
                            placeholder="Enter destination"
                            className="bg-[#eee] w-full rounded-lg px-11 py-2 text-base mt-3" />
                    </form>
                </div>
                <div  ref={panelRef} className=" h-[70%] bg-white ">
                    <LocationSearchPanel/>
                </div>
            </div>
        </div>

    )
}

export default Home