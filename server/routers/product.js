const express = require("express");
const productApi = express.Router();
const Product = require("../models/product");

productApi.get("/", (req, res) => {
  Product.find().exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

productApi.get("/create", (req, res) => {
  Product.insertMany(
    [
      {
        name:
          "ม้เซลฟี่ GoPro 3-Way สำหรับGoPro เกรด Premium อุปกรณ์เสริม gopro อุปกรณ์เสริมกล้องแอคชั่น ExtreamGoPro",
        imageUrl:
          "https://cf.shopee.co.th/file/6648cb3abcc6c18f30d500bbb737febd",
        price: 269,
        quantity: 100,
        createdAt: new Date(),
      },
    ],
    (err, docs) => res.status(200).send(docs)
  );
});

module.exports = productApi;
