import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();

import userRouter from "./routes/user.route.js";
import projectRouter from "./routes/project.route.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

mongoose
  .connect(process.env.MONGOURL)
  .then(() => {
    console.log("Connected to mongoDB.");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api/user", userRouter);
app.use("/api/project", projectRouter);

export default app;
