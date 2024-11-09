const express = require("express");
const cors = require("cors");
const app = express();

const blogRoutes = require("./routes/blog");
const postRoutes = require("./routes/post");

app.use(cors());
app.use(express.json());

app.use(blogRoutes);
app.use(postRoutes);

app.listen(3333, () => {
  console.log("Listening on port 3333");
});
