const mongoose = require("mongoose")
const {Schema} = mongoose

const blacklistTokenSchema = new Schema({
    token: {
        type : String,
        required: true,
        unique: true
    },
    createdAt:{
        type: Date,
        default: Date.now,
        expires: 86400 // 24 hours in seconds
    }
})

const blacklistTokenModel = mongoose.model("blacklistToken",blacklistTokenSchema) // blacklistToken ka model model ka use krke object store hoga 

module.exports = blacklistTokenModel