import mongoose from "mongoose";

const pizzaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  catagory: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
    required: true,
  },
  Quantitity: {
    type: Number,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  sizePrice: {
    type: Number,
    required: true,
  },
});

const pizzaModel = mongoose.model.pizza || mongoose.model("pizza", pizzaSchema);
export default pizzaModel;
