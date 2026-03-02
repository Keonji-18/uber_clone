import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {

    const navigate = useNavigate()

        const token = localStorage.getItem('token')

    
    console.log(token);
    console.log("ye to chl ra");
    
    axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`,{    
        headers:{
            Authorization: `Bearer ${token}`
        }
    }).then((response)=>{
        console.log(headers)
        
        console.log(response);
        
        if(response.status === 200){
            localStorage.removeItem('token')
            navigate('/login')
        }
    }).catch((error)=>{
        console.error(error);
        localStorage.removeItem('token')
            navigate('/login')
        
    })
return(
    <>
    Userlogout
    </>
)
}

export default UserLogout;