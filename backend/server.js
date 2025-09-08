import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";
import cors from "cors";

dotenv.config();

const port = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json()); //parse json
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.get("/", (req, res) => res.send("Server is Ready"));
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server up! listening on Port ${port}`));
