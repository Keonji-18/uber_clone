import React from "react";


const LocationSearchPanel = () => {

    return(
        <div className=" gap-4">
        <div className="flex  items-stretch justify-between gap-4 mb-4">
            <h2 className="bg-[#eee] p-1 rounded-full w-15 h-10 flex items-center justify-center"><i className="ri-map-pin-line text-xl"></i></h2>
            <h4 className="font-medium">67B, Shree Nagar Ext, Pushpa Nagar,Indore Madhya Pradesh</h4>
        </div>
         <div className="flex  items-stretch justify-between gap-4 mb-4">
            <h2 className="bg-[#eee] p-2 rounded-full w-15 h-10 flex items-center justify-center"><i className="ri-map-pin-line text-xl"></i></h2>
            <h4 className="font-medium"> 72, near Shetal Nahgar, Sector C, Patel Bagh Colony, Indore, Madhya Pradesh</h4>
        </div>

         <div className="flex  items-stretch justify-between gap-4 mb-4">
            <h2 className="bg-[#eee] p-1 rounded-full w-15 h-10 flex items-center justify-center"><i className="ri-map-pin-line text-xl"></i></h2>
            <h4 className="font-medium">Lig Square, Raj Nagar,Anand Bajar, Indore, Madhya Pradesh</h4>
        </div>

         <div className="flex  items-stretch justify-between gap-4 mb-4">
            <h2 className="bg-[#eee] p-1 rounded-full w-15 h-10 flex items-center justify-center"><i className="ri-map-pin-line text-xl"></i></h2>
            <h4 className="font-medium">82, Vijay Nagar, Scheme No 54, Indore, Madhya Pradesh</h4>
        </div>
        
        </div>
    )
}

export default LocationSearchPanel;