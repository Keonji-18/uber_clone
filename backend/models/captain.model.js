const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const captainSchema = new mongoose.Schema({

    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,"First name must have 3 characters"]
        },
        lastname:{
            type:String,
            minlength:[3,"Last name must have 3 characters"]
        }},
    email:{
        type:String,
        required:true,
        unique:true,
        trim: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        minlength:[5,"Emial must be of 5 char."]
    },
    password:{
        type:String,
        required:true,
        select:false,

    },
    socketId:{    // for tracking loaction of users and drivers
        type:String
    },

    status:{
        type:String,
        enum:['active', 'inactive'],
        default:'active'
    },

    vehicle:{
        color :{
            type: String,
            required: true,
            minlength: [3,'color must be 3 letters long']
        },
        plate : {
            type: String,
            reuired: true,
            minlength: [8,'plate must be of 10 letters'],
            maxlength: [10, 'plate must be of 10 letters']
        },
        capacity :{
            type:Number,
            required : true,
            min: [1,"capacity atleast be 1 "]
        },
        vehicleType :{
            type: String,
            reuired:true,
            enum:["motocycle","auto","car"]
        }
    },
    location : {
        latitude :{
            type:Number,
        },
        logitude :{
            type:Number
        }
    }

})

captainSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET,{expiresIn:'24h'})
    return token;
}

captainSchema.methods.verifyPassword = async function(password){
   try {
     return   await bcrypt.compare(password, this.password)
   } catch (error) {
    throw new Error('Password comparison failed')
    //  res.status(401).json({message:"Incorresct password"})
   }
}

captainSchema.statics.hashPassword = async function(password){
    // const hashPassword = await bcrypt.hash(password,10)
    // return hashPassword

    return await bcrypt.hash(password,10)
}


const captainModel = mongoose.model('captain',captainSchema)
module.exports = captainModel