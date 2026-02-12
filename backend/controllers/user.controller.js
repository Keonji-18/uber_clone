const userModel = require('../models/user.model');
const userService = require("../services/user.service")
const {validationResult} = require("express-validator")
const blacklistTokenModel = require("../models/blacklistToken.model")

module.exports.registerUser = async(req,res,next)=>{
     const errors = validationResult(req);
     if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
     }

     
     const {fullname, email , password} = req.body;

     const hashedPassword = await userModel.hashPassword(password)

     const user = await userService.createUser({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashedPassword
    });
    const token  = user.generateAuthToken()

    res.status(200).json({token,user})
    next()
}

module.exports.loginUser = async(req,res,next)=>{
   const errors = validationResult(req)
   if(!errors.isEmpty()){
      return res.status(400).json({error:errors.array()})
   }
   // console.log(req.body);
   
   const {email,password} = req.body;

   const user = await userModel.findOne({email}).select('+password')
   // console.log(user);
   
   if(!user){
      return res.status(401).json({message:"Invalid email or password"})
   }
   
   // console.log(password,user.password);
   // console.log(user);
   
   
   const isMatch = await user.comparePassword(password)
   // console.log(isMatch)
   if(!isMatch){
      return res.status(401).json({message:"Invalid email or password"})
   }

   const token = await user.generateAuthToken()
   res.cookie("token",token)
   res.status(200).json({token,user})
}

module.exports.getUserProfile = async(req,res,next)=>{

         res.status(200).json(req.user); 

}

module.exports.logoutUser = async(req,res,next)=>{
   // Prefer token from cookie or Authorization header (lowercase)
   const token = req.cookies?.token || req.headers?.authorization?.split(' ')[1] || null

   if (!token) {
      return res.status(400).json({ message: "Token not provided" });
   }

   try {
      await blacklistTokenModel.create({token});
   } catch (err) {
      // ignore duplicate blacklist entries
      if (err.code !== 11000) return res.status(500).json({ message: 'Failed to blacklist token' })
   }

   res.clearCookie("token")
   res.status(200).json({"message":"Logged Out Successfully"})
}