import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;
const dbRef = process.env.DB_REF;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);

const start = async () => {
  try {
    await mongoose.connect(dbRef);

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
