const pool = require("../data/database");

async function getPosts(req, res) {
  const query = `
    SELECT posts.*, authors.name AS author_name FROM posts 
    INNER JOIN authors ON posts.author_id = authors.id
  `;
  console.log("fetching all posts");
  try {
    const result = await pool.query(query);
    res.status(201).json(result.rows);
  } catch (error) {
    console.error(`Error connecting to PSQL pool: `, error);
    res.status(500).json({ error: "Failed to retrieve Posts" });
  }
}

async function getPost(req, res) {
  const { id } = req.params;
  const query = `
    SELECT * FROM posts
    WHERE id = $1;
  `;
  const values = [id];
  console.log("fetching post with id " + id);
  try {
    const result = await pool.query(query, values);
    res.status(201).json(result.rows);
  } catch (error) {
    console.error(`Error connecting to PSQL pool: `, error);
    res.status(500).json({ error: "Failed to update author data" });
  }
}

async function createPost(req, res) {
  const { title, summary, body, author_id } = req.body;
  const query = `
    INSERT INTO posts (title, summary, body, author_id)
    VALUES ($1, $2, $3, $4);
  `;
  const values = [title, summary, body, author_id];

  try {
    await pool.query(query, values);
    res.status(201).json({ message: "Successfully added post :" + values });
  } catch (error) {
    console.error(`Error connecting to PSQL pool: `, error);
    res.status(500).json({ error: "Failed to add post" });
  }
}

async function deletePost(req, res) {
  const { id } = req.params;
  const query = `
    DELETE FROM posts
    WHERE id = $1;
  `;
  const values = [id];

  try {
    const result = await pool.query(query, values);

    if (result.rowCount === 0) {
      res.status(404).json({ message: "Post not found" });
    } else {
      res.status(200).json({ message: "Successfully deleted post" });
    }
  } catch (error) {
    console.error(`Error deleting post: `, error);
    res.status(500).json({ error: "Failed to delete post" });
  }
}

async function updatePost(req, res) {
  const { id } = req.params;
  const { title, summary, body } = req.body;
  const query = `
    UPDATE posts
    SET title = $1,
    summary = $2,
    body = $3
    WHERE id = $4;
  `;
  const values = [title, summary, body, id];
  console.log(values);
  try {
    await pool.query(query, values);
    res.status(200).json({
      message: "Successfully updated post",
    });
  } catch (error) {
    console.error(`Error updating post: `, error);
    res.status(500).json({ error: "Failed to update post data" });
  }
}

module.exports = {
  getPosts: getPosts,
  getPost: getPost,
  createPost: createPost,
  deletePost: deletePost,
  updatePost: updatePost,
};
