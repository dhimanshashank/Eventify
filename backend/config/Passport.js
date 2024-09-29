import passport from "passport";
// import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import userModel from "../models/userModel.js";

// passport.use(new GoogleStrategy({
//   clientID: process.env.GOOGLE_CLIENT_ID,
//   // clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//   callbackURL: "/api/users/google/callback",
// },
// async (accessToken, refreshToken, profile, done) => {
//   try {
//     const user = await userModel.findOne({ email: profile.emails[0].value });
//     if (user) {
//       done(null, user);
//     } else {
//       const newUser = new userModel({
//         name: profile.displayName,
//         email: profile.emails[0].value,
//         password: "", // No password for Google login
//       });
//       await newUser.save();
//       done(null, newUser);
//     }
//   } catch (err) {
//     done(err, null);
//   }
// }));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await userModel.findById(id);
  done(null, user);
});

export default passport;
