import express from "express";
import { googleLogin } from "../controllers/authController.js";
const router = express.Router();

// Define the route to handle the Google login token
router.post("/google-login", googleLogin);

module.exports = router;
