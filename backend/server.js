import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userRoute from "./routes/userRoute.js";
import passport from "passport";
import session from "express-session";
import dotenv from "dotenv";
dotenv.config();

// Import Passport config after dotenv so environment variables are available
// import "./config/passport.js";  // Passport configuration (Google OAuth strategy)

// Initialize Express app
const app = express();
const port = process.env.PORT || 4000 ; // Port from environment or fallback to 4000

// Middleware
app.use(express.json());  // Parse incoming JSON requests
app.use(cors());  // Enable CORS for all routes

// Session middleware for handling session cookies
app.use(session({
    secret: process.env.SESSION_SECRET,  // Session secret from .env
    resave: false,  // Don't force session save if unmodified
    saveUninitialized: false,  // Don't save empty sessions
    cookie: {
        secure: process.env.NODE_ENV === "production",  // Use secure cookies in production
        httpOnly: true,  // Helps mitigate XSS attacks
        maxAge: 1000 * 60 * 60 * 24 * 7,  // 1-week session expiration
    }
}));

// Initialize Passport middleware
app.use(passport.initialize());
app.use(passport.session());  // Persistent login sessions

// Connect to the database
connectDB();  // Your MongoDB connection

// API Routes
app.use("/api/users", userRoute);  // User routes for authentication

// Test route
app.get("/", (req, res) => {
    res.send("API is running...");
});

// Error handling middleware (optional but recommended)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: "Something went wrong!" });
});

// Start server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
