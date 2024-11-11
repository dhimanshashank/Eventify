import express from "express";
import { createPaymentIntent } from "../controllers/paymentController.js";

const router = express.Router();

router.post("/payment", createPaymentIntent);

export default router;
