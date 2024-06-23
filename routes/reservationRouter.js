import express, { Router } from "express";
import { sendReservation } from "../controllers/reservationController.js";
const router=express.Router()
router.post("/send",sendReservation)
export default router;