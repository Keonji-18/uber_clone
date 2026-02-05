
const express = require("express")
const cors = require('cors')

app = express()


app.use(cors())

app.get('/',(req,res)=>{
    res.send("Hello family")
})

module.exports = app