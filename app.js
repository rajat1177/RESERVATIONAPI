import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnection from "./db/dbConnection.js";
import  {logMiddleware}  from "./utils/error.js";
import reservationRouter from "./routes/reservationRouter.js"
dotenv.config({path:"./config/.env"})
const app=express();
app.use(cors({
    origin:process.env.FRONTENDURL , // Replace with your frontend origin
    credentials: true, // Enable credentials (cookies, authorization headers, etc.)
  }));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/v1/reservation",reservationRouter)
app.use(logMiddleware)
dbConnection();
export default app;