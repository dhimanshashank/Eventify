import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userRoute from "./routes/userRoute.js";
import dotenv from "dotenv";
dotenv.config();
// import eventRoute from "./routes/eventRoute.js";

// app config
const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();


// api routes
app.use("/api/users", userRoute);
// app.use("/api/events", eventRoute);

// routes
app.use("/api/users", userRoute);
// app.use("/api/events", eventRoute);


app.get("/", (req, res) => {
    res.send("API is running...");
})

// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})

//mongodb+srv://shashdhiman:aman418shashank@cluster0.vheu1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0