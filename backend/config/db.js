import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
    try { 
        const uri = `${process.env.MONGODB_URL}/${process.env.DATABASE_NAME}`;
        await mongoose.connect(uri);
        console.log("Database connected!");
    } catch (err) {
        console.log(err);
    }
};

connectDB();
