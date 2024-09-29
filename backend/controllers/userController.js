import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// Login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body)
    try {
        // Check if user exists
        const user = await userModel.findOne({ email });
        console.log(user,"user")
        if (!user) {
            return res.status(400).json({ success: false, message: "User does not exist" });
        }

        // Check if password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Incorrect password" });
        }

        console.log(isMatch)

        const token = createToken(user._id);

        console.log(token,"token")
        res.status(200).json({ success: true, token, message: "User logged in successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
}

// Register user
const registerUser = async (req, res) => {
    const { name, email, password, phone } = req.body;
    console.log(req.body)
    try {
        // Check if user already exists
        // const exists = await userModel.findOne({ email });
        // if (exists) {
        //     return res.status(400).json({ success: false, message: "User already exists" });
        // }

        // Validate email and password
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Invalid email" });
        }
        if (!validator.isStrongPassword(password)) {
            return res.status(400).json({ success: false, message: "Password is not strong enough" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create and save new user
        const newUser = new userModel({
            name, 
            email, 
            password: hashedPassword, 
            phone // Optional phone number
        });
        
        await newUser.save();

        // Generate JWT token
        const token = createToken(newUser._id);
        
        res.json({ success: true, token, message: "User created successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Failed to register user" });
    }
}

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "3d" });
}

export { loginUser, registerUser };
