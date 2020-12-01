const mongoose = require("mongoose");

const schemas = {
  address: String,
  cart: [
    {
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
    },
  ],
};

const Order = mongoose.model("orders", schemas);
module.exports = Order;
