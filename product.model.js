import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter the product name"],
    },
    quentity: {
      type: Number,
      required: [true, "please enter the product quentity"],
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "please enter the product price"],
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
