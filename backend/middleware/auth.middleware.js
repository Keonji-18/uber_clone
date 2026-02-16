const userModel = require('../models/user.model');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const blacklistTokenModel = require('../models/blacklistToken.model');
const captainModel = require('../models/captain.model');

module.exports.authUser = async (req,res,next)=>{
    
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]
    if(!token){
        return res.status(401).json({message:"Unauthorized"})
    }

    // Check blacklist collection for token
    const isBlacklisted = await blacklistTokenModel.findOne({token: token})
    if (isBlacklisted){ 
        return res.status(401).json({message:"Unauthorized "}) //token blacklisted
    }

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const user = await userModel.findById(decoded._id)

        if(!user) 
            return res.status(401).json({message: "Unauthorized"})
        req.user = user
        return next()
        
    } catch (error) {
        res.status(401).json({message:"Unautharized"})
    }

}                 

module.exports.captainAuth = async (req,res,next)=>{

    const token = req.cookies.token || req.headers.authorization?.split()[1]
    if(!token){
        res.status(401).json({message:"Unautharized"})
    }

    const isBlacklisted = await blacklistTokenModel.findOne({token:token})
    if(isBlacklisted){
        res.status(401).json({message:"Unautharized"})
    }

    try {
        const decoded = jwt.decode(token,process.env.JWT_SECRET)
        const captain = await captainModel.findById(decoded._id)

        if(!captain){
            res.status(401).json({message:"Unautharized"})
        }
        req.captain = captain
        next()

    } catch (error) {
        res.status(401).json({message:"Unautharized"})
    }
    
}