import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
    
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [captaindData, setCaptainData] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()

        setEmail('')
        setPassword('')
        setCaptainData({
            email:email,
            password:password
        
        })
        console.log(captaindData);
        
    }
    return (
        <div className="p-7 h-screen flex flex-col justify-between">
            <div>
                <img className="w-16 mb-8" src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="logo" />

                <form onSubmit={(e)=>{
                    submitHandler(e)
                    // console.log(email,password);
                    
                }}>
                    <h3 className="text-lg font-medium mb-2">What's your email?</h3>
                    <input
                        required
                        value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value)

                        }}
                        className=" bg-[#eeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                        type="email"
                        placeholder="email@example.com" />

                    <h3 className="text-lg font-medium mt-2 mb-2">Enter password</h3>
                    <input
                        required
                        value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                        className=" bg-[#eeee] mb-7  rounded px-4 py-2 border w-full text-lg  placeholder:text-base"
                        type="password"
                        placeholder="password" />
                    <button className="bg-black rounded  font-semibold px-4 py-2  text-white w-full text-lg mt-2 mb-3.5" >Login</button>
                </form>
                    <p className="text-center"> Don't have Id? <Link to='/captain-signup' className="text-blue-400">Register as a Captain.</Link></p>
            </div>
            
            
            <Link to='/login' className="bg-[#2adba6] rounded  flex items-center justify-center font-semibold px-4 py-2  text-white w-full text-lg mt-2 mb-4" >Sign in as User </Link>
        </div>
    );
}
 
export default CaptainLogin;