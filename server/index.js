const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

var mongoUri =
  "mongodb+srv://admin:1234@cluster0.4zu45.mongodb.net/demo?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;
mongoose.connect(mongoUri, { useNewUrlParser: true }).then(
  () => {
    console.log("connected to the database ");
  },
  (error) => {
    console.log(error);
    process.exit();
  }
);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("[success] task 1 : listening on port " + port);
});

app.get("/", (req, res) => {
  res.status(200).send("Demo Api");
});

var Product = require("./routers/product");
app.use("/api/products", Product);

var Cart = require("./routers/cart");
app.use("/api/cart", Cart);

var Order = require("./routers/order");
app.use("/api/order", Order);

app.use((req, res, next) => {
  var err = new Error("Api not Found");
  err.status = 404;
  next(err);
});
