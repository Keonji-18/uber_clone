const mongoose = require("mongoose")

async function connectToDb(){
  
    await mongoose.connect(process.env.DB_CONNECT,
    console.log("Connected to db")

    ).catch(err => console.log(err))
}

module.exports = connectToDb;
