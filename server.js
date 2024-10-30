import express from "express";
import authRoutes from "./src/routes/auth.routes.js";
import dotenv from "dotenv";
import { connectDB } from "./src/config/db.config.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.get("/", (req, res) => {
  return res.send("Hello");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`App listening on port ${PORT}`);
});
