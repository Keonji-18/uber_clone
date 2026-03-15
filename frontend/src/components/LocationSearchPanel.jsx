import React from "react";


const LocationSearchPanel = ({ setVehiclePanel, setShowpanel}) => {

    // sample array of location 
    const locations = ['67B, Shree Nagar Ext, Pushpa Nagar,Indore Madhya Pradesh', '72, near Shetal Nagar, Sector C, Patel Bagh Colony, Indore, Madhya Pradesh', 'Lig Square, Raj Nagar,Anand Bajar, Indore, Madhya Pradesh', '82, Vijay Nagar, Scheme No 54, Indore, Madhya Pradesh']

    return (
        <div >
            {locations.map(function (loc,idx) {
                return (
                    <div  key={idx} onClick={()=>{
                        setVehiclePanel(true)
                        setShowpanel(false)
                    }} className="flex border-2 p-3 border-white active:border-black rounded-xl items-stretch justify-between gap-4 mb-1">
                        <h2 key={loc.id} className="bg-[#eee] p-1 rounded-full w-15 h-10 flex items-center justify-center"><i className="ri-map-pin-line text-xl"></i></h2>
                        <h4 key={loc.id} className="font-small">{loc}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default LocationSearchPanel;