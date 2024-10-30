import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected success: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connected error");
    // 1 - error
    // 0 - succses
    // process of node
    process.exit(1);
  }
};
