// const { OAuth2Client } = require("google-auth-library");
// const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// This function will verify the Google token and extract the user details.
// const verifyGoogleToken = async (token) => {
//   try {
//     const ticket = await client.verifyIdToken({
//       idToken: token,
//       audience: process.env.GOOGLE_CLIENT_ID, // Specify the CLIENT_ID of the app
//     });
//     const payload = ticket.getPayload(); // User details
//     return payload;
//   } catch (error) {
//     throw new Error("Invalid Google token");
//   }
// };

// This endpoint receives the token from the frontend
// const googleLogin = async (req, res) => {
//   const { token } = req.body;
//   try {
//     const userData = await verifyGoogleToken(token);
//     // Now you can register or login the user based on `userData` like email, etc.
//     res.status(200).json({ message: "Google login successful", user: userData });
//   } catch (error) {
//     res.status(401).json({ message: error.message });
//   }
// };

// module.exports = { googleLogin };
