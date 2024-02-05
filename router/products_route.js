const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products/productsController.js");

router.get("/getproducts", productsController.getProducts);

module.exports = router;
