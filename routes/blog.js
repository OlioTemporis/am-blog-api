const express = require("express");
const router = express.Router();

const blogController = require("../controllers/blog-controller");

router.get("/", blogController.getHome);

router.get("/authors", blogController.getAuthors);
router.get("/authors/:id", blogController.getAuthor);

router.post("/authors", blogController.createAuthor);

router.delete("/authors", blogController.deleteAuthor);

module.exports = router;
