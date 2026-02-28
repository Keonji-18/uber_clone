import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [color, setColor] = useState('')
    const [plate, setPlate] = useState('')
    const [capacity, setCapacity] = useState('')
    const [type, setType] = useState('')

    const [captainData, setCaptainData] = useState('')

    function submitHandler(e) {
        e.preventDefault()

        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
        setColor('')
        setPlate('')
        setCapacity('')
        setType('')

        setCaptainData({

            userName: {
                firstName: firstName,
                lastName: lastName
            },
            email: email,
            password: password,
            vehicle: {
                color: color,
                plate: plate,
                capacity: capacity,
                type: type
            }
        })


    }

    return (
        <div className="p-7 h-screen flex flex-col justify-between">
            <div>
                <img className="w-16 mb-8" src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="logo" />

                <form onSubmit={(e) => {
                    submitHandler(e)

                    console.log(captainData);
                    

                }}>
                    <h3 className="text-lg font-medium mt-4 mb-2">What's your name?</h3>
                    <div className="mb-7 flex justify-around flex-row align-middle w-full gap-5">
                        <input
                            required
                            type="text"
                            placeholder="first name"
                            className=" bg-[#eeee]  rounded px-4 py-3  w-full text-base placeholder:text-sm"
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value)
                            }}
                        />
                        <input

                            type="text"
                            placeholder="last name"
                            className=" bg-[#eeee] rounded px-4 py-3  w-full text-base placeholder:text-sm"
                            value={lastName}
                            onChange={(e) => {
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

                    <h3 className="text-lg font-medium mb-2">Vehicle Color</h3>
                    <input
                        required
                        type="text"
                        minLength={3}
                        placeholder="color"
                        className=" bg-[#eeee] mb-7  rounded px-4 py-3  w-full text-base  placeholder:text-sm"
                        value={color}
                        onChange={(e) => {
                            setColor(e.target.value)
                        }
                        } />
                    <h3 className="text-lg font-medium mb-2">Number Plate</h3>
                    <input
                        type="text"
                        required
                        minLength={10}
                        maxLength={10}
                        placeholder="Number plate"
                        className=" bg-[#eeee] mb-7  rounded px-4 py-3  w-full text-base  placeholder:text-sm"
                        value={plate}
                        onChange={(e) => {
                            setPlate(e.target.value)
                        }}
                    />
                    <h3 className="text-lg font-medium mb-2">Vehicle Capacity</h3>
                    <input
                        required
                        type="number"
                        min={1}
                        value={capacity}
                        placeholder="capacity"
                        className=" bg-[#eeee] mb-7  rounded px-4 py-3  w-full text-base  placeholder:text-sm"
                        onChange={(e) => {
                            setCapacity(e.target.value)
                        }} />

                    <h3 className="text-lg font-medium mb-2">Vehicle Type</h3>
                    <div className="mb-4 flex justify-between gap-2">
                        <div>
                        <input
                            required
                            type="radio"
                            id="motorcycle"
                            value={"motorcycle"}
                            checked={type === "motorcycle"}
                            onChange={e => setType(e.target.value)}
                             />
                        <label htmlFor="motorcycle"> Motorcycle</label>
                        </div>
                        <div>
                        <input
                            required
                            type="radio"
                            id="auto"
                            value={"auto"}
                            checked={type === "auto"}
                            onChange={e => setType(e.target.value)}
                        />
                        <label htmlFor="auto"> Auto</label>
                        </div>

                        <div>
                        <input
                            required
                            type="radio"
                            id="car"
                            value={"car"}
                            checked={type === "car"}
                            onChange={e => setType(e.target.value)}
                        />
                        <label htmlFor="car"> Car</label>
                        </div>
                    </div>
                    <button className="bg-black rounded  font-semibold px-4 py-2  text-white w-full text-lg mt-2 mb-3.5" >Sign-up Captain</button>
                    <p className="text-center">Already have an account? <Link to="/login-captain" className="text-blue-400 ">Captain login</Link></p>
                </form>

            </div>

            <p className="text-[10px] text-gray-400 leading-tight mt-10">  This site is protected by reCAPTCH and the <span className="underline">Google Privacy
            Policy </span>and <span className="underline"> Terms of Service apply</span>.</p>

        </div>
    );
}

export default CaptainSignup;