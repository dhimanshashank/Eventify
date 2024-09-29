import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js";
// import passport from "passport";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

// Google OAuth2 routes
// userRouter.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// userRouter.get("/google/callback", 
//     passport.authenticate("google", { failureRedirect: "/login" }),
//     (req, res) => {
//         res.redirect("/"); // Redirect to home on success
//     }
// );

export default userRouter;
