const express = require("express");
const router = express.Router();

const blogController = require("../controllers/blog-controller");

router.get("/", blogController.getHome);

router.get("/authors", blogController.getAuthors);

module.exports = router;
