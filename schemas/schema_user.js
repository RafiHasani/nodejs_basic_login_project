const mdb = require("mongoose");

const SchemaUser = new mdb.Schema({
  username: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mdb.model("User", SchemaUser);

module.exports = User;
