const mongoose = require("mongoose");
const {
  courseSchema,
  Course,
  authorSchema,
  Author,
} = require("../../schemas/schema_course.js");

const createCourse = (req, res) => {
  const course = new Course({
    name: "React Course",
    author: "65ccfecc1dcf10912bec7a17",
    tags: ["web development"],
    isPublished: true,
    price: 15,
  });

  course.save();
  res.json(course);
};

const createAuthor = (req, res) => {
  const author = new Author({ name: "Mosh" });
  author.save();
  res.json(author);
};

const getCourse = async (req, res) => {
  const courses = await Course.find().populate("author").exec();
  res.json(courses);
};

module.exports = { createCourse, createAuthor, getCourse };
