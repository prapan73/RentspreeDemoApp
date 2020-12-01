const express = require("express");
const cartApi = express.Router();
const mongoose = require("mongoose");

const Cart = require("../models/cart");
const Product = require("../models/product");

cartApi.get("/", (req, res) => {
  Cart.findById({ _id: req.query.id }).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

cartApi.post("/add-product", (req, res) => {
  Product.findById({ _id: req.body._id }).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

cartApi.post("/addToCart", (req, res) => {
  let ObjectIds = [];
  let whereIds = {
    _id: {
      $in: ObjectIds,
    },
  };

  req.body.ids.forEach((o) => ObjectIds.push(mongoose.Types.ObjectId(o)));

  Product.find(whereIds, async (err, products) => {
    let newCart = await Cart.create({
      status: "active",
      quantity: products.length,
      total: parseInt(req.body.total),
      products: [...products],
    });

    if (err) return res.status(400).send(err);
    res.status(200).send({ success: true, id: newCart._id });
  });
});

cartApi.get("/delete", (req, res) => {
  Cart.deleteOne({ _id: req.query.id }, (err, docs) => {
    if (err) return res.status(400).send(err);
    res.status(200).send({ success: true });
  });
});

module.exports = cartApi;
