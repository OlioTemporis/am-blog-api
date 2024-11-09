const pool = require("../data/database");

function getHome(req, res) {
  res.send("Welcome to the Home page!");
}

async function getAuthors(req, res) {
  const query = `SELECT * FROM authors;`;
  try {
    const result = await pool.query(query);
    res.status(201).json(result.rows);
  } catch (error) {
    console.error(`Error connecting to PSQL pool: `, error);
    res.status(500).json({ error: "Failed to retrieve authors" });
  }
}

async function getAuthor(req, res) {
  const { id } = req.params;
  const query = `
        SELECT * FROM authors
        WHERE id = $1;
    `;
  const values = [id];
  try {
    const result = await pool.query(query, values);
    res.status(201).json(result.rows);
  } catch (error) {
    console.error(`Error connecting to PSQL pool: `, error);
    res.status(500).json({ error: "Failed to update author data" });
  }
}

async function createAuthor(req, res) {
  const { name, email } = req.body;
  const query = `
        INSERT INTO authors (name, email)
        VALUES ($1, $2);
    `;
  const values = [name, email];

  try {
    await pool.query(query, values);
    res.status(201).json({ message: "Successfully added author :" + values });
  } catch (error) {
    console.error(`Error connecting to PSQL pool: `, error);
    res.status(500).json({ error: "Failed to add author" });
  }
}

async function deleteAuthor(req, res) {
  const { id } = req.params;
  const query = `
        DELETE FROM authors
        WHERE id = $1;
    `;
  const values = [id];

  try {
    const result = await pool.query(query, values);

    if (result.rowCount === 0) {
      res.status(404).json({ message: "Author not found" });
    } else {
      res.status(200).json({ message: "Successfully deleted author" });
    }
  } catch (error) {
    console.error(`Error deleting author: `, error);
    res.status(500).json({ error: "Failed to delete author" });
  }
}

async function updateAuthor(req, res) {
  const { id } = req.params;
  const { name, email } = req.body;
  const query = `
        UPDATE authors
        SET name = $1,
        email = $2
        WHERE id = $3;
    `;
  const values = [name, email, id];
  console.log(values);
  try {
    await pool.query(query, values);
    res.status(200).json({
      message: "Successfully updated author",
    });
  } catch (error) {
    console.error(`Error updating author: `, error);
    res.status(500).json({ error: "Failed to update author data" });
  }
}

module.exports = {
  getHome: getHome,
  getAuthors: getAuthors,
  getAuthor: getAuthor,
  createAuthor: createAuthor,
  deleteAuthor: deleteAuthor,
  updateAuthor: updateAuthor,
};
