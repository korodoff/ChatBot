import express from "express"
import Theater from "../model/Theater.js";
const router = express.Router();

router.post("/",async(req,res)=>{
    const newtheater= new Theater(req.body)
try{
   const saveTheater = await newtheater.save();
   res.status(200).json(saveTheater)
}catch(err){
    res.status(500).json(err)
}

})
export default router;