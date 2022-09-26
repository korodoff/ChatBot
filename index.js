// const theater = require("./api/Route/theater")
// const tickets = require("./api/Route/tickets")
import theater from "./api/Route/theater.js"
import tickets from "./api/Route/tickets.js"
import express from "express"
import mongoose from "mongoose";
//create App
const app = express();

// Database
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};


mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

app.use(express.json())

// Routes
app.use("/api/theater", theater);
app.use("/api/tickets", tickets);


app.listen(8800, () => {
  connect();
  console.log("Connected to backend.");
});