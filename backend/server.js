import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userRoute from "./routes/userRoute.js";
import feedbackRoute from "./routes/feedbackRoute.js"; // New route for feedback form
import session from "express-session";
import dotenv from "dotenv";
import router from "./routes/feedbackRoute.js";
import testimonialRoute from "./routes/testimonialRoute.js";
import paymentRoute from "./routes/paymentRoute.js";

dotenv.config();

// Initialize Express app
const app = express();
const port = process.env.PORT || 4000; // Port from environment or fallback to 4000

// Middleware
app.use(express.json()); // Parse incoming JSON requests

// CORS Configuration
const allowedOrigins = [
  "http://localhost:5173",  // For local development
  "https://eventify-gamma-eight.vercel.app", // Production
  "https://eventify-hk2k7n983-shashanks-projects-4fce7329.vercel.app", // Ensure this is added
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // Allows cookies and authorization headers
  })
);

// Session middleware for handling session cookies
app.use(
  session({
    secret: process.env.SESSION_SECRET, // Session secret from .env
    resave: false, // Don't force session save if unmodified
    saveUninitialized: false, // Don't save empty sessions
    cookie: {
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      httpOnly: true, // Helps mitigate XSS attacks
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1-week session expiration
    },
  })
);

// Connect to the database
connectDB(); // Your MongoDB connection

// API Routes
app.use("/api/users", userRoute); // User routes for authentication
app.use("/api", router); // Feedback form route
app.use("/api/", testimonialRoute); // Testimonial route for testimonials
app.use("/api/payment", paymentRoute);

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  if (err.message === "Not allowed by CORS") {
    return res.status(403).json({ message: "CORS Error: Access denied" });
  }
  res.status(500).send({ message: "Something went wrong!" });
});

// Start server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});