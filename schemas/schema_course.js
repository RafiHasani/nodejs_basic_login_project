const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: String,
});

const Author = mongoose.model("Author", authorSchema);

const courseSchema = new mongoose.Schema({
  name: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Author" },
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: Number,
});

const Course = mongoose.model("Course", courseSchema);

module.exports = { courseSchema, Course, authorSchema, Author };
