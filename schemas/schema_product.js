const mdb = require("mongoose");

// const annotation = new mdb.schema({
//   label: { type: [String]},
//   note: { type: String },
//   points: { type: ["mixed"] },
//   imageWidth: { type: Number },
//   imageHeight: { type: Number },
// });

const SchemaProduct = new mdb.Schema({
  content: { type: String },
  annotation: { type: ["mixed"] },
  extras: { type: String },
});

const Product = mdb.model("Product", SchemaProduct);

module.exports = Product;
