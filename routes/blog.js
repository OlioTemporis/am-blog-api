const express = require("express");
const router = express.Router();

const blogController = require("../controllers/blog-controller");

router.get("/", blogController.getHome);

router.get("/authors", blogController.getAuthors);
router.get("/authors/:id", blogController.getAuthor);

router.post("/authors", blogController.createAuthor);

router.delete("/authors/:id/delete", blogController.deleteAuthor);

router.post("/authors/:id/edit", blogController.updateAuthor);

module.exports = router;
