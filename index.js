const express = require("express")
const app = express()



app.get("/",(req,res)=>{
    res.send("HElloo")
    console.log("working")
})


app.listen(9090,()=>{
    console.log("server Working")
})