import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();

import userRouter from "./routes/user.route.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log("Server is running at port 3000!!!");
});

mongoose
  .connect(process.env.MONGOURL)
  .then(() => {
    console.log("Connected to mongoDB.");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api/user", userRouter);
