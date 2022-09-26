import express from "express"
import Display from "../model/Theater.js";


const router = express.Router();


router.get("/:name", async(req,res)=>{
    try{
        const filterDisplay = await Display.findByName(req.params.name);
        res.status(200).json(filterDisplay)
    
     }catch(err){
         res.status(500).json(err)
     }
})
router.get("/:location", async(req,res)=>{
    try{
        const filterDisplays = await Display.findByLocation(req.params.location);
        res.status(200).json(filterDisplays)
     }catch(err){
         res.status(500).json(err)
     }
})
export default router;