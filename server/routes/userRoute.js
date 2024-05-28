import express from "express";
import { loginUser, registerduser } from "../controller/usercontroller.js";

const usersRoute = express.Router();

usersRoute.post("/register", registerduser);

usersRoute.post("/login", loginUser);

export default usersRoute;
