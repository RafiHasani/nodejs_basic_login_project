const createCourseController = require("../controllers/products/courseController.js");
const router = require("express").Router();

router.post("/addCourse", createCourseController.createCourse);
router.post("/addAuthor", createCourseController.createAuthor);
router.get("/getCourse", createCourseController.getCourse);
module.exports = router;
