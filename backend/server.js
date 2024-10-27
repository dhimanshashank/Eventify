import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userRoute from "./routes/userRoute.js";
import feedbackRoute from "./routes/feedbackRoute.js"; // New route for feedback form
import session from "express-session";
import dotenv from "dotenv";
import router from "./routes/feedbackRoute.js";
import testimonialRoute from "./routes/testimonialRoute.js";
dotenv.config();

// Initialize Express app
const app = express();
const port = process.env.PORT || 4000; // Port from environment or fallback to 4000

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(cors()); // Enable CORS for all routes
app.use(cors({
  origin: "http://localhost:5173", // Allow frontend URL
  credentials: true, // Enable credentials (optional)
}));


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

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: "Something went wrong!" });
});

// Start server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});