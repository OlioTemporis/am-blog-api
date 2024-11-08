const express = require("express");
const router = express.Router();

const db = require("../data/database");

router.get("/", (req, res) => {
  res.send("Home page");
});

router.get("/authors", async (req, res) => {
  await db.connect();
  console.log("client connected to db");
  const query = `SELECT * FROM authors;`;
  try {
    const result = await db.query(query);
    return result.rows;
  } catch (error) {
    console.error(`Error connecting to PSQL db: `, error);
    throw error;
  } finally {
    await db.end();
    console.log("disconnected from db");
  }
});

module.exports = router;
