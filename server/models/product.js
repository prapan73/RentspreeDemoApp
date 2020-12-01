const mongoose = require("mongoose");

const productSchema = {
  name: String,
  imageUrl: String,
  price: Number,
  quantity: Number,
  createdAt: Date,
};

const Product = mongoose.model("products", productSchema);
module.exports = Product;
