import React from "react";


const LocationSearchPanel = () => {

    return(
        <div className="flex flex-col justify-end items-end gap-4">
        <div className="flex  items-stretch justify-between gap-4">
            <h2 className="bg-[#eee] p-1 rounded-full w-14 h-12 flex items-center justify-center"><i className="ri-map-pin-line text-xl"></i></h2>
            <h4>67B, Shree Nagar Ext, Pushpa Nagar,Indore Madhya Pradesh</h4>
        </div>
         <div className="flex  items-stretch justify-between gap-4">
            <h2 className="bg-[#eee] p-1 rounded-full w-14 h-12 flex items-center justify-center"><i className="ri-map-pin-line text-xl"></i></h2>
            <h4>72, near Shetal Nahgar, Sector C, Patel Bagh Colony, Indore, Madhya Pradesh</h4>

        </div>
         <div className="flex  items-stretch justify-between gap-4">
            <h2 className="bg-[#eee] p-1 rounded-full w-10 h-12 flex items-center justify-center"><i className="ri-map-pin-line text-xl"></i></h2>
            <h4>Lig Square, Raj Nagar, Indore, Madhya Pradesh</h4>

        </div>
         <div className="flex  items-stretch justify-between gap-4">
            <h2 className="bg-[#eee] p-1 rounded-full w-14 h-12 flex items-center justify-center"><i className="ri-map-pin-line text-xl"></i></h2>
            <h4>82, Vijay Nagar, Scheme No 54, Indore, Madhya Pradesh</h4>

        </div>
        
        </div>
    )
}

export default LocationSearchPanel;