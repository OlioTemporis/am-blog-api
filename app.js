const express = require("express");
const cors = require("cors");
const app = express();

const blogRoutes = require("./routes/blog");

app.use(cors());

app.use(blogRoutes);

app.listen(3333, () => {
  console.log("Listening on port 3333");
});
