const pool = require("../data/database");

function getHome(req, res) {
  res.send("Welcome to the Home page!");
}

async function getAuthors(req, res) {
  console.log("Client connected to pool to retrieve authors");
  const query = `SELECT * FROM authors;`;
  try {
    const result = await pool.query(query);
    console.log(result.rows);
    res.json(result.rows); // Send the result as JSON
  } catch (error) {
    console.error(`Error connecting to PSQL pool: `, error);
    res.status(500).json({ error: "Failed to retrieve authors" });
  }
}

async function createAuthor(req, res) {
  console.log(req.body);
  const { name, email } = req.body;
  console.log(name, email);
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

module.exports = {
  getHome: getHome,
  getAuthors: getAuthors,
  createAuthor: createAuthor,
};
