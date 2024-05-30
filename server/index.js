import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectionDB } from "./config/db.config.js";
import usersRoute from "./routes/userRoute.js";
import pizzaRouter from "./routes/pizzaRoute.js";
dotenv.config();

// App config
const app = express();
const port = process.env.PORT || 8000;

// MiddleWares
app.use(express.json());
app.use(cors());

// DB CONFIGURATION
connectionDB();

// Api end point
app.use("/api/user", usersRoute);
app.use("/api/product", pizzaRouter);

app.get("/", (req, res) => {
  res.json({
    name: "suresh",
    email: "s@gmail.com",
    password: "12345",
  });
});

app.listen(port, () => {
  console.log("Your app is running on http://localhost:" + port);
});
