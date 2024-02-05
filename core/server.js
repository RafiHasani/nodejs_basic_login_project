const express = require("express");

const app = express();

app.listen(3000, () => console.log("listining to port 3000"));

module.exports = app;
