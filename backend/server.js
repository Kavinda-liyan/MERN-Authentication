import express from "express";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 5000;
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";

const app = express();

app.use("/api/users", userRoutes);
app.get("/", (req, res) => res.send("Server is Ready"));
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server up! listening on Port ${port}`));
