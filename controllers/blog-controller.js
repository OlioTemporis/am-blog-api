const pool = require("../data/database");

function getHome(req, res) {
  res.send("Welcome to the Home page!");
}

async function getAuthors(req, res) {
  console.log("client connected to pool to retrieve authors");
  const query = `SELECT * FROM authors;`;
  try {
    const result = await pool.query(query);
    console.log(result.rows);
    return result.rows;
  } catch (error) {
    console.error(`Error connecting to PSQL pool: `, error);
    throw error;
  } finally {
    await pool.end();
    console.log("disconnected from pool");
    res.send("AUthors page");
  }
}

module.exports = {
  getHome: getHome,
  getAuthors: getAuthors,
};
