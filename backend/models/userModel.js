import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: false, 
    },
    // token:String // you can add this late 
    
});
// 117.215.79.27
const userModel = mongoose.models.user || mongoose.model("User", userSchema);

export default userModel;
