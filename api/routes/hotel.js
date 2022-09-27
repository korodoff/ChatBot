import express from "express";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotels.js";
import Hotel from "../model/Hotel.js";
const router = express.Router();

//CREATE
router.post("/", createHotel)
//UPDATE
router.put("/:id",updateHotel)
//DELETE
router.delete("/:id", deleteHotel);
//GET

router.get("/find/:id", getHotel);
//GET ALL

router.get("/", getHotels);


export default router;