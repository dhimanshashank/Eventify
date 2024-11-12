import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

export const isAuthenticated = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      try {
        token = req.headers.authorization.split(' ')[1];
        console.log("Token:", token);
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');
        console.log("Authenticated User:", req.user);
        next();
      } catch (error) {
        console.error("Authorization failed:", error);
        res.status(401).json({ message: 'Not authorized, token failed' });
      }
    } else {
      res.status(401).json({ message: 'No token, authorization denied' });
    }
  };
  