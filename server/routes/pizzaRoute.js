import express from "express";
import {
  addPizza,
  allProduct,
} from "../controller/pizzaController";
import multer from "multer";

const pizzaRouter = express.Router();

pizzaRouter.get("/get", allProduct);
// Send The Data To the Developer
pizzaRouter.post("/add", upload.single("image"), addPizza);

// Image Storage Engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

export default pizzaRouter;