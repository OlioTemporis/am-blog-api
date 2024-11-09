const express = require("express");
const router = express.Router();

const postController = require("../controllers/post-controller");

router.get("/posts", postController.getPosts);
router.get("/posts/:id", postController.getPost);

router.post("/posts", postController.createPost);

router.delete("/posts/:id/delete", postController.deletePost);

router.post("/posts/:id/edit", postController.updatePost);

module.exports = router;
