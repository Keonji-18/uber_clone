const captainModel = require("../models/captain.model")
const userModel = require("../models/user.model")
const captainServices = require("../services/captain.service")
const {validationResult, ExpressValidator} = require('express-validator')
 
module.exports.registerCaptain = async (req,res,next)=>{

    const errors = validationResult(req)
    if(!errors.isEmpty()){
            return res.status(400).json({ errors : errors.array()})
    }

    const {fullname, email, password, vehicle } = req.body;

    const isCaptainAlredyExists = await captainModel.findOne({email})
    if(isCaptainAlredyExists){
        res.status(400).json({message: "Captain alredy exists"})
    }
    
    const hashedPassword = await captainModel.hashPassword(password)

    const captain = await captainServices.createCaptain({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashedPassword,
        color:vehicle.color,
        plate:vehicle.plate,
        capacity:vehicle.capacity,
        vehicleType:vehicle.vehicleType})

    const token = captain.generateAuthToken()
    res.status(201).json({token, captain})

}

module.exports.loginCaptain = async (req,res,next) => {
    console.log("hello login captain");
    
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        res.status(400).json({errors:errors.array()})
    }

    const {email,password} = req.body

    const captain = await captainModel.findOne({email:email}).select('+password')
    console.log(captain);
    
    if(!captain){
        res.status(400).json({message:"invalid email or password"})
    }

    const isMatch = captain.verifyPassword(password)

    if(!isMatch){
        res.status(400).json({message:"invalid email or password"})
    }

    const token = captain.generateAuthToken()
    res.cookie("token",token)
    res.status(200).json({message:"Captain logged in", token,captain})
}