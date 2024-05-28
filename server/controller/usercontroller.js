import jwt from "jsonwebtoken";
import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";

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
    res.json({
      success: true,
      token,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { loginUser, registerduser };
