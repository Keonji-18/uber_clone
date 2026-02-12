const express = require("express")
const cors = require('cors')
const connectToDb = require("./db/db")
const userRoute = require("./routes/user.routes")
const captainRoute = require("./routes/captain.routes")
const cookirParser = require("cookie-parser")


app = express()
connectToDb()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookirParser())

app.get('/',(req,res)=>{
    res.send("Hello family")
})

app.use('/users',userRoute)
app.use('/captains',captainRoute)



module.exports = app