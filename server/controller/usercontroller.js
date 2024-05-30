import jwt from "jsonwebtoken";
import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import nodemailer from "nodemailer";
import crypto, { verify } from "crypto";
// import { text } from "body-parser";
// ALREADY HAVE ON ACCOUNT USER
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User Dosen't exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({
        success: false,
        message: "Email Password Dose'nt match",
      });
    }

    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// For Create JWT TOKEN
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// EmailToken Verify
// const emailToken = async (req, res) => {
//   try {
//     const user = await User.findOne({ id: req.params.id });
//     if (!user) {
//       return res.status(400).send({ message: "Invalid link" });
//     }

//     const token = await tokenModel.findOne({
//       userId: user._id,
//       token: req.params.token,
//     });

//     if (!token) {
//       return res.status(400).json({ message: "Invalid link" });
//     }

//     await user.updateOne({ _id: user._id, verified: true });
//     await token.remove();

//     res.status(200).json({ message: "Email verified Successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Internal Server Error" });
//     console.log(error);
//   }
// };

// NEW USER
const registerduser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const exists = await userModel.findOne({ email });

    if (exists) {
      return res.json({ success: false, message: "user already exsits" });
    }

    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "please enter valid email" });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please Enter Strong Password",
      });
    }

    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);
    const etoken = crypto.randomBytes(32).toString("hex");
    const emailVerify = await new tokenModel({
      userId: user._id,
      emailtoken: etoken,
    }).save();

    const url = `${process.env.BASE_URL}users/${user._id}/verify/${emailVerify.emailtoken}`;
    await sendMail(user.email, "Verify Email", url);

    res.status(201).json({
      success: true,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Forgot Password
const forgotpassword = async (req, res) => {
  const { email } = req.body;

  const userMail = userModel.findOne({ email });

  try {
    if (!userMail) {
      return res
        .status(404)
        .json({ success: false, message: "Please Enter Valid Email" });
    }

    const token = createToken(user._id);

    var transporter = nodemailer.createTransport({
      service: process.env.SERVICE,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    var mailOptions = {
      from: process.env.USER,
      to: { email },
      subject: "Reset Your PassWord",
      text: `http://localshost:${process.env.PORT}/reset-password/${user._id}/${token}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        return res.status(200).json({ success: true });
      }
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Reset Password
const resetpassword = async (req, res) => {
  const { email } = req.body;

  const userMail = userModel.findOne({ email });

  try {
    if (!userMail) {
      return res
        .status(404)
        .json({ success: false, message: "Please Enter Valid Email" });
    }

    const token = createToken(user._id);

    var transporter = nodemailer.createTransport({
      service: process.env.SERVICE,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    var mailOptions = {
      from: process.env.USER,
      to: { email },
      subject: "Reset Your PassWord",
      text: `http://localshost:${process.env.PORT}/reset-password/${user._id}/${token}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        return res.status(200).json({ success: true });
      }
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

export { loginUser, registerduser, forgotpassword, resetpassword };
