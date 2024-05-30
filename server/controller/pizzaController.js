import pizzaModel from "../models/pizzaModel";
import ProductModel from "../models/pizzaModel";
import multer from "multer";

// Fetch All Product
const allProduct = async (req, res) => {};

// Add Item From Admin
const addPizza = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const pizza = new pizzaModel({
    name: req.body.name,
    category: req.body.category,
    Image: image_filename,
    Quantitity: req.body.Quantitity,
    size: req.body.size,
    sizePrice: req.body.sizePrice,
  });

  try {
    await pizza.save();
    res.status(200).json({ sucess: true, message: "Food Added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ sucess: false, message: "Error" });
  }
};

// Remove Item From Admin
const removeProduct = async (req, res) => {};

// Upload A Image From Admin
const imagesStore = async (req, res) => {
  multer.diskStorage();
};

export { allProduct, addPizza, removeProduct, imagesStore };
