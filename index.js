
import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRoute from "./api/routes/auth.js"
import hotelRoute from "./api/routes/hotel.js"
import userRoute from "./api/routes/user.js"
import roomRoute from "./api/routes/room.js"
import cookiePraser from "cookie-parser"


dotenv.config()
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
app.use(cookiePraser())
app.use(express.json())

// middleWare
app.use("/api/auth", authRoute)
app.use("/api/hotel", hotelRoute)
app.use("/api/room", roomRoute)
app.use("/api/user", userRoute)


app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
  connect();
  console.log("Connected to backend.");
});