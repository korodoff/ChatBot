import mongoose from "mongoose"
const thraterSchema= new mongoose.Schema({
    Location:{
        type:String,
        require:true
    },
    Name:{
        type:String,
        require:true
    },
    shows:{
        type:String,
        require:true
    }
})

export default mongoose.model("Theater",thraterSchema)