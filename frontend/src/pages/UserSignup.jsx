import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userdData, setUserData] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()

        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
        setUserData({
            userName: {
                 firstName: firstName,
                lastName : lastName },
            email: email,
            password: password,
        })
        

    }
    return (
        <div className="p-7 h-screen flex flex-col justify-between">
            <div>
                <img className="w-16 mb-8" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="logo" />

                <form onSubmit={(e) => {
                    submitHandler(e)

                    console.log(userdData);
                }}>
                    <h3 className="text-lg font-medium mt-4 mb-2">What's your name?</h3>
                    <div className="mb-7 flex justify-around flex-row align-middle w-full gap-5">
                        <input
                            required
                            type="text"
                            placeholder="first name"
                            className=" bg-[#eeee]  rounded px-4 py-3  w-full text-base placeholder:text-sm"
                            value={firstName}
                            onChange={(e)=>{
                                setFirstName(e.target.value)
                            }}
                        />
                        <input
                            
                            type="text"
                            placeholder="last name"
                            className=" bg-[#eeee] rounded px-4 py-3  w-full text-base placeholder:text-sm"
                            value={lastName}
                            onChange={(e)=>{
                                setLastName(e.target.value)
                            }}
                        />
                    </div>

                    <h3 className="text-lg font-medium mb-2">What's your email?</h3>
                    <input
                        required
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)

                        }}
                        className=" bg-[#eeee] mb-7 rounded px-4 py-3  w-full text-base placeholder:text-sm"
                        type="email"
                        placeholder="email@example.com" />

                    <h3 className="text-lg font-medium mt-2 mb-2">Enter password</h3>
                    <input
                        required
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        className=" bg-[#eeee] mb-7  rounded px-4 py-3  w-full text-base  placeholder:text-sm"
                        type="password"
                        placeholder="password" />
                    <button className="bg-black rounded  font-semibold px-4 py-2  text-white w-full text-lg mt-2 mb-3.5" >Sign-up User</button>
                    <p className="text-center">Already have an account? <Link to="/login" className="text-blue-400">User login</Link></p>
                </form>

            </div>

            <p className="text-[10px] text-gray-400 leading-tight">  This site is protected by reCAPTCH and the <span className="underline">Google Privacy
Policy </span> and  <span className="underline">Terms of Service apply</span>. </p>

        </div>
    );
}

export default UserSignup;