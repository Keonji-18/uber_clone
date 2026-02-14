const express = require("express")
const {body} = require("express-validator")
const captainController = require("../controllers/captain.controller")

const router = express.Router()

router.post('/register',[
    body('email').isEmail().withMessage("Invalid email"),
    body("fullname.firstname").isLength({min: 3}).withMessage("First Name must be atleast of 3 letters"),
    body("password").isLength({min: 6}).withMessage("Password must be atleast of 3 letters"),
    body("vehicle.color").isLength({min: 3}).withMessage("Vehicle color must be atleast of 3 letters"),
    body("vehicle.plate").isLength({min: 8}).withMessage("Vehicle plate must be atleast of 8 letters"),
    body("vehicle.capacity").isInt({min: 1}).withMessage("Vehicle capacity must be atleast of 1 person"),
    body("vehicle.vehicleType").isIn(["auto","car","motocycle"]).withMessage("Invalid Vehicle Type"),


],captainController.registerCaptain)


router.post('/login',[
    body('email').isEmail().withMessage("Invalid email"),
    body('password').isLength({min:6}).withMessage("Password must be 6 letters log")
],captainController.loginCaptain)

module.exports = router // app.use this in app.js