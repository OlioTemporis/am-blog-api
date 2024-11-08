const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Home page");
});

router.get("/authors", (req, res) => {
  res.send("Authors page");
});

module.exports = router;
