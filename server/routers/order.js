const express = require("express");
const orderAPI = express.Router();
const mongoose = require("mongoose");

const Cart = require("../models/cart");
const Order = require("../models/order");

orderAPI.post("/create", (req, res) => {
  Cart.findById({ _id: req.body.id }).exec((err, data) => {
    Order.create(
      {
        address: req.body.address,
        cart: data,
      },
      (err, docs) => {
        if (err) return res.status(400).send(err);
        res.status(200).send(docs);
      }
    );
  });
});

module.exports = orderAPI;
