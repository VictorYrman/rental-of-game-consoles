import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRouter.js";
import categoryRoute from "./routes/categoryRouter.js";
import consoleRoute from "./routes/consoleRouter.js";
import fileUpload from "express-fileupload";
import connectDb from "./config/db.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 9999;
const dbRef = process.env.DB_REF;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.use("/user", userRoute);
app.use("/api", categoryRoute);
app.use("/api", consoleRoute);

const start = async () => {
  try {
    connectDb(dbRef);

    app.listen(PORT, () => {
      console.log(`Сервер работает на порту ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
