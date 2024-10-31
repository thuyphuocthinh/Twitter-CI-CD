import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const proctedRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ error: "Unathorized: No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ error: "Unathorized: Invalid token" });
    }

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(401).json({ error: "Unathorized: Invalid token" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(">>> error: ", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
