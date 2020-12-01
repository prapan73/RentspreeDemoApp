const mongoose = require("mongoose");

const cartSchemas = {
  status: String,
  quantity: Number,
  total: Number,
  products: [
    {
      productId: Number,
      imageUrl: String,
      quantity: Number,
      name: String,
      price: Number,
    },
  ],
};

const Cart = mongoose.model("carts", cartSchemas);
module.exports = Cart;
