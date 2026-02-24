import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import UserSignup from "./UserSignup";

const UserLogin = () => {

    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [userdData, setUserData] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()

        setEmail('')
        setPassword('')
        setUserData({
            email:email,
            password:password
        
        })
        console.log(userdData);
        
    }
    return (
        <div className="p-7 h-screen flex flex-col justify-between">
            <div>
                <img className="w-16 mb-8" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="logo" />

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
                    <p className="text-center"> New Here? <Link to='/signup' className="text-blue-400">Create new account.</Link></p>
            </div>
            
            
            <Link to='/captain-login' className="bg-[#e2e22d] rounded  flex items-center justify-center font-semibold px-4 py-2  text-white w-full text-lg mt-2 mb-4" >Sign in as Captain </Link>
        </div>
    );
}

export default UserLogin;