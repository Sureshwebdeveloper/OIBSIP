import express from "express";
import {
  forgotpassword,
  loginUser,
  registerduser,
  resetpassword,
} from "../controller/usercontroller.js";

const usersRoute = express.Router();

usersRoute.post("/register", registerduser);

usersRoute.post("/login", loginUser);

usersRoute.post("/forgot-password", forgotpassword);

usersRoute.post("/reset-password", resetpassword);

export default usersRoute;
