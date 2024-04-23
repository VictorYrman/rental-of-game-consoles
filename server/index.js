import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRouter.js";
import connectDb from "./config/db.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 9999;
const dbRef = process.env.DB_REF;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/users", userRoute);

const start = async () => {
  try {
    connectDb(dbRef);

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
