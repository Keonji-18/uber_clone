const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,"First name must have 3 characters"]
        },
        lastname:{
            type:String,
            minlength:[3,"Last name must have 3 characters"]
        }

    },
    email:{
        type:String,
        require:true,
        unique:true,
        minlength:[5,"Emial must be of 5 char."]
    },
    password:{
        type:String,
        required:true,
        select:false,

    },
    socketId:{    // for tracking loaction of users and drivers
        type:String
    }
})

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET,{expiresIn:'24h'})
    return token;
}

userSchema.methods.comparePassword = async function(password) {
    try {
        return await bcrypt.compare(password, this.password)
    } catch (error) {
        throw new Error('Password comparison failed')
    }
}

userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10)
}

const userModel = mongoose.model('user',userSchema)
module.exports = userModel