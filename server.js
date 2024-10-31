import express from "express";
import authRoutes from "./src/routes/auth.routes.js";
import dotenv from "dotenv";
import { connectDB } from "./src/config/db.config.js";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`App listening on port ${PORT}`);
});
