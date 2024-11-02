import express from "express";
import authRoutes from "./src/routes/auth.routes.js";
import usersRoutes from "./src/routes/user.routes.js";
import dotenv from "dotenv";
import { connectDB } from "./src/config/db.config.js";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";
import postRoutes from "./src/routes/post.routes.js";
import notificationRoutes from "./src/routes/notification.routes.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/notifications", notificationRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`App listening on port ${PORT}`);
});
