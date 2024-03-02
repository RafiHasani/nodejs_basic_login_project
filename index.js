const express = require("express");
const app = require("./core/server.js");
const db = require("./db_access/database.js");
const logger = require("./medilware/log.js");
const bodyParser = require("body-parser");
const auth = require("./router/auth_route.js");
const products = require("./router/products_route.js");
const course = require("./router/course_route.js");

app.use(logger);
app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.json());

app.use("/auth", auth);
app.use("/products", products);
app.use("/course", course);
